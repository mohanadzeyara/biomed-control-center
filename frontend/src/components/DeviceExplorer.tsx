import { useEffect, useMemo, useState } from 'react';
import {
  Activity,
  ArrowLeft,
  BookOpen,
  Box,
  CircuitBoard,
  FileText,
  Film,
  Gauge,
  GraduationCap,
  Image,
  Layers,
  MonitorDot,
  Pause,
  Play,
  RotateCcw,
  Rotate3D,
  ShieldCheck,
  Stethoscope,
  Wrench,
  Zap,
} from 'lucide-react';
import DeviceModel, { getDevicePhoto } from './DeviceModel';
import { learningDevices, t, type Lang } from '../data/devices';
import EcgPanel from './EcgPanel';

type Props = {
  lang: Lang;
};

type StudyTab = 'model' | 'use' | 'results' | 'electro';

export default function DeviceExplorer({ lang }: Props) {
  const [route, setRoute] = useState(window.location.hash || '#/');
  const deviceId = route.startsWith('#/device/') ? route.replace('#/device/', '') : '';
  const device = useMemo(() => learningDevices.find((item) => item.id === deviceId), [deviceId]);
  const [selectedPartId, setSelectedPartId] = useState('');
  const [activeTab, setActiveTab] = useState<StudyTab>('model');
  const [processStep, setProcessStep] = useState(0);
  const [processPlaying, setProcessPlaying] = useState(true);
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

  useEffect(() => {
    setActiveTab('model');
    setProcessStep(0);
    setProcessPlaying(true);
  }, [device?.id]);

  useEffect(() => {
    if (!device || activeTab !== 'use' || !processPlaying) {
      return;
    }
    const timer = window.setInterval(() => {
      setProcessStep((step) => (step + 1) % device.demo.clipSteps.length);
    }, 1800);
    return () => window.clearInterval(timer);
  }, [activeTab, device, processPlaying]);

  if (!device) {
    return (
      <>
        <section className="explorer-hero">
          <div className="hero-copy">
            <p className="label">{lang === 'en' ? 'Interactive biomedical engineering education' : 'Interaktive Medizintechnik-Lernplattform'}</p>
            <h1>MedTech Device Explorer</h1>
            <p>
              {lang === 'en'
                ? 'Choose a medical device and learn it as an engineering system: real machine photos, labeled parts, electrotechnics, signal processing, image processing, safety, and operation.'
                : 'Waehle ein medizinisches Geraet und lerne es als technisches System: echte Geraetefotos, beschriftete Teile, Elektrotechnik, Signalverarbeitung, Bildverarbeitung, Sicherheit und Bedienung.'}
            </p>
          </div>
          <div className="hero-stats">
            <span><Box size={18} /> {learningDevices.length} {lang === 'en' ? 'devices' : 'Geraete'}</span>
            <span><Image size={18} /> {lang === 'en' ? 'real photo labels' : 'echte Fotolabels'}</span>
            <span><Zap size={18} /> {lang === 'en' ? 'engineering-first explanations' : 'Erklaerungen mit Elektrotechnik'}</span>
          </div>
        </section>

        <section className="homepage-demo">
          <div className="demo-copy">
            <p className="label">{lang === 'en' ? 'Project demo' : 'Projekt-Demo'}</p>
            <h2>{lang === 'en' ? 'How to use the platform' : 'So benutzt man die Plattform'}</h2>
            <p>
              {lang === 'en'
                ? 'Pick a device card, open its device profile, inspect the real machine photo, follow the short process clip, compare simulated before/after data, and connect the device to GET 1/2 electrotechnics.'
                : 'Waehle eine Geraetekarte, oeffne das Geraeteprofil, pruefe das echte Geraetefoto, folge dem kurzen Prozessclip, vergleiche simulierte Vorher/Nachher-Daten und verbinde das Geraet mit GET 1/2 Elektrotechnik.'}
            </p>
          </div>
          <div className="video-storyboard" aria-label={lang === 'en' ? 'Animated project explainer' : 'Animierte Projekt-Erklaerung'}>
            {(lang === 'en'
              ? ['Choose device', 'Inspect parts', 'Read signals', 'Connect GET theory']
              : ['Geraet waehlen', 'Teile pruefen', 'Signale lesen', 'GET-Bezug herstellen']
            ).map((step, index) => (
              <div className="story-frame" key={step}>
                <span>{index + 1}</span>
                <strong>{step}</strong>
              </div>
            ))}
            <Play className="story-play" size={34} />
          </div>
        </section>

        <section className="device-library page-library">
          {learningDevices.map((item, index) => {
            const preview = getCardPreview(item.model, lang);
            const photo = getDevicePhoto(item.model);
            return (
            <a key={item.id} className="library-card" href={`#/device/${item.id}`}>
              <div className="card-thumb">
                <img
                  src={photo.thumb}
                  alt={photo.alt}
                  loading="lazy"
                  onError={(event) => {
                    if (event.currentTarget.src !== photo.thumb) {
                      event.currentTarget.src = photo.thumb;
                    }
                  }}
                />
                <span className="card-badge">{t(item.category, lang)}</span>
                <span className="card-status">{index % 3 === 1 ? (lang === 'en' ? 'Study' : 'Studium') : lang === 'en' ? 'Active' : 'Aktiv'}</span>
              </div>
              <div className="card-body">
                <strong>{t(item.name, lang)}</strong>
                <small>{t(item.short, lang)}</small>
              </div>
              <div className="card-preview">
                <preview.icon size={18} />
                <b>{preview.value}</b>
                <span>{preview.label}</span>
              </div>
              <span className="explore-cta">{lang === 'en' ? 'Explore device' : 'Geraet erkunden'}</span>
            </a>
          )})}
        </section>
      </>
    );
  }

  const tabs: Array<{ id: StudyTab; icon: JSX.Element; label: string; short: string }> = [
    {
      id: 'model',
      icon: <Rotate3D size={18} />,
      label: lang === 'en' ? 'Machine picture + parts' : 'Geraetebild + Teile',
      short: lang === 'en' ? 'parts' : 'Teile',
    },
    {
      id: 'use',
      icon: <Film size={18} />,
      label: lang === 'en' ? 'How it works' : 'Wie es funktioniert',
      short: lang === 'en' ? 'process' : 'Ablauf',
    },
    {
      id: 'results',
      icon: <Image size={18} />,
      label: lang === 'en' ? 'Results before / after' : 'Ergebnis vorher / nachher',
      short: lang === 'en' ? 'results' : 'Ergebnis',
    },
    {
      id: 'electro',
      icon: <GraduationCap size={18} />,
      label: lang === 'en' ? 'Elektrotechnik GET 1/2' : 'Elektrotechnik GET 1/2',
      short: lang === 'en' ? 'GET' : 'GET',
    },
  ];
  const electroConcepts = getElectroConcepts(device.model, lang);
  const processing = getProcessingExplanation(device.model, lang);

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

      {device.id === 'ecg' && <EcgFlagshipProfile lang={lang} />}
      {device.id === 'ecg' && <EcgStorySections lang={lang} />}
      {device.id === 'ecg' && (
        <section className="ecg-lab-section">
          <div className="section-title">
            <div>
              <p className="label">{lang === 'en' ? 'ECG-only lab section' : 'Nur-EKG-Laborbereich'}</p>
              <h2>{lang === 'en' ? 'Analyze the ECG signal here' : 'EKG-Signal hier analysieren'}</h2>
            </div>
            <Activity size={24} />
          </div>
          <p>
            {lang === 'en'
              ? 'This lab belongs only to the ECG monitor page. The other devices keep their own device profile, process, results, and GET categories without inheriting the ECG analysis controls.'
              : 'Dieses Labor gehoert nur zur EKG-Monitor-Seite. Die anderen Geraete behalten ihre eigenen Bereiche fuer Geraeteprofil, Prozess, Ergebnisse und GET-Bezug, ohne die EKG-Analyse-Steuerung zu uebernehmen.'}
          </p>
          <EcgPanel />
        </section>
      )}

      <section className="study-shell">
        <div className="study-tabs" role="tablist" aria-label={lang === 'en' ? 'Device study sections' : 'Geraete-Lernbereiche'}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={activeTab === tab.id ? 'active' : ''}
              onClick={() => setActiveTab(tab.id)}
              aria-label={tab.label}
              title={tab.label}
            >
              {tab.icon}
              <span>{tab.label}</span>
              <small>{tab.short}</small>
            </button>
          ))}
        </div>

        {activeTab === 'model' && (
          <>
            <section className="device-workspace device-page">
              <div className="model-panel pro-model-panel">
                <div className="section-title">
                  <div>
                    <p className="label">{lang === 'en' ? 'Real labeled machine photo' : 'Echtes beschriftetes Geraetefoto'}</p>
                    <h2>{t(device.name, lang)}</h2>
                  </div>
                  <Rotate3D size={24} />
                </div>
                <DeviceModel device={device} selectedPartId={selectedPart?.id || ''} onSelectPart={setSelectedPartId} />
                <p className="canvas-hint">
                  {lang === 'en'
                    ? 'Click a label on the machine picture or choose a component from the list to read the engineering explanation.'
                    : 'Klicke eine Beschriftung im Geraetebild oder waehle ein Bauteil aus der Liste, um die technische Erklaerung zu lesen.'}
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
                <h2>{lang === 'en' ? 'System idea' : 'Systemidee'}</h2>
                <p>{t(device.overview, lang)}</p>
              </article>
              <article className="lesson-card">
                <Layers size={24} />
                <h2>{lang === 'en' ? 'Signal / energy path' : 'Signal- / Energiepfad'}</h2>
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
                    ? 'Read each device as an electrical system first: source, impedance, energy conversion, conditioning, sampling, control, isolation, and safety.'
                    : 'Lies jedes Geraet zuerst als elektrisches System: Quelle, Impedanz, Energiewandlung, Aufbereitung, Abtastung, Regelung, Isolation und Sicherheit.'}
                </p>
              </article>
            </section>
          </>
        )}

        {activeTab === 'use' && (
          <section className="study-panel">
            <div className="section-title">
              <div>
                <p className="label">{lang === 'en' ? 'Animated process walkthrough' : 'Animierter Prozessablauf'}</p>
                <h2>{t(device.demo.title, lang)}</h2>
              </div>
              <div className="process-controls">
                <button type="button" onClick={() => setProcessPlaying(!processPlaying)} aria-label={processPlaying ? 'Pause process walkthrough' : 'Play process walkthrough'}>
                  {processPlaying ? <Pause size={16} /> : <Play size={16} />}
                  {processPlaying ? (lang === 'en' ? 'Pause' : 'Pause') : (lang === 'en' ? 'Play' : 'Start')}
                </button>
                <button type="button" onClick={() => setProcessStep(0)} aria-label="Restart process walkthrough">
                  <RotateCcw size={16} />
                  {lang === 'en' ? 'Restart' : 'Neu starten'}
                </button>
              </div>
            </div>
            <div className={`clip-strip ${device.model}`}>
              {device.demo.clipSteps.map((step, index) => (
                <div className={`clip-step ${index === processStep ? 'active' : ''}`} key={t(step, 'en')}>
                  <span>{index + 1}</span>
                  <strong>{t(step, lang)}</strong>
                </div>
              ))}
              <div className="moving-pulse" style={{ left: `${8 + processStep * (84 / Math.max(device.demo.clipSteps.length - 1, 1))}%` }} />
            </div>
            <div className="process-progress">
              <span style={{ width: `${((processStep + 1) / device.demo.clipSteps.length) * 100}%` }} />
            </div>
            <div className="usage-grid">
              {device.workflow.map((step, index) => (
                <article key={t(step, 'en')}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{t(step, lang)}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'results' && (
          <section className="study-panel">
            <div className="section-title">
              <div>
                <p className="label">{lang === 'en' ? 'Result understanding' : 'Ergebnis verstehen'}</p>
                <h2>{lang === 'en' ? 'Before and after processing' : 'Vor und nach der Verarbeitung'}</h2>
              </div>
              <Image size={24} />
            </div>
            <div className={`before-after ${device.model}`}>
              <div>
                <span>{t(device.demo.beforeLabel, lang)}</span>
                <div className="image-sim before" />
              </div>
              <div>
                <span>{t(device.demo.afterLabel, lang)}</span>
                <div className="image-sim after" />
              </div>
            </div>
            <p className="result-explanation">{t(device.demo.explanation, lang)}</p>
            <div className="processing-explanation">
              <article>
                <h3>{lang === 'en' ? 'Problem' : 'Problem'}</h3>
                <p>{processing.problem}</p>
              </article>
              <article>
                <h3>{lang === 'en' ? 'Processing steps' : 'Verarbeitungsschritte'}</h3>
                <ol>
                  {processing.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </article>
              <article>
                <h3>{lang === 'en' ? 'Result and tradeoff' : 'Ergebnis und Kompromiss'}</h3>
                <p>{processing.tradeoff}</p>
              </article>
            </div>
            <div className="filter-row">
              {device.demo.filters.map((filter) => (
                <span key={t(filter, 'en')}>{t(filter, lang)}</span>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'electro' && (
          <section className="study-panel electro-study">
            <div className="section-title">
              <div>
                <p className="label">{lang === 'en' ? 'GET 1/2 study connection' : 'GET 1/2 Studienbezug'}</p>
                <h2>{lang === 'en' ? 'Elektrotechnik behind this device' : 'Elektrotechnik hinter diesem Geraet'}</h2>
              </div>
              <GraduationCap size={24} />
            </div>
            <p className="study-intro">
              {lang === 'en'
                ? 'This section avoids textbook quotations and maps the device to the fundamentals normally trained in GET 1/2: circuit laws, fields, energy, time constants, frequency response, measurement loading, sampling, motors, power electronics, and safety.'
                : 'Dieser Bereich zitiert kein Lehrbuch, sondern ordnet das Geraet den typischen GET-1/2-Grundlagen zu: Kirchhoff, Felder, Energie, Zeitkonstanten, Frequenzgang, Messbelastung, Abtastung, Motoren, Leistungselektronik und Sicherheit.'}
            </p>
            <div className="electro-concept-grid">
              {electroConcepts.map((concept) => (
                <article key={concept.title}>
                  <h3>{concept.title}</h3>
                  <strong>{concept.relation}</strong>
                  <p>{concept.detail}</p>
                </article>
              ))}
            </div>

            {device.deepDive && (
              <div className="deep-dive-grid electro-dive">
                {device.deepDive.map((section) => (
                  <article key={t(section.title, 'en')}>
                    <h3>{t(section.title, lang)}</h3>
                    <p>{t(section.body, lang)}</p>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}
      </section>

    </>
  );
}

function EcgFlagshipProfile({ lang }: { lang: Lang }) {
  const specs =
    lang === 'en'
      ? [
          ['Measured signal', '0.5-4 mV skin potential'],
          ['Useful bandwidth', '0.05-150 Hz ECG band'],
          ['Sampling idea', 'ADC after anti-alias filtering'],
          ['Noise focus', '50 Hz mains, muscle noise, drift'],
        ]
      : [
          ['Messsignal', '0.5-4 mV Hautpotential'],
          ['Nutzband', '0.05-150 Hz EKG-Band'],
          ['Abtastidee', 'ADC nach Anti-Alias-Filter'],
          ['Stoerfokus', '50 Hz Netz, Muskelrauschen, Drift'],
        ];
  const actions =
    lang === 'en'
      ? [
          { icon: <Activity size={18} />, label: 'Analyze ECG signal' },
          { icon: <FileText size={18} />, label: 'Generate report' },
          { icon: <Gauge size={18} />, label: 'View sensor data' },
          { icon: <Wrench size={18} />, label: 'Maintenance log' },
        ]
      : [
          { icon: <Activity size={18} />, label: 'EKG-Signal analysieren' },
          { icon: <FileText size={18} />, label: 'Bericht erzeugen' },
          { icon: <Gauge size={18} />, label: 'Sensordaten ansehen' },
          { icon: <Wrench size={18} />, label: 'Wartungslog' },
        ];

  return (
    <section className="flagship-profile">
      <div className="flagship-visual">
        <img
          className="flagship-photo"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Patient_lying_in_hospital_bed_in_intensive_care_unit_in_Germany_in_2015.jpg"
          alt="Real intensive care ECG monitor and patient monitoring equipment"
        />
        <div className="device-status-overlay">
          <strong>{lang === 'en' ? 'Device status' : 'Geraetestatus'}</strong>
          <span><ShieldCheck size={16} /> {lang === 'en' ? 'Active simulation' : 'Aktive Simulation'}</span>
          <span><Zap size={16} /> {lang === 'en' ? 'Signal quality stable' : 'Signalqualitaet stabil'}</span>
        </div>
      </div>

      <div className="flagship-copy">
        <p className="label">{lang === 'en' ? 'Flagship device profile' : 'Flagship-Geraeteprofil'}</p>
        <h2>{lang === 'en' ? 'ECG monitor as a complete engineering system' : 'EKG-Monitor als komplettes technisches System'}</h2>
        <p>
          {lang === 'en'
            ? 'This page is the polished template for the rest of the project: product-style visual, clickable components, simulated ECG signal, device status, technical specs, study explanation, and report actions.'
            : 'Diese Seite ist die polierte Vorlage fuer den Rest des Projekts: Produktvisual, anklickbare Komponenten, simuliertes EKG-Signal, Geraetestatus, technische Daten, Studienerklaerung und Bericht-Aktionen.'}
        </p>
        <div className="spec-grid">
          {specs.map(([label, value]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
        <div className="action-row">
          {actions.map((action) => (
            <button type="button" key={action.label}>
              {action.icon}
              {action.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function EcgStorySections({ lang }: { lang: Lang }) {
  const highlights =
    lang === 'en'
      ? [
          ['Millivolt signal detection', 'Reads tiny skin potentials without loading the source.'],
          ['High input impedance', 'Protects weak electrode signals from measurement error.'],
          ['Differential amplification', 'Boosts ECG voltage while rejecting shared interference.'],
          ['50 Hz noise reduction', 'Targets mains pickup without destroying useful ECG shape.'],
          ['R-peak detection', 'Turns the waveform into heart-rate and rhythm information.'],
          ['Patient isolation', 'Keeps leakage current and fault paths under control.'],
        ]
      : [
          ['Millivolt-Signalerkennung', 'Liest winzige Hautpotentiale, ohne die Quelle stark zu belasten.'],
          ['Hohe Eingangsimpedanz', 'Schuetzt schwache Elektrodensignale vor Messfehlern.'],
          ['Differenzverstaerkung', 'Hebt EKG-Spannung an und unterdrueckt gemeinsame Stoerung.'],
          ['50-Hz-Stoerreduktion', 'Zielt auf Netzeinkopplung, ohne die EKG-Form zu zerstoeren.'],
          ['R-Zacken-Erkennung', 'Macht aus der Kurve Herzfrequenz- und Rhythmusinformation.'],
          ['Patientenisolation', 'Kontrolliert Ableitstrom und Fehlerpfade.'],
        ];
  const closeups =
    lang === 'en'
      ? [
          {
            title: 'Electrode close-up',
            kicker: 'Skin interface',
            body: 'The electrode is not just a wire. It is a noisy electrochemical interface with impedance, capacitance, offset voltage, and motion sensitivity. This is why skin preparation and contact quality matter before any digital filter can help.',
          },
          {
            title: 'Amplifier close-up',
            kicker: 'Analog front end',
            body: 'The instrumentation amplifier must amplify the small differential ECG while rejecting common-mode mains voltage. In practice, electrode imbalance and cable capacitance reduce ideal CMRR, so layout and protection matter.',
          },
          {
            title: 'Filter close-up',
            kicker: 'Frequency response',
            body: 'High-pass, low-pass, and notch filters remove drift, muscle noise, and 50 Hz pickup. The tradeoff is phase shift and possible waveform distortion if cutoff frequencies are chosen badly.',
          },
          {
            title: 'Display close-up',
            kicker: 'Clinical output',
            body: 'The display is a processed interpretation surface: waveform, detected R peaks, heart-rate estimate, signal quality, and alarms. It must not hide uncertainty from bad contact or noise.',
          },
        ]
      : [
          {
            title: 'Elektroden-Close-up',
            kicker: 'Haut-Grenzflaeche',
            body: 'Die Elektrode ist nicht nur ein Draht. Sie ist eine rauschende elektrochemische Grenzflaeche mit Impedanz, Kapazitaet, Offsetspannung und Bewegungsempfindlichkeit. Deshalb zaehlen Hautvorbereitung und Kontaktqualitaet vor jedem Digitalfilter.',
          },
          {
            title: 'Verstaerker-Close-up',
            kicker: 'Analoge Eingangsstufe',
            body: 'Der Instrumentenverstaerker muss das kleine differentielle EKG verstaerken und Gleichtakt-Netzspannung unterdruecken. In der Praxis reduzieren Elektrodenunsymmetrie und Kabelkapazitaet den idealen CMRR, deshalb zaehlen Layout und Schutzschaltung.',
          },
          {
            title: 'Filter-Close-up',
            kicker: 'Frequenzgang',
            body: 'Hochpass, Tiefpass und Kerbfilter entfernen Drift, Muskelrauschen und 50-Hz-Einkopplung. Der Kompromiss ist Phasenverschiebung und moegliche Kurvenverzerrung bei schlecht gewaehltne Grenzfrequenzen.',
          },
          {
            title: 'Anzeige-Close-up',
            kicker: 'Klinische Ausgabe',
            body: 'Die Anzeige ist eine verarbeitete Interpretationsflaeche: Kurve, erkannte R-Zacken, Herzfrequenz, Signalqualitaet und Alarme. Sie darf Unsicherheit durch schlechten Kontakt oder Rauschen nicht verstecken.',
          },
        ];

  return (
    <section className="ecg-story">
      <div className="story-nav">
        {(lang === 'en' ? ['Overview', 'Signal chain', 'Close-ups', 'Mini report'] : ['Ueberblick', 'Signalkette', 'Close-ups', 'Mini-Bericht']).map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <section className="story-band dark-band">
        <div>
          <p className="label">{lang === 'en' ? 'Samsung-style device story' : 'Samsung-artige Geraete-Story'}</p>
          <h2>{lang === 'en' ? 'From skin potentials to heartbeat insight' : 'Vom Hautpotential zur Herzschlag-Information'}</h2>
          <p>
            {lang === 'en'
              ? 'The ECG monitor is shown as a complete biomedical engineering chain: biological source, sensor interface, analog electronics, filtering, sampling, software interpretation, alarms, and safety.'
              : 'Der EKG-Monitor wird als komplette Medizintechnik-Kette gezeigt: biologische Quelle, Sensorgrenze, Analogelektronik, Filterung, Abtastung, Softwareinterpretation, Alarme und Sicherheit.'}
          </p>
        </div>
        <div className="signal-ribbon">
          <span>mV</span>
          <i />
          <span>ADC</span>
          <i />
          <span>72 bpm</span>
        </div>
      </section>

      <div className="highlight-grid">
        {highlights.map(([title, body]) => (
          <article key={title}>
            <strong>{title}</strong>
            <p>{body}</p>
          </article>
        ))}
      </div>

      <section className="chain-section">
        <div>
          <p className="label">{lang === 'en' ? 'Signal chain' : 'Signalkette'}</p>
          <h2>{lang === 'en' ? 'Electrode to display' : 'Elektrode bis Anzeige'}</h2>
        </div>
        <div className="chain-rail">
          {(lang === 'en'
            ? ['Heart field', 'Electrode', 'Protection', 'Amplifier', 'Filters', 'ADC', 'Display']
            : ['Herzfeld', 'Elektrode', 'Schutz', 'Verstaerker', 'Filter', 'ADC', 'Anzeige']
          ).map((step, index) => (
            <div key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <div className="closeup-grid">
        {closeups.map((item) => (
          <article key={item.title}>
            <div className="closeup-visual" />
            <p className="label">{item.kicker}</p>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>

      <section className="mini-report">
        <div>
          <p className="label">{lang === 'en' ? 'Mini report' : 'Mini-Bericht'}</p>
          <h2>{lang === 'en' ? 'What the demo analysis would report' : 'Was die Demo-Analyse melden wuerde'}</h2>
        </div>
        <div className="report-metrics">
          {(lang === 'en'
            ? [
                ['Heart rate', '72 bpm'],
                ['Detected R peaks', '12 / window'],
                ['Signal quality', 'Stable after filtering'],
                ['Processing used', 'Baseline + notch + bandpass'],
              ]
            : [
                ['Herzfrequenz', '72 bpm'],
                ['Erkannte R-Zacken', '12 / Fenster'],
                ['Signalqualitaet', 'Stabil nach Filterung'],
                ['Verarbeitung', 'Basislinie + Kerbe + Bandpass'],
              ]
          ).map(([label, value]) => (
            <article key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}

function getCardPreview(model: string, lang: Lang) {
  const previews: Record<string, { icon: typeof Activity; value: string; label: string }> = {
    ecg: { icon: Activity, value: '72 bpm', label: lang === 'en' ? 'heart-rate demo' : 'Herzfrequenz-Demo' },
    ct: { icon: Image, value: '128 slices', label: lang === 'en' ? 'image stack' : 'Bildstapel' },
    ultrasound: { icon: Stethoscope, value: '5 MHz', label: lang === 'en' ? 'probe frequency' : 'Sondenfrequenz' },
    xray: { icon: Zap, value: '70 kVp', label: lang === 'en' ? 'exposure demo' : 'Belichtungsdemo' },
    mri: { icon: CircuitBoard, value: 'RF coil', label: lang === 'en' ? 'resonance focus' : 'Resonanzfokus' },
    pump: { icon: Gauge, value: '24 ml/h', label: lang === 'en' ? 'flow simulation' : 'Flow-Simulation' },
    ventilator: { icon: Gauge, value: 'PEEP 5', label: lang === 'en' ? 'pressure control' : 'Druckregelung' },
    defib: { icon: Zap, value: '150 J', label: lang === 'en' ? 'energy storage' : 'Energiespeicher' },
    dialysis: { icon: Activity, value: '250 ml/min', label: lang === 'en' ? 'blood-flow demo' : 'Blutfluss-Demo' },
    endoscope: { icon: Image, value: 'HD sensor', label: lang === 'en' ? 'optical chain' : 'Optikkette' },
  };

  return previews[model] || { icon: Box, value: 'GET', label: lang === 'en' ? 'study link' : 'Studienbezug' };
}

function getProcessingExplanation(model: string, lang: Lang) {
  const ecg =
    lang === 'en'
      ? {
          problem: 'The raw ECG contains baseline drift from movement and breathing, high-frequency muscle noise, and 50 Hz mains interference. If these artifacts stay in the signal, R-peak detection and heart-rate estimation become unreliable.',
          steps: [
            'Baseline correction removes slow movement of the whole waveform.',
            'Bandpass filtering keeps the ECG band while reducing very slow drift and high-frequency noise.',
            'A 50 Hz notch filter reduces power-line interference from the electrical environment.',
            'R-peak detection identifies the dominant heartbeat peaks and estimates heart rate.',
          ],
          tradeoff: 'The filtered ECG is easier to read and analyze, but overly aggressive cutoff frequencies can change QRS shape, ST segments, timing, and amplitude. The engineering goal is not a pretty curve; it is a reliable signal that still preserves medically meaningful information.',
        }
      : {
          problem: 'Das rohe EKG enthaelt Basisliniendrift durch Bewegung und Atmung, hochfrequentes Muskelrauschen und 50-Hz-Netzstoerung. Bleiben diese Artefakte im Signal, werden R-Zacken-Erkennung und Herzfrequenzschaetzung unzuverlaessig.',
          steps: [
            'Basislinienkorrektur entfernt langsame Verschiebungen der gesamten Kurve.',
            'Bandpassfilterung behaelt das EKG-Band und reduziert sehr langsame Drift sowie hochfrequentes Rauschen.',
            'Ein 50-Hz-Kerbfilter reduziert Netzstoerung aus der elektrischen Umgebung.',
            'R-Zacken-Erkennung identifiziert die dominanten Herzschlagspitzen und schaetzt die Herzfrequenz.',
          ],
          tradeoff: 'Das gefilterte EKG ist leichter lesbar und analysierbar, aber zu aggressive Grenzfrequenzen koennen QRS-Form, ST-Strecken, Timing und Amplitude veraendern. Das Ziel ist keine schoene Kurve, sondern ein verlaessliches Signal, das medizinisch sinnvolle Information erhaelt.',
        };

  const imaging =
    lang === 'en'
      ? {
          problem: 'The original measurement has limited contrast, noise, blur, or artifacts, so relevant structures can be difficult to distinguish.',
          steps: [
            'Contrast mapping expands the useful intensity range.',
            'Noise-aware smoothing reduces random variation while trying to preserve edges.',
            'Sharpening or reconstruction kernels increase boundary visibility.',
            'Windowing maps the data range to the display range for the chosen anatomy or material.',
          ],
          tradeoff: 'Image enhancement improves readability, but too much sharpening can create false edges and too much smoothing can remove small details. The result must support interpretation without inventing information.',
        }
      : {
          problem: 'Die urspruengliche Messung hat begrenzten Kontrast, Rauschen, Unschaerfe oder Artefakte, sodass relevante Strukturen schwer unterscheidbar sind.',
          steps: [
            'Kontrastabbildung erweitert den nutzbaren Intensitaetsbereich.',
            'Rauschbewusste Glaettung reduziert zufaellige Schwankungen und versucht Kanten zu erhalten.',
            'Schaerfung oder Rekonstruktionskerne erhoehen die Sichtbarkeit von Grenzen.',
            'Fensterung bildet den Datenbereich auf den Anzeigebereich fuer die gewaehlte Anatomie oder das Material ab.',
          ],
          tradeoff: 'Bildverbesserung erhoeht die Lesbarkeit, aber zu viel Schaerfung kann falsche Kanten erzeugen und zu viel Glaettung kleine Details entfernen. Das Ergebnis muss Interpretation unterstuetzen, ohne Information zu erfinden.',
        };

  if (model === 'ecg') {
    return ecg;
  }
  if (['ct', 'xray', 'mri', 'ultrasound', 'endoscope'].includes(model)) {
    return imaging;
  }
  return lang === 'en'
    ? {
        problem: 'Raw device data often contains sensor noise, drift, calibration error, and transient behavior from motors, pumps, valves, or patient movement.',
        steps: [
          'Calibration maps sensor voltage to a physical value.',
          'Trend filtering separates meaningful change from random noise.',
          'Threshold logic identifies unsafe values and possible sensor faults.',
          'Control software updates the actuator or alarm state.',
        ],
        tradeoff: 'Filtering and control make the device more stable, but too much delay can hide dangerous events. The design balance is stability, responsiveness, and safety.',
      }
    : {
        problem: 'Rohe Geraetedaten enthalten oft Sensorrauschen, Drift, Kalibrierfehler und Einschwingverhalten von Motoren, Pumpen, Ventilen oder Patientenbewegung.',
        steps: [
          'Kalibrierung bildet Sensorspannung auf eine physikalische Groesse ab.',
          'Trendfilterung trennt sinnvolle Aenderung von zufaelligem Rauschen.',
          'Schwellwertlogik erkennt unsichere Werte und moegliche Sensorfehler.',
          'Steuersoftware aktualisiert Aktor- oder Alarmzustand.',
        ],
        tradeoff: 'Filterung und Regelung machen das Geraet stabiler, aber zu viel Verzoegerung kann gefaehrliche Ereignisse verdecken. Die Auslegung balanciert Stabilitaet, Reaktionsgeschwindigkeit und Sicherheit.',
      };
}

function getElectroConcepts(model: string, lang: Lang) {
  const common =
    lang === 'en'
      ? [
          {
            title: 'Kirchhoff, impedance, and loading',
            relation: 'Every sensor is connected to a circuit, so the measurement changes if the input impedance is wrong.',
            detail:
              'Model the source with an internal resistance or impedance, then ask what the amplifier, cable capacitance, protection resistors, and filters do to the measured voltage. This is GET 1 material in a medical setting: voltage division, node equations, equivalent circuits, and the difference between an ideal voltage and a real source.',
          },
          {
            title: 'Frequency response and time constants',
            relation: 'The useful signal is selected by RC/RL behavior, not by magic software.',
            detail:
              'A capacitor blocks DC after the transient, an inductor resists current change, and RC filters create cutoff frequencies, phase shift, rise time, settling, and delay. In devices, the wrong cutoff can hide slow physiology, smear fast events, or pass mains interference.',
          },
          {
            title: 'Safety, isolation, and energy',
            relation: 'Patient-connected devices are electrical systems with strict limits on current and stored energy.',
            detail:
              'Think in terms of leakage current paths, isolation barriers, fuses, protective earth, creepage distance, transformer isolation, capacitor discharge, and worst-case fault loops. GET energy formulas such as 1/2 C U^2 and 1/2 L I^2 become safety questions, not just exercises.',
          },
        ]
      : [
          {
            title: 'Kirchhoff, Impedanz und Messbelastung',
            relation: 'Jeder Sensor haengt an einer Schaltung; die Messung veraendert sich, wenn die Eingangsimpedanz falsch ist.',
            detail:
              'Modelliere die Quelle mit Innenwiderstand oder Impedanz und frage dann, was Verstaerker, Kabelkapazitaet, Schutzwiderstaende und Filter mit der gemessenen Spannung machen. Das ist GET 1 im MedTech-Kontext: Spannungsteiler, Knotengleichungen, Ersatzschaltungen und der Unterschied zwischen idealer Spannung und realer Quelle.',
          },
          {
            title: 'Frequenzgang und Zeitkonstanten',
            relation: 'Das Nutzsignal wird durch RC/RL-Verhalten ausgewaehlt, nicht durch Magie in Software.',
            detail:
              'Ein Kondensator sperrt Gleichanteile nach dem Einschwingen, eine Induktivitaet widersetzt sich Stroemaenderungen, und RC-Filter erzeugen Grenzfrequenz, Phasenverschiebung, Anstiegszeit, Einschwingen und Verzoegerung. Im Geraet kann eine falsche Grenzfrequenz langsame Physiologie verstecken, schnelle Ereignisse verschmieren oder Netzstoerung durchlassen.',
          },
          {
            title: 'Sicherheit, Isolation und Energie',
            relation: 'Patientennahe Geraete sind elektrische Systeme mit engen Grenzen fuer Strom und gespeicherte Energie.',
            detail:
              'Denke an Ableitstrompfade, Isolationsbarrieren, Sicherungen, Schutzleiter, Kriechstrecken, Trafo-Isolation, Kondensatorentladung und Fehlerstromschleifen. GET-Energieformeln wie 1/2 C U^2 und 1/2 L I^2 werden hier Sicherheitsfragen, nicht nur Rechenaufgaben.',
          },
        ];

  const specific: Record<string, typeof common> =
    lang === 'en'
      ? {
          ecg: [
            {
              title: 'Differential measurement and CMRR',
              relation: 'The ECG is a tiny differential voltage riding on much larger common-mode interference.',
              detail:
                'Use superposition thinking: the amplifier should amplify the electrode difference while rejecting the voltage that both electrodes share. Input bias current, electrode impedance mismatch, cable capacitance, and driven-right-leg feedback decide whether 50 Hz noise dominates the trace.',
            },
            {
              title: 'ADC resolution and aliasing',
              relation: 'Sampling turns an analog waveform into numbers, but the ADC can only preserve what the analog front end prepares.',
              detail:
                'Resolution sets the smallest voltage step; sampling rate sets the highest reconstructable frequency. Before the ADC, anti-alias filtering must remove components that would fold into the ECG band. This links directly to quantization, reference voltage, Nyquist frequency, and SNR.',
            },
          ],
          ct: [
            {
              title: 'High voltage, rectification, and regulation',
              relation: 'The X-ray tube is a controlled high-voltage load.',
              detail:
                'The generator converts mains or DC bus energy into regulated kV and tube current using rectifiers, switching stages, transformers, insulation, feedback, and heat limits. kVp is voltage and penetration; mA is charge flow and photon statistics.',
            },
            {
              title: 'Detector current and noise',
              relation: 'The detector is a measurement chain for very small photo-generated signals.',
              detail:
                'Photodiode current, integration capacitors, dark current, shot noise, amplifier noise, multiplexing, and ADC timing determine whether attenuation data are stable enough for reconstruction. This is measurement electronics plus statistics.',
            },
          ],
          ultrasound: [
            {
              title: 'Piezoelectric source and receiver',
              relation: 'The probe converts electrical field energy into acoustic energy and back.',
              detail:
                'A voltage pulse strains the crystal; returning pressure produces charge. Capacitance, resonance, damping, matching layers, transmit/receive switching, and low-noise amplification decide bandwidth and image quality.',
            },
            {
              title: 'Time of flight and beamforming',
              relation: 'Depth is calculated from delay; direction is shaped by phase timing.',
              detail:
                'The system delays channels so echoes from one direction add constructively. GET concepts appear as phase, propagation speed, superposition, impedance matching, and frequency-dependent attenuation.',
            },
          ],
          mri: [
            {
              title: 'Magnetic fields and inductors',
              relation: 'MRI is built around field strength, coil current, and stored magnetic energy.',
              detail:
                'The main magnet, gradient coils, and RF coils are electromagnetic systems. Inductance resists fast current changes, so gradient drivers need high voltage, controlled current ramps, cooling, and protection against stored energy.',
            },
            {
              title: 'RF resonance and signal pickup',
              relation: 'The RF coil is a tuned circuit that excites and receives weak radio-frequency signals.',
              detail:
                'Capacitance and inductance set resonance. Matching, Q factor, shielding, preamplifier noise, and induced voltage are the GET bridge between circuit theory and the measured MR signal.',
            },
          ],
          xray: [
            {
              title: 'Tube physics as a circuit load',
              relation: 'Voltage accelerates electrons; current controls how many electrons hit the anode.',
              detail:
                'The filament, cathode, anode, high-voltage insulation, rectification, and exposure control form a power circuit. Heat, duty cycle, and stored capacitance are central engineering limits.',
            },
            {
              title: 'Detector and contrast chain',
              relation: 'The image begins as charge or current before it becomes a picture.',
              detail:
                'Scintillators, photodiodes, charge integration, gain calibration, ADCs, and spatial filtering turn X-ray intensity into pixels. Noise and dynamic range explain why exposure and processing matter.',
            },
          ],
        }
      : {
          ecg: [
            {
              title: 'Differenzmessung und CMRR',
              relation: 'Das EKG ist eine sehr kleine Differenzspannung auf einer viel groesseren Gleichtaktstoerung.',
              detail:
                'Nutze Superposition: Der Verstaerker soll die Differenz der Elektroden verstaerken und die gemeinsame Spannung beider Elektroden unterdruecken. Biasstrom, Elektrodenimpedanz, Kabelkapazitaet und Driven-Right-Leg-Rueckkopplung entscheiden, ob 50-Hz-Stoerung die Kurve dominiert.',
            },
            {
              title: 'ADC-Aufloesung und Aliasing',
              relation: 'Abtastung macht aus einer analogen Kurve Zahlen, aber der ADC erhaelt nur, was die Analogstufe vorbereitet.',
              detail:
                'Aufloesung bestimmt den kleinsten Spannungsschritt; Abtastrate bestimmt die hoechste rekonstruierbare Frequenz. Vor dem ADC muss ein Anti-Alias-Filter Anteile entfernen, die in das EKG-Band zurueckgefaltet wuerden. Das verbindet Quantisierung, Referenzspannung, Nyquist-Frequenz und SNR.',
            },
          ],
          ct: [
            {
              title: 'Hochspannung, Gleichrichtung und Regelung',
              relation: 'Die Roentgenroehre ist eine geregelte Hochspannungslast.',
              detail:
                'Der Generator wandelt Netz- oder Zwischenkreisenergie ueber Gleichrichter, Schaltstufen, Transformatoren, Isolation, Rueckkopplung und Waermegrenzen in geregelte kV und Roehrenstrom. kVp bedeutet Spannung und Durchdringung; mA bedeutet Ladungsfluss und Photonenstatistik.',
            },
            {
              title: 'Detektorstrom und Rauschen',
              relation: 'Der Detektor ist eine Messkette fuer sehr kleine photoerzeugte Signale.',
              detail:
                'Photodiodenstrom, Integrationskondensatoren, Dunkelstrom, Schrotrauschen, Verstaerkerrauschen, Multiplexing und ADC-Timing bestimmen, ob Abschwaechungsdaten stabil genug fuer Rekonstruktion sind. Das ist Messelektronik plus Statistik.',
            },
          ],
          ultrasound: [
            {
              title: 'Piezoquelle und Empfaenger',
              relation: 'Die Sonde wandelt elektrische Feldenergie in akustische Energie und zurueck.',
              detail:
                'Ein Spannungspuls verformt den Kristall; zurueckkehrender Druck erzeugt Ladung. Kapazitaet, Resonanz, Daempfung, Anpassschichten, Sende-/Empfangsumschaltung und rauscharme Verstaerkung bestimmen Bandbreite und Bildqualitaet.',
            },
            {
              title: 'Laufzeit und Beamforming',
              relation: 'Tiefe entsteht aus Verzoegerung; Richtung entsteht aus Phasen-Timing.',
              detail:
                'Das System verzoegert Kanaele so, dass Echos aus einer Richtung konstruktiv addiert werden. GET-Begriffe erscheinen als Phase, Ausbreitungsgeschwindigkeit, Superposition, Impedanzanpassung und frequenzabhaengige Daempfung.',
            },
          ],
          mri: [
            {
              title: 'Magnetfelder und Induktivitaeten',
              relation: 'MRT basiert auf Feldstaerke, Spulenstrom und gespeicherter magnetischer Energie.',
              detail:
                'Hauptmagnet, Gradientenspulen und HF-Spulen sind elektromagnetische Systeme. Induktivitaet widersetzt sich schneller Stroemaenderung; deshalb brauchen Gradiententreiber hohe Spannung, geregelte Stromrampen, Kuehlung und Schutz gegen gespeicherte Energie.',
            },
            {
              title: 'HF-Resonanz und Signalaufnahme',
              relation: 'Die HF-Spule ist ein abgestimmter Kreis, der schwache Hochfrequenzsignale anregt und empfaengt.',
              detail:
                'Kapazitaet und Induktivitaet setzen die Resonanz. Anpassung, Guete, Schirmung, Vorverstaerkerrauschen und induzierte Spannung verbinden Schaltungstheorie mit dem gemessenen MR-Signal.',
            },
          ],
          xray: [
            {
              title: 'Roentgenroehre als Schaltungslast',
              relation: 'Spannung beschleunigt Elektronen; Strom bestimmt, wie viele Elektronen die Anode treffen.',
              detail:
                'Filament, Kathode, Anode, Hochspannungsisolation, Gleichrichtung und Belichtungssteuerung bilden eine Leistungsschaltung. Waerme, Einschaltdauer und gespeicherte Kapazitaet sind zentrale Grenzen.',
            },
            {
              title: 'Detektor- und Kontrastkette',
              relation: 'Das Bild beginnt als Ladung oder Strom, bevor es ein Bild wird.',
              detail:
                'Szintillatoren, Photodioden, Ladungsintegration, Gain-Kalibrierung, ADCs und raeumliche Filter machen aus Roentgenintensitaet Pixel. Rauschen und Dynamikbereich erklaeren, warum Belichtung und Verarbeitung wichtig sind.',
            },
          ],
        };

  const fallback =
    lang === 'en'
      ? [
          {
            title: 'Sensors, actuators, and control loops',
            relation: 'Therapy devices often combine measurement with action.',
            detail:
              'A sensor measures pressure, flow, position, current, or voltage; a controller compares it to a target; a motor, valve, pump, or switch changes the physical system. That is feedback: stability, delay, gain, saturation, and fault detection.',
          },
          {
            title: 'Motors and power stages',
            relation: 'Motion and pumping come from electromagnetic energy conversion.',
            detail:
              'Motor torque, back EMF, PWM, bridge circuits, current sensing, inductive flyback, and thermal limits turn GET field and circuit ideas into practical device mechanics.',
          },
        ]
      : [
          {
            title: 'Sensoren, Aktoren und Regelkreise',
            relation: 'Therapiegeraete kombinieren oft Messung mit Handlung.',
            detail:
              'Ein Sensor misst Druck, Flow, Position, Strom oder Spannung; ein Regler vergleicht mit einem Sollwert; Motor, Ventil, Pumpe oder Schalter veraendert das physikalische System. Das ist Rueckkopplung: Stabilitaet, Verzoegerung, Verstaerkung, Saettigung und Fehlererkennung.',
          },
          {
            title: 'Motoren und Leistungsstufen',
            relation: 'Bewegung und Pumpen entstehen aus elektromagnetischer Energiewandlung.',
            detail:
              'Motordrehmoment, Gegen-EMK, PWM, Brueckenschaltungen, Strommessung, induktiver Freilauf und thermische Grenzen machen aus GET-Feld- und Schaltungswissen praktische Geraetemechanik.',
          },
        ];

  return [...(specific[model] || fallback), ...common];
}
