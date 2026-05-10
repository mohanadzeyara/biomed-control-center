import type { DeviceDemo, LearningDevice } from '../data/devices';

type Props = {
  device: LearningDevice;
  demo: DeviceDemo;
};

export default function ProcessDemo({ device, demo }: Props) {
  return (
    <section className="process-demo">
      <div className="section-title">
        <div>
          <p className="label">Try the concept</p>
          <h2>{demo.title}</h2>
        </div>
      </div>

      <div className={`before-after ${device.model}`}>
        <div>
          <span>{demo.beforeLabel}</span>
          <div className="image-sim before" />
        </div>
        <div>
          <span>{demo.afterLabel}</span>
          <div className="image-sim after" />
        </div>
      </div>

      <p>{demo.explanation}</p>

      <div className="filter-row">
        {demo.filters.map((filter) => (
          <span key={filter}>{filter}</span>
        ))}
      </div>
    </section>
  );
}
