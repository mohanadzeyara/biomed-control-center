from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

from .demo_data import get_alerts, get_devices, get_learning_notes, get_recent_analyses
from .ecg import generate_ecg

app = FastAPI(title="BioMed Control Center API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:4173",
        "http://127.0.0.1:4173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "name": "BioMed Control Center API",
        "message": "Educational demo data only. Not for diagnosis.",
    }


@app.get("/api/dashboard")
def dashboard():
    devices = get_devices()
    alerts = get_alerts()
    analyses = get_recent_analyses()
    online_count = len([device for device in devices if device["status"] == "Online"])
    average_health = round(sum(device["health_score"] for device in devices) / len(devices))

    return {
        "summary": {
            "devices": len(devices),
            "online": online_count,
            "alerts": len(alerts),
            "average_health": average_health,
        },
        "devices": devices,
        "alerts": alerts,
        "recent_analyses": analyses,
    }


@app.get("/api/devices")
def devices():
    return get_devices()


@app.get("/api/learning")
def learning():
    return get_learning_notes()


@app.get("/api/ecg/generate")
def ecg_generate(
    seconds: int = Query(8, ge=4, le=20),
    bpm: int = Query(74, ge=45, le=150),
):
    return generate_ecg(seconds=seconds, bpm=bpm)
