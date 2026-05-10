import type { DashboardData, EcgAnalysisRequest, EcgData, EcgHistoryItem, LearningNote } from '../types/models';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

async function getJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

export function getDashboard() {
  return getJson<DashboardData>('/api/dashboard');
}

export function getLearningNotes() {
  return getJson<LearningNote[]>('/api/learning');
}

export function generateEcg(bpm: number, seconds = 8) {
  return getJson<EcgData>(`/api/ecg/generate?bpm=${bpm}&seconds=${seconds}`);
}

export async function analyzeEcg(payload: EcgAnalysisRequest) {
  const response = await fetch(`${API_URL}/api/ecg/analyze`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Analysis failed: ${response.status}`);
  }

  return response.json() as Promise<EcgData>;
}

export function getEcgHistory() {
  return getJson<EcgHistoryItem[]>('/api/ecg/history');
}
