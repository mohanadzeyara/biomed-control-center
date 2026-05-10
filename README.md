# BioMed Control Center

BioMed Control Center is an educational full-stack biomedical engineering dashboard. It uses fake demo data only and is not a medical diagnosis tool.

Phase 1 includes:

- Dashboard overview with device status, alerts, and recent analysis
- Medical device digital twin cards
- Simulated ECG generator from the FastAPI backend
- Interactive ECG chart in React
- Simple heart-rate calculation from generated R peaks
- Learning notes for biomedical engineering concepts

Phase 2 additions now included:

- CSV ECG upload with time and voltage columns
- Optional smoothing filter for uploaded ECG data
- Basic R-peak detection for generated or uploaded ECG
- In-memory ECG analysis history
- Printable ECG report from the browser

## Tech Stack

- Frontend: React, TypeScript, Tailwind CSS, Plotly.js
- Backend: Python, FastAPI, NumPy
- Future database target: MongoDB

## Folder Structure

```text
biomed-control-center/
  backend/
    app/
      main.py
      demo_data.py
      ecg.py
    requirements.txt
  frontend/
    src/
      components/
      services/
      types/
    package.json
  ROADMAP.md
```

## Run Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

## Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Open the frontend URL shown by Vite. The backend should be running at `http://localhost:8000`.

## CSV Upload Format

The ECG upload accepts `.csv` or `.txt` files with two columns:

```csv
time,voltage
0,0.01
0.004,0.03
0.008,0.08
```

You can test it with `samples/demo_ecg.csv`.

## Safety Note

All device, ECG, sensor, and alert data is generated for education and demos. Do not use it for patient care or clinical decisions.
