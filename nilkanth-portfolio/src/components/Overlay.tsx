"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import { Download, ArrowDown, Mail } from "lucide-react";

export default function Overlay({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  // Section 1: Hero (0% to 20% scroll)
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.22], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.22], [0, -100]);
  const display1 = useTransform(scrollYProgress, (v) => v >= 0.22 ? "none" : "flex");

  // Section 2: Statement 1 (28% to 52% scroll)
  const opacity2 = useTransform(scrollYProgress, [0.22, 0.28, 0.45, 0.52], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.22, 0.52], [100, -100]);
  const display2 = useTransform(scrollYProgress, (v) => v < 0.22 || v >= 0.52 ? "none" : "flex");

  // Section 3: Statement 2 (58% to 82% scroll)
  const opacity3 = useTransform(scrollYProgress, [0.52, 0.58, 0.75, 0.82], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.52, 0.82], [100, -100]);
  const display3 = useTransform(scrollYProgress, (v) => v < 0.52 || v >= 0.82 ? "none" : "flex");

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute inset-0 z-10 pointer-events-none text-white overflow-hidden">
      
      {/* Section 1: Hero Landing (0% scroll) */}
      <motion.div 
        style={{ opacity: opacity1, y: y1, display: display1 }}
        className="absolute inset-0 flex flex-col items-start justify-center p-6 sm:p-12 md:p-16 lg:p-20 xl:p-24"
      >
        {/* Soft left-side shadow for visual hierarchy and text readability */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-[60%] md:w-[50%] bg-gradient-to-r from-black/90 via-black/40 to-transparent pointer-events-none -z-10" />

        <div className="relative z-10 max-w-xl w-full text-left flex flex-col items-start justify-center h-full">
          {/* Subtle Location Tag */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-4 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-md text-xs font-mono tracking-widest text-gold uppercase self-start"
          >
            Ahmedabad, India
          </motion.div>

          {/* Name Reveal */}
          <div className="overflow-hidden mb-2 w-full text-left py-1">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent text-left leading-none"
            >
              Nilkanth Patel
            </motion.h1>
          </div>

          {/* Subtitle / Role */}
          <div className="overflow-hidden mb-6 w-full text-left py-1">
            <motion.h2 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-xl md:text-2xl text-gold font-light tracking-widest uppercase font-sans text-left leading-tight"
            >
              Digital Creator • Developer • Designer
            </motion.h2>
          </div>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="text-gray-400 max-w-2xl text-base sm:text-lg md:text-xl font-light mb-10 leading-relaxed text-left"
          >
            &quot;Crafting high-impact content, premium designs, and AI-powered web solutions.&quot;
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap items-center justify-start gap-4 pointer-events-auto w-full"
          >
            <button
              onClick={() => scrollToId("projects")}
              className="group relative px-6 py-3.5 bg-gold text-black hover:bg-white transition-colors duration-300 font-semibold uppercase tracking-wider text-xs rounded-full flex items-center gap-2 shadow-[0_0_30px_rgba(0,217,255,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
            >
              View Portfolio
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            
            <a
              href="/resume.pdf"
              download
              className="group px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 font-semibold uppercase tracking-wider text-xs rounded-full flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
              Download Resume
            </a>

            <button
              onClick={() => scrollToId("contact")}
              className="group px-6 py-3.5 bg-transparent hover:bg-white/5 border border-gold/40 hover:border-gold transition-all duration-300 font-semibold uppercase tracking-wider text-xs rounded-full flex items-center gap-2 text-gold hover:text-white"
            >
              <Mail className="w-4 h-4" />
              Contact Me
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mb-2">Scroll to explore</span>
          <div className="w-[1px] h-10 bg-gray-800 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gold animate-bounce"></div>
          </div>
        </motion.div>
      </motion.div>

      {/* Section 2: Left Aligned Statement (30% scroll) */}
      <motion.div 
        style={{ opacity: opacity2, y: y2, display: display2 }}
        className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-24 lg:p-32 max-w-4xl"
      >
        <div className="space-y-4">
          <span className="text-gold font-mono text-sm tracking-widest uppercase">Digital Creation & Tech</span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            I design visual experiences and write automated workflows.
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-xl">
            Building premium interfaces, editing cinematic content, and developing AI-powered workflows to elevate digital presence.
          </p>
        </div>
      </motion.div>

      {/* Section 3: Right Aligned Statement (60% scroll) */}
      <motion.div 
        style={{ opacity: opacity3, y: y3, display: display3 }}
        className="absolute inset-0 flex flex-col items-end justify-center text-right p-8 md:p-24 lg:p-32 ml-auto max-w-4xl"
      >
        <div className="space-y-4">
          <span className="text-gold font-mono text-sm tracking-widest uppercase">Business-Minded Creativity</span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Bridging analytical strategy and high-end digital production.
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-xl ml-auto">
            Leveraging my background in commerce and management to build high-conversion designs and automated systems.
          </p>
        </div>
      </motion.div>

    </div>
  );
}
