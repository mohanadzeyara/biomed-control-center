import type { DashboardData, EcgAnalysisRequest, EcgData, EcgHistoryItem, LearningNote } from '../types/models';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
const localHistory: EcgHistoryItem[] = [];

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

export function getDashboard() {
  return getJson<DashboardData>('/api/dashboard').catch(() => demoDashboard());
}

export function getLearningNotes() {
  return getJson<LearningNote[]>('/api/learning').catch(() => demoLearningNotes());
}

export async function generateEcg(bpm: number, seconds = 8) {
  try {
    return await getJson<EcgData>(`/api/ecg/generate?bpm=${bpm}&seconds=${seconds}`);
  } catch {
    const result = makeDemoEcg(bpm, seconds);
    localHistory.unshift({
      id: `local-${Date.now()}`,
      name: 'Generated ECG',
      heart_rate: result.heart_rate,
      duration: result.duration,
      filter_used: false,
    });
    return result;
  }
}

export async function analyzeEcg(payload: EcgAnalysisRequest) {
  try {
    const response = await fetch(`${API_URL}/api/ecg/analyze`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Analysis failed: ${response.status}`);
    }

    return response.json() as Promise<EcgData>;
  } catch {
    const result = analyzeLocally(payload);
    localHistory.unshift({
      id: `upload-${Date.now()}`,
      name: result.name || payload.name,
      heart_rate: result.heart_rate,
      duration: result.duration,
      filter_used: Boolean(result.filter_used),
    });
    return result;
  }
}

export function getEcgHistory() {
  return getJson<EcgHistoryItem[]>('/api/ecg/history').catch(() => localHistory);
}

function demoDashboard(): DashboardData {
  return {
    summary: { devices: 3, online: 2, alerts: 2, average_health: 83 },
    devices: [
      {
        id: 'infusion-01',
        name: 'Infusion Pump A1',
        type: 'Infusion Pump',
        location: 'Skills Lab',
        status: 'Online',
        health_score: 92,
        battery: 78,
        last_service: '2026-04-12',
        next_service: '2026-06-12',
      },
      {
        id: 'ecg-02',
        name: 'ECG Monitor E2',
        type: 'ECG Monitor',
        location: 'Simulation Room',
        status: 'Online',
        health_score: 87,
        battery: 64,
        last_service: '2026-03-22',
        next_service: '2026-05-28',
      },
      {
        id: 'vent-03',
        name: 'Ventilator V3',
        type: 'Ventilator',
        location: 'Demo ICU',
        status: 'Needs Check',
        health_score: 71,
        battery: 42,
        last_service: '2026-02-14',
        next_service: '2026-05-18',
      },
    ],
    alerts: [
      {
        id: 'alert-1',
        level: 'Medium',
        message: 'Ventilator V3 battery is below 50 percent.',
        device: 'Ventilator V3',
        time: '10 min ago',
      },
      {
        id: 'alert-2',
        level: 'Low',
        message: 'ECG Monitor E2 service date is approaching.',
        device: 'ECG Monitor E2',
        time: '32 min ago',
      },
    ],
    recent_analyses: [
      {
        id: 'analysis-1',
        name: 'Generated ECG Demo',
        heart_rate: 74,
        result: 'Normal educational sample',
        created_at: 'demo session',
      },
    ],
  };
}

function demoLearningNotes(): LearningNote[] {
  return [
    {
      title: 'ECG signal',
      body: 'An ECG is a voltage signal that shows electrical activity of the heart. This demo uses fake educational data.',
    },
    {
      title: 'R peaks',
      body: 'R peaks are tall QRS points. The distance between them can estimate heart rate.',
    },
    {
      title: 'Device health',
      body: 'A digital twin combines status, battery, service date, and warning data into one device view.',
    },
  ];
}

function makeDemoEcg(bpm: number, seconds: number): EcgData {
  const sampleRate = 250;
  const total = seconds * sampleRate;
  const beatGap = 60 / bpm;
  const rPeaks: number[] = [];
  const time: number[] = [];
  const voltage: number[] = [];

  for (let index = 0; index < total; index += 1) {
    const t = index / sampleRate;
    let value = 0.04 * Math.sin(2 * Math.PI * 0.35 * t) + 0.02 * Math.sin(2 * Math.PI * 8 * t);

    for (let beat = 0.7; beat < seconds; beat += beatGap) {
      value += 1.15 * Math.exp(-((t - beat) ** 2) / 0.0009);
      value -= 0.18 * Math.exp(-((t - (beat - 0.045)) ** 2) / 0.00035);
      value -= 0.22 * Math.exp(-((t - (beat + 0.05)) ** 2) / 0.00045);
      value += 0.12 * Math.exp(-((t - (beat - 0.18)) ** 2) / 0.004);
      value += 0.28 * Math.exp(-((t - (beat + 0.26)) ** 2) / 0.01);
    }

    time.push(Number(t.toFixed(3)));
    voltage.push(Number(value.toFixed(4)));
  }

  for (let beat = 0.7; beat < seconds; beat += beatGap) {
    rPeaks.push(Math.round(beat * sampleRate));
  }

  return {
    sample_rate: sampleRate,
    duration: seconds,
    heart_rate: bpm,
    time,
    voltage,
    r_peaks: rPeaks,
    notes: 'Browser fallback ECG. Educational demo only.',
  };
}

function analyzeLocally(payload: EcgAnalysisRequest): EcgData {
  const voltage = payload.apply_filter ? smooth(payload.voltage) : payload.voltage;
  const rPeaks = detectPeaks(voltage, payload.sample_rate);
  const duration = Number((payload.time[payload.time.length - 1] - payload.time[0]).toFixed(3));
  let heartRate = 0;

  if (rPeaks.length > 1) {
    const gaps = rPeaks.slice(1).map((peak, index) => payload.time[peak] - payload.time[rPeaks[index]]);
    const averageGap = gaps.reduce((sum, gap) => sum + gap, 0) / gaps.length;
    heartRate = averageGap > 0 ? Math.round(60 / averageGap) : 0;
  }

  return {
    name: payload.name,
    sample_rate: payload.sample_rate,
    duration,
    heart_rate: heartRate,
    time: payload.time,
    voltage,
    raw_voltage: payload.voltage,
    r_peaks: rPeaks,
    filter_used: payload.apply_filter,
    notes: 'Browser fallback ECG analysis. Educational demo only.',
  };
}

function smooth(values: number[]) {
  return values.map((_, index) => {
    const chunk = values.slice(Math.max(0, index - 3), Math.min(values.length, index + 4));
    return Number((chunk.reduce((sum, value) => sum + value, 0) / chunk.length).toFixed(4));
  });
}

function detectPeaks(values: number[], sampleRate: number) {
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
  const variance = values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / values.length;
  const threshold = mean + 0.65 * Math.sqrt(variance);
  const minDistance = Math.max(1, Math.round(sampleRate * 0.28));
  const peaks: number[] = [];
  let lastPeak = -minDistance;

  for (let index = 1; index < values.length - 1; index += 1) {
    const isPeak = values[index] > values[index - 1] && values[index] > values[index + 1];

    if (isPeak && values[index] > threshold && index - lastPeak >= minDistance) {
      peaks.push(index);
      lastPeak = index;
    }
  }

  return peaks;
}
