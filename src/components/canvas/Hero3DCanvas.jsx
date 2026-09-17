import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 38);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // --- Studio Ambient Lighting ---
    const ambientLight = new THREE.AmbientLight(0x0a1128, 2.0);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x00f2fe, 3.5, 60);
    cyanLight.position.set(20, 15, 20);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0x9d4edd, 3.5, 60);
    purpleLight.position.set(-20, -15, 20);
    scene.add(purpleLight);

    // --- 1. Sleek Undulating Digital Wave Grid (Floor / Background) ---
    const gridCols = 45;
    const gridRows = 30;
    const gridGeometry = new THREE.PlaneGeometry(90, 60, gridCols - 1, gridRows - 1);
    
    // Wireframe Mesh with smooth glowing gradient
    const gridMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.14,
    });
    const waveGrid = new THREE.Mesh(gridGeometry, gridMaterial);
    waveGrid.rotation.x = -Math.PI / 2.6;
    waveGrid.position.set(0, -10, -5);
    scene.add(waveGrid);

    // --- 2. Floating Cyber Polyhedron & Orbital Tech Rings ---
    const centralGroup = new THREE.Group();
    centralGroup.position.set(0, 3, -4);
    scene.add(centralGroup);

    // Inner Glowing Icosahedron (Geometric Tech Core)
    const icoGeom = new THREE.IcosahedronGeometry(6.5, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const icosahedron = new THREE.Mesh(icoGeom, icoMat);
    centralGroup.add(icosahedron);

    // Subtle inner solid core with soft glow
    const coreGeom = new THREE.IcosahedronGeometry(4.2, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x110826,
      emissive: 0x9d4edd,
      emissiveIntensity: 0.6,
      roughness: 0.3,
      metalness: 0.8,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    centralGroup.add(coreMesh);

    // Orbital Ring 1 (Cyan Precision Ring)
    const ring1Geom = new THREE.TorusGeometry(10.5, 0.08, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x00f2fe,
      transparent: true,
      opacity: 0.45,
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    centralGroup.add(ring1);

    // Orbital Ring 2 (Purple Precision Ring)
    const ring2Geom = new THREE.TorusGeometry(12.5, 0.06, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x9d4edd,
      transparent: true,
      opacity: 0.35,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 6;
    centralGroup.add(ring2);

    // Orbital Ring 3 (Pink Accent Ring)
    const ring3Geom = new THREE.TorusGeometry(14.5, 0.04, 16, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0xff007f,
      transparent: true,
      opacity: 0.25,
    });
    const ring3 = new THREE.Mesh(ring3Geom, ring3Mat);
    ring3.rotation.x = Math.PI / 6;
    ring3.rotation.z = Math.PI / 4;
    centralGroup.add(ring3);

    // --- 3. Delicate Floating Cyber Dust Particles (Minimal & Unobtrusive) ---
    const starCount = 350; // Clean, sparse, crisp
    const starGeom = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const cyanColor = new THREE.Color(0x00f2fe);
    const purpleColor = new THREE.Color(0x9d4edd);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < starCount; i++) {
      const radius = THREE.MathUtils.randFloat(15, 65);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(-Math.PI / 2.2, Math.PI / 2.2);

      starPositions[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      starPositions[i * 3 + 1] = radius * Math.sin(phi);
      starPositions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi) - 10;

      const rand = Math.random();
      const col = rand > 0.6 ? cyanColor : (rand > 0.3 ? purpleColor : whiteColor);
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }

    starGeom.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeom.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.9,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const starPoints = new THREE.Points(starGeom, starMaterial);
    scene.add(starPoints);

    // --- Interactive Mouse Tracking with Spring Damping ---
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 2;
      targetY = (e.clientY / innerHeight - 0.5) * 2;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const { innerWidth, innerHeight } = window;
        targetX = (touch.clientX / innerWidth - 0.5) * 2;
        targetY = (touch.clientY / innerHeight - 0.5) * 2;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // Scroll Parallax Tracking
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // --- Animation Loop ---
    let animationFrameId;
    const clock = new THREE.Clock();
    const positionAttribute = gridGeometry.attributes.position;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth Spring Lerp for Cursor Parallax
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      // 1. Undulate the Cyber Wave Grid
      for (let i = 0; i < positionAttribute.count; i++) {
        const u = i % gridCols;
        const v = Math.floor(i / gridCols);
        const z =
          Math.sin(elapsedTime * 1.5 + u * 0.3) * 1.4 +
          Math.cos(elapsedTime * 1.2 + v * 0.4) * 1.2;
        positionAttribute.setZ(i, z);
      }
      positionAttribute.needsUpdate = true;

      // 2. Rotate Geometric Core & Orbital Rings
      icosahedron.rotation.x = elapsedTime * 0.25;
      icosahedron.rotation.y = elapsedTime * 0.35 + currentX * 0.5;
      coreMesh.rotation.x = -elapsedTime * 0.3;
      coreMesh.rotation.y = -elapsedTime * 0.2 + currentY * 0.4;

      ring1.rotation.z = elapsedTime * 0.3;
      ring1.rotation.y = elapsedTime * 0.2 + currentX * 0.3;

      ring2.rotation.z = -elapsedTime * 0.25;
      ring2.rotation.x = -Math.PI / 4 + currentY * 0.2;

      ring3.rotation.z = elapsedTime * 0.2;
      ring3.rotation.y = Math.PI / 6 - currentX * 0.2;

      // Central group subtle floating wave & scroll displacement
      centralGroup.position.y = 3 + Math.sin(elapsedTime * 1.4) * 0.6 - scrollY * 0.015;
      centralGroup.position.x = currentX * 1.5;

      // Starfield gentle rotation
      starPoints.rotation.y = elapsedTime * 0.02 + currentX * 0.05;
      starPoints.rotation.x = Math.sin(elapsedTime * 0.015) * 0.05 - currentY * 0.05;

      // Camera responsive micro-parallax
      camera.position.x = currentX * 2.0;
      camera.position.y = -currentY * 1.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // --- Responsive Resizing ---
    const handleResize = () => {
      if (!currentMount) return;
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      camera.aspect = width / height;

      if (width < 768) {
        camera.position.z = 46;
        centralGroup.scale.set(0.75, 0.75, 0.75);
      } else {
        camera.position.z = 38;
        centralGroup.scale.set(1.0, 1.0, 1.0);
      }

      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }

      gridGeometry.dispose();
      gridMaterial.dispose();
      icoGeom.dispose();
      icoMat.dispose();
      coreGeom.dispose();
      coreMat.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      ring3Geom.dispose();
      ring3Mat.dispose();
      starGeom.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
