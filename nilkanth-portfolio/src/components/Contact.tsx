"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { Download } from "lucide-react";

function Particles() {
  const meshRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  const positions = useMemo(() => {
    const particlesCount = 800; // optimized count
    const arr = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.03} 
        color="#D4AF37" 
        transparent 
        opacity={0.5} 
        blending={THREE.AdditiveBlending} 
        sizeAttenuation
      />
    </points>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill in all fields.");
      return;
    }
    setStatus("Message sent successfully! (Demo)");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contact" className="relative w-full min-h-screen bg-[#121212] flex items-center justify-center py-32 px-4 md:px-12 overflow-hidden border-t border-white/5">
      
      {/* 3D Particle Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <Particles />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Column: Contact details (5 columns) */}
        <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
          <div>
            <h2 className="text-gold font-mono text-sm tracking-widest uppercase mb-4 font-semibold">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Let's Connect.</h3>
            <p className="text-gray-400 mt-4 font-light text-base md:text-lg leading-relaxed">
              If you have opportunities in Finance, Digital Strategy, AI automation, or Business Operations—I'd love to chat.
            </p>
          </div>

          <div className="space-y-4 max-w-md mx-auto lg:mx-0">
            {/* Location card */}
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md">
              <div className="p-3 rounded-lg bg-gold/10 text-gold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-mono text-gray-500 uppercase">Location</span>
                <span className="text-sm font-medium text-white">Ahmedabad, India</span>
              </div>
            </div>

            {/* Email card */}
            <a 
              href="mailto:nilkanthpatel638@gmail.com" 
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md hover:border-gold/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-gold/10 text-gold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-mono text-gray-500 uppercase font-semibold">Email</span>
                <span className="text-sm font-medium text-white break-all">nilkanthpatel638@gmail.com</span>
              </div>
            </a>

            {/* Phone card */}
            <a 
              href="tel:+919265425888" 
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md hover:border-gold/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-gold/10 text-gold">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-mono text-gray-500 uppercase font-semibold">Phone</span>
                <span className="text-sm font-medium text-white">+91 92654 25888</span>
              </div>
            </a>

            {/* LinkedIn card */}
            <a 
              href="https://www.linkedin.com" // Update link to generic linkedin or user specified
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md hover:border-gold/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="p-3 rounded-lg bg-gold/10 text-gold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-mono text-gray-500 uppercase font-semibold">LinkedIn</span>
                <span className="text-sm font-medium text-white">Nilkanth Patel</span>
              </div>
            </a>
          </div>

          <div className="pt-4 flex justify-center lg:justify-start">
            <a 
              href="/resume.pdf"
              download
              className="group px-6 py-3.5 bg-gold text-black hover:bg-white transition-colors duration-300 font-semibold uppercase tracking-wider text-xs rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form (7 columns) */}
        <div className="lg:col-span-7">
          <form 
            onSubmit={handleSubmit}
            className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-md space-y-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 uppercase tracking-widest font-semibold">Full Name</label>
                <input 
                  type="text" 
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-gold focus:bg-white/10 transition-all font-light"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 uppercase tracking-widest font-semibold">Email Address</label>
                <input 
                  type="email" 
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-gold focus:bg-white/10 transition-all font-light"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-400 uppercase tracking-widest font-semibold">Message</label>
              <textarea 
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="How can we collaborate?"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-gold focus:bg-white/10 transition-all font-light resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-transparent hover:bg-gold border border-gold text-gold hover:text-black font-semibold uppercase tracking-widest text-xs rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send Message
            </button>

            {status && (
              <p className={`text-sm text-center font-mono ${status.includes("successfully") ? "text-emerald-400" : "text-amber-400"}`}>
                {status}
              </p>
            )}
          </form>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-[10px] font-mono text-gray-600 tracking-wider">
        <p>&copy; 2026 NILKANTH PATEL. ALL RIGHTS RESERVED.</p>
      </div>

    </section>
  );
}
