"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: "01", title: "Research", desc: "Understanding the brand, audience, and core message." },
  { num: "02", title: "Strategy", desc: "Developing a creative roadmap and visual direction." },
  { num: "03", title: "Design", desc: "Crafting the visual identity and 3D assets." },
  { num: "04", title: "Editing", desc: "Splicing reality and synthetic media seamlessly." },
  { num: "05", title: "Delivery", desc: "Final render, color grading, and deployment." },
];

function RotatingStars() {
  const ref = useRef<THREE.Points>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.0005;
      ref.current.rotation.y += 0.0005;
    }
  });
  return (
    <group ref={ref}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  );
}

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".process-card");

    gsap.fromTo(lineRef.current,
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "bottom 80%",
          scrub: true,
        }
      }
    );

    cards.forEach((card: any, i) => {
      gsap.fromTo(card,
        { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <Canvas>
          <RotatingStars />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-gold font-mono text-sm tracking-widest uppercase mb-4">Creative Workflow</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">The Process.</h3>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block"></div>
          <div ref={lineRef} className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gold -translate-x-1/2 hidden md:block" style={{ height: "0%" }}>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gold rounded-full blur-[2px]"></div>
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className={`process-card relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                
                <div className="md:w-1/2"></div>
                
                {/* Center Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0a0a0a] border border-gold rounded-full z-10 flex items-center justify-center shadow-[0_0_15px_rgba(0,217,255,0.5)] hidden md:flex">
                  <span className="text-gold font-mono text-sm">{step.num}</span>
                </div>

                <div className={`md:w-1/2 p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 ${index % 2 === 0 ? "md:mr-16" : "md:ml-16"}`}>
                  <span className="text-gold font-mono text-sm md:hidden mb-2 inline-block">{step.num}</span>
                  <h4 className="text-2xl font-bold text-white mb-3">{step.title}</h4>
                  <p className="text-gray-400">{step.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
