import math
from typing import Any

import numpy as np


def generate_ecg(seconds: int = 8, sample_rate: int = 250, bpm: int = 74) -> dict[str, Any]:
    seconds = max(4, min(seconds, 20))
    sample_rate = max(100, min(sample_rate, 500))
    bpm = max(45, min(bpm, 150))

    total_samples = seconds * sample_rate
    t = np.linspace(0, seconds, total_samples)
    signal = 0.04 * np.sin(2 * math.pi * 0.35 * t)
    signal += 0.02 * np.sin(2 * math.pi * 8 * t)

    beat_interval = 60 / bpm
    r_times = np.arange(0.7, seconds, beat_interval)

    for r_time in r_times:
        signal += 1.15 * np.exp(-((t - r_time) ** 2) / 0.0009)
        signal -= 0.18 * np.exp(-((t - (r_time - 0.045)) ** 2) / 0.00035)
        signal -= 0.22 * np.exp(-((t - (r_time + 0.05)) ** 2) / 0.00045)
        signal += 0.12 * np.exp(-((t - (r_time - 0.18)) ** 2) / 0.004)
        signal += 0.28 * np.exp(-((t - (r_time + 0.26)) ** 2) / 0.01)

    noise = np.random.default_rng(7).normal(0, 0.015, total_samples)
    signal = signal + noise

    r_peaks = [int(round(r * sample_rate)) for r in r_times if r < seconds]
    calculated_hr = 0

    if len(r_times) > 1:
        average_gap = float(np.mean(np.diff(r_times)))
        calculated_hr = round(60 / average_gap)

    return {
        "sample_rate": sample_rate,
        "duration": seconds,
        "heart_rate": calculated_hr,
        "time": [round(float(x), 3) for x in t],
        "voltage": [round(float(x), 4) for x in signal],
        "r_peaks": r_peaks,
        "notes": "Synthetic ECG for biomedical engineering education only.",
    }
