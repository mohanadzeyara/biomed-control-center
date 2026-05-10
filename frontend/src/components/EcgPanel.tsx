import { useEffect, useMemo, useState } from 'react';
import Plot from 'react-plotly.js';
import { Activity, RefreshCw } from 'lucide-react';
import { generateEcg } from '../services/api';
import type { EcgData } from '../types/models';

export default function EcgPanel() {
  const [bpm, setBpm] = useState(74);
  const [ecg, setEcg] = useState<EcgData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function loadEcg(nextBpm = bpm) {
    setLoading(true);
    setError('');

    try {
      const result = await generateEcg(nextBpm);
      setEcg(result);
    } catch {
      setError('Could not load ECG data. Check that the backend is running.');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEcg(74);
  }, []);

  const peakPoints = useMemo(() => {
    if (!ecg) {
      return { x: [], y: [] };
    }

    return {
      x: ecg.r_peaks.map((peak) => ecg.time[peak]),
      y: ecg.r_peaks.map((peak) => ecg.voltage[peak]),
    };
  }, [ecg]);

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
        <strong>{bpm} bpm</strong>
        <button onClick={() => loadEcg()} disabled={loading}>
          <RefreshCw size={17} />
          Generate
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
          </div>

          <Plot
            data={[
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
            ]}
            layout={{
              autosize: true,
              height: 360,
              margin: { l: 42, r: 20, t: 16, b: 40 },
              paper_bgcolor: 'rgba(0,0,0,0)',
              plot_bgcolor: '#f8fafc',
              xaxis: { title: 'Time (s)', gridcolor: '#e2e8f0' },
              yaxis: { title: 'Voltage (mV)', gridcolor: '#e2e8f0' },
              legend: { orientation: 'h' },
            }}
            config={{ responsive: true, displaylogo: false }}
            className="plot"
            useResizeHandler
          />
        </>
      )}
    </section>
  );
}
