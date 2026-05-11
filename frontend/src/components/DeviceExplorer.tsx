import { useEffect, useMemo, useState } from 'react';
import { ArrowLeft, BookOpen, Box, CircuitBoard, Layers, MonitorDot, Rotate3D, Zap } from 'lucide-react';
import DeviceModel from './DeviceModel';
import ProcessDemo from './ProcessDemo';
import { learningDevices, t, type Lang } from '../data/devices';
import EcgPanel from './EcgPanel';

type Props = {
  lang: Lang;
};

export default function DeviceExplorer({ lang }: Props) {
  const [route, setRoute] = useState(window.location.hash || '#/');
  const deviceId = route.startsWith('#/device/') ? route.replace('#/device/', '') : '';
  const device = useMemo(() => learningDevices.find((item) => item.id === deviceId), [deviceId]);
  const [selectedPartId, setSelectedPartId] = useState('');
  const selectedPart = device?.parts.find((part) => part.id === selectedPartId) || device?.parts[0];

  useEffect(() => {
    function onHashChange() {
      setRoute(window.location.hash || '#/');
    }
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    if (device && !device.parts.some((part) => part.id === selectedPartId)) {
      setSelectedPartId(device.parts[0].id);
    }
  }, [device, selectedPartId]);

  if (!device) {
    return (
      <>
        <section className="explorer-hero">
          <div className="hero-copy">
            <p className="label">{lang === 'en' ? 'Interactive biomedical engineering education' : 'Interaktive Medizintechnik-Lernplattform'}</p>
            <h1>MedTech Device Explorer</h1>
            <p>
              {lang === 'en'
                ? 'Choose a medical device and learn it as an engineering system: 3D parts, electrotechnics, signal processing, image processing, safety, and operation.'
                : 'Waehle ein medizinisches Geraet und lerne es als technisches System: 3D-Bauteile, Elektrotechnik, Signalverarbeitung, Bildverarbeitung, Sicherheit und Bedienung.'}
            </p>
          </div>
          <div className="hero-stats">
            <span><Box size={18} /> {learningDevices.length} {lang === 'en' ? 'devices' : 'Geraete'}</span>
            <span><Rotate3D size={18} /> {lang === 'en' ? 'clickable 3D parts' : 'anklickbare 3D-Teile'}</span>
            <span><Zap size={18} /> {lang === 'en' ? 'engineering-first explanations' : 'Erklaerungen mit Elektrotechnik'}</span>
          </div>
        </section>

        <section className="device-library page-library">
          {learningDevices.map((item) => (
            <a key={item.id} className="library-card" href={`#/device/${item.id}`}>
              <span>{t(item.category, lang)}</span>
              <strong>{t(item.name, lang)}</strong>
              <small>{t(item.short, lang)}</small>
            </a>
          ))}
        </section>
      </>
    );
  }

  return (
    <>
      <a className="back-link" href="#/">
        <ArrowLeft size={18} />
        {lang === 'en' ? 'Device library' : 'Geraetebibliothek'}
      </a>

      <section className="device-page-hero">
        <div>
          <p className="label">{t(device.category, lang)}</p>
          <h1>{t(device.name, lang)}</h1>
          <p>{t(device.overview, lang)}</p>
        </div>
      </section>

      <section className="device-workspace device-page">
        <div className="model-panel">
          <div className="section-title">
            <div>
              <p className="label">{lang === 'en' ? 'Interactive 3D model' : 'Interaktives 3D-Modell'}</p>
              <h2>{t(device.name, lang)}</h2>
            </div>
            <Rotate3D size={24} />
          </div>
          <DeviceModel device={device} selectedPartId={selectedPart?.id || ''} onSelectPart={setSelectedPartId} />
          <p className="canvas-hint">
            {lang === 'en' ? 'Drag to rotate. Click a part or choose it from the list.' : 'Ziehen zum Drehen. Teil anklicken oder aus der Liste waehlen.'}
          </p>
        </div>

        {selectedPart && (
          <aside className="lesson-panel">
            <div>
              <p className="label">{lang === 'en' ? 'Selected part' : 'Ausgewaehltes Teil'}</p>
              <h2>{t(selectedPart.name, lang)}</h2>
              <p>{t(selectedPart.function, lang)}</p>
              <small>{t(selectedPart.details, lang)}</small>
            </div>

            <div className="electro-box">
              <CircuitBoard size={22} />
              <div>
                <strong>{lang === 'en' ? 'Electrotechnics link' : 'Bezug zur Elektrotechnik'}</strong>
                <span>{t(selectedPart.electrotechnics, lang)}</span>
              </div>
            </div>

            <div className="part-buttons">
              {device.parts.map((part) => (
                <button
                  key={part.id}
                  className={part.id === selectedPart.id ? 'active' : ''}
                  onClick={() => setSelectedPartId(part.id)}
                >
                  {t(part.name, lang)}
                </button>
              ))}
            </div>
          </aside>
        )}
      </section>

      <section className="learning-grid">
        <article className="lesson-card">
          <BookOpen size={24} />
          <h2>{lang === 'en' ? 'How it works' : 'Wie es funktioniert'}</h2>
          <p>{t(device.overview, lang)}</p>
        </article>
        <article className="lesson-card">
          <Layers size={24} />
          <h2>{lang === 'en' ? 'Process path' : 'Ablauf'}</h2>
          <ol>
            {device.workflow.map((step) => (
              <li key={t(step, 'en')}>{t(step, lang)}</li>
            ))}
          </ol>
        </article>
        <article className="lesson-card">
          <MonitorDot size={24} />
          <h2>{lang === 'en' ? 'What to understand' : 'Was man verstehen soll'}</h2>
          <p>
            {lang === 'en'
              ? 'Connect the medical function with the underlying electrical system: sensors, power, amplifiers, ADCs, filters, motors, control loops, and safety logic.'
              : 'Verbinde die medizinische Funktion mit dem elektrischen System dahinter: Sensoren, Leistung, Verstaerker, ADCs, Filter, Motoren, Regelkreise und Sicherheitslogik.'}
          </p>
        </article>
      </section>

      <ProcessDemo device={device} demo={device.demo} lang={lang} />

      {device.deepDive && (
        <section className="deep-dive">
          <div className="section-title">
            <div>
              <p className="label">{lang === 'en' ? 'Engineering deep dive' : 'Technischer Deep Dive'}</p>
              <h2>{lang === 'en' ? 'Signal, field, and processing path' : 'Signal-, Feld- und Verarbeitungspfad'}</h2>
            </div>
            <CircuitBoard size={24} />
          </div>
          <div className="deep-dive-grid">
            {device.deepDive.map((section) => (
              <article key={t(section.title, 'en')}>
                <h3>{t(section.title, lang)}</h3>
                <p>{t(section.body, lang)}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      {device.id === 'ecg' && <EcgPanel />}
    </>
  );
}
