"use client";

import { TrendingUp, Globe, Video } from "lucide-react";
import VideoNewspaper from "./VideoNewspaper";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-32 bg-[#121212] relative px-4 md:px-12 border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-gold font-mono text-sm tracking-widest uppercase mb-4 font-semibold">Featured Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Design, Code & Automation.</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg font-light">
            Interactive web applications and digital assets engineered to drive engagement, automate pipelines, and build organic authority.
          </p>
        </div>

        <div className="space-y-32">
          
          {/* Project 1: Finovo Personal Finance & Budgeting (Laptop Mockup) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Project Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-gold/10 border border-gold/20">
                  <Globe className="w-6 h-6 text-gold" />
                </div>
                <span className="text-xs font-mono tracking-widest uppercase text-gold">FinTech Platform</span>
              </div>
              
              <h4 className="text-3xl font-bold text-white tracking-tight">Finovo — Indian Personal Finance</h4>
              
              <p className="text-gray-400 font-light leading-relaxed">
                Developed and designed a premium, modern personal finance and budgeting web application custom-tailored for Indian users. Track investments, set budgets, monitor expenses, and calculate savings goals dynamically.
              </p>

              <div className="flex flex-wrap gap-2.5">
                <a 
                  href="https://finovo-bkwm.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-gold/10 hover:bg-gold/20 border border-gold/30 text-gold text-xs font-mono font-medium transition-all"
                >
                  VISIT LIVE APP →
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <span className="block text-gold text-xs font-mono mb-1">FEATURE 01</span>
                  <span className="text-sm font-semibold text-white">Dynamic Budget Planner</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <span className="block text-gold text-xs font-mono mb-1">FEATURE 02</span>
                  <span className="text-sm font-semibold text-white">Expense Tracking</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <span className="block text-gold text-xs font-mono mb-1">FEATURE 03</span>
                  <span className="text-sm font-semibold text-white">Investment Calculator</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <span className="block text-gold text-xs font-mono mb-1">FEATURE 04</span>
                  <span className="text-sm font-semibold text-white">Premium UI Shell</span>
                </div>
              </div>
            </div>

            {/* Right: Laptop Screen Mockup with Live Web Preview */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-[550px] relative">
                
                {/* Laptop Body Outer */}
                <div className="relative bg-[#222222] border-4 border-[#333333] rounded-t-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] p-2 aspect-[16/10] overflow-hidden">
                  
                  {/* Laptop Camera */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#111111] rounded-full z-20"></div>

                  {/* Laptop Screen Content (Live Web Preview) */}
                  <div className="w-full h-full bg-[#0a0a0a] rounded-lg overflow-hidden relative">
                    <iframe 
                      src="https://finovo-bkwm.vercel.app" 
                      title="Finovo Live Preview"
                      className="w-full h-full border-0 bg-[#0a0a0a]"
                      sandbox="allow-scripts allow-same-origin allow-forms"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Laptop Keyboard Base */}
                <div className="w-[108%] -ml-[4%] h-3 bg-[#444444] rounded-b-xl relative z-10 shadow-[0_12px_24px_rgba(0,0,0,0.4)]">
                  {/* Laptop Groove */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#222222] rounded-b"></div>
                </div>
              </div>
            </div>

          </div>

          {/* Project 2: Finomark Strategic Agency & Production Studio (Laptop Mockup - Alternated Layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Laptop Screen Mockup with Live Web Preview (Order-First on Desktop) */}
            <div className="lg:col-span-7 flex justify-center order-last lg:order-first">
              <div className="w-full max-w-[550px] relative">
                
                {/* Laptop Body Outer */}
                <div className="relative bg-[#222222] border-4 border-[#333333] rounded-t-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] p-2 aspect-[16/10] overflow-hidden">
                  
                  {/* Laptop Camera */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#111111] rounded-full z-20"></div>

                  {/* Laptop Screen Content (Live Web Preview) */}
                  <div className="w-full h-full bg-[#0a0a0a] rounded-lg overflow-hidden relative">
                    <iframe 
                      src="https://finomarkin.vercel.app" 
                      title="Finomark Live Preview"
                      className="w-full h-full border-0 bg-[#0a0a0a]"
                      sandbox="allow-scripts allow-same-origin allow-forms"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Laptop Keyboard Base */}
                <div className="w-[108%] -ml-[4%] h-3 bg-[#444444] rounded-b-xl relative z-10 shadow-[0_12px_24px_rgba(0,0,0,0.4)]">
                  {/* Laptop Groove */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#222222] rounded-b"></div>
                </div>
              </div>
            </div>

            {/* Right: Project Details (Order-Last on Desktop) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-gold/10 border border-gold/20">
                  <Video className="w-6 h-6 text-gold" />
                </div>
                <span className="text-xs font-mono tracking-widest uppercase text-gold">Strategic Agency</span>
              </div>
              
              <h4 className="text-3xl font-bold text-white tracking-tight">Finomark — Strategic Agency</h4>
              
              <p className="text-gray-400 font-light leading-relaxed">
                Designed and engineered the platform for Finomark, a specialized digital content agency bridging complex topics (like finance and tech) with high-impact, cinematic video production and data-driven storytelling to establish organic brand authority.
              </p>

              <div className="flex flex-wrap gap-2.5">
                <a 
                  href="https://finomarkin.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-gold/10 hover:bg-gold/20 border border-gold/30 text-gold text-xs font-mono font-medium transition-all"
                >
                  VISIT LIVE AGENCY SITE →
                </a>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <span className="block text-gold text-xs font-mono mb-1">STRATEGY</span>
                  <span className="text-sm font-semibold text-white">Authority Building</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <span className="block text-gold text-xs font-mono mb-1">PRODUCTION</span>
                  <span className="text-sm font-semibold text-white">Cinematic Media</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <span className="block text-gold text-xs font-mono mb-1">AUTOMATION</span>
                  <span className="text-sm font-semibold text-white">AI Content Pipelines</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <span className="block text-gold text-xs font-mono mb-1">OUTCOME</span>
                  <span className="text-sm font-semibold text-white">Audience Retention</span>
                </div>
              </div>
            </div>

          </div>

          {/* Infinite Scrolling Design Showcase */}
          <div className="pt-20 border-t border-white/5 space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
              <span className="text-xs font-mono tracking-widest uppercase text-gold font-semibold">Visual Showcase</span>
              <h4 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Design Carousel</h4>
              <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
                Explore a rotating collection of professional graphic designs and templates. Hover over any design to pause and inspect.
              </p>
            </div>

            {/* Infinite Marquee Rows */}
            <div className="marquee-container group/marquee flex flex-col gap-5 w-full overflow-hidden py-4 relative">
              {/* Fade Overlay Left & Right */}
              <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#121212] via-[#121212]/80 to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#121212] via-[#121212]/80 to-transparent z-20 pointer-events-none" />

              {/* Row 1: Left-scrolling */}
              <div className="flex gap-4 w-max animate-marquee-left group-hover/marquee:[animation-play-state:paused]">
                {/* Original set */}
                {["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "11.png", "22.png"].map((file, i) => (
                  <div 
                    key={`row1-${i}`} 
                    className="relative flex-shrink-0 h-[180px] md:h-[260px] aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_10px_20px_rgba(0,0,0,0.4)] transition-all duration-500 hover:scale-[1.04] hover:border-gold/40 hover:shadow-[0_15px_30px_rgba(0,217,255,0.12)] group"
                  >
                    <img
                      src={`/design/${file}`}
                      alt={`Design ${file}`}
                      className="w-full h-full object-cover select-none pointer-events-none"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                ))}
                {/* Duplicated set for seamless loop */}
                {["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "11.png", "22.png"].map((file, i) => (
                  <div 
                    key={`row1-dup-${i}`} 
                    className="relative flex-shrink-0 h-[180px] md:h-[260px] aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_10px_20px_rgba(0,0,0,0.4)] transition-all duration-500 hover:scale-[1.04] hover:border-gold/40 hover:shadow-[0_15px_30px_rgba(0,217,255,0.12)] group"
                  >
                    <img
                      src={`/design/${file}`}
                      alt={`Design ${file} Duplicate`}
                      className="w-full h-full object-cover select-none pointer-events-none"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                ))}
              </div>

              {/* Row 2: Right-scrolling */}
              <div className="flex gap-4 w-max animate-marquee-right group-hover/marquee:[animation-play-state:paused]">
                {/* Original set */}
                {["33.png", "44.png", "55.png", "66.png", "77.png", "111.png", "222.png", "333.png", "444.png"].map((file, i) => (
                  <div 
                    key={`row2-${i}`} 
                    className="relative flex-shrink-0 h-[180px] md:h-[260px] aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_10px_20px_rgba(0,0,0,0.4)] transition-all duration-500 hover:scale-[1.04] hover:border-gold/40 hover:shadow-[0_15px_30px_rgba(0,217,255,0.12)] group"
                  >
                    <img
                      src={`/design/${file}`}
                      alt={`Design ${file}`}
                      className="w-full h-full object-cover select-none pointer-events-none"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                ))}
                {/* Duplicated set for seamless loop */}
                {["33.png", "44.png", "55.png", "66.png", "77.png", "111.png", "222.png", "333.png", "444.png"].map((file, i) => (
                  <div 
                    key={`row2-dup-${i}`} 
                    className="relative flex-shrink-0 h-[180px] md:h-[260px] aspect-[4/5] rounded-xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_10px_20px_rgba(0,0,0,0.4)] transition-all duration-500 hover:scale-[1.04] hover:border-gold/40 hover:shadow-[0_15px_30px_rgba(0,217,255,0.12)] group"
                  >
                    <img
                      src={`/design/${file}`}
                      alt={`Design ${file} Duplicate`}
                      className="w-full h-full object-cover select-none pointer-events-none"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Draggable & Floating Newspaper Videos */}
          <VideoNewspaper />

        </div>
      </div>
    </section>
  );
}
