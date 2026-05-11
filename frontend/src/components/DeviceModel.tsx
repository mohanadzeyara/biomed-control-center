import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { LearningDevice } from '../data/devices';

type Props = {
  device: LearningDevice;
  selectedPartId: string;
  onSelectPart: (partId: string) => void;
};

type PartMesh = THREE.Mesh & { userData: { partId?: string } };

export default function DeviceModel({ device, selectedPartId, onSelectPart }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const activeCanvas = canvas;

    const scene = new THREE.Scene();
    const canvasColor = getComputedStyle(document.documentElement).getPropertyValue('--canvas-bg').trim() || '#f8fafc';
    scene.background = new THREE.Color(canvasColor);
    scene.fog = new THREE.Fog(new THREE.Color(canvasColor), 9, 16);

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(5.4, 3.9, 7.2);

    const renderer = new THREE.WebGLRenderer({ canvas: activeCanvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const group = new THREE.Group();
    scene.add(group);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x64748b, 2.4));
    const key = new THREE.DirectionalLight(0xffffff, 2.8);
    key.position.set(5, 6, 4);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x99f6e4, 1.2);
    rim.position.set(-4, 3, -5);
    scene.add(rim);
    const fill = new THREE.PointLight(0x38bdf8, 0.9, 12);
    fill.position.set(0, 2.8, 3.5);
    scene.add(fill);

    const parts = buildModel(device, group);
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let dragging = false;
    let lastX = 0;
    let frame = 0;
    let animationId = 0;

    function resize() {
      const width = activeCanvas.clientWidth;
      const height = activeCanvas.clientHeight;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    function selectPart(event: PointerEvent) {
      const rect = activeCanvas.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(parts, false)[0]?.object as PartMesh | undefined;

      if (hit?.userData.partId) {
        onSelectPart(hit.userData.partId);
      }
    }

    function onPointerDown(event: PointerEvent) {
      dragging = true;
      lastX = event.clientX;
      selectPart(event);
    }

    function onPointerMove(event: PointerEvent) {
      if (!dragging) {
        return;
      }
      group.rotation.y += (event.clientX - lastX) * 0.01;
      lastX = event.clientX;
    }

    function onPointerUp() {
      dragging = false;
    }

    activeCanvas.addEventListener('pointerdown', onPointerDown);
    activeCanvas.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('resize', resize);

    function animate() {
      frame += 1;
      for (const mesh of parts) {
        const isSelected = mesh.userData.partId === selectedPartId;
        const material = mesh.material as THREE.MeshStandardMaterial;
        material.emissive.set(isSelected ? 0x14b8a6 : 0x000000);
        material.emissiveIntensity = isSelected ? 0.35 + Math.sin(frame * 0.08) * 0.08 : 0;
      }
      group.rotation.y += dragging ? 0 : 0.0018;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    }

    resize();
    animate();

    return () => {
      activeCanvas.removeEventListener('pointerdown', onPointerDown);
      activeCanvas.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
      group.traverse((object) => {
        const mesh = object as THREE.Mesh;
        mesh.geometry?.dispose();
        const material = mesh.material;
        if (Array.isArray(material)) {
          material.forEach((item) => item.dispose());
        } else {
          material?.dispose();
        }
      });
      renderer.dispose();
    };
  }, [device, onSelectPart, selectedPartId]);

  return <canvas ref={canvasRef} className="device-canvas" aria-label="interactive 3D teaching model" />;
}

function mat(color: number, options: { metalness?: number; roughness?: number; opacity?: number; emissive?: number } = {}) {
  return new THREE.MeshStandardMaterial({
    color,
    roughness: options.roughness ?? 0.48,
    metalness: options.metalness ?? 0.12,
    transparent: options.opacity !== undefined && options.opacity < 1,
    opacity: options.opacity ?? 1,
    emissive: options.emissive ?? 0x000000,
  });
}

function box(id: string, color: number, position: [number, number, number], scale: [number, number, number], opacity = 1) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(scale[0], scale[1], scale[2]), mat(color, { opacity })) as PartMesh;
  mesh.position.set(...position);
  mesh.userData.partId = id;
  return mesh;
}

function cyl(id: string, color: number, position: [number, number, number], radius: number, depth: number, axis: 'x' | 'y' | 'z' = 'y', opacity = 1) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, depth, 64), mat(color, { opacity, metalness: 0.18 })) as PartMesh;
  mesh.position.set(...position);
  if (axis === 'x') mesh.rotation.z = Math.PI / 2;
  if (axis === 'z') mesh.rotation.x = Math.PI / 2;
  mesh.userData.partId = id;
  return mesh;
}

