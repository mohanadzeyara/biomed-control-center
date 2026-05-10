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
    scene.background = new THREE.Color(0xf8fafc);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(4.2, 3.2, 6.5);

    const renderer = new THREE.WebGLRenderer({ canvas: activeCanvas, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const group = new THREE.Group();
    scene.add(group);

    const light = new THREE.HemisphereLight(0xffffff, 0x64748b, 2.4);
    scene.add(light);
    const key = new THREE.DirectionalLight(0xffffff, 2.5);
    key.position.set(5, 6, 4);
    scene.add(key);

    const parts = buildModel(device, group);
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let dragging = false;
    let lastX = 0;

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
      for (const mesh of parts) {
        const isSelected = mesh.userData.partId === selectedPartId;
        const material = mesh.material as THREE.MeshStandardMaterial;
        material.emissive.set(isSelected ? 0x0f766e : 0x000000);
        material.emissiveIntensity = isSelected ? 0.22 : 0;
      }
      group.rotation.y += dragging ? 0 : 0.002;
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

  return <canvas ref={canvasRef} className="device-canvas" aria-label={`${device.name} interactive 3D model`} />;
}

function makeBox(partId: string, color: number, position: [number, number, number], scale: [number, number, number]) {
  const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(scale[0], scale[1], scale[2]),
    new THREE.MeshStandardMaterial({ color, roughness: 0.58, metalness: 0.1 }),
  ) as PartMesh;
  mesh.position.set(...position);
  mesh.userData.partId = partId;
  return mesh;
}

function makeCylinder(partId: string, color: number, position: [number, number, number], radius: number, depth: number, rotateX = false) {
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(radius, radius, depth, 48),
    new THREE.MeshStandardMaterial({ color, roughness: 0.5, metalness: 0.08 }),
  ) as PartMesh;
  mesh.position.set(...position);
  if (rotateX) {
    mesh.rotation.x = Math.PI / 2;
  }
  mesh.userData.partId = partId;
  return mesh;
}

function buildModel(device: LearningDevice, group: THREE.Group) {
  const parts: PartMesh[] = [];
  const add = (mesh: PartMesh) => {
    parts.push(mesh);
    group.add(mesh);
  };

  if (device.model === 'ct') {
    add(makeCylinder('gantry', 0xdbeafe, [0, 0.4, 0], 1.7, 0.55, true));
    add(makeCylinder('tube', 0xf97316, [0, 1.95, 0], 0.22, 0.55, true));
    add(makeBox('table', 0x94a3b8, [0, -0.55, 0], [3.9, 0.25, 0.82]));
  } else if (device.model === 'ultrasound') {
    add(makeBox('console', 0xe0f2fe, [0, 0, 0], [1.8, 1.5, 0.9]));
    add(makeBox('screen', 0x111827, [0, 1.35, -0.05], [1.9, 1.05, 0.16]));
    add(makeCylinder('probe', 0x0f766e, [2.0, -0.2, 0], 0.28, 1.35, false));
  } else if (device.model === 'xray') {
    add(makeBox('detector', 0xe2e8f0, [1.45, 0, 0], [0.22, 2.5, 2]));
    add(makeBox('tube', 0xf97316, [-1.55, 0.8, 0], [0.8, 0.55, 0.75]));
    add(makeCylinder('collimator', 0x334155, [-0.95, 0.35, 0], 0.32, 0.75, true));
  } else if (device.model === 'mri') {
    add(makeCylinder('bore', 0xe0e7ff, [0, 0.35, 0], 1.8, 1.2, true));
    add(makeCylinder('coil', 0x7c3aed, [0, 0.35, 0.05], 0.88, 1.32, true));
    add(makeBox('table', 0x94a3b8, [0, -0.75, 0], [3.8, 0.22, 0.8]));
  } else if (device.model === 'pump') {
    add(makeBox('screen', 0x111827, [0, 0.65, -0.05], [1.25, 0.55, 0.12]));
    add(makeBox('cassette', 0xdbeafe, [0, -0.1, -0.08], [1.1, 0.8, 0.16]));
    add(makeCylinder('motor', 0x0f766e, [0, -0.85, 0.05], 0.34, 0.5, true));
  } else {
    add(makeBox('body', 0xe2e8f0, [0, 0, 0], [2.2, 1.25, 0.75]));
    add(makeBox('screen', 0x111827, [0, 0.35, -0.42], [1.45, 0.62, 0.08]));
    add(makeCylinder(device.model === 'defib' ? 'paddles' : 'leads', 0x0f766e, [1.65, -0.2, 0], 0.18, 1.15, false));
  }

  return parts;
}
