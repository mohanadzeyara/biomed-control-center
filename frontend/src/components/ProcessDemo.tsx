import type { DeviceDemo, Lang, LearningDevice } from '../data/devices';
import { t } from '../data/devices';

type Props = {
  device: LearningDevice;
  demo: DeviceDemo;
  lang: Lang;
};

export default function ProcessDemo({ device, demo, lang }: Props) {
  return (
    <section className="process-demo">
      <div className="section-title">
        <div>
          <p className="label">{lang === 'en' ? 'Animated teaching clip' : 'Animierter Lernclip'}</p>
          <h2>{t(demo.title, lang)}</h2>
        </div>
      </div>

      <div className={`clip-strip ${device.model}`}>
        {demo.clipSteps.map((step, index) => (
          <div className="clip-step" key={t(step, 'en')}>
            <span>{index + 1}</span>
            <strong>{t(step, lang)}</strong>
          </div>
        ))}
        <div className="moving-pulse" />
      </div>

      <div className={`before-after ${device.model}`}>
        <div>
          <span>{t(demo.beforeLabel, lang)}</span>
          <div className="image-sim before" />
        </div>
        <div>
          <span>{t(demo.afterLabel, lang)}</span>
          <div className="image-sim after" />
        </div>
      </div>

      <p>{t(demo.explanation, lang)}</p>

      <div className="filter-row">
        {demo.filters.map((filter) => (
          <span key={t(filter, 'en')}>{t(filter, lang)}</span>
        ))}
      </div>
    </section>
  );
}
