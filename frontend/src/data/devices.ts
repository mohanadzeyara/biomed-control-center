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

export type DeepDiveSection = {
  title: Text;
  body: Text;
};

export type LearningDevice = {
  id: string;
  name: Text;
  category: Text;
  short: Text;
  model: 'ecg' | 'ct' | 'ultrasound' | 'xray' | 'mri' | 'pump' | 'ventilator' | 'defib' | 'dialysis' | 'endoscope';
  overview: Text;
  workflow: Text[];
  deepDive?: DeepDiveSection[];
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
    deepDive: [
      {
        title: { en: 'Body-to-electrode interface', de: 'Koerper-Elektroden-Uebergang' },
        body: {
          en: 'The heart creates ionic currents in tissue, but the monitor measures electronic voltage at the skin. The gel and metal electrode form a half-cell interface with impedance, offset voltage, capacitance, motion artifacts, and thermal noise. That is why preparation, contact area, and shielding matter before any software filtering can help.',
          de: 'Das Herz erzeugt ionische Stroeme im Gewebe, der Monitor misst aber eine elektronische Spannung an der Haut. Gel und Metallelektrode bilden eine Halbzellen-Grenzflaeche mit Impedanz, Offsetspannung, Kapazitaet, Bewegungsartefakten und thermischem Rauschen. Deshalb sind Vorbereitung, Kontaktflaeche und Schirmung wichtig, bevor Softwarefilter helfen koennen.',
        },
      },
      {
        title: { en: 'Analog front end', de: 'Analoge Eingangsstufe' },
        body: {
          en: 'A protection network limits patient current and amplifier input stress. The instrumentation amplifier then amplifies only the difference between electrodes while rejecting common-mode mains pickup. Important electrotechnics ideas are input impedance, CMRR, driven-right-leg feedback, saturation recovery, isolation, and leakage-current safety.',
          de: 'Eine Schutzschaltung begrenzt Patientstrom und Eingangsstress am Verstaerker. Der Instrumentenverstaerker verstaerkt danach nur die Differenz zwischen Elektroden und unterdrueckt Gleichtaktstoerungen vom Netz. Wichtig sind Eingangsimpedanz, CMRR, Driven-Right-Leg-Rueckkopplung, Saettigungsrueckkehr, Isolation und Ableitstromsicherheit.',
        },
      },
      {
        title: { en: 'Filtering and reading', de: 'Filterung und Auswertung' },
        body: {
          en: 'Typical ECG processing combines a high-pass filter for baseline wander, a low-pass filter for muscle noise, and sometimes a 50/60 Hz notch for mains interference. The ADC must sample fast enough to keep QRS shape. Software then finds R peaks, estimates heart rate, and must avoid changing clinically meaningful waveform timing.',
          de: 'Typische EKG-Verarbeitung kombiniert Hochpass gegen Basisliniendrift, Tiefpass gegen Muskelrauschen und manchmal einen 50/60-Hz-Kerbfilter gegen Netzstoerung. Der ADC muss schnell genug abtasten, damit die QRS-Form erhalten bleibt. Software findet danach R-Zacken, schaetzt die Herzfrequenz und darf medizinisch relevante Zeitformen nicht verfaelschen.',
        },
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
    deepDive: [
      {
        title: { en: 'High-voltage generation', de: 'Hochspannungserzeugung' },
        body: {
          en: 'The tube needs tens to more than one hundred kilovolts. Power electronics rectify, switch, transform, and regulate that voltage while controlling tube current. kVp changes photon energy and penetration; mA and exposure time change photon count, noise, dose, and heat load.',
          de: 'Die Roehre braucht mehrere zehn bis ueber hundert Kilovolt. Leistungselektronik richtet gleich, schaltet, transformiert und regelt diese Spannung und steuert den Roehrenstrom. kVp veraendert Photonenenergie und Durchdringung; mA und Belichtungszeit veraendern Photonenzahl, Rauschen, Dosis und Waermelast.',
        },
      },
      {
        title: { en: 'Projection signal chain', de: 'Projektions-Signalkette' },
        body: {
          en: 'Each detector element converts X-ray intensity into charge or current, often through scintillator light and photodiodes. The small signals are integrated, amplified, multiplexed, digitized, dark-corrected, gain-corrected, and logged against angle so reconstruction software can use consistent projection data.',
          de: 'Jedes Detektorelement wandelt Roentgenintensitaet in Ladung oder Strom, oft ueber Szintillatorlicht und Photodioden. Die kleinen Signale werden integriert, verstaerkt, multiplexed, digitalisiert, dunkelstromkorrigiert, gain-korrigiert und dem Winkel zugeordnet, damit die Rekonstruktion konsistente Projektionsdaten bekommt.',
        },
      },
      {
        title: { en: 'Reconstruction and filtering', de: 'Rekonstruktion und Filter' },
        body: {
          en: 'The scanner measures attenuation from many angles. Filtered backprojection or iterative reconstruction estimates voxel values. Then kernels, denoising, metal artifact reduction, and window/level mapping make bone, soft tissue, or lung structures readable without pretending the raw detector data is already an image.',
          de: 'Der Scanner misst Abschwaechung aus vielen Winkeln. Gefilterte Rueckprojektion oder iterative Rekonstruktion schaetzt Voxelwerte. Danach machen Faltungskerne, Rauschminderung, Metallartefaktreduktion und Fenster/Lage-Abbildung Knochen, Weichteil oder Lunge lesbar, ohne dass Rohdaten schon ein fertiges Bild waeren.',
        },
      },
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
    deepDive: [
      {
        title: { en: 'Piezoelectric conversion', de: 'Piezoelektrische Wandlung' },
        body: {
          en: 'A pulser applies a short high-voltage pulse to piezo elements. Their crystal structure changes thickness and launches an acoustic pulse. Returning pressure waves deform the same elements and create small voltages, so the probe rapidly switches between transmit protection and low-noise receive electronics.',
          de: 'Ein Pulser legt einen kurzen Hochspannungspuls an Piezoelemente. Ihre Kristallstruktur aendert die Dicke und sendet einen akustischen Puls aus. Zurueckkehrende Druckwellen verformen dieselben Elemente und erzeugen kleine Spannungen, daher schaltet die Sonde schnell zwischen Sendeschutz und rauscharmem Empfang um.',
        },
      },
      {
        title: { en: 'Depth and beamforming', de: 'Tiefe und Beamforming' },
        body: {
          en: 'Echo delay gives depth because sound speed in tissue is approximately known. Array probes steer and focus beams by delaying channels. On receive, the system aligns channel delays before summing, which increases signals from the focus and suppresses off-axis echoes.',
          de: 'Die Echo-Laufzeit ergibt Tiefe, weil die Schallgeschwindigkeit im Gewebe ungefaehr bekannt ist. Array-Sonden lenken und fokussieren Strahlen durch Kanalverzoegerungen. Beim Empfang richtet das System die Kanalverzoegerungen vor der Summe aus, wodurch Signale aus dem Fokus staerker und seitliche Echos schwaecher werden.',
        },
      },
      {
        title: { en: 'Image cleanup', de: 'Bildaufbereitung' },
        body: {
          en: 'The raw echo data passes through time-gain compensation, bandpass filtering, envelope detection, log compression, speckle reduction, edge-preserving smoothing, and scan conversion. These steps turn echo amplitude into a readable B-mode image while preserving small structures.',
          de: 'Die Roh-Echodaten laufen durch tiefenabhaengige Verstaerkung, Bandpassfilter, Huellkurvendetektion, Log-Kompression, Speckle-Reduktion, kantenerhaltende Glaettung und Scan-Konvertierung. So wird Echoamplitude zu einem lesbaren B-Mode-Bild, ohne kleine Strukturen zu stark zu verlieren.',
        },
      },
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
    deepDive: [
      {
        title: { en: 'Tube physics', de: 'Roehrenphysik' },
        body: {
          en: 'The cathode filament heats until electrons leave the metal. A high electric field accelerates them toward the anode. When electrons decelerate in the target, bremsstrahlung and characteristic X-rays are produced, but most energy becomes heat, so power timing and cooling are central design limits.',
          de: 'Das Kathodenfilament heizt, bis Elektronen das Metall verlassen. Ein starkes elektrisches Feld beschleunigt sie zur Anode. Beim Abbremsen im Target entstehen Bremsstrahlung und charakteristische Roentgenstrahlung, aber der groesste Teil wird Waerme. Deshalb begrenzen Leistungstiming und Kuehlung das Design.',
        },
      },
      {
        title: { en: 'Detector readout', de: 'Detektorauslesung' },
        body: {
          en: 'Indirect flat panels convert X-rays to light in a scintillator and then to charge in photodiodes. Direct panels convert X-rays straight into charge. Pixel switches read rows into amplifiers and ADCs; offset correction, bad-pixel maps, gain calibration, and lag correction make the image stable.',
          de: 'Indirekte Flachdetektoren wandeln Roentgenstrahlen im Szintillator in Licht und danach in Photodiodenladung. Direkte Detektoren wandeln direkt in Ladung. Pixelschalter lesen Zeilen in Verstaerker und ADCs; Offsetkorrektur, Bad-Pixel-Karten, Gain-Kalibrierung und Lag-Korrektur stabilisieren das Bild.',
        },
      },
      {
        title: { en: 'Contrast and noise', de: 'Kontrast und Rauschen' },
        body: {
          en: 'Collimation reduces unnecessary field size and scatter. Anti-scatter grids improve contrast but absorb useful photons too. Processing often applies flat-field correction, contrast stretching, noise-aware smoothing, and sharpening, always balancing visibility against dose and artifacts.',
          de: 'Kollimation reduziert unnoetige Feldgroesse und Streustrahlung. Streustrahlenraster verbessern Kontrast, schlucken aber auch Nutzphotonen. Die Verarbeitung nutzt oft Flat-Field-Korrektur, Kontraststreckung, rauschbewusste Glaettung und Schaerfung, immer im Kompromiss zwischen Sichtbarkeit, Dosis und Artefakten.',
        },
      },
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
    deepDive: [
      {
        title: { en: 'Main magnetic field', de: 'Hauptmagnetfeld' },
        body: {
          en: 'When the patient enters the bore, hydrogen nuclei in water and fat see a strong static B0 field. Their magnetic moments do not all point perfectly with the field, but a small net magnetization builds along B0. The Larmor frequency is proportional to field strength, so the scanner knows what RF frequency can tip that magnetization into the transverse plane.',
          de: 'Wenn die Person in die Roehre faehrt, sehen Wasserstoffkerne in Wasser und Fett ein starkes statisches B0-Feld. Die magnetischen Momente zeigen nicht alle perfekt in Feldrichtung, aber eine kleine Nettomagnetisierung baut sich entlang B0 auf. Die Larmorfrequenz ist proportional zur Feldstaerke, daher weiss der Scanner, welche HF-Frequenz die Magnetisierung kippen kann.',
        },
      },
      {
        title: { en: 'RF pulse and received signal', de: 'HF-Puls und Empfangssignal' },
        body: {
          en: 'The RF coil sends a short magnetic B1 pulse at the Larmor frequency. This deposits energy into the spin system and tips the net magnetization. After the pulse stops, the precessing magnetization induces a tiny voltage in the receive coil by Faraday induction. That analog voltage is amplified, filtered, digitized, and stored as k-space samples.',
          de: 'Die HF-Spule sendet einen kurzen magnetischen B1-Puls bei der Larmorfrequenz. Dadurch wird Energie in das Spinsystem eingebracht und die Nettomagnetisierung gekippt. Nach dem Puls induziert die praezessierende Magnetisierung durch Faraday-Induktion eine kleine Spannung in der Empfangsspule. Diese analoge Spannung wird verstaerkt, gefiltert, digitalisiert und als k-Raum-Daten gespeichert.',
        },
      },
      {
        title: { en: 'Gradients and image formation', de: 'Gradienten und Bildentstehung' },
        body: {
          en: 'Gradient coils add controlled magnetic-field slopes on x, y, and z. A slice-select gradient makes only one slice resonate with the RF pulse, phase encoding gives rows different phase shifts, and frequency encoding makes position change the received frequency. Reconstruction uses a Fourier transform, then image filters, coil combination, intensity correction, and noise reduction improve readability.',
          de: 'Gradientenspulen addieren kontrollierte Magnetfeldsteigungen in x, y und z. Ein Schichtselektionsgradient laesst nur eine Schicht mit dem HF-Puls resonieren, Phasencodierung gibt Zeilen verschiedene Phasenlagen, und Frequenzcodierung macht die Position zur Empfangsfrequenz. Die Rekonstruktion nutzt eine Fourier-Transformation; danach verbessern Spulenkombination, Intensitaetskorrektur und Rauschminderung die Lesbarkeit.',
        },
      },
      {
        title: { en: 'Why it is loud and safety-critical', de: 'Warum es laut und sicherheitskritisch ist' },
        body: {
          en: 'Gradient coils carry high current and switch quickly inside the main field. Lorentz forces make the coil structure vibrate, which creates the knocking sound. Electrical design must manage inductance, voltage drive, cooling, eddy currents, RF heating, implant safety, quench behavior, and emergency stops.',
          de: 'Gradientenspulen fuehren hohe Stroeme und schalten schnell im Hauptfeld. Lorentzkraefte versetzen die Spulenstruktur in Schwingung, wodurch das Klopfgeraeusch entsteht. Die Elektrotechnik muss Induktivitaet, Treiberspannung, Kuehlung, Wirbelstroeme, HF-Erwaermung, Implantatsicherheit, Quench-Verhalten und Not-Aus beherrschen.',
        },
      },
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
    deepDive: [
      {
        title: { en: 'Motor and flow control', de: 'Motor- und Flussregelung' },
        body: {
          en: 'The pump is a closed-loop embedded system. A stepper or DC motor driver moves a peristaltic mechanism or cassette. Firmware converts the prescribed ml/h into motor steps, monitors current and position, and compensates for mechanical tolerance, battery voltage, and line resistance.',
          de: 'Die Pumpe ist ein geschlossenes Embedded-Regelsystem. Ein Schritt- oder DC-Motortreiber bewegt Peristaltik oder Kassette. Firmware wandelt ml/h in Motorschritte um, ueberwacht Strom und Position und kompensiert mechanische Toleranz, Akkuspannung und Leitungswiderstand.',
        },
      },
      {
        title: { en: 'Pressure sensing', de: 'Druckmessung' },
        body: {
          en: 'Occlusion detection often uses a strain gauge or piezoresistive bridge. The bridge signal is tiny and temperature-sensitive, so it needs excitation stability, instrumentation amplification, ADC conversion, calibration, filtering, and threshold logic before an alarm is trustworthy.',
          de: 'Okklusionserkennung nutzt oft Dehnungsmessstreifen oder piezoresistive Bruecken. Das Brueckensignal ist klein und temperaturabhaengig, daher braucht es stabile Speisung, Instrumentenverstaerkung, ADC-Wandlung, Kalibrierung, Filterung und Schwellwertlogik, bevor ein Alarm verlaesslich ist.',
        },
      },
      {
        title: { en: 'Safety logic', de: 'Sicherheitslogik' },
        body: {
          en: 'The controller cross-checks door state, air-in-line sensors, pressure trend, battery state, motor current, and user settings. Good design separates normal control from alarm decisions and fails into a safe state when sensor readings disagree.',
          de: 'Der Controller prueft Tuerzustand, Luft-in-Leitung-Sensoren, Drucktrend, Akkuzustand, Motorstrom und Nutzereinstellungen gegeneinander. Gutes Design trennt normale Regelung von Alarmentscheidungen und geht in einen sicheren Zustand, wenn Sensordaten widerspruechlich sind.',
        },
      },
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
  {
    id: 'ventilator',
    name: { en: 'Ventilator', de: 'Beatmungsgeraet' },
    category: { en: 'Respiratory Therapy', de: 'Atemtherapie' },
    short: { en: 'Controls pressure, flow, oxygen mix, and alarms during assisted breathing.', de: 'Regelt Druck, Fluss, Sauerstoffmischung und Alarme bei assistierter Atmung.' },
    model: 'ventilator',
    overview: { en: 'A ventilator is a sensor-rich control system. It drives gas flow, measures airway pressure and volume, synchronizes with patient effort, and uses alarms to avoid unsafe pressure, disconnection, or blocked tubing.', de: 'Ein Beatmungsgeraet ist ein sensorreiches Regelsystem. Es treibt Gasfluss an, misst Atemwegsdruck und Volumen, synchronisiert sich mit Patientenbemuehung und nutzt Alarme gegen unsicheren Druck, Diskonnektion oder blockierte Schlaeuche.' },
    workflow: [
      { en: 'A blower or valves create controlled inspiratory flow.', de: 'Geblaese oder Ventile erzeugen kontrollierten Inspirationsfluss.' },
      { en: 'Pressure and flow sensors measure the breathing circuit.', de: 'Druck- und Flusssensoren messen den Atemkreis.' },
      { en: 'Firmware compares measured pressure/volume with the selected mode.', de: 'Firmware vergleicht Druck/Volumen mit dem gewaehlten Modus.' },
      { en: 'Filters, alarms, and valves keep delivered gas safer and readable.', de: 'Filter, Alarme und Ventile halten das abgegebene Gas sicherer und messbar.' },
    ],
    deepDive: [
      { title: { en: 'Pressure and flow sensing', de: 'Druck- und Flussmessung' }, body: { en: 'Airway pressure is often measured with piezoresistive pressure sensors, while flow may be measured from a pressure drop across a known restriction or by hot-wire methods. The electronics need bridge excitation, instrumentation amplification, ADC sampling, offset correction, leak compensation, and digital filtering.', de: 'Atemwegsdruck wird oft mit piezoresistiven Drucksensoren gemessen; Fluss kann aus dem Druckabfall ueber einer bekannten Drossel oder thermisch gemessen werden. Die Elektronik braucht Brueckenspeisung, Instrumentenverstaerkung, ADC-Abtastung, Offsetkorrektur, Leckkompensation und digitale Filterung.' } },
      { title: { en: 'Control loop', de: 'Regelkreis' }, body: { en: 'The controller drives valves or a blower so pressure, volume, or flow follows the selected ventilation mode. PID-like control, trigger detection, rise-time shaping, and safety limits are important because the patient and tubing form a changing pneumatic load.', de: 'Der Controller steuert Ventile oder Geblaese, damit Druck, Volumen oder Fluss dem gewaehlten Beatmungsmodus folgen. PID-aehnliche Regelung, Triggererkennung, Anstiegszeitformung und Sicherheitsgrenzen sind wichtig, weil Patient und Schlauchsystem eine veraenderliche pneumatische Last bilden.' } },
      { title: { en: 'Signal cleanup and alarms', de: 'Signalaufbereitung und Alarme' }, body: { en: 'Breathing signals are filtered to reduce sensor noise while preserving fast pressure rises and patient-trigger events. Alarm logic checks high pressure, low pressure, apnea, low volume, oxygen concentration, power, and sensor plausibility.', de: 'Atemsignale werden gefiltert, um Sensorrauschen zu reduzieren und schnelle Druckanstiege sowie Patiententrigger zu erhalten. Alarmsoftware prueft Hochdruck, Niederdruck, Apnoe, niedriges Volumen, Sauerstoffkonzentration, Versorgung und Sensorplausibilitaet.' } },
    ],
    parts: [
      { id: 'screen', name: { en: 'Control Screen', de: 'Bedienanzeige' }, function: { en: 'Shows mode, pressure, volume, flow, oxygen, and alarms.', de: 'Zeigt Modus, Druck, Volumen, Fluss, Sauerstoff und Alarme.' }, details: { en: 'Waveforms help clinicians see leaks, obstruction, and synchrony.', de: 'Kurven helfen, Lecks, Obstruktion und Synchronie zu erkennen.' }, electrotechnics: { en: 'Embedded UI, alarm state machines, and sampled waveform rendering meet here.', de: 'Embedded-UI, Alarmzustandsautomaten und abgetastete Kurvendarstellung treffen hier zusammen.' } },
      { id: 'blower', name: { en: 'Blower/Valve Block', de: 'Geblaese/Ventilblock' }, function: { en: 'Creates and meters gas flow.', de: 'Erzeugt und dosiert Gasfluss.' }, details: { en: 'Fast valve response affects pressure control and comfort.', de: 'Schnelle Ventilantwort beeinflusst Druckregelung und Komfort.' }, electrotechnics: { en: 'Uses motor drivers, solenoids, PWM, current sensing, and protection circuits.', de: 'Nutzt Motortreiber, Magnetventile, PWM, Strommessung und Schutzschaltungen.' } },
      { id: 'sensors', name: { en: 'Pressure/Flow Sensors', de: 'Druck-/Flusssensoren' }, function: { en: 'Measure delivered breathing mechanics.', de: 'Messen die abgegebene Atemmechanik.' }, details: { en: 'Sensor drift or condensation can corrupt control.', de: 'Sensordrift oder Kondensation kann die Regelung stoeren.' }, electrotechnics: { en: 'Bridge sensors, ADCs, calibration, low-pass filtering, and plausibility checks are central.', de: 'Brueckensensoren, ADCs, Kalibrierung, Tiefpassfilter und Plausibilitaetspruefung sind zentral.' } },
      { id: 'tubing', name: { en: 'Breathing Circuit', de: 'Atemkreis' }, function: { en: 'Carries gas to and from the patient interface.', de: 'Fuehrt Gas zur und von der Patientenschnittstelle.' }, details: { en: 'Compliance, leaks, and resistance change measured pressure and volume.', de: 'Compliance, Lecks und Widerstand veraendern gemessenen Druck und Volumen.' }, electrotechnics: { en: 'Control software must interpret sensor signals through this pneumatic load.', de: 'Regelsoftware muss Sensorsignale durch diese pneumatische Last interpretieren.' } },
    ],
    demo: {
      title: { en: 'Pressure waveform stabilization', de: 'Druckkurven-Stabilisierung' },
      beforeLabel: { en: 'Noisy pressure/flow', de: 'Verrauschter Druck/Fluss' },
      afterLabel: { en: 'Controlled breath cycle', de: 'Geregelter Atemzyklus' },
      explanation: { en: 'Filtering and control make pressure and flow readable, but alarms must still react quickly to dangerous changes.', de: 'Filterung und Regelung machen Druck und Fluss lesbar, Alarme muessen aber weiter schnell auf gefaehrliche Aenderungen reagieren.' },
      filters: [{ en: 'Low-pass filter', de: 'Tiefpassfilter' }, { en: 'Leak compensation', de: 'Leckkompensation' }, { en: 'Alarm thresholds', de: 'Alarmschwellen' }],
      clipSteps: [{ en: 'Mode selected', de: 'Modus gewaehlt' }, { en: 'Blower drives flow', de: 'Geblaese treibt Fluss' }, { en: 'Sensors measure', de: 'Sensoren messen' }, { en: 'Controller adapts', de: 'Controller passt an' }],
    },
  },
  {
    id: 'defib',
    name: { en: 'Defibrillator', de: 'Defibrillator' },
    category: { en: 'Emergency Therapy', de: 'Notfalltherapie' },
    short: { en: 'Charges a high-energy capacitor, analyzes ECG, and delivers a controlled shock path.', de: 'Laedt einen Hochenergie-Kondensator, analysiert EKG und gibt einen kontrollierten Schockpfad ab.' },
    model: 'defib',
    overview: { en: 'A defibrillator combines ECG acquisition with high-voltage energy delivery. Its design must separate sensitive measurement electronics from the shock circuit while keeping timing, isolation, and user safety reliable.', de: 'Ein Defibrillator kombiniert EKG-Erfassung mit Hochspannungs-Energieabgabe. Das Design muss empfindliche Messelektronik vom Schockkreis trennen und Timing, Isolation und Anwendersicherheit verlaesslich halten.' },
    workflow: [
      { en: 'Pads sense ECG and provide a shock path.', de: 'Pads messen EKG und bilden den Schockpfad.' },
      { en: 'An isolated front end filters the ECG for rhythm analysis.', de: 'Eine isolierte Eingangsstufe filtert das EKG fuer Rhythmusanalyse.' },
      { en: 'A charger stores energy in a capacitor bank.', de: 'Ein Ladegeraet speichert Energie in einer Kondensatorbank.' },
      { en: 'Switching electronics deliver a shaped biphasic waveform.', de: 'Schaltelektronik liefert eine geformte biphasische Kurve.' },
    ],
    deepDive: [
      { title: { en: 'Energy storage', de: 'Energiespeicherung' }, body: { en: 'The charger raises battery voltage to a much higher capacitor voltage. Stored energy follows E = 1/2 C V^2, so voltage measurement, bleeder resistors, insulation, discharge switches, and interlocks are major safety topics.', de: 'Das Ladegeraet hebt die Akkuspannung auf eine viel hoehere Kondensatorspannung. Gespeicherte Energie folgt E = 1/2 C V^2, daher sind Spannungsmessung, Entladewiderstaende, Isolation, Entladeschalter und Verriegelungen wichtige Sicherheitsthemen.' } },
      { title: { en: 'ECG analysis front end', de: 'EKG-Analyse-Eingang' }, body: { en: 'The ECG path needs high input impedance, patient isolation, defibrillation protection, CMRR, baseline recovery, and filters. Rhythm algorithms depend on clean enough QRS timing while avoiding false confidence from motion, poor pad contact, or shock recovery artifacts.', de: 'Der EKG-Pfad braucht hohe Eingangsimpedanz, Patientenisolation, Defibrillationsschutz, CMRR, Baseline-Rueckkehr und Filter. Rhythmusalgorithmen brauchen ausreichend sauberes QRS-Timing und muessen Bewegungen, schlechten Padkontakt und Artefakte nach Schock vermeiden.' } },
      { title: { en: 'Shock waveform', de: 'Schockkurve' }, body: { en: 'Modern devices often shape a biphasic pulse through controlled switching. The delivered current depends on patient impedance, so the device measures or estimates impedance and supervises energy delivery, timing, and abort conditions.', de: 'Moderne Geraete formen oft einen biphasischen Puls durch kontrolliertes Schalten. Der abgegebene Strom haengt von Patientenimpedanz ab, daher misst oder schaetzt das Geraet die Impedanz und ueberwacht Energieabgabe, Timing und Abbruchbedingungen.' } },
    ],
    parts: [
      { id: 'screen', name: { en: 'ECG/Status Display', de: 'EKG-/Statusanzeige' }, function: { en: 'Shows rhythm, charge state, prompts, and alarms.', de: 'Zeigt Rhythmus, Ladezustand, Hinweise und Alarme.' }, details: { en: 'Emergency UI must be readable under stress.', de: 'Notfall-UI muss unter Stress lesbar sein.' }, electrotechnics: { en: 'Display logic is tied to battery, charger, ECG, and safety states.', de: 'Anzeigelogik ist mit Akku, Ladegeraet, EKG und Sicherheitszustaenden verbunden.' } },
      { id: 'capacitor', name: { en: 'Capacitor Bank', de: 'Kondensatorbank' }, function: { en: 'Stores shock energy.', de: 'Speichert Schockenergie.' }, details: { en: 'Voltage accuracy and insulation are critical.', de: 'Spannungsgenauigkeit und Isolation sind kritisch.' }, electrotechnics: { en: 'Capacitance, high-voltage charging, leakage, bleeders, and switching devices matter.', de: 'Kapazitaet, Hochspannungsladung, Leckstrom, Entladewiderstaende und Schalter sind wichtig.' } },
      { id: 'pads', name: { en: 'Pads/Paddles', de: 'Pads/Paddles' }, function: { en: 'Couple ECG and therapy current to the body.', de: 'Koppeln EKG und Therapiestrom an den Koerper.' }, details: { en: 'Contact impedance affects analysis and delivered current.', de: 'Kontaktimpedanz beeinflusst Analyse und abgegebenen Strom.' }, electrotechnics: { en: 'Electrode impedance, patient isolation, and discharge path design meet here.', de: 'Elektrodenimpedanz, Patientenisolation und Entladepfad treffen hier zusammen.' } },
      { id: 'charger', name: { en: 'HV Charger', de: 'HV-Ladegeraet' }, function: { en: 'Raises battery voltage to therapy voltage.', de: 'Hebt Akkuspannung auf Therapiespannung.' }, details: { en: 'Must charge quickly but safely.', de: 'Muss schnell und sicher laden.' }, electrotechnics: { en: 'Flyback converters, voltage feedback, current limits, and insulation are key.', de: 'Flyback-Wandler, Spannungsfeedback, Stromgrenzen und Isolation sind zentral.' } },
    ],
    demo: {
      title: { en: 'ECG decision and shock path', de: 'EKG-Entscheidung und Schockpfad' },
      beforeLabel: { en: 'Noisy rhythm', de: 'Verrauschter Rhythmus' },
      afterLabel: { en: 'Detected QRS/shock ready', de: 'Erkanntes QRS/schockbereit' },
      explanation: { en: 'The same pads can support sensing and therapy, but measurement protection and high-voltage switching must be carefully separated.', de: 'Dieselben Pads koennen Messung und Therapie unterstuetzen, aber Messschutz und Hochspannungsschaltung muessen sauber getrennt sein.' },
      filters: [{ en: 'ECG bandpass', de: 'EKG-Bandpass' }, { en: 'Artifact rejection', de: 'Artefaktunterdrueckung' }, { en: 'Impedance check', de: 'Impedanzpruefung' }],
      clipSteps: [{ en: 'Pads attached', de: 'Pads befestigt' }, { en: 'ECG analyzed', de: 'EKG analysiert' }, { en: 'Capacitor charges', de: 'Kondensator laedt' }, { en: 'Pulse delivered', de: 'Puls abgegeben' }],
    },
  },
  {
    id: 'dialysis',
    name: { en: 'Hemodialysis Machine', de: 'Haemodialysegeraet' },
    category: { en: 'Extracorporeal Therapy', de: 'Extrakorporale Therapie' },
    short: { en: 'Controls blood flow, dialysate chemistry, pressure, conductivity, and safety alarms.', de: 'Regelt Blutfluss, Dialysatchemie, Druck, Leitfaehigkeit und Sicherheitsalarme.' },
    model: 'dialysis',
    overview: { en: 'A dialysis machine is a fluidic, electrical, and safety-control system. It pumps blood through a dialyzer while controlling dialysate concentration, temperature, pressures, ultrafiltration, and air/blood leak alarms.', de: 'Ein Dialysegeraet ist ein fluidisches, elektrisches und sicherheitskritisches Regelsystem. Es pumpt Blut durch einen Dialysator und regelt Dialysatkonzentration, Temperatur, Druck, Ultrafiltration sowie Luft- und Blutleckalarme.' },
    workflow: [
      { en: 'Blood pump moves blood through the extracorporeal circuit.', de: 'Die Blutpumpe bewegt Blut durch den extrakorporalen Kreis.' },
      { en: 'Dialysate flows on the other side of a semipermeable membrane.', de: 'Dialysat fliesst auf der anderen Seite einer semipermeablen Membran.' },
      { en: 'Sensors monitor pressure, conductivity, temperature, and air.', de: 'Sensoren ueberwachen Druck, Leitfaehigkeit, Temperatur und Luft.' },
      { en: 'Control logic stops flow or clamps lines during unsafe states.', de: 'Regellogik stoppt Fluss oder klemmt Leitungen bei unsicheren Zustaenden.' },
    ],
    deepDive: [
      { title: { en: 'Pumps and pressure', de: 'Pumpen und Druck' }, body: { en: 'Roller pumps create flow while arterial and venous pressure sensors monitor access problems, clotting, kinks, or disconnection. The sensor chain needs amplification, ADC conversion, calibration, trend filtering, and alarm thresholds.', de: 'Rollenpumpen erzeugen Fluss, waehrend arterielle und venoese Drucksensoren Zugangsprobleme, Gerinnung, Knicke oder Diskonnektion ueberwachen. Die Sensorkette braucht Verstaerkung, ADC-Wandlung, Kalibrierung, Trendfilterung und Alarmschwellen.' } },
      { title: { en: 'Conductivity and temperature', de: 'Leitfaehigkeit und Temperatur' }, body: { en: 'Dialysate conductivity estimates ionic concentration, so electrodes or conductivity cells are measured with AC excitation to reduce polarization. Temperature sensors and heaters are controlled tightly because chemistry and patient comfort depend on stable dialysate.', de: 'Dialysatleitfaehigkeit schaetzt Ionenkonzentration, daher werden Elektroden oder Leitfaehigkeitszellen mit AC-Anregung gemessen, um Polarisation zu reduzieren. Temperatursensoren und Heizer werden eng geregelt, weil Chemie und Komfort stabiles Dialysat brauchen.' } },
      { title: { en: 'Membrane exchange', de: 'Membranaustausch' }, body: { en: 'The dialyzer membrane lets small solutes and water move while keeping cells and larger proteins in the blood path. Electronics do not measure every molecule directly; they control pressures, flow, conductivity, temperature, and time so the physical exchange stays within target bounds.', de: 'Die Dialysatormembran laesst kleine geloeste Stoffe und Wasser passieren und haelt Zellen sowie groessere Proteine im Blutpfad. Die Elektronik misst nicht jedes Molekuel direkt; sie regelt Druck, Fluss, Leitfaehigkeit, Temperatur und Zeit, damit der physikalische Austausch im Zielbereich bleibt.' } },
    ],
    parts: [
      { id: 'screen', name: { en: 'Therapy Screen', de: 'Therapieanzeige' }, function: { en: 'Shows flow, pressure, conductivity, time, and alarms.', de: 'Zeigt Fluss, Druck, Leitfaehigkeit, Zeit und Alarme.' }, details: { en: 'Therapy setup and alarm response depend on readable values.', de: 'Therapieeinstellung und Alarmreaktion haengen von lesbaren Werten ab.' }, electrotechnics: { en: 'Embedded monitoring integrates sensors, state machines, and UI.', de: 'Embedded-Monitoring verbindet Sensoren, Zustandsautomaten und UI.' } },
      { id: 'pump', name: { en: 'Blood Pump', de: 'Blutpumpe' }, function: { en: 'Moves blood through tubing.', de: 'Bewegt Blut durch Schlaeuche.' }, details: { en: 'Roller speed determines flow estimate.', de: 'Rollendrehzahl bestimmt die Flussschaetzung.' }, electrotechnics: { en: 'Motor control, encoders, current sensing, and door interlocks are used.', de: 'Motorregelung, Encoder, Strommessung und Tuerverriegelungen werden genutzt.' } },
      { id: 'dialyzer', name: { en: 'Dialyzer Cartridge', de: 'Dialysator' }, function: { en: 'Exchanges solutes and water across a membrane.', de: 'Tauscht geloeste Stoffe und Wasser ueber eine Membran aus.' }, details: { en: 'Flow direction and pressure gradient affect exchange.', de: 'Flussrichtung und Druckgradient beeinflussen den Austausch.' }, electrotechnics: { en: 'Controlled by pump timing, pressure sensors, and ultrafiltration feedback.', de: 'Gesteuert ueber Pumpentiming, Drucksensoren und Ultrafiltrationsfeedback.' } },
      { id: 'sensors', name: { en: 'Safety Sensors', de: 'Sicherheitssensoren' }, function: { en: 'Watch pressure, air, blood leak, temperature, and conductivity.', de: 'Ueberwachen Druck, Luft, Blutleck, Temperatur und Leitfaehigkeit.' }, details: { en: 'Sensor disagreement must stop therapy safely.', de: 'Sensorwiderspruch muss die Therapie sicher stoppen.' }, electrotechnics: { en: 'ADC channels, excitation circuits, optical sensing, and plausibility logic are central.', de: 'ADC-Kanaele, Anregeschaltungen, optische Sensorik und Plausibilitaetslogik sind zentral.' } },
    ],
    demo: {
      title: { en: 'Pressure and conductivity monitoring', de: 'Druck- und Leitfaehigkeitsueberwachung' },
      beforeLabel: { en: 'Unstable sensor trend', de: 'Instabiler Sensortrend' },
      afterLabel: { en: 'Stable therapy window', de: 'Stabiles Therapiefenster' },
      explanation: { en: 'Dialysis safety depends on trends and thresholds across multiple sensors, not one single measurement.', de: 'Dialysesicherheit haengt von Trends und Schwellwerten mehrerer Sensoren ab, nicht von einer Einzelmessung.' },
      filters: [{ en: 'Trend filter', de: 'Trendfilter' }, { en: 'Conductivity check', de: 'Leitfaehigkeitspruefung' }, { en: 'Pressure alarm', de: 'Druckalarm' }],
      clipSteps: [{ en: 'Blood pumped', de: 'Blut gepumpt' }, { en: 'Dialysate flows', de: 'Dialysat fliesst' }, { en: 'Sensors compare', de: 'Sensoren vergleichen' }, { en: 'Clamp if unsafe', de: 'Klemme bei Gefahr' }],
    },
  },
  {
    id: 'endoscope',
    name: { en: 'Video Endoscope', de: 'Videoendoskop' },
    category: { en: 'Optical Imaging', de: 'Optische Bildgebung' },
    short: { en: 'Uses illumination, miniature imaging, controls, and processing to view internal anatomy.', de: 'Nutzt Beleuchtung, Miniaturbildgebung, Steuerung und Verarbeitung fuer innere Anatomie.' },
    model: 'endoscope',
    overview: { en: 'A video endoscope is an optical-electronic imaging chain. Light is guided to tissue, reflected light is captured by a tiny sensor, and the processor improves color, contrast, noise, and sharpness in real time.', de: 'Ein Videoendoskop ist eine optisch-elektronische Bildkette. Licht wird zum Gewebe gefuehrt, reflektiertes Licht von einem kleinen Sensor aufgenommen, und der Prozessor verbessert Farbe, Kontrast, Rauschen und Schaerfe in Echtzeit.' },
    workflow: [
      { en: 'LED or xenon light is guided to the distal tip.', de: 'LED- oder Xenonlicht wird zur distalen Spitze gefuehrt.' },
      { en: 'Optics focus reflected light onto an image sensor.', de: 'Optik fokussiert reflektiertes Licht auf einen Bildsensor.' },
      { en: 'Sensor pixels convert photons to charge and digital video.', de: 'Sensorpixel wandeln Photonen in Ladung und digitales Video.' },
      { en: 'Image processing corrects color, noise, contrast, and edges.', de: 'Bildverarbeitung korrigiert Farbe, Rauschen, Kontrast und Kanten.' },
    ],
    deepDive: [
      { title: { en: 'Illumination path', de: 'Beleuchtungspfad' }, body: { en: 'The light source must deliver enough illumination without overheating tissue. Drivers regulate LED current, temperature sensors protect the source, and optics or fiber bundles guide light to the tip. Automatic exposure adjusts brightness when tissue distance changes.', de: 'Die Lichtquelle muss genug Beleuchtung liefern, ohne Gewebe zu ueberhitzen. Treiber regeln LED-Strom, Temperatursensoren schuetzen die Quelle, und Optik oder Faserbuendel fuehren Licht zur Spitze. Automatische Belichtung passt Helligkeit an, wenn sich der Gewebeabstand aendert.' } },
      { title: { en: 'Image sensor readout', de: 'Bildsensorauslesung' }, body: { en: 'CMOS pixels integrate photocharge, then row/column circuits read the values through amplifiers and ADCs. Timing, rolling shutter, dark current, gain, white balance, and cable signal integrity strongly affect the final picture.', de: 'CMOS-Pixel integrieren Photoladung, danach lesen Zeilen-/Spaltenschaltungen die Werte ueber Verstaerker und ADCs aus. Timing, Rolling Shutter, Dunkelstrom, Gain, Weissabgleich und Kabelsignalintegritaet beeinflussen das Endbild stark.' } },
      { title: { en: 'Processing pipeline', de: 'Verarbeitungskette' }, body: { en: 'The processor applies demosaicing, denoising, color correction, contrast enhancement, edge sharpening, fog reduction, and sometimes narrow-band imaging. Each filter improves readability but can also create artifacts, so real-time tuning matters.', de: 'Der Prozessor nutzt Demosaicing, Rauschminderung, Farbkorrektur, Kontrastverstaerkung, Kantenschaerfung, Nebelreduktion und manchmal Narrow-Band-Imaging. Jeder Filter verbessert Lesbarkeit, kann aber Artefakte erzeugen, deshalb ist Echtzeitabstimmung wichtig.' } },
    ],
    parts: [
      { id: 'handle', name: { en: 'Control Handle', de: 'Bediengriff' }, function: { en: 'Holds controls for bending, image capture, and irrigation.', de: 'Traegt Bedienelemente fuer Abwinklung, Bildaufnahme und Spuelung.' }, details: { en: 'Ergonomics matter because the operator controls fine movement.', de: 'Ergonomie ist wichtig, weil feine Bewegung gesteuert wird.' }, electrotechnics: { en: 'Buttons, encoders, sealed switches, and cable routing connect to embedded control.', de: 'Tasten, Encoder, dichte Schalter und Kabelfuehrung verbinden sich mit Embedded-Steuerung.' } },
      { id: 'light', name: { en: 'Light Source', de: 'Lichtquelle' }, function: { en: 'Illuminates tissue through fibers or LEDs.', de: 'Beleuchtet Gewebe ueber Fasern oder LEDs.' }, details: { en: 'Brightness must be controlled to avoid glare and heat.', de: 'Helligkeit muss gegen Blendung und Waerme geregelt werden.' }, electrotechnics: { en: 'LED drivers, current control, temperature sensing, and exposure feedback are used.', de: 'LED-Treiber, Stromregelung, Temperaturmessung und Belichtungsfeedback werden genutzt.' } },
      { id: 'sensor', name: { en: 'Distal Image Sensor', de: 'Distaler Bildsensor' }, function: { en: 'Converts reflected light into video data.', de: 'Wandelt reflektiertes Licht in Videodaten.' }, details: { en: 'Tiny optics and sensor noise limit image quality.', de: 'Miniaturoptik und Sensorrauschen begrenzen Bildqualitaet.' }, electrotechnics: { en: 'CMOS readout, ADCs, clocking, cable integrity, and shielding matter.', de: 'CMOS-Auslesung, ADCs, Taktung, Kabelintegritaet und Schirmung sind wichtig.' } },
      { id: 'processor', name: { en: 'Video Processor', de: 'Videoprozessor' }, function: { en: 'Cleans and maps the live image.', de: 'Bereinigt und mappt das Livebild.' }, details: { en: 'Real-time processing must keep latency low.', de: 'Echtzeitverarbeitung muss die Latenz niedrig halten.' }, electrotechnics: { en: 'Digital filters, frame buffers, color pipelines, and display interfaces meet here.', de: 'Digitale Filter, Framebuffer, Farbketten und Displayinterfaces treffen hier zusammen.' } },
    ],
    demo: {
      title: { en: 'Live image enhancement', de: 'Livebildverbesserung' },
      beforeLabel: { en: 'Low-light noisy image', de: 'Rauschiges Schwachlichtbild' },
      afterLabel: { en: 'Corrected endoscopic view', de: 'Korrigierte Endoskopieansicht' },
      explanation: { en: 'Endoscopy depends on optics and real-time video processing: gain helps brightness, but denoising and color correction keep the image believable.', de: 'Endoskopie haengt von Optik und Echtzeitvideo ab: Gain hilft Helligkeit, aber Rauschminderung und Farbkorrektur halten das Bild glaubwuerdig.' },
      filters: [{ en: 'Auto exposure', de: 'Auto-Belichtung' }, { en: 'Denoising', de: 'Rauschminderung' }, { en: 'Color correction', de: 'Farbkorrektur' }],
      clipSteps: [{ en: 'Light emitted', de: 'Licht ausgesendet' }, { en: 'Tissue reflects', de: 'Gewebe reflektiert' }, { en: 'Sensor reads', de: 'Sensor liest' }, { en: 'Processor enhances', de: 'Prozessor verbessert' }],
    },
  },
];
