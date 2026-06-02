"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, BookOpen, Laptop, Sparkles, TrendingUp, HelpCircle } from "lucide-react";

export default function Projects() {
  // Calculator State
  const [monthlySave, setMonthlySave] = useState(5000); // in INR or general currency
  const [years, setYears] = useState(15);
  const [expectedReturn, setExpectedReturn] = useState(12); // 12% standard index return

  // Compound Interest Calculation: A = P * (((1 + i)^n - 1) / i) * (1 + i)
  const calculateWealth = () => {
    const monthlyRate = expectedReturn / 12 / 100;
    const months = years * 12;
    const invested = monthlySave * months;
    
    // Future value of annuity due
    const total = monthlySave * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    const returns = total - invested;

    return {
      invested: Math.round(invested).toLocaleString("en-IN"),
      returns: Math.round(returns).toLocaleString("en-IN"),
      total: Math.round(total).toLocaleString("en-IN"),
    };
  };

  const wealth = calculateWealth();

  return (
    <section id="projects" className="w-full py-32 bg-[#121212] relative px-4 md:px-12 border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[180px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-gold font-mono text-sm tracking-widest uppercase mb-4 font-semibold">Featured Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">FinTech & Publishing.</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg font-light">
            Interactive digital tools and publications designed to build smart, automated financial strategies.
          </p>
        </div>

        <div className="space-y-32">
          
          {/* Project 1: AI-Powered Financial Website (Laptop Mockup) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Project Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-gold/10 border border-gold/20">
                  <Laptop className="w-6 h-6 text-gold" />
                </div>
                <span className="text-xs font-mono tracking-widest uppercase text-gold">FinTech Platform</span>
              </div>
              
              <h4 className="text-3xl font-bold text-white tracking-tight">AI-Powered Financial Website</h4>
              
              <p className="text-gray-400 font-light leading-relaxed">
                Designed and developed a personal finance platform featuring an AI-powered wealth calculator. It helps users model compound interest, predict growth trends, and organize financial goals interactively.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <span className="block text-gold text-xs font-mono mb-1">FEATURE 01</span>
                  <span className="text-sm font-semibold text-white">AI Calculator</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <span className="block text-gold text-xs font-mono mb-1">FEATURE 02</span>
                  <span className="text-sm font-semibold text-white">Goal Planning</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <span className="block text-gold text-xs font-mono mb-1">FEATURE 03</span>
                  <span className="text-sm font-semibold text-white">Interactive Dashboard</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <span className="block text-gold text-xs font-mono mb-1">FEATURE 04</span>
                  <span className="text-sm font-semibold text-white">Wealth Projections</span>
                </div>
              </div>
            </div>

            {/* Right: Laptop Screen Mockup with Working Calculator */}
            <div className="lg:col-span-7 flex justify-center">
              <div className="w-full max-w-[550px] relative">
                
                {/* Laptop Body Outer */}
                <div className="relative bg-[#222222] border-4 border-[#333333] rounded-t-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] p-2 aspect-[16/10] overflow-hidden">
                  
                  {/* Laptop Camera */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#111111] rounded-full z-20"></div>

                  {/* Laptop Screen Content (Working Web Calculator App) */}
                  <div className="w-full h-full bg-[#0a0a0a] rounded-lg overflow-y-auto p-4 flex flex-col justify-between text-white select-none scrollbar-thin">
                    <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-gold" />
                        <span className="text-[11px] font-mono tracking-wider font-semibold text-gray-300">WEALTH-CALC V1.0</span>
                      </div>
                      <span className="text-[10px] text-emerald-500 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                        AI Models Active
                      </span>
                    </div>

                    {/* Calculator Sliders */}
                    <div className="space-y-3.5 my-2">
                      <div>
                        <div className="flex justify-between text-[10px] text-gray-400 mb-1 font-mono">
                          <span>MONTHLY SAVINGS</span>
                          <span className="text-gold">₹{monthlySave.toLocaleString("en-IN")}</span>
                        </div>
                        <input 
                          type="range" 
                          min="1000" 
                          max="50000" 
                          step="1000"
                          value={monthlySave} 
                          onChange={(e) => setMonthlySave(Number(e.target.value))}
                          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-[10px] text-gray-400 mb-1 font-mono">
                          <span>INVESTMENT DURATION</span>
                          <span className="text-gold">{years} Years</span>
                        </div>
                        <input 
                          type="range" 
                          min="5" 
                          max="40" 
                          value={years} 
                          onChange={(e) => setYears(Number(e.target.value))}
                          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-[10px] text-gray-400 mb-1 font-mono">
                          <span>EXPECTED RETURN</span>
                          <span className="text-gold">{expectedReturn}% p.a.</span>
                        </div>
                        <input 
                          type="range" 
                          min="6" 
                          max="20" 
                          value={expectedReturn} 
                          onChange={(e) => setExpectedReturn(Number(e.target.value))}
                          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold"
                        />
                      </div>
                    </div>

                    {/* Calculator Results */}
                    <div className="mt-3 bg-white/5 border border-white/5 rounded-lg p-3 grid grid-cols-3 gap-2 text-center">
                      <div>
                        <span className="block text-[8px] text-gray-500 font-mono">INVESTED</span>
                        <span className="text-xs font-semibold text-gray-300">₹{wealth.invested}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] text-gray-500 font-mono">EST. GAINS</span>
                        <span className="text-xs font-semibold text-blue-400">₹{wealth.returns}</span>
                      </div>
                      <div>
                        <span className="block text-[8px] text-gold font-mono font-semibold">TOTAL VALUE</span>
                        <span className="text-xs font-bold text-gold">₹{wealth.total}</span>
                      </div>
                    </div>

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

          {/* Project 2: Golden Wealth Cycle (CSS 3D Book Animation) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
            
            {/* Left: 3D Book Mockup */}
            <div className="lg:col-span-6 flex justify-center order-last lg:order-first">
              <div className="relative py-12 perspective-1000">
                {/* CSS 3D Book Container */}
                <motion.div 
                  whileHover={{ rotateY: -28, rotateX: 10, scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="w-48 h-72 relative cursor-pointer shadow-[20px_20px_40px_rgba(0,0,0,0.5)] origin-left"
                >
                  {/* Front Cover */}
                  <div 
                    style={{ 
                      backfaceVisibility: "hidden", 
                      transform: "translateZ(15px)" 
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-[#1b2b4a] to-[#0a1120] border border-gold/40 rounded-r-md p-6 flex flex-col justify-between"
                  >
                    <div className="text-center">
                      <span className="text-[10px] text-gold font-mono tracking-[0.25em] uppercase font-bold">PLAYBOOK</span>
                      <div className="w-8 h-[1px] bg-gold/50 mx-auto my-3"></div>
                    </div>
                    <div className="my-auto">
                      <h5 className="text-xl font-bold tracking-tight text-center text-white leading-tight">
                        THE GOLDEN WEALTH CYCLE
                      </h5>
                      <p className="text-[8px] font-mono text-gold text-center mt-2 tracking-widest">FINANCIAL MINDSET</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[9px] font-mono text-gray-400">NILKANTH PATEL</p>
                    </div>
                  </div>

                  {/* Spine */}
                  <div 
                    style={{ 
                      width: "30px", 
                      transform: "rotateY(-90deg) translateZ(15px)" 
                    }}
                    className="absolute top-0 bottom-0 left-0 bg-[#0d172b] border-y border-l border-gold/40 flex items-center justify-center origin-left"
                  >
                    <span className="text-[7px] text-gold font-mono uppercase tracking-[0.3em] rotate-90 whitespace-nowrap">
                      GOLDEN WEALTH CYCLE
                    </span>
                  </div>

                  {/* Back Cover */}
                  <div 
                    style={{ 
                      transform: "rotateY(180deg) translateZ(15px)" 
                    }}
                    className="absolute inset-0 bg-[#070b14] border border-gold/30 rounded-l-md"
                  ></div>
                </motion.div>
              </div>
            </div>

            {/* Right: Project Details */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-gold/10 border border-gold/20">
                  <BookOpen className="w-6 h-6 text-gold" />
                </div>
                <span className="text-xs font-mono tracking-widest uppercase text-gold">Financial Playbook</span>
              </div>
              
              <h4 className="text-3xl font-bold text-white tracking-tight">Golden Wealth Cycle</h4>
              
              <p className="text-gray-400 font-light leading-relaxed">
                Authored a comprehensive finance strategy playbook covering behavioral psychology, smart compounding techniques, and core wealth-building structures for modern planners.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <span className="block text-gold text-xs font-mono mb-1">CHAPTER 01</span>
                  <span className="text-sm font-semibold text-white">Personal Finance Framework</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <span className="block text-gold text-xs font-mono mb-1">CHAPTER 02</span>
                  <span className="text-sm font-semibold text-white">Compounding & Growth</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <span className="block text-gold text-xs font-mono mb-1">CHAPTER 03</span>
                  <span className="text-sm font-semibold text-white">Behavioural Finance</span>
                </div>
                <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                  <span className="block text-gold text-xs font-mono mb-1">CHAPTER 04</span>
                  <span className="text-sm font-semibold text-white">Financial Planning Models</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
