"use client";

import { useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

function FloatingGeometry() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      // Subtle mouse parallax
      meshRef.current.position.x = THREE.MathUtils.lerp(
        meshRef.current.position.x,
        (state.pointer.x * state.viewport.width) / 10,
        0.05
      );
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        (state.pointer.y * state.viewport.height) / 10,
        0.05
      );
    }
  });

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[-2, 1, 0]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#00d9ff" wireframe />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
        <mesh position={[2, -1, 1]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#ffffff" wireframe={false} roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={1} floatIntensity={3}>
        <mesh position={[0, 2, -2]}>
          <torusGeometry args={[0.5, 0.1, 16, 100]} />
          <meshStandardMaterial color="#00d9ff" roughness={0.1} metalness={0.9} />
        </mesh>
      </Float>
    </group>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cinematic Loading & Reveal Sequence
    const tl = gsap.timeline();

    tl.to(loadingRef.current, {
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        if (loadingRef.current) loadingRef.current.style.display = "none";
      }
    })
    .fromTo(".hero-text-reveal", {
      y: 100,
      opacity: 0,
      clipPath: "inset(100% 0 0 0)"
    }, {
      y: 0,
      opacity: 1,
      clipPath: "inset(0% 0 0 0)",
      duration: 1.5,
      stagger: 0.2,
      ease: "power4.out"
    }, "-=0.5")
    .fromTo(".hero-fade", {
      opacity: 0,
      y: 20
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=1");

    // Parallax on scroll
    gsap.to(textRef.current, {
      y: "-30%",
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden bg-background">
      {/* Loading Screen */}
      <div ref={loadingRef} className="absolute inset-0 z-50 flex items-center justify-center bg-background">
        <div className="w-16 h-16 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
          <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#00d9ff" />
          <FloatingGeometry />
          <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={20} blur={2} far={4} />
          <Environment preset="city" />
        </Canvas>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4 pointer-events-none">
        <div ref={textRef} className="max-w-4xl">
          <h1 className="hero-text-reveal text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground mb-4">
            Nilkanth Patel
          </h1>
          <h2 className="hero-text-reveal text-xl md:text-3xl text-gold font-light tracking-wide uppercase mb-6">
            Video Editor • Graphic Designer • AI Filmmaker
          </h2>
          <p className="hero-fade text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Crafting Visual Stories Through Creativity, Design, and AI.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-fade absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="text-sm tracking-widest uppercase text-gray-500 mb-2">Scroll to explore</span>
          <div className="w-[1px] h-16 bg-gray-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
