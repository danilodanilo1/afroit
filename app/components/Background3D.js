"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Background3D() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const mountNode = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountNode.appendChild(renderer.domElement);

    const particlesCount = 150;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }

    const particlesGeom = new THREE.BufferGeometry();
    particlesGeom.setAttribute("position", new THREE.BufferAttribute(posArray, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.03,
      color: 0xec4899,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeom, particlesMat);
    scene.add(particlesMesh);

    camera.position.z = 5;

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.0003;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);

      if (mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }

      particlesGeom.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10 bg-[#050505]" />;
}
