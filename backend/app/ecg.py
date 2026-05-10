import math
from typing import Any

import numpy as np
from pydantic import BaseModel


class EcgAnalyzeRequest(BaseModel):
    time: list[float]
    voltage: list[float]
    sample_rate: int = 250
    apply_filter: bool = True
    name: str = "Uploaded ECG"


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


def smooth_signal(values: np.ndarray, window: int = 7) -> np.ndarray:
    if len(values) < window:
        return values

    kernel = np.ones(window) / window
    return np.convolve(values, kernel, mode="same")


def detect_r_peaks(values: np.ndarray, sample_rate: int) -> list[int]:
    if len(values) < 3:
        return []

    threshold = float(np.mean(values) + 0.65 * np.std(values))
    min_distance = max(1, int(sample_rate * 0.28))
    peaks: list[int] = []
    last_peak = -min_distance

    for index in range(1, len(values) - 1):
        is_peak = values[index] > values[index - 1] and values[index] > values[index + 1]
        far_enough = index - last_peak >= min_distance

        if is_peak and far_enough and values[index] > threshold:
            peaks.append(index)
            last_peak = index

    return peaks


def analyze_ecg(payload: EcgAnalyzeRequest) -> dict[str, Any]:
    sample_rate = max(50, min(payload.sample_rate, 1000))
    time = np.array(payload.time, dtype=float)
    voltage = np.array(payload.voltage, dtype=float)

    if len(voltage) != len(time):
        raise ValueError("Time and voltage arrays must have the same length.")

    if len(voltage) < 20:
        raise ValueError("ECG data needs at least 20 samples.")

    clean_voltage = smooth_signal(voltage) if payload.apply_filter else voltage
    r_peaks = detect_r_peaks(clean_voltage, sample_rate)
    heart_rate = 0

    if len(r_peaks) > 1:
        peak_times = np.array([time[index] for index in r_peaks])
        average_gap = float(np.mean(np.diff(peak_times)))
        if average_gap > 0:
            heart_rate = round(60 / average_gap)

    duration = round(float(time[-1] - time[0]), 3)
    noise_score = round(float(np.std(voltage - clean_voltage)), 4)

    return {
        "name": payload.name,
        "sample_rate": sample_rate,
        "duration": duration,
        "heart_rate": heart_rate,
        "time": [round(float(x), 4) for x in time],
        "voltage": [round(float(x), 4) for x in clean_voltage],
        "raw_voltage": [round(float(x), 4) for x in voltage],
        "r_peaks": r_peaks,
        "noise_score": noise_score,
        "filter_used": payload.apply_filter,
        "notes": "Educational ECG analysis only. Not for diagnosis.",
    }
