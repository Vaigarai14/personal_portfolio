import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Skills3DOrbit() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Create a 3D Sphere of Icosahedron Wireframe & Points
    const sphereGroup = new THREE.Group();

    // 1. Wireframe globe
    const icosaGeom = new THREE.IcosahedronGeometry(18, 3);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x4facfe,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const globe = new THREE.Mesh(icosaGeom, wireMat);
    sphereGroup.add(globe);

    // 2. Node points
    const pointsGeom = new THREE.IcosahedronGeometry(18, 3);
    const pointsMat = new THREE.PointsMaterial({
      color: 0x00f2fe,
      size: 0.9,
      transparent: true,
      opacity: 0.85,
    });
    const nodePoints = new THREE.Points(pointsGeom, pointsMat);
    sphereGroup.add(nodePoints);

    // 3. Core glowing octahedron
    const coreGeom = new THREE.OctahedronGeometry(6, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x9d4edd,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const core = new THREE.Mesh(coreGeom, coreMat);
    sphereGroup.add(core);

    // 4. Orbiting satellite rings
    const ringGeom = new THREE.TorusGeometry(24, 0.2, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff007f,
      transparent: true,
      opacity: 0.4,
    });
    const torus = new THREE.Mesh(ringGeom, ringMat);
    torus.rotation.x = Math.PI / 3;
    sphereGroup.add(torus);

    scene.add(sphereGroup);

    // Mouse Interaction for dragging / rotating
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationX = 0;
    let targetRotationY = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        targetRotationY += deltaX * 0.005;
        targetRotationX += deltaY * 0.005;

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    currentMount.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch support
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onTouchMove = (e) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.y;
        targetRotationY += deltaX * 0.005;
        targetRotationX += deltaY * 0.005;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    currentMount.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      // Constant gentle rotation
      targetRotationY += 0.003;
      core.rotation.y -= 0.008;
      core.rotation.x += 0.005;
      torus.rotation.z += 0.004;

      // Smooth interpolation
      sphereGroup.rotation.y += (targetRotationY - sphereGroup.rotation.y) * 0.05;
      sphereGroup.rotation.x += (targetRotationX - sphereGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      currentMount.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      currentMount.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      icosaGeom.dispose();
      wireMat.dispose();
      pointsGeom.dispose();
      pointsMat.dispose();
      coreGeom.dispose();
      coreMat.dispose();
      ringGeom.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none">
      <div ref={mountRef} className="w-full h-full" />
      <div className="absolute bottom-2 text-xs text-cyan-400/70 font-mono tracking-wider pointer-events-none bg-black/40 px-3 py-1 rounded-full border border-cyan-400/20">
        🖱️ Drag to rotate 3D core
      </div>
    </div>
  );
}
