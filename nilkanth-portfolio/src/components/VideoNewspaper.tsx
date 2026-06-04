"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Volume2, VolumeX, Play, Pause, RotateCcw, Maximize2, Tv, Sparkles } from "lucide-react";

interface TVItem {
  id: number;
  channel: string;
  headline: string;
  subhead: string;
  video: string;
  date: string;
  description: string;
  width: number;
  height: number;
  defaultX: number; // center-offset X for desktop
  defaultY: number; // center-offset Y for desktop
  defaultRotate: number;
}

const TV_ITEMS: TVItem[] = [
  {
    id: 1,
    channel: "CH 02",
    headline: "INFLATION: THE SILENT LEVY",
    subhead: "HOW CASH SAVINGS LOSE VALUE DAILY",
    video: "/videos/inflation-1.mp4",
    date: "JUNE 2026",
    description: "Recent reports confirm purchasing power is declining at record rates. Holding large sums of cash in standard bank accounts acts as a silent levy, eroding the real value of savings year after year without notice. Hedging against currency depreciation is a structural necessity for long-term wealth preservation.",
    width: 320,
    height: 240,
    defaultX: 0,
    defaultY: -15,
    defaultRotate: 1,
  },
  {
    id: 2,
    channel: "CH 04",
    headline: "THE OPPORTUNITY DRAIN",
    subhead: "THE SIGNIFICANT COST OF SPECTATOR MODE",
    video: "/videos/inflation-2.mp4",
    date: "JUNE 2026",
    description: "System spectators lose vast potential wealth by attempting to time market cycles. Historically, waiting for the 'perfect market moment' yields significant underperformance compared to systematic saving. Automated, disciplined allocations remove emotional volatility.",
    width: 290,
    height: 215,
    defaultX: 295,
    defaultY: 20,
    defaultRotate: -3,
  },
  {
    id: 3,
    channel: "CH 07",
    headline: "COMPOUNDING EMPIRES",
    subhead: "THE LOGARITHMIC WEALTH EXPANSION",
    video: "/videos/inflation-3.mp4",
    date: "JUNE 2026",
    description: "The mathematics of compound growth demonstrate that time in the market is the ultimate lever. Early contributions build an exponential base, resulting in massive compounding curves in the later stages of life. Reinvesting dividends forms an unstoppable engine.",
    width: 300,
    height: 220,
    defaultX: -295,
    defaultY: 10,
    defaultRotate: 3,
  },
  {
    id: 4,
    channel: "CH 09",
    headline: "THE TWO PATHS OF CAPITAL",
    subhead: "DEPLOY TO BUILD OR WATCH VALUE DISSOLVE",
    video: "/videos/inflation-4.mp4",
    date: "JUNE 2026",
    description: "Capital has two fundamental states: it either sleeps and dissolves in purchasing value, or it works. Transitioning from a passive saver to an active builder is the most critical wealth paradigm shift. Establishing automated strategies is key.",
    width: 220,
    height: 165,
    defaultX: -180,
    defaultY: -185,
    defaultRotate: 4,
  },
  {
    id: 5,
    channel: "CH 11",
    headline: "CREATIVE REEL DESIGN",
    subhead: "HOW STORIES CAPTURE MASS ATTENTION",
    video: "/videos/video-689.mp4",
    date: "JUNE 2026",
    description: "Modern information networks demand high-fidelity design combined with swift density. Creative short-form reels engage viewers immediately, delivering core financial concepts with massive impact. Workflow merges cinematography with targeted storytelling.",
    width: 260,
    height: 195,
    defaultX: 180,
    defaultY: -190,
    defaultRotate: -5,
  },
  {
    id: 6,
    channel: "CH 13",
    headline: "THE STRATEGIC RUNTIME",
    subhead: "SYSTEM OPTIMIZATION & WORKFLOWS",
    video: "/videos/video-0.mp4",
    date: "JUNE 2026",
    description: "System runtimes transition to integrated, hardware-accelerated compiling threads. Harnessing low-level local resources combined with clean build configurations eliminates latency and enhances scaling potential. Keep codebases lean for execution.",
    width: 245,
    height: 185,
    defaultX: -130,
    defaultY: 200,
    defaultRotate: -2,
  },
  {
    id: 7,
    channel: "CH 15",
    headline: "SHOWROOM DEPRECIATION",
    subhead: "HOW SHOWROOM VEHICLES DISSOLVE WEALTH",
    video: "/videos/car-depreciation.mp4",
    date: "JUNE 2026",
    description: "The instant a ₹15L vehicle exits the showroom gates, its market valuation drops by 10% to ₹13.5L. Five years later, the asset's residual value typically shrinks to a fraction of the purchase price. Avoid depreciating assets to build net worth.",
    width: 310,
    height: 230,
    defaultX: 135,
    defaultY: 210,
    defaultRotate: 4,
  },
];

