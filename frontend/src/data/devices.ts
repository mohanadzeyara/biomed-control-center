export type Lang = 'en' | 'de';

export type Text = {
  en: string;
  de: string;
};

export type DevicePart = {
  id: string;
  name: Text;
  function: Text;
  details: Text;
  electrotechnics: Text;
};

export type DeviceDemo = {
  title: Text;
  beforeLabel: Text;
  afterLabel: Text;
  explanation: Text;
  filters: Text[];
  clipSteps: Text[];
};

export type LearningDevice = {
  id: string;
  name: Text;
  category: Text;
  short: Text;
  model: 'ecg' | 'ct' | 'ultrasound' | 'xray' | 'mri' | 'pump';
  overview: Text;
  workflow: Text[];
  parts: DevicePart[];
  demo: DeviceDemo;
};

export function t(text: Text, lang: Lang) {
  return text[lang];
}

export const learningDevices: LearningDevice[] = [
  {
    id: 'ecg',
    name: { en: 'ECG Monitor', de: 'EKG-Monitor' },
    category: { en: 'Bioelectric Signals', de: 'Bioelektrische Signale' },
    short: {
      en: 'Records heart electrical activity through electrodes, amplification, filtering, and display.',
      de: 'Misst elektrische Herzaktivitaet mit Elektroden, Verstaerkung, Filterung und Anzeige.',
    },
    model: 'ecg',
    overview: {
      en: 'An ECG monitor measures very small voltage differences on the skin. The interesting engineering part is the signal chain: electrode contact, protection, differential amplification, filtering, analog-to-digital conversion, and display.',
      de: 'Ein EKG-Monitor misst sehr kleine Spannungsunterschiede auf der Haut. Technisch spannend ist die Signalkette: Elektrodenkontakt, Schutzschaltung, Differenzverstaerkung, Filterung, Analog-Digital-Wandlung und Anzeige.',
    },
    workflow: [
      {
        en: 'Electrodes convert ionic body currents into measurable electronic potentials.',
        de: 'Elektroden wandeln ionische Koerperstroeme in messbare elektrische Potentiale um.',
      },
      {
        en: 'A protection stage limits dangerous currents and protects the amplifier input.',
        de: 'Eine Schutzstufe begrenzt gefaehrliche Stroeme und schuetzt den Verstaerkereingang.',
      },
      {
        en: 'An instrumentation amplifier boosts the differential signal while rejecting common-mode noise.',
        de: 'Ein Instrumentenverstaerker verstaerkt das Differenzsignal und unterdrueckt Gleichtaktstoerungen.',
      },
      {
        en: 'Filters reduce baseline drift, muscle noise, and mains interference before peak detection.',
        de: 'Filter reduzieren Basisliniendrift, Muskelrauschen und Netzstoerungen vor der Peak-Erkennung.',
      },
    ],
    parts: [
      {
        id: 'electrodes',
        name: { en: 'Electrodes', de: 'Elektroden' },
        function: { en: 'Pick up tiny bioelectric potentials from the skin.', de: 'Nehmen sehr kleine bioelektrische Potentiale von der Haut auf.' },
        details: { en: 'Bad electrode contact increases impedance and creates noise or baseline drift.', de: 'Schlechter Elektrodenkontakt erhoeht die Impedanz und erzeugt Rauschen oder Basisliniendrift.' },
        electrotechnics: { en: 'Think of the electrode-skin interface as a noisy high-impedance source with contact capacitance.', de: 'Die Elektroden-Haut-Stelle kann man als rauschende hochohmige Quelle mit Kontaktkapazitaet betrachten.' },
      },
      {
        id: 'leads',
        name: { en: 'Lead Cable', de: 'Ableitungskabel' },
        function: { en: 'Transfers the low-level signal to the monitor.', de: 'Uebertraegt das schwache Signal zum Monitor.' },
        details: { en: 'Cable motion can introduce artifacts, so shielding and strain relief matter.', de: 'Kabelbewegung kann Artefakte erzeugen, deshalb sind Schirmung und Zugentlastung wichtig.' },
        electrotechnics: { en: 'Twisted/shielded leads reduce electromagnetic pickup from mains and nearby devices.', de: 'Verdrillte oder geschirmte Leitungen reduzieren elektromagnetische Einkopplung von Netz und Geraeten.' },
      },
      {
        id: 'amplifier',
        name: { en: 'Instrumentation Amplifier', de: 'Instrumentenverstaerker' },
        function: { en: 'Amplifies the voltage difference between electrodes.', de: 'Verstaerkt die Spannungsdifferenz zwischen Elektroden.' },
        details: { en: 'High CMRR is needed because common-mode noise is often larger than the ECG itself.', de: 'Hohe Gleichtaktunterdrueckung ist wichtig, weil Stoerungen oft groesser sind als das EKG-Signal.' },
        electrotechnics: { en: 'Key concepts: differential gain, input impedance, CMRR, saturation, and patient isolation.', de: 'Wichtige Begriffe: Differenzverstaerkung, Eingangsimpedanz, CMRR, Saettigung und Patientenisolation.' },
      },
      {
        id: 'filter',
        name: { en: 'Filter Stage', de: 'Filterstufe' },
        function: { en: 'Reduces drift and noise without destroying useful waveform shape.', de: 'Reduziert Drift und Rauschen, ohne die Nutzform der Kurve zu zerstoeren.' },
        details: { en: 'Filters must be chosen carefully because over-filtering can change medically relevant shapes.', de: 'Filter muessen vorsichtig gewaehlt werden, weil zu starke Filter wichtige Kurvenformen veraendern koennen.' },
        electrotechnics: { en: 'This connects directly to RC filters, cutoff frequency, phase shift, and notch filtering.', de: 'Das passt direkt zu RC-Filtern, Grenzfrequenz, Phasenverschiebung und Kerbfiltern.' },
      },
      {
        id: 'adc',
        name: { en: 'ADC', de: 'ADC' },
        function: { en: 'Converts the analog ECG into digital samples.', de: 'Wandelt das analoge EKG in digitale Abtastwerte um.' },
        details: { en: 'Sampling rate and resolution decide how much signal detail is preserved.', de: 'Abtastrate und Aufloesung bestimmen, wie viele Signaldetails erhalten bleiben.' },
        electrotechnics: { en: 'Links to sampling theorem, quantization, aliasing, reference voltage, and ADC resolution.', de: 'Verbindung zu Abtasttheorem, Quantisierung, Aliasing, Referenzspannung und ADC-Aufloesung.' },
      },
      {
        id: 'screen',
        name: { en: 'Display', de: 'Anzeige' },
        function: { en: 'Shows waveform, heart-rate estimate, and educational warnings.', de: 'Zeigt Kurve, Herzfrequenzschaetzung und Lernhinweise an.' },
        details: { en: 'The display is the interface, not the measurement source.', de: 'Die Anzeige ist die Schnittstelle, nicht die Messquelle.' },
        electrotechnics: { en: 'Connects measurement electronics to software, UI design, and alarm logic.', de: 'Verbindet Messelektronik mit Software, Bedienoberflaeche und Alarmlogik.' },
      },
    ],
    demo: {
      title: { en: 'Noisy ECG filtering', de: 'EKG-Rauschfilterung' },
      beforeLabel: { en: 'Raw noisy ECG', de: 'Rohes verrauschtes EKG' },
      afterLabel: { en: 'Filtered ECG', de: 'Gefiltertes EKG' },
      explanation: {
        en: 'Filtering can make R peaks easier to find. The teaching point is the tradeoff: less noise, but possible waveform distortion if the filter is too aggressive.',
        de: 'Filterung kann R-Zacken leichter erkennbar machen. Der Lernpunkt ist der Kompromiss: weniger Rauschen, aber moegliche Signalverzerrung bei zu starker Filterung.',
      },
      filters: [
        { en: 'Baseline correction', de: 'Basislinienkorrektur' },
        { en: 'Notch filter', de: 'Kerbfilter' },
        { en: 'R-peak detection', de: 'R-Zacken-Erkennung' },
      ],
      clipSteps: [
        { en: 'Electrode senses voltage', de: 'Elektrode misst Spannung' },
        { en: 'Amplifier boosts signal', de: 'Verstaerker hebt Signal an' },
        { en: 'Filter removes noise', de: 'Filter entfernt Stoerungen' },
        { en: 'Screen shows ECG', de: 'Anzeige zeigt EKG' },
      ],
    },
  },
  {
    id: 'ct',
    name: { en: 'CT Scanner', de: 'CT-Scanner' },
    category: { en: 'Tomographic Imaging', de: 'Tomographische Bildgebung' },
    short: { en: 'Rotating X-ray source and detector ring reconstruct slice images.', de: 'Rotierende Roentgenquelle und Detektorring rekonstruieren Schnittbilder.' },
    model: 'ct',
    overview: {
      en: 'A CT scanner collects many X-ray projections from different angles. Reconstruction software calculates slice images from those projections.',
      de: 'Ein CT sammelt viele Roentgenprojektionen aus verschiedenen Winkeln. Rekonstruktionssoftware berechnet daraus Schnittbilder.',
    },
    workflow: [
      { en: 'The table positions the scanned object inside the gantry.', de: 'Der Tisch positioniert das Objekt in der Gantry.' },
      { en: 'The tube and detector array rotate around the object.', de: 'Roentgenroehre und Detektorarray rotieren um das Objekt.' },
      { en: 'Detector electronics convert radiation intensity into digital projection data.', de: 'Detektorelektronik wandelt Strahlungsintensitaet in digitale Projektionsdaten um.' },
      { en: 'Reconstruction and windowing turn the data into readable slices.', de: 'Rekonstruktion und Fensterung machen daraus lesbare Schnittbilder.' },
    ],
    parts: [
      { id: 'gantry', name: { en: 'Gantry', de: 'Gantry' }, function: { en: 'Holds the rotating imaging system.', de: 'Traegt das rotierende Bildgebungssystem.' }, details: { en: 'The large ring includes mechanics, tube, detector, cooling, and power paths.', de: 'Der Ring enthaelt Mechanik, Roehre, Detektor, Kuehlung und Leistungswege.' }, electrotechnics: { en: 'Slip rings transfer power and data to rotating electronics.', de: 'Schleifringe uebertragen Leistung und Daten auf rotierende Elektronik.' } },
      { id: 'tube', name: { en: 'X-ray Tube', de: 'Roentgenroehre' }, function: { en: 'Produces X-rays using high voltage.', de: 'Erzeugt Roentgenstrahlung mit Hochspannung.' }, details: { en: 'Tube voltage affects penetration; current affects photon quantity and noise.', de: 'Roehrenspannung beeinflusst Durchdringung; Strom beeinflusst Photonenmenge und Rauschen.' }, electrotechnics: { en: 'Links to high-voltage generation, power electronics, heat, and insulation.', de: 'Bezug zu Hochspannungserzeugung, Leistungselektronik, Waerme und Isolation.' } },
      { id: 'detectors', name: { en: 'Detector Array', de: 'Detektorarray' }, function: { en: 'Measures transmitted radiation.', de: 'Misst die durchgelassene Strahlung.' }, details: { en: 'Scintillators and photodiodes convert radiation into electrical signals.', de: 'Szintillatoren und Photodioden wandeln Strahlung in elektrische Signale um.' }, electrotechnics: { en: 'Photodiode current, amplification, ADCs, and noise are central concepts.', de: 'Photodiodenstrom, Verstaerkung, ADCs und Rauschen sind zentrale Konzepte.' } },
      { id: 'table', name: { en: 'Patient Table', de: 'Patiententisch' }, function: { en: 'Moves precisely through the scan plane.', de: 'Bewegt sich praezise durch die Scanebene.' }, details: { en: 'Motion accuracy affects slice position and scan coverage.', de: 'Bewegungsgenauigkeit beeinflusst Schichtposition und Scanbereich.' }, electrotechnics: { en: 'Uses motor control, encoders, limit switches, and safety interlocks.', de: 'Nutzt Motorregelung, Encoder, Endschalter und Sicherheitsverriegelungen.' } },
      { id: 'console', name: { en: 'Operator Console', de: 'Bedienkonsole' }, function: { en: 'Controls protocol and image review.', de: 'Steuert Protokoll und Bildanzeige.' }, details: { en: 'Operators choose acquisition settings and view reconstructed slices.', de: 'Bedienende waehlen Aufnahmeparameter und betrachten rekonstruierte Schichten.' }, electrotechnics: { en: 'Software coordinates timing, exposure control, and data transfer.', de: 'Software koordiniert Timing, Belichtungssteuerung und Datenuebertragung.' } },
    ],
    demo: {
      title: { en: 'CT reconstruction and windowing', de: 'CT-Rekonstruktion und Fensterung' },
      beforeLabel: { en: 'Low contrast slice', de: 'Kontrastarmes Schnittbild' },
      afterLabel: { en: 'Windowed slice', de: 'Gefenstertes Schnittbild' },
      explanation: { en: 'Windowing maps a useful intensity range into visible grayscale, making selected structures easier to see.', de: 'Fensterung bildet einen nuetzlichen Intensitaetsbereich auf sichtbare Graustufen ab.' },
      filters: [{ en: 'Reconstruction', de: 'Rekonstruktion' }, { en: 'Noise reduction', de: 'Rauschminderung' }, { en: 'Window/level', de: 'Fenster/Lage' }],
      clipSteps: [{ en: 'Tube rotates', de: 'Roehre rotiert' }, { en: 'Detector measures', de: 'Detektor misst' }, { en: 'Computer reconstructs', de: 'Computer rekonstruiert' }, { en: 'Image is windowed', de: 'Bild wird gefenstert' }],
    },
  },
  {
    id: 'ultrasound',
    name: { en: 'Ultrasound System', de: 'Ultraschallsystem' },
    category: { en: 'Acoustic Imaging', de: 'Akustische Bildgebung' },
    short: { en: 'Sends sound pulses and listens for echoes to build live images.', de: 'Sendet Schallimpulse und erzeugt aus Echos Live-Bilder.' },
    model: 'ultrasound',
    overview: { en: 'Ultrasound uses piezoelectric elements to send and receive high-frequency sound. Echo timing gives depth, and echo strength gives brightness.', de: 'Ultraschall nutzt piezoelektrische Elemente zum Senden und Empfangen von Hochfrequenzschall. Echozeit ergibt Tiefe, Echostaerke ergibt Helligkeit.' },
    workflow: [
      { en: 'A voltage pulse excites piezoelectric crystals.', de: 'Ein Spannungspuls regt piezoelektrische Kristalle an.' },
      { en: 'Sound travels into tissue and reflects at boundaries.', de: 'Schall laeuft ins Gewebe und reflektiert an Grenzflaechen.' },
      { en: 'Returned echoes are amplified and time-measured.', de: 'Rueckkehrende Echos werden verstaerkt und zeitlich gemessen.' },
      { en: 'Beamforming and filtering create the image.', de: 'Beamforming und Filterung erzeugen das Bild.' },
    ],
    parts: [
      { id: 'probe', name: { en: 'Probe Housing', de: 'Sondengehaeuse' }, function: { en: 'Holds the transducer array and is handled by the user.', de: 'Enthaelt das Wandlerarray und wird von der Person gefuehrt.' }, details: { en: 'Probe shape controls imaging access and field of view.', de: 'Sondenform beeinflusst Zugang und Sichtfeld.' }, electrotechnics: { en: 'Cable shielding and impedance matching matter at high frequencies.', de: 'Kabelschirmung und Impedanzanpassung sind bei hohen Frequenzen wichtig.' } },
      { id: 'crystals', name: { en: 'Piezo Elements', de: 'Piezoelemente' }, function: { en: 'Convert voltage into sound and returning sound into voltage.', de: 'Wandeln Spannung in Schall und Echo-Schall in Spannung um.' }, details: { en: 'The same element can transmit and receive.', de: 'Dasselbe Element kann senden und empfangen.' }, electrotechnics: { en: 'A piezo element behaves like an electromechanical resonator with capacitance.', de: 'Ein Piezoelement verhaelt sich wie ein elektromechanischer Resonator mit Kapazitaet.' } },
      { id: 'beam', name: { en: 'Ultrasound Beam', de: 'Ultraschallstrahl' }, function: { en: 'Carries acoustic energy into the tissue.', de: 'Transportiert akustische Energie ins Gewebe.' }, details: { en: 'Focusing changes resolution and penetration.', de: 'Fokussierung veraendert Aufloesung und Eindringtiefe.' }, electrotechnics: { en: 'Beam steering uses phase delays between array elements.', de: 'Strahllenkung nutzt Phasenverzoegerungen zwischen Array-Elementen.' } },
      { id: 'console', name: { en: 'Console Electronics', de: 'Konsolenelektronik' }, function: { en: 'Controls transmit pulses, receive gain, and processing.', de: 'Steuert Sendepulse, Empfangsverstaerkung und Verarbeitung.' }, details: { en: 'Gain, depth, focus, and dynamic range change the displayed image.', de: 'Gain, Tiefe, Fokus und Dynamikbereich veraendern das Bild.' }, electrotechnics: { en: 'Needs pulser circuits, low-noise amplifiers, ADCs, and digital beamforming.', de: 'Braucht Pulser-Schaltungen, rauscharme Verstaerker, ADCs und digitales Beamforming.' } },
      { id: 'screen', name: { en: 'Image Display', de: 'Bildanzeige' }, function: { en: 'Shows B-mode, M-mode, or Doppler information.', de: 'Zeigt B-Mode, M-Mode oder Dopplerinformationen.' }, details: { en: 'The image is a processed map of echoes, not a photo.', de: 'Das Bild ist eine verarbeitete Echokarte, kein Foto.' }, electrotechnics: { en: 'Display pipeline includes frame memory, image mapping, and UI controls.', de: 'Die Anzeige nutzt Bildspeicher, Bildabbildung und UI-Steuerung.' } },
    ],
    demo: {
      title: { en: 'Speckle reduction', de: 'Speckle-Reduktion' },
      beforeLabel: { en: 'Speckled image', de: 'Speckle-Bild' },
      afterLabel: { en: 'Smoothed image', de: 'Geglaettetes Bild' },
      explanation: { en: 'Filtering can reduce speckle and improve readability, but too much smoothing hides small structures.', de: 'Filterung kann Speckle reduzieren, aber zu starke Glaettung verdeckt kleine Strukturen.' },
      filters: [{ en: 'Gain correction', de: 'Gain-Korrektur' }, { en: 'Speckle smoothing', de: 'Speckle-Glaettung' }, { en: 'Edge preserving', de: 'Kantenerhalt' }],
      clipSteps: [{ en: 'Pulse sent', de: 'Puls gesendet' }, { en: 'Echo returns', de: 'Echo kommt zurueck' }, { en: 'Signal amplified', de: 'Signal verstaerkt' }, { en: 'Image formed', de: 'Bild entsteht' }],
    },
  },
  {
    id: 'xray',
    name: { en: 'X-ray System', de: 'Roentgensystem' },
    category: { en: 'Projection Imaging', de: 'Projektionsbildgebung' },
    short: { en: 'Projects X-rays through an object onto a digital detector.', de: 'Projiziert Roentgenstrahlung durch ein Objekt auf einen digitalen Detektor.' },
    model: 'xray',
    overview: { en: 'X-ray imaging creates a 2D projection. Dense material absorbs more radiation and changes detector intensity.', de: 'Roentgenbildgebung erzeugt eine 2D-Projektion. Dichtes Material absorbiert mehr Strahlung und veraendert die Detektorintensitaet.' },
    workflow: [
      { en: 'High voltage accelerates electrons in the tube.', de: 'Hochspannung beschleunigt Elektronen in der Roehre.' },
      { en: 'The anode converts electron energy into X-rays and heat.', de: 'Die Anode wandelt Elektronenenergie in Roentgenstrahlung und Waerme um.' },
      { en: 'The collimator shapes the beam.', de: 'Der Kollimator formt den Strahl.' },
      { en: 'The detector converts radiation into pixel data.', de: 'Der Detektor wandelt Strahlung in Pixeldaten um.' },
    ],
    parts: [
      { id: 'cathode', name: { en: 'Cathode', de: 'Kathode' }, function: { en: 'Emits electrons by heating a filament.', de: 'Emittiert Elektronen durch Erhitzen eines Filaments.' }, details: { en: 'Tube current depends strongly on electron emission.', de: 'Der Roehrenstrom haengt stark von der Elektronenemission ab.' }, electrotechnics: { en: 'Links to thermionic emission, filament current, and high-voltage safety.', de: 'Bezug zu Gluemission, Heizstrom und Hochspannungssicherheit.' } },
      { id: 'anode', name: { en: 'Anode', de: 'Anode' }, function: { en: 'Target hit by electrons to generate X-rays.', de: 'Ziel, auf das Elektronen treffen und Roentgenstrahlung erzeugen.' }, details: { en: 'Most energy becomes heat, so cooling is important.', de: 'Der groesste Teil wird Waerme, daher ist Kuehlung wichtig.' }, electrotechnics: { en: 'Power, heat load, and insulation are major engineering issues.', de: 'Leistung, Waermelast und Isolation sind wichtige technische Themen.' } },
      { id: 'collimator', name: { en: 'Collimator', de: 'Kollimator' }, function: { en: 'Limits the beam area.', de: 'Begrenzt die Strahlflaeche.' }, details: { en: 'Good collimation reduces scatter and unnecessary exposure.', de: 'Gute Kollimation reduziert Streustrahlung und unnoetige Exposition.' }, electrotechnics: { en: 'Motorized shutters use position sensing and interlocks.', de: 'Motorisierte Blenden nutzen Positionssensoren und Verriegelungen.' } },
      { id: 'detector', name: { en: 'Detector Panel', de: 'Detektorplatte' }, function: { en: 'Captures the X-ray projection.', de: 'Erfasst die Roentgenprojektion.' }, details: { en: 'Digital detectors use scintillators or direct conversion layers.', de: 'Digitale Detektoren nutzen Szintillatoren oder direkte Wandlerschichten.' }, electrotechnics: { en: 'Pixel electronics, charge readout, ADCs, and calibration are key topics.', de: 'Pixelelektronik, Ladungsauslese, ADCs und Kalibrierung sind zentrale Themen.' } },
      { id: 'grid', name: { en: 'Anti-scatter Grid', de: 'Streustrahlenraster' }, function: { en: 'Reduces scattered radiation before the detector.', de: 'Reduziert Streustrahlung vor dem Detektor.' }, details: { en: 'Improves contrast but can require higher exposure.', de: 'Verbessert Kontrast, kann aber hoehere Exposition benoetigen.' }, electrotechnics: { en: 'Shows the tradeoff between signal strength, noise, and contrast.', de: 'Zeigt den Kompromiss zwischen Signalstaerke, Rauschen und Kontrast.' } },
    ],
    demo: {
      title: { en: 'Contrast enhancement', de: 'Kontrastverstaerkung' },
      beforeLabel: { en: 'Flat contrast', de: 'Flacher Kontrast' },
      afterLabel: { en: 'Enhanced contrast', de: 'Verbesserter Kontrast' },
      explanation: { en: 'Contrast stretching spreads useful gray values across the display range.', de: 'Kontraststreckung verteilt nuetzliche Grauwerte ueber den Anzeigebereich.' },
      filters: [{ en: 'Contrast stretch', de: 'Kontraststreckung' }, { en: 'Sharpening', de: 'Schaerfung' }, { en: 'Noise-aware smoothing', de: 'Rauschbewusste Glaettung' }],
      clipSteps: [{ en: 'Tube emits X-rays', de: 'Roehre sendet Strahlung' }, { en: 'Body attenuates beam', de: 'Objekt schwaecht Strahl ab' }, { en: 'Detector captures pixels', de: 'Detektor erfasst Pixel' }, { en: 'Contrast is enhanced', de: 'Kontrast wird verbessert' }],
    },
  },
  {
    id: 'mri',
    name: { en: 'MRI Scanner', de: 'MRT-Scanner' },
    category: { en: 'Magnetic Resonance', de: 'Magnetresonanz' },
    short: { en: 'Uses magnets, gradients, and RF coils to form tissue-contrast images.', de: 'Nutzt Magnet, Gradienten und HF-Spulen fuer kontrastreiche Bilder.' },
    model: 'mri',
    overview: { en: 'MRI uses a strong magnetic field, RF pulses, and gradient fields to encode signals from hydrogen nuclei.', de: 'MRT nutzt ein starkes Magnetfeld, HF-Pulse und Gradientenfelder, um Signale von Wasserstoffkernen zu codieren.' },
    workflow: [
      { en: 'Main magnet aligns spins.', de: 'Hauptmagnet richtet Spins aus.' },
      { en: 'RF coil excites and receives signals.', de: 'HF-Spule regt an und empfaengt Signale.' },
      { en: 'Gradient coils encode position.', de: 'Gradientenspulen codieren Position.' },
      { en: 'Computer reconstructs contrast images.', de: 'Computer rekonstruiert Kontrastbilder.' },
    ],
    parts: [
      { id: 'bore', name: { en: 'Magnet Bore', de: 'Magnetoeffnung' }, function: { en: 'Contains the strong main magnetic field.', de: 'Enthaelt das starke Hauptmagnetfeld.' }, details: { en: 'Homogeneity affects image quality.', de: 'Homogenitaet beeinflusst die Bildqualitaet.' }, electrotechnics: { en: 'Superconducting magnets, cryogenics, and shielding are core ideas.', de: 'Supraleitende Magnete, Kryotechnik und Abschirmung sind Kernideen.' } },
      { id: 'rfcoil', name: { en: 'RF Coil', de: 'HF-Spule' }, function: { en: 'Transmits and receives radio-frequency signals.', de: 'Sendet und empfaengt Hochfrequenzsignale.' }, details: { en: 'Coil position affects sensitivity.', de: 'Spulenposition beeinflusst Empfindlichkeit.' }, electrotechnics: { en: 'Resonance, impedance matching, and low-noise reception are important.', de: 'Resonanz, Impedanzanpassung und rauscharmer Empfang sind wichtig.' } },
      { id: 'gradients', name: { en: 'Gradient Coils', de: 'Gradientenspulen' }, function: { en: 'Encode spatial position.', de: 'Codieren raeumliche Position.' }, details: { en: 'Rapid switching causes acoustic noise and heating.', de: 'Schnelles Schalten erzeugt Geraeusche und Waerme.' }, electrotechnics: { en: 'High-current drivers, inductance, and switching transients matter.', de: 'Hochstromtreiber, Induktivitaet und Schalttransienten sind wichtig.' } },
      { id: 'table', name: { en: 'Patient Table', de: 'Patiententisch' }, function: { en: 'Positions the scanned object.', de: 'Positioniert das Untersuchungsobjekt.' }, details: { en: 'Accurate positioning improves coverage.', de: 'Genaue Positionierung verbessert die Abdeckung.' }, electrotechnics: { en: 'Motor control and safety interlocks protect motion.', de: 'Motorsteuerung und Sicherheitsverriegelungen schuetzen die Bewegung.' } },
    ],
    demo: {
      title: { en: 'Tissue contrast selection', de: 'Gewebekontrast-Auswahl' },
      beforeLabel: { en: 'Low contrast', de: 'Niedriger Kontrast' },
      afterLabel: { en: 'T2-like contrast', de: 'T2-aehnlicher Kontrast' },
      explanation: { en: 'Different sequences emphasize different tissue properties.', de: 'Verschiedene Sequenzen betonen verschiedene Gewebeeigenschaften.' },
      filters: [{ en: 'Intensity mapping', de: 'Intensitaetsabbildung' }, { en: 'Noise reduction', de: 'Rauschminderung' }, { en: 'Contrast preset', de: 'Kontrastpreset' }],
      clipSteps: [{ en: 'Magnet aligns spins', de: 'Magnet richtet Spins aus' }, { en: 'RF pulse excites', de: 'HF-Puls regt an' }, { en: 'Signal decays', de: 'Signal klingt ab' }, { en: 'Image reconstructed', de: 'Bild rekonstruiert' }],
    },
  },
  {
    id: 'pump',
    name: { en: 'Infusion Pump', de: 'Infusionspumpe' },
    category: { en: 'Therapy Device', de: 'Therapiegeraet' },
    short: { en: 'Controls fluid delivery with motor drive, sensors, alarms, and software.', de: 'Steuert Fluessigkeitsabgabe mit Motor, Sensoren, Alarmen und Software.' },
    model: 'pump',
    overview: { en: 'An infusion pump is a control system. It compares target delivery with sensor feedback and reacts to pressure, battery, door, and line problems.', de: 'Eine Infusionspumpe ist ein Regelsystem. Sie vergleicht Zielabgabe mit Sensorfeedback und reagiert auf Druck, Akku, Tuer und Leitungsprobleme.' },
    workflow: [
      { en: 'User sets rate and volume.', de: 'Nutzer stellt Rate und Volumen ein.' },
      { en: 'Motor moves the pump mechanism.', de: 'Motor bewegt den Pumpmechanismus.' },
      { en: 'Pressure and door sensors check safety.', de: 'Druck- und Tuersensoren pruefen Sicherheit.' },
      { en: 'Controller triggers alarms when limits are exceeded.', de: 'Controller loest Alarme bei Grenzwertueberschreitung aus.' },
    ],
    parts: [
      { id: 'screen', name: { en: 'Display/UI', de: 'Anzeige/UI' }, function: { en: 'Shows rate, volume, battery, and alarms.', de: 'Zeigt Rate, Volumen, Akku und Alarme.' }, details: { en: 'Good UI reduces setup mistakes.', de: 'Gute UI reduziert Einstellfehler.' }, electrotechnics: { en: 'Links embedded systems to human-machine interface design.', de: 'Verbindet Embedded Systems mit Mensch-Maschine-Schnittstellen.' } },
      { id: 'cassette', name: { en: 'Cassette Path', de: 'Kassettenpfad' }, function: { en: 'Guides the fluid tube through the pump.', de: 'Fuehrt den Schlauch durch die Pumpe.' }, details: { en: 'Mechanical fit affects flow accuracy.', de: 'Mechanischer Sitz beeinflusst Dosiergenauigkeit.' }, electrotechnics: { en: 'Door switches and optical sensors can confirm correct loading.', de: 'Tuerschalter und optische Sensoren koennen korrektes Einlegen bestaetigen.' } },
      { id: 'motor', name: { en: 'Drive Motor', de: 'Antriebsmotor' }, function: { en: 'Creates controlled pumping motion.', de: 'Erzeugt kontrollierte Pumpbewegung.' }, details: { en: 'Stepper or DC motor control decides flow stability.', de: 'Schritt- oder DC-Motorsteuerung bestimmt die Flussstabilitaet.' }, electrotechnics: { en: 'PWM, motor drivers, feedback, and current sensing are useful here.', de: 'PWM, Motortreiber, Feedback und Strommessung sind hier nuetzlich.' } },
      { id: 'pressure', name: { en: 'Pressure Sensor', de: 'Drucksensor' }, function: { en: 'Detects occlusion or blocked flow.', de: 'Erkennt Okklusion oder blockierten Fluss.' }, details: { en: 'Rising pressure can indicate a blocked line.', de: 'Steigender Druck kann eine blockierte Leitung anzeigen.' }, electrotechnics: { en: 'Often uses bridge sensors, ADCs, calibration, and thresholds.', de: 'Oft mit Brueckensensoren, ADCs, Kalibrierung und Schwellwerten.' } },
    ],
    demo: {
      title: { en: 'Flow-rate monitoring', de: 'Flussraten-Ueberwachung' },
      beforeLabel: { en: 'Unstable flow', de: 'Instabiler Fluss' },
      afterLabel: { en: 'Controlled flow', de: 'Kontrollierter Fluss' },
      explanation: { en: 'Control systems compare target and measured values, then correct motor action or trigger alarms.', de: 'Regelsysteme vergleichen Soll- und Messwerte, korrigieren den Motor oder loesen Alarme aus.' },
      filters: [{ en: 'Moving average', de: 'Gleitender Mittelwert' }, { en: 'Threshold alarm', de: 'Schwellwertalarm' }, { en: 'Trend check', de: 'Trendpruefung' }],
      clipSteps: [{ en: 'Rate selected', de: 'Rate gewaehlt' }, { en: 'Motor turns', de: 'Motor dreht' }, { en: 'Pressure checked', de: 'Druck geprueft' }, { en: 'Alarm if blocked', de: 'Alarm bei Blockade' }],
    },
  },
];
