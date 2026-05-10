import { useEffect, useState } from 'react';
import { Activity, AlertTriangle, HeartPulse, ServerCog } from 'lucide-react';
import DeviceCard from './components/DeviceCard';
import EcgPanel from './components/EcgPanel';
import SummaryCard from './components/SummaryCard';
import { getDashboard, getLearningNotes } from './services/api';
import type { DashboardData, LearningNote } from './types/models';

export default function App() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [notes, setNotes] = useState<LearningNote[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function loadData() {
      try {
        const [dashboardData, learningData] = await Promise.all([
          getDashboard(),
          getLearningNotes(),
        ]);
        setDashboard(dashboardData);
        setNotes(learningData);
      } catch {
        setError('Backend is not reachable. Start FastAPI on port 8000.');
      }
    }

    loadData();
  }, []);

  return (
    <main className="app-shell">
      <header className="topbar">
        <div>
          <p className="label">Educational demo platform</p>
          <h1>BioMed Control Center</h1>
        </div>
        <div className="safety-badge">Fake data only</div>
      </header>

      {error && <p className="error">{error}</p>}

      {dashboard && (
        <>
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

              <section className="panel">
                <div className="section-title">
                  <div>
                    <p className="label">Recent</p>
                    <h2>Analysis history</h2>
                  </div>
                </div>
                <div className="simple-list">
                  {dashboard.recent_analyses.map((analysis) => (
                    <article key={analysis.id}>
                      <strong>{analysis.name}</strong>
                      <span>{analysis.result}</span>
                      <small>{analysis.heart_rate} bpm - {analysis.created_at}</small>
                    </article>
                  ))}
                </div>
              </section>
            </aside>
          </section>
        </>
      )}

      <EcgPanel />

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
