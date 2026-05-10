import { useEffect, useMemo, useRef, useState } from 'react';
import Plotly from 'plotly.js-dist-min';
import { Activity, FileText, RefreshCw, Upload } from 'lucide-react';
import { analyzeEcg, generateEcg, getEcgHistory } from '../services/api';
import type { EcgData, EcgHistoryItem } from '../types/models';

export default function EcgPanel() {
  const [bpm, setBpm] = useState(74);
  const [sampleRate, setSampleRate] = useState(250);
  const [applyFilter, setApplyFilter] = useState(true);
  const [ecg, setEcg] = useState<EcgData | null>(null);
  const [history, setHistory] = useState<EcgHistoryItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const chartRef = useRef<HTMLDivElement | null>(null);

  async function loadEcg(nextBpm = bpm) {
    setLoading(true);
    setError('');

    try {
      const result = await generateEcg(nextBpm);
      setEcg(result);
      refreshHistory();
    } catch {
      setError('Could not load ECG data. Check that the backend is running.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEcg(74);
    refreshHistory();
  }, []);

  async function refreshHistory() {
    try {
      setHistory(await getEcgHistory());
    } catch {
      setHistory([]);
    }
  }

  function parseCsv(text: string) {
    const lines = text.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    const time: number[] = [];
    const voltage: number[] = [];

    for (const line of lines) {
      const parts = line.split(/[;,]/).map((part) => Number(part.trim()));
      if (parts.length >= 2 && Number.isFinite(parts[0]) && Number.isFinite(parts[1])) {
        time.push(parts[0]);
        voltage.push(parts[1]);
      }
    }

    return { time, voltage };
  }

  async function handleCsvUpload(file: File | null) {
    if (!file) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const text = await file.text();
      const parsed = parseCsv(text);

      if (parsed.voltage.length < 20) {
        throw new Error('Need at least 20 numeric rows with time and voltage columns.');
      }

      const result = await analyzeEcg({
        name: file.name.replace(/\.[^.]+$/, ''),
        sample_rate: sampleRate,
        apply_filter: applyFilter,
        time: parsed.time,
        voltage: parsed.voltage,
      });
      setEcg(result);
      refreshHistory();
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : 'Could not analyze CSV file.');
    } finally {
      setLoading(false);
    }
  }

  function printReport() {
    window.print();
  }

  const peakPoints = useMemo(() => {
    if (!ecg) {
      return { x: [], y: [] };
    }

    return {
      x: ecg.r_peaks.map((peak) => ecg.time[peak]),
      y: ecg.r_peaks.map((peak) => ecg.voltage[peak]),
    };
  }, [ecg]);

  useEffect(() => {
    if (!ecg || !chartRef.current) {
      return;
    }

    Plotly.react(
      chartRef.current,
      [
        {
          x: ecg.time,
          y: ecg.voltage,
          type: 'scatter',
          mode: 'lines',
          line: { color: '#0f766e', width: 2 },
          name: 'ECG',
        },
        {
          x: peakPoints.x,
          y: peakPoints.y,
          type: 'scatter',
          mode: 'markers',
          marker: { color: '#e11d48', size: 8 },
          name: 'R peaks',
        },
      ],
      {
        autosize: true,
        height: 360,
        margin: { l: 42, r: 20, t: 16, b: 40 },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: '#f8fafc',
        xaxis: { title: 'Time (s)', gridcolor: '#e2e8f0' },
        yaxis: { title: 'Voltage (mV)', gridcolor: '#e2e8f0' },
        legend: { orientation: 'h' },
      },
      { responsive: true, displaylogo: false },
    );
  }, [ecg, peakPoints.x, peakPoints.y]);

  return (
    <section className="wide-panel">
      <div className="section-title">
        <div>
          <p className="label">ECG Analysis Lab</p>
          <h2>Generated ECG monitor</h2>
        </div>
        <Activity size={26} aria-hidden="true" />
      </div>

      <div className="ecg-controls">
        <label>
          Target BPM
          <input
            type="range"
            min="45"
            max="150"
            value={bpm}
            onChange={(event) => setBpm(Number(event.target.value))}
          />
        </label>
        <label>
          CSV sample rate
          <input
            type="number"
            min="50"
            max="1000"
            value={sampleRate}
            onChange={(event) => setSampleRate(Number(event.target.value))}
          />
        </label>
        <label className="check-row">
          <input
            type="checkbox"
            checked={applyFilter}
            onChange={(event) => setApplyFilter(event.target.checked)}
          />
          Smooth uploaded CSV
        </label>
        <strong>{bpm} bpm</strong>
        <button onClick={() => loadEcg()} disabled={loading}>
          <RefreshCw size={17} />
          Generate
        </button>
        <label className="upload-button">
          <Upload size={17} />
          Upload CSV
          <input
            type="file"
            accept=".csv,.txt"
            onChange={(event) => handleCsvUpload(event.target.files?.[0] || null)}
          />
        </label>
        <button onClick={printReport} disabled={!ecg}>
          <FileText size={17} />
          Report
        </button>
      </div>

      {error && <p className="error">{error}</p>}

      {ecg && (
        <>
          <div className="ecg-stat-row">
            <div>
              <span>Calculated heart rate</span>
              <strong>{ecg.heart_rate} bpm</strong>
            </div>
            <div>
              <span>Sample rate</span>
              <strong>{ecg.sample_rate} Hz</strong>
            </div>
            <div>
              <span>R peaks found</span>
              <strong>{ecg.r_peaks.length}</strong>
            </div>
            <div>
              <span>Filter</span>
              <strong>{ecg.filter_used ? 'On' : 'Off'}</strong>
            </div>
          </div>

          <div ref={chartRef} className="plot" />

          <div className="report-panel">
            <div>
              <p className="label">ECG Report Generator</p>
              <h3>{ecg.name || 'Generated ECG Demo'}</h3>
            </div>
            <p>
              Heart rate: <strong>{ecg.heart_rate} bpm</strong>. Duration: <strong>{ecg.duration}s</strong>.
              R peaks: <strong>{ecg.r_peaks.length}</strong>. This report is for biomedical education only.
            </p>
          </div>
        </>
      )}

      <div className="history-panel">
        <div>
          <p className="label">Analysis history</p>
          <h3>Latest ECG runs</h3>
        </div>
        {history.length === 0 ? (
          <span>No saved runs yet.</span>
        ) : (
          history.slice(0, 5).map((item) => (
            <article key={item.id}>
              <strong>{item.name}</strong>
              <span>{item.heart_rate || 'n/a'} bpm - {item.duration}s - filter {item.filter_used ? 'on' : 'off'}</span>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
