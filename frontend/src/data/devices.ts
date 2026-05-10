export type DevicePart = {
  id: string;
  name: string;
  function: string;
  details: string;
};

export type DeviceDemo = {
  title: string;
  beforeLabel: string;
  afterLabel: string;
  explanation: string;
  filters: string[];
};

export type LearningDevice = {
  id: string;
  name: string;
  category: string;
  short: string;
  model: 'ecg' | 'ct' | 'ultrasound' | 'xray' | 'mri' | 'pump' | 'ventilator' | 'defib';
  overview: string;
  workflow: string[];
  parts: DevicePart[];
  demo: DeviceDemo;
};

export const learningDevices: LearningDevice[] = [
  {
    id: 'ecg',
    name: 'ECG Monitor',
    category: 'Bioelectric Signals',
    short: 'Records heart electrical activity through electrodes and signal conditioning.',
    model: 'ecg',
    overview:
      'An ECG monitor measures tiny voltage changes on the skin, amplifies them, filters noise, and displays a waveform used for education and monitoring.',
    workflow: [
      'Electrodes pick up small bioelectric potentials from the body.',
      'Lead wires carry the signal into an amplifier and protection circuit.',
      'Filters reduce baseline wander, muscle noise, and power-line interference.',
      'The monitor plots the waveform and calculates educational measurements such as heart rate.',
    ],
    parts: [
      {
        id: 'screen',
        name: 'Display',
        function: 'Shows the ECG waveform, heart-rate estimate, and alerts.',
        details: 'The display is the human-machine interface. It does not create the signal; it presents processed data.',
      },
      {
        id: 'body',
        name: 'Signal Processor',
        function: 'Amplifies and filters the tiny ECG voltage.',
        details: 'ECG amplitudes are small, so the analog front end needs high input impedance and good noise rejection.',
      },
      {
        id: 'leads',
        name: 'Lead Cable',
        function: 'Connects electrodes to the monitor.',
        details: 'Lead placement changes the view of cardiac electrical activity. Bad contact creates noisy traces.',
      },
    ],
    demo: {
      title: 'Noisy ECG filtering',
      beforeLabel: 'Raw noisy ECG',
      afterLabel: 'Filtered ECG',
      explanation:
        'A smoothing or bandpass filter can make R peaks easier to see. In real systems, filter settings must preserve clinically important waveform details.',
      filters: ['Baseline correction', 'Moving average smoothing', 'R-peak detection'],
    },
  },
  {
    id: 'ct',
    name: 'CT Scanner',
    category: 'Tomographic Imaging',
    short: 'Rotates an X-ray tube and detector ring to reconstruct slice images.',
    model: 'ct',
    overview:
      'A CT scanner collects many X-ray projections around the body. Reconstruction algorithms combine them into cross-sectional slice images.',
    workflow: [
      'The patient table moves through the gantry opening.',
      'An X-ray tube rotates around the patient while detectors measure transmitted radiation.',
      'Projection data is reconstructed into image slices.',
      'Image processing adjusts window, contrast, and noise for interpretation and teaching.',
    ],
    parts: [
      {
        id: 'gantry',
        name: 'Gantry',
        function: 'Holds the rotating X-ray tube and detector system.',
        details: 'The gantry is the large ring. Inside it, source and detectors move quickly and precisely.',
      },
      {
        id: 'table',
        name: 'Patient Table',
        function: 'Moves the scanned object through the imaging plane.',
        details: 'Table motion and gantry rotation determine slice spacing and scan coverage.',
      },
      {
        id: 'tube',
        name: 'X-ray Tube',
        function: 'Produces X-rays for projection imaging.',
        details: 'Tube current and voltage affect image noise, contrast, and radiation dose.',
      },
    ],
    demo: {
      title: 'CT reconstruction and windowing',
      beforeLabel: 'Low contrast slice',
      afterLabel: 'Windowed slice',
      explanation:
        'Windowing maps a selected range of intensities to visible grayscale. It can reveal soft tissue or bone details depending on the chosen range.',
      filters: ['Projection reconstruction', 'Noise reduction', 'Window/level adjustment'],
    },
  },
  {
    id: 'ultrasound',
    name: 'Ultrasound System',
    category: 'Acoustic Imaging',
    short: 'Uses high-frequency sound pulses and echoes to form real-time images.',
    model: 'ultrasound',
    overview:
      'Ultrasound transducers send sound waves into tissue and receive echoes. Timing and amplitude are used to build a live image.',
    workflow: [
      'Piezoelectric elements convert voltage pulses into sound waves.',
      'Echoes return from boundaries where acoustic impedance changes.',
      'Beamforming combines received signals from many elements.',
      'Image filters improve contrast, reduce speckle, and highlight structures.',
    ],
    parts: [
      {
        id: 'probe',
        name: 'Probe',
        function: 'Sends and receives ultrasound pulses.',
        details: 'The probe contains piezoelectric elements. Gel improves coupling between the probe and skin.',
      },
      {
        id: 'screen',
        name: 'Display',
        function: 'Shows live B-mode or Doppler images.',
        details: 'The image is reconstructed from echo timing and strength.',
      },
      {
        id: 'console',
        name: 'Control Console',
        function: 'Adjusts gain, depth, focus, and imaging mode.',
        details: 'Controls change how echoes are amplified and displayed.',
      },
    ],
    demo: {
      title: 'Speckle reduction',
      beforeLabel: 'Speckled image',
      afterLabel: 'Smoothed image',
      explanation:
        'Ultrasound images often contain speckle. Smoothing can improve readability, but too much filtering may hide small structures.',
      filters: ['Gain correction', 'Speckle smoothing', 'Edge-preserving contrast'],
    },
  },
  {
    id: 'xray',
    name: 'X-ray System',
    category: 'Projection Imaging',
    short: 'Projects X-rays through the body onto a detector for contrast imaging.',
    model: 'xray',
    overview:
      'An X-ray system creates a 2D projection image. Dense materials absorb more radiation and appear brighter on the final image.',
    workflow: [
      'The tube accelerates electrons into an anode to produce X-rays.',
      'A collimator shapes the beam and limits exposed area.',
      'The detector measures transmitted radiation.',
      'Contrast and sharpening filters make structures easier to compare.',
    ],
    parts: [
      {
        id: 'tube',
        name: 'Tube Head',
        function: 'Generates the X-ray beam.',
        details: 'Tube voltage affects penetration. Tube current affects photon quantity and noise.',
      },
      {
        id: 'collimator',
        name: 'Collimator',
        function: 'Narrows the beam to the region of interest.',
        details: 'Good collimation reduces unnecessary exposure and scatter.',
      },
      {
        id: 'detector',
        name: 'Detector Panel',
        function: 'Captures the projection image.',
        details: 'Digital detectors convert X-ray intensity into pixel values.',
      },
    ],
    demo: {
      title: 'Contrast enhancement',
      beforeLabel: 'Flat contrast',
      afterLabel: 'Enhanced contrast',
      explanation:
        'Contrast stretching spreads useful gray values across a wider display range. It helps students see why post-processing matters.',
      filters: ['Contrast stretch', 'Sharpening', 'Noise-aware smoothing'],
    },
  },
  {
    id: 'mri',
    name: 'MRI Scanner',
    category: 'Magnetic Resonance',
    short: 'Uses magnetic fields and radio-frequency pulses to generate tissue contrast.',
    model: 'mri',
    overview:
      'MRI excites hydrogen nuclei in a strong magnetic field. Relaxation signals are measured and reconstructed into images.',
    workflow: [
      'A strong magnet aligns nuclear spins.',
      'RF coils transmit and receive radio-frequency signals.',
      'Gradient coils encode spatial position.',
      'Sequences create different tissue contrasts such as T1 or T2 weighting.',
    ],
    parts: [
      { id: 'bore', name: 'Magnet Bore', function: 'Creates the main magnetic field.', details: 'Field strength and homogeneity are key for image quality.' },
      { id: 'coil', name: 'RF Coil', function: 'Sends and receives RF signals.', details: 'Coil choice affects sensitivity and signal-to-noise ratio.' },
      { id: 'table', name: 'Patient Table', function: 'Positions the scanned object.', details: 'Positioning affects coverage and comfort.' },
    ],
    demo: {
      title: 'Tissue contrast selection',
      beforeLabel: 'Low contrast',
      afterLabel: 'T2-like contrast',
      explanation: 'MRI contrast depends strongly on sequence parameters. A teaching demo can compare how the same anatomy may look different.',
      filters: ['Intensity mapping', 'Noise reduction', 'Contrast preset'],
    },
  },
  {
    id: 'pump',
    name: 'Infusion Pump',
    category: 'Therapy Device',
    short: 'Controls fluid delivery rate and monitors safety conditions.',
    model: 'pump',
    overview:
      'An infusion pump uses a motor and control software to deliver fluids at controlled rates while monitoring occlusion and battery status.',
    workflow: [
      'The user sets a flow rate and volume limit.',
      'A motor drives the pump mechanism.',
      'Sensors monitor pressure, door state, and battery.',
      'Alarms guide the operator when limits are exceeded.',
    ],
    parts: [
      { id: 'screen', name: 'Display', function: 'Shows rate, volume, and alarms.', details: 'Clear UI matters because setup errors can be dangerous.' },
      { id: 'cassette', name: 'Cassette/Line Path', function: 'Holds the fluid line.', details: 'The pump mechanism acts on this path to move fluid.' },
      { id: 'motor', name: 'Drive Motor', function: 'Controls delivery motion.', details: 'Motor control accuracy affects flow-rate stability.' },
    ],
    demo: {
      title: 'Flow-rate monitoring',
      beforeLabel: 'Unstable flow',
      afterLabel: 'Controlled flow',
      explanation: 'Control systems compare target and measured flow to correct drift and detect occlusions.',
      filters: ['Moving average', 'Threshold alarm', 'Trend check'],
    },
  },
];
