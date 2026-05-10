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
    scene.background = new THREE.Color(getComputedStyle(document.documentElement).getPropertyValue('--canvas-bg').trim() || '#f8fafc');

    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(5.1, 3.8, 7.4);

    const renderer = new THREE.WebGLRenderer({ canvas: activeCanvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const group = new THREE.Group();
    scene.add(group);

    scene.add(new THREE.HemisphereLight(0xffffff, 0x64748b, 2.2));
    const key = new THREE.DirectionalLight(0xffffff, 2.8);
    key.position.set(5, 6, 4);
    scene.add(key);

    const parts = buildModel(device, group);
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let dragging = false;
    let lastX = 0;
    let frame = 0;

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
      requestAnimationFrame(animate);
    }

    resize();
    animate();

    return () => {
      activeCanvas.removeEventListener('pointerdown', onPointerDown);
      activeCanvas.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', resize);
      renderer.dispose();
    };
  }, [device, onSelectPart, selectedPartId]);

  return <canvas ref={canvasRef} className="device-canvas" aria-label="interactive 3D teaching model" />;
}

function mat(color: number) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.48, metalness: 0.12 });
}

function box(id: string, color: number, position: [number, number, number], scale: [number, number, number]) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(scale[0], scale[1], scale[2]), mat(color)) as PartMesh;
  mesh.position.set(...position);
  mesh.userData.partId = id;
  return mesh;
}

function cyl(id: string, color: number, position: [number, number, number], radius: number, depth: number, axis: 'x' | 'y' | 'z' = 'y') {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, depth, 48), mat(color)) as PartMesh;
  mesh.position.set(...position);
  if (axis === 'x') mesh.rotation.z = Math.PI / 2;
  if (axis === 'z') mesh.rotation.x = Math.PI / 2;
  mesh.userData.partId = id;
  return mesh;
}

function torus(id: string, color: number, position: [number, number, number], major: number, tube: number) {
  const mesh = new THREE.Mesh(new THREE.TorusGeometry(major, tube, 20, 80), mat(color)) as PartMesh;
  mesh.position.set(...position);
  mesh.rotation.y = Math.PI / 2;
  mesh.userData.partId = id;
  return mesh;
}

function add(group: THREE.Group, parts: PartMesh[], mesh: PartMesh) {
  parts.push(mesh);
  group.add(mesh);
}

function buildModel(device: LearningDevice, group: THREE.Group) {
  const parts: PartMesh[] = [];

  if (device.model === 'ecg') {
    add(group, parts, box('screen', 0x111827, [0, 0.95, -0.52], [2.2, 1.05, 0.12]));
    add(group, parts, box('amplifier', 0x38bdf8, [-0.62, -0.15, -0.55], [0.72, 0.36, 0.16]));
    add(group, parts, box('filter', 0x14b8a6, [0.18, -0.15, -0.55], [0.72, 0.36, 0.16]));
    add(group, parts, box('adc', 0xf97316, [0.98, -0.15, -0.55], [0.5, 0.36, 0.16]));
    add(group, parts, box('leads', 0x64748b, [1.75, -0.6, -0.1], [0.14, 1.55, 0.14]));
    add(group, parts, cyl('electrodes', 0xef4444, [2.05, -1.45, -0.1], 0.24, 0.08, 'z'));
    add(group, parts, box('screen', 0xe2e8f0, [0, 0, 0], [2.7, 2.2, 0.78]));
  } else if (device.model === 'ct') {
    add(group, parts, torus('gantry', 0xbfdbfe, [0, 0.35, 0], 1.45, 0.28));
    add(group, parts, cyl('detectors', 0x38bdf8, [0, 0.35, 0], 1.18, 0.28, 'z'));
    add(group, parts, cyl('tube', 0xf97316, [0, 1.9, 0], 0.22, 0.65, 'z'));
    add(group, parts, box('table', 0x94a3b8, [0, -0.72, 0], [4.1, 0.22, 0.78]));
    add(group, parts, box('console', 0x111827, [-2.75, 0.35, -0.5], [0.75, 0.8, 0.18]));
  } else if (device.model === 'ultrasound') {
    add(group, parts, box('console', 0xdbeafe, [0, -0.15, 0], [2.0, 1.55, 0.9]));
    add(group, parts, box('screen', 0x111827, [0, 1.35, -0.06], [2.05, 1.08, 0.14]));
    add(group, parts, cyl('probe', 0x0f766e, [2.1, -0.15, 0], 0.28, 1.32, 'y'));
    add(group, parts, box('crystals', 0xfacc15, [2.1, -0.9, 0], [0.75, 0.12, 0.35]));
    add(group, parts, cyl('beam', 0x38bdf8, [2.1, -1.55, 0], 0.55, 1.2, 'y'));
  } else if (device.model === 'xray') {
    add(group, parts, box('detector', 0xe2e8f0, [1.7, 0, 0], [0.22, 2.6, 2.05]));
    add(group, parts, box('grid', 0x94a3b8, [1.48, 0, 0], [0.08, 2.3, 1.75]));
    add(group, parts, box('cathode', 0x38bdf8, [-2.05, 0.9, 0], [0.42, 0.45, 0.5]));
    add(group, parts, box('anode', 0xf97316, [-1.35, 0.9, 0], [0.52, 0.52, 0.58]));
    add(group, parts, cyl('collimator', 0x334155, [-0.78, 0.35, 0], 0.34, 0.82, 'x'));
  } else if (device.model === 'mri') {
    add(group, parts, torus('bore', 0xc7d2fe, [0, 0.35, 0], 1.62, 0.32));
    add(group, parts, torus('rfcoil', 0x7c3aed, [0, 0.35, 0.02], 0.96, 0.1));
    add(group, parts, torus('gradients', 0x38bdf8, [0, 0.35, -0.02], 1.22, 0.08));
    add(group, parts, box('table', 0x94a3b8, [0, -0.78, 0], [4.1, 0.22, 0.8]));
  } else {
    add(group, parts, box('screen', 0x111827, [0, 0.9, -0.5], [1.35, 0.58, 0.12]));
    add(group, parts, box('cassette', 0xdbeafe, [-0.2, -0.05, -0.52], [1.25, 0.85, 0.16]));
    add(group, parts, cyl('motor', 0x0f766e, [0.72, -0.82, 0], 0.32, 0.5, 'z'));
    add(group, parts, box('pressure', 0xf97316, [-0.9, -0.76, -0.35], [0.45, 0.28, 0.18]));
    add(group, parts, box('screen', 0xe2e8f0, [0, 0, 0], [2, 2.45, 0.75]));
  }

  const base = box('__base', 0xcbd5e1, [0, -1.95, 0], [4.8, 0.08, 2.4]);
  base.userData.partId = undefined;
  group.add(base);
  return parts;
}
