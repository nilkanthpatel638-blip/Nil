"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function FloatingAssets() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Create an undulating grid of particles for the background wave
  const gridCount = 25;
  const positions = useMemo(() => {
    const arr = new Float32Array(gridCount * gridCount * 3);
    for (let x = 0; x < gridCount; x++) {
      for (let z = 0; z < gridCount; z++) {
        const i = (x * gridCount + z) * 3;
        // Grid layout in XZ space
        arr[i] = (x - gridCount / 2) * 0.4;
        arr[i + 1] = 0; // Height (Y) starts at 0, will animate in useFrame
        arr[i + 2] = (z - gridCount / 2) * 0.4 - 1.5; // push slightly back
      }
    }
    return arr;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Rotate and tilt the main asset group subtly based on the mouse cursor
    if (groupRef.current) {
      const targetRotationX = (state.pointer.y * Math.PI) / 10;
      const targetRotationY = (state.pointer.x * Math.PI) / 10;
      
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
    }

    // Animate the particle wave (Y positions)
    if (pointsRef.current) {
      const geo = pointsRef.current.geometry;
      const posAttr = geo.attributes.position;
      if (posAttr) {
        for (let x = 0; x < gridCount; x++) {
          for (let z = 0; z < gridCount; z++) {
            const idx = x * gridCount + z;
            const px = posAttr.getX(idx);
            const pz = posAttr.getZ(idx);
            
            // Calculate a wave height using sine and cosine functions
            const y = Math.sin(px * 0.5 + time) * 0.3 + Math.cos(pz * 0.5 + time) * 0.2;
            posAttr.setY(idx, y - 0.5); // shift slightly down
          }
        }
        posAttr.needsUpdate = true;
      }
    }
  });

  return (
    <group ref={groupRef}>
      
      {/* Wave Particle System (Undulating data wave) */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.035} 
          color="#00d9ff" 
          transparent 
          opacity={0.3} 
          sizeAttenuation 
        />
      </points>

      {/* Floating Gold Ring (Wealth / Cycle Symbol) */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={1.2} position={[-1.2, 0.2, 0.5]}>
        <mesh castShadow receiveShadow>
          <torusGeometry args={[0.7, 0.15, 16, 100]} />
          <meshStandardMaterial 
            color="#00d9ff" 
            roughness={0.1} 
            metalness={0.9} 
            envMapIntensity={1}
          />
        </mesh>
      </Float>

      {/* Floating Glass/Silver Diamond (Data / AI Symbol) */}
      <Float speed={2.5} rotationIntensity={2} floatIntensity={1.5} position={[1.2, -0.2, 0.8]}>
        <mesh castShadow receiveShadow>
          <octahedronGeometry args={[0.7, 0]} />
          <meshPhysicalMaterial 
            color="#ffffff" 
            roughness={0.15} 
            metalness={0.1}
            transmission={0.6} // glass-like look
            ior={1.5}
            thickness={1}
            transparent
            opacity={0.95}
          />
        </mesh>
      </Float>

      {/* Subtle Floating Sphere (Small data node) */}
      <Float speed={3} rotationIntensity={0.5} floatIntensity={2} position={[0, 0.8, -0.5]}>
        <mesh castShadow receiveShadow>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial 
            color="#4f4f4f" 
            roughness={0.2} 
            metalness={0.8} 
          />
        </mesh>
      </Float>

    </group>
  );
}

export default function FinancialGraph3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-transparent">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]} shadows>
        <ambientLight intensity={0.5} />
        
        {/* Lights designed to illuminate gold and glass colors nicely */}
        <directionalLight position={[5, 8, 5]} intensity={1.5} castShadow />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d9ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#3b82f6" />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#ffffff" />
        
        <FloatingAssets />

        {/* Soft shadow plane underneath the floating 3D objects */}
        <ContactShadows 
          position={[0, -1.8, 0]} 
          opacity={0.35} 
          scale={8} 
          blur={2.4} 
          far={3.5} 
        />
      </Canvas>
    </div>
  );
}
