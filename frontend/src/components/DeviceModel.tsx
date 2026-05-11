import type { LearningDevice } from '../data/devices';
import { t } from '../data/devices';

type Props = {
  device: LearningDevice;
  selectedPartId: string;
  onSelectPart: (partId: string) => void;
};

type Hotspot = {
  partId: string;
  x: number;
  y: number;
};

type DevicePhoto = {
  src: string;
  fallback: string;
  alt: string;
  position?: string;
};

const fallbackPhoto =
  'https://commons.wikimedia.org/wiki/Special:FilePath/Patient%20lying%20in%20hospital%20bed%20in%20intensive%20care%20unit%20in%20Germany%20in%202015.jpg';

const devicePhotos: Record<LearningDevice['model'], DevicePhoto> = {
  ecg: {
    src: fallbackPhoto,
    fallback: fallbackPhoto,
    alt: 'Real intensive care monitor beside a hospital bed',
    position: 'center',
  },
  ct: {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Siemens%20Somatom%20CT%20scanner.jpg',
    fallback: fallbackPhoto,
    alt: 'Real CT scanner in a clinical room',
    position: 'center',
  },
  ultrasound: {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Sonoscape%20Ultrasound%20Machine.jpg',
    fallback: fallbackPhoto,
    alt: 'Real ultrasound machine with screen and probe',
    position: 'center',
  },
  xray: {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Portable%20x-ray%20machine%20in%20use%20at%20bedside%20(Reeve%20002312),%20National%20Museum%20of%20Health%20and%20Medicine%20(3298836186).jpg',
    fallback: fallbackPhoto,
    alt: 'Real portable X-ray machine beside a patient bed',
    position: 'center',
  },
  mri: {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Modern%203T%20MRI.JPG',
    fallback: fallbackPhoto,
    alt: 'Real modern MRI scanner',
    position: 'center',
  },
  pump: {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Infusion%20pump.JPG',
    fallback: fallbackPhoto,
    alt: 'Real infusion pump mounted in a clinical setting',
    position: 'center',
  },
  ventilator: {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ventilator.jpg',
    fallback: fallbackPhoto,
    alt: 'Real mechanical ventilator system',
    position: 'center',
  },
  defib: {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Defibrillator%20at%20Bayford,%20Hertfordshire,%20England.jpg',
    fallback: fallbackPhoto,
    alt: 'Real automated external defibrillator cabinet',
    position: 'center',
  },
  dialysis: {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Patient%20lying%20in%20bed%20in%20intensive%20care%20unit%20of%20hospital%20with%20apparatuses%20and%20hemodialysis%20machine.jpg',
    fallback: fallbackPhoto,
    alt: 'Real hemodialysis machine near an intensive care bed',
    position: 'center',
  },
  endoscope: {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Endoscope.jpg',
    fallback: fallbackPhoto,
    alt: 'Real flexible medical endoscope',
    position: 'center',
  },
};