function torus(id: string, color: number, position: [number, number, number], major: number, tube: number, opacity = 1) {
  const mesh = new THREE.Mesh(new THREE.TorusGeometry(major, tube, 24, 96), mat(color, { opacity, metalness: 0.16 })) as PartMesh;
  mesh.position.set(...position);
  mesh.rotation.y = Math.PI / 2;
  mesh.userData.partId = id;
  return mesh;
}

function sphere(id: string, color: number, position: [number, number, number], radius: number, scale: [number, number, number] = [1, 1, 1], opacity = 1) {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 48, 24), mat(color, { opacity })) as PartMesh;
  mesh.position.set(...position);
  mesh.scale.set(...scale);
  mesh.userData.partId = id;
  return mesh;
}

function cone(id: string, color: number, position: [number, number, number], radius: number, height: number, axis: 'x' | 'y' | 'z' = 'y', opacity = 1) {
  const mesh = new THREE.Mesh(new THREE.ConeGeometry(radius, height, 64, 1, true), mat(color, { opacity })) as PartMesh;
  mesh.position.set(...position);
  if (axis === 'x') mesh.rotation.z = -Math.PI / 2;
  if (axis === 'z') mesh.rotation.x = Math.PI / 2;
  mesh.userData.partId = id;
  return mesh;
}

function tube(id: string, color: number, points: Array<[number, number, number]>, radius = 0.035, opacity = 1) {
  const curve = new THREE.CatmullRomCurve3(points.map((point) => new THREE.Vector3(...point)));
  const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 64, radius, 12, false), mat(color, { opacity, roughness: 0.38 })) as PartMesh;
  mesh.userData.partId = id;
  return mesh;
}

function add(group: THREE.Group, parts: PartMesh[], mesh: PartMesh) {
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(mesh.geometry, 28),
    new THREE.LineBasicMaterial({ color: 0x0f172a, transparent: true, opacity: 0.18 }),
  );
  mesh.add(edges);
  parts.push(mesh);
  group.add(mesh);
}

