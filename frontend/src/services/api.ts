import type { DashboardData, EcgData, LearningNote } from '../types/models';

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
