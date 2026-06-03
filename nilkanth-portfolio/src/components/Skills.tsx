"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Award, Briefcase, Cpu, CheckSquare } from "lucide-react";

// core skills for 3D sphere tags
const sphereSkills = [
  { name: "Financial Analysis", color: "#00d9ff", position: [-2, 1.5, 0] as [number, number, number] },
  { name: "AI Automation", color: "#00E5FF", position: [2, 1, 1] as [number, number, number] },
  { name: "Data Analysis", color: "#ffffff", position: [0, 2.5, -2] as [number, number, number] },
  { name: "Excel Models", color: "#10B981", position: [-1.5, -2, 2] as [number, number, number] },
  { name: "Strategic Thinking", color: "#6366F1", position: [2, -1.5, -1] as [number, number, number] },
];

function SkillSphere({ position, color, name, isHovered, setHovered }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.008;
      
      // Pulse effect on hover
      const targetScale = isHovered ? 1.25 : 1.0;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.8}>
      <group position={position}>
        <mesh 
          ref={meshRef}
          onPointerOver={() => setHovered(name)}
          onPointerOut={() => setHovered(null)}
        >
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshPhysicalMaterial 
            color={color} 
            metalness={0.8} 
            roughness={0.15} 
            clearcoat={1} 
            clearcoatRoughness={0.1}
            emissive={isHovered ? color : "#000000"}
            emissiveIntensity={isHovered ? 0.6 : 0}
          />
        </mesh>
        
        {/* Render text directly below or on top of node */}
        <Text
          position={[0, 1.2, 0]}
          fontSize={0.25}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          // Omit font parameter to fall back to Drei's high-quality default font and prevent network errors
        >
          {name}
        </Text>
      </group>
    </Float>
  );
}

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    {
      title: "Financial Skills",
      icon: <Award className="w-5 h-5 text-gold" />,
      items: ["Financial Analysis", "Accounting", "Financial Planning", "Reporting"]
    },
    {
      title: "Technology Skills",
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      items: ["AI Tools & Prompting", "Workflows & Automation", "Web Development", "Website Deployment"]
    },
    {
      title: "Business Skills",
      icon: <Briefcase className="w-5 h-5 text-indigo-400" />,
      items: ["Data Analysis", "Complex Problem Solving", "Strategic Thinking", "Professional Communication"]
    },
    {
      title: "Tools & Platforms",
      icon: <CheckSquare className="w-5 h-5 text-emerald-400" />,
      items: ["MS Excel", "Google Sheets", "Canva Suite", "ChatGPT / LLMs", "AI Media Platforms"]
    }
  ];

  return (
    <section id="skills" className="w-full min-h-screen bg-[#121212] py-32 px-4 md:px-12 relative flex flex-col items-center border-t border-white/5">
      {/* Glow Effects */}
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="text-center mb-16 px-4">
          <h2 className="text-gold font-mono text-sm tracking-widest uppercase mb-4 font-semibold">Core Competencies</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Technical & Strategic Skillset</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-base font-light">
            Combining financial analytical skills with modern digital innovation, automation, and AI technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Grouped Category Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {categories.map((cat, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md hover:border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  {cat.icon}
                  <h4 className="text-lg font-bold text-white tracking-tight">{cat.title}</h4>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, itemIdx) => (
                    <span 
                      key={itemIdx} 
                      className="px-3 py-1 bg-white/5 border border-white/5 rounded-full text-xs text-gray-300 font-light hover:text-gold transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: 3D Canvas Tag Cloud */}
          <div className="h-[450px] md:h-[550px] w-full border border-white/5 bg-white/2 rounded-3xl backdrop-blur-md relative overflow-hidden cursor-grab active:cursor-grabbing">
            <div className="absolute top-4 left-4 z-20 text-[10px] font-mono text-gray-500 uppercase tracking-widest pointer-events-none">
              3D Interactive Cloud
            </div>
            
            <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 10]} intensity={1.5} />
              <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#00d9ff" />
              
              {sphereSkills.map((skill, index) => (
                <SkillSphere 
                  key={index} 
                  {...skill} 
                  isHovered={hoveredSkill === skill.name}
                  setHovered={setHoveredSkill}
                />
              ))}
              
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.4} />
            </Canvas>
          </div>

        </div>

      </div>
    </section>
  );
}
