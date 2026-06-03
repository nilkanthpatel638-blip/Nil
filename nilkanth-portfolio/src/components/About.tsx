"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useScroll, useTransform, useInView, animate } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

function Counter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 15]);

  useEffect(() => {
    if (!textRef.current) return;
    
    const lines = textRef.current.querySelectorAll(".about-line");
    
    gsap.fromTo(lines, 
      { 
        y: 40, 
        opacity: 0,
      }, 
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative w-full min-h-screen bg-[#121212] py-32 px-4 md:px-12 overflow-hidden flex items-center">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 opacity-5 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        
        {/* Left: Biography & Stats (LGs size: 7 columns) */}
        <div className="lg:col-span-7 flex flex-col justify-center" ref={textRef}>
          <div className="mb-4 overflow-hidden">
            <h2 className="about-line text-gold font-mono text-sm tracking-widest uppercase">Professional Overview</h2>
          </div>
          <div className="overflow-hidden mb-8">
            <h3 className="about-line text-3xl md:text-5xl font-bold text-white tracking-tight">
              Bridging Corporate Rigor & AI Innovation.
            </h3>
          </div>
          
          <div className="space-y-6 text-gray-400 text-base md:text-lg font-light leading-relaxed">
            <div className="overflow-hidden">
              <p className="about-line">
                I am a Finance and Digital Strategy professional with hands-on experience in financial operations, AI-driven content creation, and digital system management.
              </p>
            </div>
            <div className="overflow-hidden">
              <p className="about-line">
                I combine strong analytical thinking with practical AI automation skills to drive operational efficiency and data-informed decision-making. My work focuses on managing institutional accounts, ensuring financial reporting accuracy, and building scalable digital systems that work.
              </p>
            </div>
          </div>

          {/* Grid Stats */}
          <div className="mt-12 grid grid-cols-2 gap-8 md:gap-12">
            <div className="about-line p-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-md">
              <span className="block text-4xl font-bold text-white mb-2">
                <Counter value={500} suffix="+" />
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-widest leading-normal">Student Financial Records Managed</span>
            </div>
            <div className="about-line p-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-md">
              <span className="block text-4xl font-bold text-white mb-2">
                <Counter value={150} suffix="+" />
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-widest leading-normal">Graphic Designs Created</span>
            </div>
            <div className="about-line p-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-md">
              <span className="block text-4xl font-bold text-white mb-2">
                <Counter value={80} suffix="+" />
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-widest leading-normal">Videos Produced</span>
            </div>
            <div className="about-line p-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-md">
              <span className="block text-4xl font-bold text-gold mb-2">
                <Counter value={40} suffix="%" />
              </span>
              <span className="text-xs text-gray-400 uppercase tracking-widest leading-normal">Workflow Efficiency Improvement</span>
            </div>
          </div>
        </div>

        {/* Right: Floating 3D Profile Card (LGs size: 5 columns) */}
        <div className="lg:col-span-5 flex items-center justify-center perspective-1000">
          <motion.div 
            style={{ y, rotateX, rotateY }}
            className="w-full max-w-md aspect-[3/4] rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(0,217,255,0.1)] relative overflow-hidden group"
          >
            {/* Card Glare */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 transform -translate-x-full group-hover:translate-x-full"></div>

            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">Nilkanth Patel</h4>
                  <p className="text-gold font-mono text-xs tracking-wider">Ahmedabad, India</p>
                </div>
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" title="Available for new opportunities"></div>
              </div>
            </div>

            <div className="space-y-6 my-8">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1.5 font-semibold">Specializations</p>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  Financial Analysis, AI Automation, Digital Operations, Business Systems
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1.5 font-semibold">Primary Stack</p>
                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  Excel, Google Sheets, Canva, ChatGPT, Automation Tools
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-gray-500">
              <span>FIN & STRATEGY PRO</span>
              <span>VER. 2026</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
