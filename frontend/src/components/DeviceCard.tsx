import { Battery, CalendarCheck, Cpu } from 'lucide-react';
import type { Device } from '../types/models';

type Props = {
  device: Device;
};

export default function DeviceCard({ device }: Props) {
  const statusClass = device.status === 'Online' ? 'good' : 'warning';

  return (
    <article className="device-card">
      <div className="device-header">
        <div>
          <p className="label">{device.type}</p>
          <h3>{device.name}</h3>
        </div>
        <span className={`status ${statusClass}`}>{device.status}</span>
      </div>

      <div className="health-row">
        <span>Health score</span>
        <strong>{device.health_score}%</strong>
      </div>
      <div className="meter" aria-label={`${device.health_score} percent health`}>
        <div style={{ width: `${device.health_score}%` }} />
      </div>

      <div className="device-meta">
        <span><Cpu size={15} /> {device.location}</span>
        <span><Battery size={15} /> {device.battery}% battery</span>
        <span><CalendarCheck size={15} /> Next: {device.next_service}</span>
      </div>
    </article>
  );
}
