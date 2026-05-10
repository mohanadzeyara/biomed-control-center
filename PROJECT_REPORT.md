# Project Report

## What Was Built

I built MedTech Device Explorer as a full-stack educational biomedical engineering website.

The project now focuses on teaching how medical devices work through interactive 3D models, part explanations, safe simulations, and signal/image processing demos. It still keeps the earlier BioMed Control Center dashboard as a supporting module.

## Backend

Main files:

- `backend/app/main.py`
- `backend/app/demo_data.py`
- `backend/app/ecg.py`
- `backend/requirements.txt`

The backend includes:

- API root endpoint
- Dashboard endpoint with summary numbers
- Device endpoint with simulated medical devices
- Learning endpoint with short biomedical notes
- ECG generator endpoint with generated ECG points, R peaks, and calculated heart rate

The ECG is synthetic. It creates P, QRS, and T-like waves with small noise so the chart looks realistic enough for an educational demo.

## Frontend

Main files:

- `frontend/src/App.tsx`
- `frontend/src/components/SummaryCard.tsx`
- `frontend/src/components/DeviceCard.tsx`
- `frontend/src/components/EcgPanel.tsx`
- `frontend/src/services/api.ts`
- `frontend/src/styles.css`

The frontend includes:

- MedTech Device Explorer landing experience
- Device library for ECG, CT, ultrasound, X-ray, MRI, and infusion pump
- Clickable/movable 3D teaching models built with Three.js
- Part-by-part explanations for device subsystems
- Separate pages for each device with more room for lessons
- English/German language switch
- Dark mode
- Electrotechnics explanations for each important part
- Animated workflow clips for how the device is used or how the signal/image is produced
- Before/after processing demos for signals and images
- Dashboard summary cards
- Device digital twin overview
- Alerts panel
- Recent analyses panel
- ECG generator controls
- Plotly ECG visualization
- R peak markers
- CSV upload and smoothing controls
- ECG analysis history
- Printable educational report panel
- Learning notes section
- Responsive layout for desktop and mobile

## Design Choices

The interface is now more like an interactive biomedical engineering learning lab than a dashboard. The first screen teaches devices directly, and the control-center dashboard is kept lower on the page as a secondary module.

The old control-center preview has now been removed from the main experience. The app focuses on device teaching pages because that is clearer and more useful for a second-semester biomedical engineering student.

I used a calm medical color palette with teal, white, slate, and alert rose/orange colors. The project avoids real diagnosis language and clearly labels the data as fake.

The ECG lab is lazy-loaded so the dashboard opens faster. Plotly is still included for strong biomedical charting, but its heavier chart code is split away from the first dashboard load.

## Verification

The backend Python files were checked with `py_compile` and passed syntax validation.

I could not install npm or pip packages from the internet inside this sandbox, so the frontend dependency build was prepared but not fully run here.

## What Could Be Added Next

- MongoDB storage for devices and analyses
- CSV upload for ECG files
- Better filtering with SciPy
- WebSocket live data streaming
- PDF report export
- Medical image annotation canvas
- Authentication for student/admin roles
- Docker setup
- Unit tests and API tests
