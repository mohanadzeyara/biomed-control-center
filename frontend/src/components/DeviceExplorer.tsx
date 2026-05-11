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
  Play,
  Rotate3D,
  ShieldCheck,
  Stethoscope,
  Wrench,
  Zap,
} from 'lucide-react';
import DeviceModel from './DeviceModel';
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
  }, [device?.id]);

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

        <section className="homepage-demo">
          <div className="demo-copy">
            <p className="label">{lang === 'en' ? 'Project demo' : 'Projekt-Demo'}</p>
            <h2>{lang === 'en' ? 'How to use the platform' : 'So benutzt man die Plattform'}</h2>
            <p>
              {lang === 'en'
                ? 'Pick a device card, open its device profile, inspect the model, follow the short process clip, compare simulated before/after data, and connect the device to GET 1/2 electrotechnics.'
                : 'Waehle eine Geraetekarte, oeffne das Geraeteprofil, pruefe das Modell, folge dem kurzen Prozessclip, vergleiche simulierte Vorher/Nachher-Daten und verbinde das Geraet mit GET 1/2 Elektrotechnik.'}
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
            return (
            <a key={item.id} className="library-card" href={`#/device/${item.id}`}>
              <div className="card-topline">
                <span>{t(item.category, lang)}</span>
                <em>{index % 3 === 1 ? (lang === 'en' ? 'Study' : 'Studium') : lang === 'en' ? 'Active' : 'Aktiv'}</em>
              </div>
              <strong>{t(item.name, lang)}</strong>
              <small>{t(item.short, lang)}</small>
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
      label: lang === 'en' ? '3D model + explanation' : '3D-Modell + Erklaerung',
      short: lang === 'en' ? 'parts' : 'Teile',
    },
    {
      id: 'use',
      icon: <Film size={18} />,
      label: lang === 'en' ? 'Short use video' : 'Kurzes Bedienvideo',
      short: lang === 'en' ? 'use' : 'Bedienung',
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
                    <p className="label">{lang === 'en' ? 'Interactive professional teaching model' : 'Interaktives professionelles Lernmodell'}</p>
                    <h2>{t(device.name, lang)}</h2>
                  </div>
                  <Rotate3D size={24} />
                </div>
                <DeviceModel device={device} selectedPartId={selectedPart?.id || ''} onSelectPart={setSelectedPartId} />
                <p className="canvas-hint">
                  {lang === 'en'
                    ? 'Drag to rotate. Click a part or choose it from the list. The models are custom procedural 3D assets, so they stay free to use and deploy.'
                    : 'Ziehen zum Drehen. Teil anklicken oder aus der Liste waehlen. Die Modelle sind eigene prozedurale 3D-Assets und bleiben kostenlos nutzbar.'}
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
                <p className="label">{lang === 'en' ? 'Short use video' : 'Kurzes Bedienvideo'}</p>
                <h2>{t(device.demo.title, lang)}</h2>
              </div>
              <Film size={24} />
            </div>
            <div className={`clip-strip ${device.model}`}>
              {device.demo.clipSteps.map((step, index) => (
                <div className="clip-step" key={t(step, 'en')}>
                  <span>{index + 1}</span>
                  <strong>{t(step, lang)}</strong>
                </div>
              ))}
              <div className="moving-pulse" />
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

      {device.id === 'ecg' && <EcgPanel />}
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
        <div className="ecg-product">
          <div className="ecg-screen">
            <span>HR 72</span>
            <div className="ecg-wave" />
          </div>
          <div className="ecg-controls-visual">
            <i />
            <i />
            <i />
          </div>
          <div className="ecg-leads-visual">
            <b />
            <b />
            <b />
          </div>
        </div>
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
