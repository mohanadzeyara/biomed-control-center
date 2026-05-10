import { useMemo, useState } from 'react';
import { BookOpen, Box, Layers, MonitorDot, Rotate3D, Zap } from 'lucide-react';
import DeviceModel from './DeviceModel';
import ProcessDemo from './ProcessDemo';
import { learningDevices } from '../data/devices';
import EcgPanel from './EcgPanel';

export default function DeviceExplorer() {
  const [deviceId, setDeviceId] = useState('ecg');
  const device = useMemo(() => learningDevices.find((item) => item.id === deviceId) || learningDevices[0], [deviceId]);
  const [selectedPartId, setSelectedPartId] = useState(device.parts[0].id);
  const selectedPart = device.parts.find((part) => part.id === selectedPartId) || device.parts[0];

  function chooseDevice(nextDeviceId: string) {
    const nextDevice = learningDevices.find((item) => item.id === nextDeviceId) || learningDevices[0];
    setDeviceId(nextDevice.id);
    setSelectedPartId(nextDevice.parts[0].id);
  }

  return (
    <>
      <section className="explorer-hero">
        <div className="hero-copy">
          <p className="label">Interactive biomedical engineering education</p>
          <h1>MedTech Device Explorer</h1>
          <p>
            Learn medical devices through clickable 3D models, part-by-part explanations,
            signal and image processing demos, and safe educational simulations.
          </p>
        </div>
        <div className="hero-stats">
          <span><Box size={18} /> {learningDevices.length} devices</span>
          <span><Rotate3D size={18} /> movable 3D models</span>
          <span><Zap size={18} /> fake/demo data only</span>
        </div>
      </section>

      <section className="device-library">
        {learningDevices.map((item) => (
          <button
            key={item.id}
            className={item.id === device.id ? 'library-card active' : 'library-card'}
            onClick={() => chooseDevice(item.id)}
          >
            <span>{item.category}</span>
            <strong>{item.name}</strong>
            <small>{item.short}</small>
          </button>
        ))}
      </section>

      <section className="device-workspace">
        <div className="model-panel">
          <div className="section-title">
            <div>
              <p className="label">3D device model</p>
              <h2>{device.name}</h2>
            </div>
            <Rotate3D size={24} />
          </div>
          <DeviceModel device={device} selectedPartId={selectedPart.id} onSelectPart={setSelectedPartId} />
          <p className="canvas-hint">Drag to rotate. Click a colored part to inspect it.</p>
        </div>

        <aside className="lesson-panel">
          <div>
            <p className="label">Selected part</p>
            <h2>{selectedPart.name}</h2>
            <p>{selectedPart.function}</p>
            <small>{selectedPart.details}</small>
          </div>

          <div className="part-buttons">
            {device.parts.map((part) => (
              <button
                key={part.id}
                className={part.id === selectedPart.id ? 'active' : ''}
                onClick={() => setSelectedPartId(part.id)}
              >
                {part.name}
              </button>
            ))}
          </div>
        </aside>
      </section>

      <section className="learning-grid">
        <article className="lesson-card">
          <BookOpen size={24} />
          <h2>How it works</h2>
          <p>{device.overview}</p>
        </article>
        <article className="lesson-card">
          <Layers size={24} />
          <h2>Signal path</h2>
          <ol>
            {device.workflow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
        <article className="lesson-card">
          <MonitorDot size={24} />
          <h2>Learning goal</h2>
          <p>
            Understand the device as an engineering system: sensor or source, signal acquisition,
            processing, display, safety limits, and user interaction.
          </p>
        </article>
      </section>

      <ProcessDemo device={device} demo={device.demo} />

      {device.id === 'ecg' && <EcgPanel />}
    </>
  );
}
