import { useEffect, useState } from 'react';
import { Activity, AlertTriangle, HeartPulse, ServerCog } from 'lucide-react';
import DeviceExplorer from './components/DeviceExplorer';
import DeviceCard from './components/DeviceCard';
import SummaryCard from './components/SummaryCard';
import { getDashboard, getLearningNotes } from './services/api';
import type { DashboardData, LearningNote } from './types/models';

export default function App() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [notes, setNotes] = useState<LearningNote[]>([]);

  useEffect(() => {
    async function loadData() {
      const [dashboardData, learningData] = await Promise.all([
        getDashboard(),
        getLearningNotes(),
      ]);
      setDashboard(dashboardData);
      setNotes(learningData);
    }

    loadData();
  }, []);

  return (
    <main className="app-shell">
      <DeviceExplorer />

      {dashboard && (
        <section className="control-center" id="control-center">
          <div className="section-title">
            <div>
              <p className="label">Supporting module</p>
              <h2>Control Center Preview</h2>
            </div>
          </div>

          <section className="summary-grid">
            <SummaryCard
              label="Devices"
              value={dashboard.summary.devices}
              detail={`${dashboard.summary.online} online`}
              icon={ServerCog}
            />
            <SummaryCard
              label="Alerts"
              value={dashboard.summary.alerts}
              detail="Threshold demo"
              icon={AlertTriangle}
            />
            <SummaryCard
              label="Average health"
              value={`${dashboard.summary.average_health}%`}
              detail="Digital twin score"
              icon={HeartPulse}
            />
            <SummaryCard
              label="Recent analyses"
              value={dashboard.recent_analyses.length}
              detail="ECG and sensors"
              icon={Activity}
            />
          </section>

          <section className="layout-grid">
            <div className="panel">
              <div className="section-title">
                <div>
                  <p className="label">Medical Device Digital Twin</p>
                  <h2>Device overview</h2>
                </div>
              </div>
              <div className="device-list">
                {dashboard.devices.map((device) => (
                  <DeviceCard key={device.id} device={device} />
                ))}
              </div>
            </div>

            <aside className="side-stack">
              <section className="panel">
                <div className="section-title">
                  <div>
                    <p className="label">Alerts</p>
                    <h2>Current warnings</h2>
                  </div>
                </div>
                <div className="simple-list">
                  {dashboard.alerts.map((alert) => (
                    <article key={alert.id}>
                      <strong>{alert.level}</strong>
                      <span>{alert.message}</span>
                      <small>{alert.device} - {alert.time}</small>
                    </article>
                  ))}
                </div>
              </section>
            </aside>
          </section>
        </section>
      )}

      <section className="learning-strip">
        {notes.map((note) => (
          <article key={note.title}>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
