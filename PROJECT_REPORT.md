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

- `App.tsx`
- `DeviceExplorer.tsx`
- `DeviceModel.tsx`
- `ProcessDemo.tsx`
- `EcgPanel.tsx`
- `api.ts`
- `devices.ts`
- `styles.css`

The frontend includes:

- MedTech Device Explorer landing experience
- Device library for ECG, CT, ultrasound, X-ray, MRI, infusion pump, ventilator, defibrillator, hemodialysis, and video endoscope
- Clickable/movable 3D teaching models built with Three.js
- Part-by-part explanations for device subsystems
- Separate pages for each device with more room for lessons
- English/German language switch
- Dark mode
- Electrotechnics explanations for each important part
- Animated workflow clips for how the device is used or how the signal/image is produced
- Before/after processing demos for signals and images
- Engineering Deep Dive sections for field generation, signal acquisition, analog front ends, filtering, reconstruction, and safety logic
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

## 2026-05-11 Upgrade Pass

The extracted zip was flattened, so imports and TypeScript include paths were adjusted to match the current file layout. The 3D models were upgraded from simple symbolic blocks into richer procedural assemblies using Three.js primitives, tube curves, translucent cones, coils, patient/table silhouettes, and layered device shells. This keeps the project free because it does not depend on paid model libraries or purchased GLB assets.

Added deeper biomedical-electrotechnics content for:

- ECG: electrode interface, analog front end, instrumentation amplifier, CMRR, filtering, ADC, R-peak reading
- CT: high-voltage tube generation, detector signal chain, reconstruction, filtering, windowing
- Ultrasound: piezoelectric transmit/receive, beamforming, echo timing, time-gain compensation, speckle reduction
- X-ray: cathode/anode physics, detector readout, flat-field correction, contrast/noise tradeoffs
- MRI: B0 alignment, RF excitation, Faraday receive signal, gradient encoding, k-space, Fourier reconstruction, safety
- Infusion pump: motor control, pressure sensing, ADC/calibration/filtering, alarm and safety logic
- Ventilator: pressure/flow sensing, pneumatic control loops, trigger detection, leak compensation, and alarm logic
- Defibrillator: ECG front end, defibrillation protection, high-voltage charging, capacitor energy, impedance checks, and biphasic shock switching
- Hemodialysis: roller pump control, pressure sensing, conductivity measurement, temperature control, membrane exchange, and safety clamps
- Video endoscope: illumination drivers, CMOS sensor readout, exposure, denoising, color correction, and real-time video processing

Private process notes were moved into `.private/PRIVATE_WORKLOG.cmd`, and `.gitignore` now excludes the local `.private/` folder plus private chat/worklog files.

Git and npm are not currently available on this machine PATH. That means the private notes are locally ignored, but I could not initialize or push a separate private Git repository from this shell yet.

## Verification

The backend Python files were previously checked with `py_compile` and passed syntax validation.

For this upgrade pass, system `npm` and `git` were not available on PATH. I downloaded a portable Node.js runtime into the ignored `.tools/` folder and used its npm to try dependency installation. The install repeatedly timed out and then failed in the `esbuild` install script with a Windows `Access is denied` error. I stopped the remaining Node processes so no background install was left running. I performed static import checks and found no remaining stale `../data`, `./data`, or `./components` imports.

## What Could Be Added Next

- MongoDB storage for devices and analyses
- Better filtering with SciPy
- WebSocket live data streaming
- PDF report export
- Medical image annotation canvas
- Authentication for student/admin roles
- Docker setup
- Unit tests and API tests
- Optional free public GLB workflow using Blender-created models or openly licensed models with attribution
- Course-aligned content import from your PDFs for Grundlagen der Elektrotechnik, Anatomie, Medizintechnik 1, and Medizintechnik 2

## 2026-05-11 Real Photo and Samsung-Style Pass

The newest update responds to the feedback that the previous visual system still looked too animated and did not yet feel like a Samsung-style product page. I checked Samsung's Galaxy Z Fold7 product page as a design reference: it uses large real product imagery, feature highlights, close-up visual sections, comparison/story sections, and a sticky section rhythm. The MedTech page now moves in that direction while staying educational.

Changes added in this pass:

- Reduced the main page side margins from a narrow centered layout to a wider 1500px content shell.
- Replaced the CSS-drawn device pictures with realistic machine photos from free/public web sources, with fallback images if a source fails.
- Kept clickable labels on top of the real photos so each device still works as an engineering part explorer.
- Replaced the ECG flagship hero's drawn monitor with a real intensive-care monitor photo.
- Kept ECG's four study categories visible: machine photo + parts, how it works, before/after results, and GET 1/2.
- Moved the ECG analysis lab into its own ECG-only section so it is no longer visually mixed into the shared device tabs.
- Updated README text so it no longer promises 3D models where the project now intentionally uses clearer realistic machine photos.
- Added this report note and a `CHAT_SUMMARY.cmd` helper so the local update history is preserved instead of overwritten.

Design direction after this pass:

The ECG monitor is still the flagship page. It should feel like a product/story page first, then a study lab second: real hero image, highlights, signal chain, close-up engineering explanations, mini report, dedicated ECG lab, and finally the normal reusable device categories.

## 2026-05-11 Claude Feedback Implementation Pass

After reviewing external feedback, the next pass focused on closing the gap between strong educational content and weaker visual presentation.

Updates added:

- Added a stronger typography system: Syne for headings and DM Sans for body/UI text.
- Added real medical-device thumbnails to every homepage card so users see the machine before opening the page.
- Replaced the main device image sources with direct `upload.wikimedia.org` media URLs instead of `Special:FilePath` redirects.
- Added pulsing hotspot dots and a visible "tap a label" instruction so the photo interaction is easier to discover.
- Added `aria-label` text to key interactive controls such as hotspots, study tabs, and process playback buttons.
- Introduced design tokens for accent colors, card shadows, and sticky header offset to make light/dark mode and sticky tabs more consistent.
- Improved the homepage card visual hierarchy with taller photo-led cards, hover lift, and clearer premium product-page styling.

Remaining good next steps:

- Split `devices.ts` into per-device content files.
- Extract ECG story sections out of `DeviceExplorer.tsx`.
- Replace the homepage storyboard with a richer animated walkthrough.
- Continue removing hardcoded colors from older dashboard styles.