export default function VideoNewspaper() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [tidyKey, setTidyKey] = useState(0);
  const [activeHoverId, setActiveHoverId] = useState<number | null>(null);
  const deskRef = useRef<HTMLDivElement>(null);

  // Modal Video controls
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const selectedTV = TV_ITEMS.find((t) => t.id === selectedId);

  useEffect(() => {
    if (selectedId) {
      setIsPlaying(true);
      setIsMuted(false);
    }
  }, [selectedId]);

  const togglePlay = () => {
    if (modalVideoRef.current) {
      if (isPlaying) {
        modalVideoRef.current.pause();
      } else {
        modalVideoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTidyDesk = () => {
    setTidyKey((prev) => prev + 1);
  };

  return (
    <div className="pt-24 border-t border-white/5 space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-mono">
          <Tv className="w-3.5 h-3.5" />
          <span>Cathode Ray Tube Stack</span>
        </div>
        <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tight">The Broadcast Chronicles</h4>
        <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
          A stacked, randomized wall of vintage black & white television units. Drag them around the workbench, hover to trigger color broadcasts, and click to view full screen.
        </p>
      </div>

      {/* Tidy Desk Controller (Desktop Only) */}
      <div className="hidden lg:flex justify-center">
        <button
          onClick={handleTidyDesk}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-gold/5 text-gray-300 hover:text-white transition-all text-xs font-mono font-medium shadow-lg hover:shadow-[0_0_15px_rgba(0,217,255,0.1)] group cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-500 text-gold" />
          <span>RESET WORKBENCH</span>
        </button>
      </div>

      {/* Desktop Workspace (Interactive Workbench) */}
      <div 
        ref={deskRef} 
        className="hidden lg:block relative w-full h-[760px] bg-black border border-white/5 rounded-3xl overflow-hidden shadow-[inset_0_4px_40px_rgba(0,0,0,0.95)] select-none"
      >
        {/* Dark vignette overlay to mimic a dark room */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none z-20" />

        {TV_ITEMS.map((item) => (
          <motion.div
            key={`${tidyKey}-${item.id}`}
            drag
            dragConstraints={deskRef}
            dragElastic={0.08}
            dragMomentum={true}
            initial={{ 
              x: item.defaultX, 
              y: item.defaultY + 200, 
              opacity: 0, 
              scale: 0.9 
            }}
            animate={{ 
              x: item.defaultX, 
              y: item.defaultY, 
              opacity: 1, 
              scale: 1 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 80, 
              damping: 16,
              delay: item.id * 0.05
            }}
            style={{ zIndex: activeHoverId === item.id ? 40 : 10 + item.id }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
            onHoverStart={() => setActiveHoverId(item.id)}
            onHoverEnd={() => setActiveHoverId(null)}
          >
            {/* Screen Cathode Flicker Simulation (No Bobbing/Floating) */}
            <motion.div
              animate={{
                opacity: [0.97, 1.01, 0.98, 1.02, 0.97],
              }}
              transition={{
                duration: 1.8 + item.id * 0.3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ 
                width: item.width, 
                height: item.height, 
                rotate: item.defaultRotate 
              }}
              whileHover={{ 
                scale: 1.03, 
                rotate: 0,
                boxShadow: "0 25px 60px -15px rgba(0, 217, 255, 0.25)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedId(item.id)}
              className="bg-[#181615] border-[3px] border-[#2d2927] rounded-3xl p-3 flex flex-row gap-3 shadow-[0_25px_55px_rgba(0,0,0,0.85)] relative overflow-hidden transition-all duration-300 hover:border-gold/40 group"
            >
              {/* Dual Top Antennas */}
              <div className="absolute -top-8 left-[25%] w-[1.5px] h-10 bg-neutral-600 origin-bottom rotate-[-30deg] pointer-events-none group-hover:bg-gold/40 transition-colors" />
              <div className="absolute -top-8 left-[65%] w-[1.5px] h-10 bg-neutral-600 origin-bottom rotate-[30deg] pointer-events-none group-hover:bg-gold/40 transition-colors" />

              {/* LEFT: TV Screen Section */}
              <div className="flex-1 h-full bg-neutral-950 rounded-xl relative overflow-hidden border-2 border-neutral-900 shadow-inner flex-shrink-0">
                <video
                  src={item.video}
                  loop
                  muted
                  playsInline
                  autoPlay
                  className="w-full h-full object-cover grayscale contrast-[1.3] brightness-[0.85] group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100 transition-all duration-700 ease-out"
                />

                {/* Blank White Cathode Glow overlay when not hovered (mimicking reference photo) */}
                <div className="absolute inset-0 bg-white/10 opacity-75 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10" />

                {/* CRT Screen curvature glass reflections */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/2 to-white/8 pointer-events-none z-10" />
                
                {/* Horizontal scanlines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_50%,rgba(0,0,0,0.18)_50%)] bg-[size:100%_4px] pointer-events-none z-10 mix-blend-overlay" />
                
                {/* Screen frame inner shadow */}
                <div className="absolute inset-0 border border-black/35 rounded-lg pointer-events-none z-10 shadow-[inset_0_2px_10px_rgba(0,0,0,0.9)]" />

                {/* Maximize overlay badge */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 z-20">
                  <div className="p-2 rounded-full bg-gold/15 border border-gold/40 text-gold backdrop-blur-sm scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* RIGHT: TV Control Panel */}
              <div className="w-[50px] flex flex-col justify-between py-0.5 border-l border-[#242120] pl-2 flex-shrink-0">
                {/* Channel Dial selector */}
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-[6px] font-mono text-gray-500 uppercase tracking-widest block">CH</span>
                  <div className="w-6 h-6 rounded-full bg-[#222] border border-neutral-700 flex items-center justify-center relative shadow-md group-hover:border-gold/30 transition-colors">
                    <div className="w-0.5 h-1.5 bg-neutral-500 rounded absolute top-0.5 group-hover:bg-gold transition-colors" />
                  </div>
                </div>

                {/* Speaker Grille lines */}
                <div className="space-y-1 my-1.5 px-0.5">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="h-[1.5px] bg-[#111] w-full rounded" />
                  ))}
                </div>

                {/* Channel and Power Indicator */}
                <div className="flex flex-col items-center gap-2 mt-0.5">
                  <span className="text-[8px] font-mono font-bold text-gray-400 group-hover:text-gold transition-colors block">
                    {item.channel}
                  </span>
                  
                  {/* Glowing Power LED */}
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-2 h-2 rounded-full bg-red-500/20 blur-[1px] group-hover:bg-emerald-500/20" />
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 border border-red-700 shadow-inner group-hover:bg-emerald-500 group-hover:border-emerald-600 transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Mobile/Tablet Grid Layout (Static but beautiful) */}
      <div className="block lg:hidden max-w-2xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {TV_ITEMS.map((item) => (
          <div
            key={`mobile-${item.id}`}
            onClick={() => setSelectedId(item.id)}
            className="bg-[#1a1817] border-2 border-neutral-850 rounded-2xl p-4 flex flex-row gap-3 shadow-lg relative overflow-hidden active:scale-98 transition-all"
          >
            {/* TV Screen */}
            <div className="flex-1 aspect-[4/3] bg-neutral-950 rounded-xl relative overflow-hidden border border-neutral-900 shadow-inner">
              <video
                src={item.video}
                loop
                muted
                playsInline
                autoPlay
                className="w-full h-full object-cover grayscale contrast-[1.2]"
              />
              <div className="absolute inset-0 bg-white/10 pointer-events-none z-10" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/1 to-white/5 pointer-events-none z-10" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] pointer-events-none z-10 mix-blend-overlay" />
            </div>

            {/* TV Control Panel */}
            <div className="w-[50px] flex flex-col justify-between py-1 border-l border-neutral-900 pl-3">
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-[7px] font-mono text-gray-500 uppercase tracking-widest">CH</span>
                <div className="w-5 h-5 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center relative shadow-sm">
                  <div className="w-0.5 h-1 bg-neutral-500 rounded absolute top-0.5" />
                </div>
              </div>

              <div className="space-y-1 my-1.5 px-0.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-[1.5px] bg-[#111] w-full rounded" />
                ))}
              </div>

              <div className="flex flex-col items-center gap-1.5">
                <span className="text-[8px] font-mono font-bold text-gray-400">
                  {item.channel}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-red-600 border border-red-700" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cinematic Modal (AnimatePresence) */}
      <AnimatePresence>
        {selectedId !== null && selectedTV && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/85 backdrop-blur-md"
            onClick={() => setSelectedId(null)}
          >
            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#141312] border border-neutral-800 rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 md:p-8 flex flex-col md:flex-row gap-8 relative shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] scrollbar-thin"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Big CRT TV Screen */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="relative aspect-[9/16] max-h-[55vh] md:max-h-[62vh] w-full mx-auto bg-black rounded-2xl overflow-hidden border-4 border-neutral-800 shadow-[inset_0_0_20px_black] group">
                  <video
                    ref={modalVideoRef}
                    src={selectedTV.video}
                    loop
                    playsInline
                    autoPlay
                    muted={isMuted}
                    className="w-full h-full object-cover"
                  />

                  {/* Curvature & reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/2 to-white/8 pointer-events-none z-10" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.015)_50%,rgba(0,0,0,0.18)_50%)] bg-[size:100%_4px] pointer-events-none z-10 mix-blend-overlay" />

                  {/* Custom Controls Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 z-20">
                    <div className="flex items-center justify-between">
                      <button
                        onClick={togglePlay}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all cursor-pointer"
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>

                      <button
                        onClick={toggleMute}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all cursor-pointer"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-gold" />}
                      </button>
                    </div>
                  </div>

                  {/* Tap-to-Mute Center Notice */}
                  <button
                    onClick={toggleMute}
                    className="absolute top-3 left-3 px-2 py-1 rounded bg-black/60 text-white font-mono text-[9px] border border-white/10 flex items-center gap-1.5 cursor-pointer backdrop-blur-sm z-20"
                  >
                    {isMuted ? (
                      <>
                        <VolumeX className="w-3 h-3 text-red-400" />
                        <span>MUTED</span>
                      </>
                    ) : (
                      <>
                        <Volume2 className="w-3 h-3 text-gold" />
                        <span>AUDIO PLAYING</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Right Column: Broadcast Guide Details */}
              <div className="flex-1 flex flex-col justify-between text-white relative z-10 md:py-2">
                <div className="space-y-6">
                  {/* Journal Title Header */}
                  <div>
                    <div className="flex items-center gap-2">
                      <Tv className="w-4 h-4 text-gold" />
                      <span className="font-mono font-black tracking-[0.2em] text-xs text-gold/80 block">
                        THE BROADCAST GAZETTE
                      </span>
                    </div>
                    
                    <div className="flex gap-4 text-[9px] font-mono text-gray-500 border-t border-b border-white/10 my-2 py-1">
                      <span>{selectedTV.channel}</span>
                      <span>{selectedTV.date}</span>
                      <span>PAGE B4 • LIVE FEED</span>
                    </div>
                  </div>

                  {/* Main Headline */}
                  <h3 className="font-serif font-black text-2xl md:text-3xl text-white tracking-tight uppercase leading-tight">
                    {selectedTV.headline}
                  </h3>
                  
                  {/* Subhead */}
                  <p className="text-[10px] md:text-xs text-gray-400 font-sans tracking-wider uppercase font-semibold border-b border-white/5 pb-2">
                    {selectedTV.subhead}
                  </p>

                  {/* Full Story Content */}
                  <div className="text-sm text-gray-300 font-light leading-relaxed text-justify space-y-4">
                    <p className="indent-4">{selectedTV.description}</p>
                  </div>
                </div>

                {/* Modal Footer / Signature */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-gold" />
                    <span>BROADCAST STRATEGY</span>
                  </div>
                  <span className="text-[10px]">STUDIO CONTROL ROOM</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
