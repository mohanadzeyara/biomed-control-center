from datetime import datetime, timedelta


def get_devices():
    return [
        {
            "id": "infusion-01",
            "name": "Infusion Pump A1",
            "type": "Infusion Pump",
            "location": "Skills Lab",
            "status": "Online",
            "health_score": 92,
            "battery": 78,
            "last_service": "2026-04-12",
            "next_service": "2026-06-12",
        },
        {
            "id": "ecg-02",
            "name": "ECG Monitor E2",
            "type": "ECG Monitor",
            "location": "Simulation Room",
            "status": "Online",
            "health_score": 87,
            "battery": 64,
            "last_service": "2026-03-22",
            "next_service": "2026-05-28",
        },
        {
            "id": "vent-03",
            "name": "Ventilator V3",
            "type": "Ventilator",
            "location": "Demo ICU",
            "status": "Needs Check",
            "health_score": 71,
            "battery": 42,
            "last_service": "2026-02-14",
            "next_service": "2026-05-18",
        },
    ]


def get_alerts():
    return [
        {
            "id": "alert-1",
            "level": "Medium",
            "message": "Ventilator V3 battery is below 50 percent.",
            "device": "Ventilator V3",
            "time": "10 min ago",
        },
        {
            "id": "alert-2",
            "level": "Low",
            "message": "ECG Monitor E2 service date is approaching.",
            "device": "ECG Monitor E2",
            "time": "32 min ago",
        },
    ]


def get_recent_analyses():
    now = datetime.now()
    return [
        {
            "id": "analysis-1",
            "name": "Generated ECG Demo",
            "heart_rate": 74,
            "result": "Normal educational sample",
            "created_at": (now - timedelta(minutes=12)).isoformat(timespec="minutes"),
        },
        {
            "id": "analysis-2",
            "name": "Simulated Lab Sensor Check",
            "heart_rate": 81,
            "result": "Slightly noisy signal",
            "created_at": (now - timedelta(hours=1)).isoformat(timespec="minutes"),
        },
    ]


def get_learning_notes():
    return [
        {
            "title": "ECG signal",
            "body": "An ECG is a voltage signal that shows electrical activity of the heart. This demo generates simple synthetic waves.",
        },
        {
            "title": "R peaks",
            "body": "R peaks are the tall points in the QRS complex. The time between peaks can estimate heart rate.",
        },
        {
            "title": "Device health",
            "body": "A digital twin can combine status, battery, maintenance dates, and warnings to explain device condition.",
        },
    ]