const hotspots: Record<LearningDevice['model'], Hotspot[]> = {
  ecg: [
    { partId: 'screen', x: 50, y: 26 },
    { partId: 'electrodes', x: 84, y: 78 },
    { partId: 'skinInterface', x: 88, y: 86 },
    { partId: 'leads', x: 72, y: 66 },
    { partId: 'protection', x: 25, y: 58 },
    { partId: 'isolation', x: 34, y: 58 },
    { partId: 'amplifier', x: 43, y: 58 },
    { partId: 'cmrr', x: 51, y: 58 },
    { partId: 'highpass', x: 60, y: 52 },
    { partId: 'lowpass', x: 60, y: 60 },
    { partId: 'notch', x: 60, y: 68 },
    { partId: 'adc', x: 70, y: 58 },
    { partId: 'processor', x: 72, y: 76 },
    { partId: 'alarm', x: 75, y: 30 },
    { partId: 'power', x: 28, y: 78 },
    { partId: 'drl', x: 16, y: 76 },
  ],
  ct: [
    { partId: 'gantry', x: 51, y: 42 },
    { partId: 'tube', x: 52, y: 22 },
    { partId: 'detectors', x: 64, y: 42 },
    { partId: 'table', x: 50, y: 72 },
    { partId: 'console', x: 17, y: 48 },
  ],
  ultrasound: [
    { partId: 'screen', x: 47, y: 24 },
    { partId: 'console', x: 45, y: 58 },
    { partId: 'probe', x: 78, y: 62 },
    { partId: 'crystals', x: 84, y: 75 },
    { partId: 'beam', x: 84, y: 88 },
  ],
  xray: [
    { partId: 'cathode', x: 22, y: 34 },
    { partId: 'anode', x: 34, y: 34 },
    { partId: 'collimator', x: 46, y: 48 },
    { partId: 'detector', x: 82, y: 48 },
    { partId: 'grid', x: 74, y: 48 },
  ],
  mri: [
    { partId: 'bore', x: 50, y: 44 },
    { partId: 'gradients', x: 58, y: 44 },
    { partId: 'rfcoil', x: 47, y: 44 },
    { partId: 'table', x: 50, y: 74 },
  ],
  pump: [
    { partId: 'screen', x: 46, y: 22 },
    { partId: 'cassette', x: 44, y: 56 },
    { partId: 'motor', x: 64, y: 75 },
    { partId: 'pressure', x: 28, y: 75 },
  ],
  ventilator: [
    { partId: 'screen', x: 41, y: 24 },
    { partId: 'blower', x: 40, y: 58 },
    { partId: 'sensors', x: 62, y: 58 },
    { partId: 'tubing', x: 78, y: 70 },
  ],
  defib: [
    { partId: 'screen', x: 37, y: 25 },
    { partId: 'charger', x: 42, y: 56 },
    { partId: 'capacitor', x: 58, y: 56 },
    { partId: 'pads', x: 82, y: 76 },
  ],
  dialysis: [
    { partId: 'screen', x: 38, y: 22 },
    { partId: 'pump', x: 30, y: 60 },
    { partId: 'dialyzer', x: 62, y: 58 },
    { partId: 'sensors', x: 45, y: 78 },
  ],
  endoscope: [
    { partId: 'handle', x: 26, y: 54 },
    { partId: 'processor', x: 18, y: 28 },
    { partId: 'sensor', x: 80, y: 54 },
    { partId: 'light', x: 88, y: 54 },
  ],
};

export default function DeviceModel({ device, selectedPartId, onSelectPart }: Props) {
  const deviceHotspots = hotspots[device.model].filter((spot) => device.parts.some((part) => part.id === spot.partId));
  const photo = devicePhotos[device.model];

  return (
    <div className={`device-picture ${device.model}`} aria-label={`${t(device.name, 'en')} realistic machine photo`}>
      <div className="picture-title">
        <strong>{t(device.name, 'en')}</strong>
        <span>real machine photo with labels</span>
      </div>
      <div className="machine-photo-wrap">
        <img
          className="machine-photo"
          src={photo.src}
          alt={photo.alt}
          style={{ objectPosition: photo.position || 'center' }}
          onError={(event) => {
            if (event.currentTarget.src !== photo.fallback) {
              event.currentTarget.src = photo.fallback;
            }
          }}
        />
      </div>
      <div className="picture-hotspots">
        {deviceHotspots.map((spot) => {
          const part = device.parts.find((item) => item.id === spot.partId);
          if (!part) return null;

          return (
            <button
              key={spot.partId}
              type="button"
              className={selectedPartId === spot.partId ? 'active' : ''}
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              onClick={() => onSelectPart(spot.partId)}
              title={t(part.name, 'en')}
            >
              <span />
              <b>{t(part.name, 'en')}</b>
            </button>
          );
        })}
      </div>
    </div>
  );
}
