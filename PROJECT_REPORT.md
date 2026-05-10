# Project Report

## What Was Built

I built Phase 1 of BioMed Control Center as a full-stack educational biomedical engineering dashboard.

The project has a FastAPI backend and a React TypeScript frontend. It uses fake/demo data only, so it is suitable for a CV, class demo, or portfolio project without using real patient information.

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

The interface is made to feel like a biomedical control dashboard, not a marketing website. The layout is simple, readable, and focused on useful lab-style information.

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