function buildModel(device: LearningDevice, group: THREE.Group) {
  const parts: PartMesh[] = [];

  if (device.model === 'ecg') {
    add(group, parts, box('screen', 0x0f172a, [0, 1.05, -0.52], [2.25, 1.08, 0.12]));
    add(group, parts, box('screen', 0xdbeafe, [0, 0.02, 0], [2.85, 2.32, 0.8], 0.9));
    add(group, parts, box('amplifier', 0x38bdf8, [-0.72, -0.25, -0.55], [0.62, 0.32, 0.16]));
    add(group, parts, box('filter', 0x14b8a6, [0.04, -0.25, -0.55], [0.62, 0.32, 0.16]));
    add(group, parts, box('adc', 0xf97316, [0.76, -0.25, -0.55], [0.46, 0.32, 0.16]));
    add(group, parts, tube('leads', 0x475569, [[1.22, -0.55, -0.18], [1.75, -0.95, 0.18], [2.35, -1.15, 0.05]], 0.04));
    add(group, parts, tube('leads', 0x475569, [[1.18, -0.46, -0.2], [1.7, -0.35, 0.2], [2.25, -0.7, 0.45]], 0.032));
    add(group, parts, cyl('electrodes', 0xef4444, [2.45, -1.18, 0.05], 0.22, 0.08, 'z'));
    add(group, parts, cyl('electrodes', 0xf97316, [2.35, -0.7, 0.45], 0.18, 0.07, 'z'));
  } else if (device.model === 'ct') {
    add(group, parts, torus('gantry', 0xcbd5e1, [0, 0.35, 0], 1.55, 0.32));
    add(group, parts, torus('detectors', 0x38bdf8, [0, 0.35, 0.04], 1.12, 0.08, 0.82));
    add(group, parts, cyl('tube', 0xf97316, [0.08, 1.78, 0.02], 0.22, 0.7, 'z'));
    add(group, parts, cone('tube', 0xf59e0b, [0.08, 1.15, 0.02], 0.72, 0.72, 'y', 0.26));
    add(group, parts, box('table', 0x94a3b8, [0, -0.72, 0], [4.35, 0.2, 0.78]));
    add(group, parts, sphere('table', 0xe2e8f0, [-0.15, -0.45, 0], 0.45, [2.4, 0.25, 0.72], 0.62));
    add(group, parts, box('console', 0x111827, [-2.9, 0.32, -0.62], [0.78, 0.82, 0.18]));
  } else if (device.model === 'ultrasound') {
    add(group, parts, box('console', 0xdbeafe, [0, -0.18, 0], [2.05, 1.5, 0.92]));
    add(group, parts, box('screen', 0x0f172a, [0, 1.35, -0.08], [2.08, 1.08, 0.14]));
    add(group, parts, box('console', 0xe2e8f0, [0, 0.15, -0.55], [1.55, 0.28, 0.08]));
    add(group, parts, tube('probe', 0x334155, [[0.86, -0.42, 0.15], [1.35, -0.65, 0.5], [1.95, -0.22, 0.38]], 0.04));
    add(group, parts, cyl('probe', 0x0f766e, [2.18, -0.2, 0.28], 0.26, 1.1, 'y'));
    add(group, parts, box('crystals', 0xfacc15, [2.18, -0.82, 0.28], [0.72, 0.12, 0.35]));
    add(group, parts, cone('beam', 0x38bdf8, [2.18, -1.45, 0.28], 0.62, 1.3, 'y', 0.24));
  } else if (device.model === 'xray') {
    add(group, parts, box('detector', 0xe2e8f0, [1.78, 0, 0], [0.22, 2.65, 2.05]));
    add(group, parts, box('grid', 0x94a3b8, [1.5, 0, 0], [0.08, 2.35, 1.78], 0.76));
    add(group, parts, cyl('cathode', 0x38bdf8, [-2.1, 0.92, 0], 0.25, 0.44, 'z'));
    add(group, parts, cyl('anode', 0xf97316, [-1.42, 0.92, 0], 0.34, 0.22, 'z'));
    add(group, parts, cyl('collimator', 0x334155, [-0.8, 0.35, 0], 0.34, 0.82, 'x'));
    add(group, parts, cone('collimator', 0xfacc15, [0.25, 0.18, 0], 1.0, 2.0, 'x', 0.18));
  } else if (device.model === 'mri') {
    add(group, parts, torus('bore', 0xc7d2fe, [0, 0.35, 0], 1.68, 0.36));
    add(group, parts, torus('gradients', 0x38bdf8, [0, 0.35, -0.03], 1.28, 0.08, 0.86));
    add(group, parts, torus('rfcoil', 0x7c3aed, [0, 0.35, 0.04], 0.92, 0.095, 0.9));
    add(group, parts, cyl('bore', 0xe0e7ff, [0, 0.35, 0], 0.88, 1.65, 'z', 0.28));
    add(group, parts, box('table', 0x94a3b8, [0, -0.78, 0], [4.2, 0.22, 0.8]));
    add(group, parts, sphere('table', 0xe2e8f0, [-0.15, -0.52, 0], 0.45, [2.6, 0.28, 0.72], 0.62));
  } else if (device.model === 'ventilator') {
    add(group, parts, box('screen', 0x0f172a, [-0.25, 1.12, -0.48], [1.55, 0.72, 0.12]));
    add(group, parts, box('blower', 0xdbeafe, [-0.25, -0.1, 0], [2.1, 1.65, 0.9], 0.92));
    add(group, parts, cyl('blower', 0x38bdf8, [-0.9, -0.2, -0.55], 0.32, 0.18, 'z'));
    add(group, parts, box('sensors', 0xf97316, [0.72, -0.2, -0.55], [0.58, 0.28, 0.16]));
    add(group, parts, tube('tubing', 0x14b8a6, [[0.88, -0.25, -0.2], [1.55, -0.4, 0.45], [2.05, -0.9, 0.28], [2.55, -0.82, 0.04]], 0.06, 0.78));
    add(group, parts, sphere('tubing', 0xe2e8f0, [2.7, -0.82, 0.02], 0.28, [1.25, 0.55, 0.75], 0.55));
  } else if (device.model === 'defib') {
    add(group, parts, box('screen', 0x0f172a, [-0.42, 0.84, -0.52], [1.28, 0.62, 0.12]));
    add(group, parts, box('charger', 0xe2e8f0, [0, 0, 0], [2.25, 1.75, 0.85], 0.94));
    add(group, parts, box('capacitor', 0xf97316, [0.68, -0.15, -0.55], [0.52, 0.72, 0.18]));
    add(group, parts, cyl('capacitor', 0xf59e0b, [0.05, -0.26, -0.55], 0.22, 0.46, 'z'));
    add(group, parts, tube('pads', 0x475569, [[0.72, -0.55, -0.25], [1.38, -0.92, 0.24], [2.08, -1.1, 0.04]], 0.042));
    add(group, parts, tube('pads', 0x475569, [[0.45, -0.54, -0.28], [1.18, -0.62, 0.52], [1.9, -0.42, 0.6]], 0.042));
    add(group, parts, box('pads', 0xef4444, [2.18, -1.12, 0.04], [0.55, 0.18, 0.42]));
    add(group, parts, box('pads', 0x38bdf8, [2.0, -0.42, 0.6], [0.48, 0.16, 0.36]));
  } else if (device.model === 'dialysis') {
    add(group, parts, box('screen', 0x0f172a, [-0.42, 1.2, -0.5], [1.32, 0.68, 0.12]));
    add(group, parts, box('sensors', 0xe2e8f0, [0, 0.05, 0], [2.2, 2.15, 0.82], 0.92));
    add(group, parts, cyl('pump', 0x0f766e, [-0.72, 0.05, -0.56], 0.42, 0.2, 'z'));
    add(group, parts, cyl('dialyzer', 0x38bdf8, [0.85, -0.1, -0.55], 0.2, 1.1, 'y', 0.85));
    add(group, parts, tube('pump', 0xef4444, [[-1.15, -0.1, -0.5], [-0.72, -0.52, -0.58], [0.85, -0.72, -0.55], [1.35, -0.25, -0.5]], 0.045));
    add(group, parts, tube('dialyzer', 0x14b8a6, [[0.85, 0.5, -0.55], [1.28, 0.72, -0.25], [1.52, 0.3, 0.35]], 0.04));
    add(group, parts, box('sensors', 0xf97316, [-0.35, -0.82, -0.55], [0.52, 0.22, 0.16]));
  } else if (device.model === 'endoscope') {
    add(group, parts, cyl('handle', 0xdbeafe, [-1.12, -0.12, 0], 0.34, 1.35, 'y', 0.95));
    add(group, parts, box('processor', 0x0f172a, [-1.12, 0.78, -0.28], [0.82, 0.38, 0.12]));
    add(group, parts, tube('sensor', 0x334155, [[-0.85, -0.42, 0.12], [-0.12, -0.72, 0.34], [0.8, -0.6, 0.18], [1.7, -0.28, 0.05]], 0.065));
    add(group, parts, cyl('sensor', 0x38bdf8, [1.88, -0.22, 0.04], 0.16, 0.16, 'x'));
    add(group, parts, cone('light', 0xfacc15, [2.26, -0.22, 0.04], 0.52, 0.78, 'x', 0.22));
    add(group, parts, box('light', 0xf97316, [-0.95, -0.72, -0.26], [0.42, 0.22, 0.16]));
    add(group, parts, box('processor', 0xe2e8f0, [-2.1, 0.1, -0.36], [0.95, 0.68, 0.18]));
  } else {
    add(group, parts, box('screen', 0x111827, [0, 0.95, -0.5], [1.35, 0.58, 0.12]));
    add(group, parts, box('cassette', 0xdbeafe, [-0.2, -0.05, -0.52], [1.25, 0.85, 0.16]));
    add(group, parts, tube('cassette', 0x38bdf8, [[-1.1, -0.58, -0.52], [-0.38, -0.25, -0.62], [0.5, -0.42, -0.55]], 0.035));
    add(group, parts, cyl('motor', 0x0f766e, [0.72, -0.82, 0], 0.32, 0.5, 'z'));
    add(group, parts, box('pressure', 0xf97316, [-0.9, -0.76, -0.35], [0.45, 0.28, 0.18]));
    add(group, parts, box('screen', 0xe2e8f0, [0, 0, 0], [2, 2.45, 0.75], 0.92));
  }

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(3.05, 96),
    mat(0xe2e8f0, { roughness: 0.76, opacity: 0.72 }),
  );
  floor.position.set(0, -2.02, 0);
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  group.add(floor);

  const base = box('__base', 0xcbd5e1, [0, -1.95, 0], [4.8, 0.08, 2.4]);
  base.receiveShadow = true;
  base.userData.partId = undefined;
  group.add(base);
  return parts;
}
