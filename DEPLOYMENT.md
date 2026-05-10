# Deployment Guide

## GitHub

1. Create a new empty GitHub repository named `biomed-control-center`.
2. Open a terminal in this project folder.
3. Run:

```bash
git init
git add .
git commit -m "Build Phase 1 BioMed Control Center"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/biomed-control-center.git
git push -u origin main
```

## Backend on Render

1. Create a new Web Service on Render.
2. Connect your GitHub repository.
3. Set root directory to `backend`.
4. Build command:

```bash
pip install -r requirements.txt
```

5. Start command:

```bash
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

6. Copy the backend URL after deployment.

## Frontend on Vercel

1. Create a new Vercel project.
2. Connect the same GitHub repository.
3. Set root directory to `frontend`.
4. Add this environment variable:

```text
VITE_API_URL=https://YOUR_RENDER_BACKEND_URL
```

5. Deploy.

## Local Testing

Run backend first:

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

Run frontend in a second terminal:

```bash
cd frontend
npm install
npm run dev
```
