export type Device = {
  id: string;
  name: string;
  type: string;
  location: string;
  status: string;
  health_score: number;
  battery: number;
  last_service: string;
  next_service: string;
};

export type AlertItem = {
  id: string;
  level: string;
  message: string;
  device: string;
  time: string;
};

export type RecentAnalysis = {
  id: string;
  name: string;
  heart_rate: number;
  result: string;
  created_at: string;
};

export type DashboardData = {
  summary: {
    devices: number;
    online: number;
    alerts: number;
    average_health: number;
  };
  devices: Device[];
  alerts: AlertItem[];
  recent_analyses: RecentAnalysis[];
};

export type EcgData = {
  sample_rate: number;
  duration: number;
  heart_rate: number;
  time: number[];
  voltage: number[];
  r_peaks: number[];
  notes: string;
};

export type LearningNote = {
  title: string;
  body: string;
};
