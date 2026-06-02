"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Sparkles, Database, FileSpreadsheet } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Freelancer – Digital & AI Services",
    company: "Self-Employed",
    period: "Sept 2025 – Present",
    icon: <Sparkles className="w-5 h-5 text-gold" />,
    responsibilities: [
      "Delivered high-end digital design and AI-powered content services for diverse clients.",
      "Produced 150+ graphic designs and 80+ video projects under tight schedules.",
      "Improved content production efficiency by 40% using cutting-edge AI workflows.",
      "Assisted clients through data-driven digital performance analysis and custom strategies."
    ]
  },
  {
    role: "Admin Associate (Part-Time)",
    company: "MP's Institute of Physics",
    period: "Nov 2022 – Aug 2025",
    icon: <Database className="w-5 h-5 text-blue-400" />,
    responsibilities: [
      "Managed 500+ student financial records, ensuring 100% database integrity and confidentiality.",
      "Maintained 100% reconciliation accuracy across fee collection and processing.",
      "Streamlined invoice collection and digital tracking systems, reducing billing discrepancies.",
      "Coordinated cross-functional financial transactions and monthly management reporting."
    ]
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = gsap.utils.toArray(".exp-item");

    // Line drawing animation
    gsap.fromTo(lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        }
      }
    );

    // Fade in timeline items
    items.forEach((item: any) => {
      gsap.fromTo(item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          }
        }
      );
    });
  }, []);

  return (
    <section id="experience" className="w-full py-32 bg-[#0d0d0d] relative px-4 md:px-12 border-t border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]"></div>
      
      <div ref={containerRef} className="max-w-4xl mx-auto relative z-10">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-gold font-mono text-sm tracking-widest uppercase mb-4">Career Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Professional Experience.</h3>
          <p className="text-gray-400 mt-4 text-lg font-light">A timeline of financial administration, digital design, and automated systems.</p>
        </div>

        <div className="relative pl-8 md:pl-16 ml-4 md:ml-12 border-l border-white/10">
          
          {/* Animated Line Overlay */}
          <div 
            ref={lineRef} 
            className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold via-blue-500 to-transparent origin-top"
            style={{ transform: "scaleY(0)" }}
          ></div>

          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div key={index} className="exp-item relative group">
                
                {/* Node Circle */}
                <div className="absolute -left-[42px] md:-left-[74px] top-1.5 w-7 h-7 rounded-full border border-white/20 bg-[#0d0d0d] flex items-center justify-center group-hover:border-gold transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  {exp.icon}
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                    {exp.role}
                  </h4>
                  <span className="text-gold font-mono text-xs mt-2 md:mt-0 bg-gold/10 border border-gold/20 px-3.5 py-1.5 rounded-full w-max tracking-wide">
                    {exp.period}
                  </span>
                </div>
                
                <h5 className="text-lg text-blue-400 font-medium mb-6">{exp.company}</h5>
                
                <ul className="space-y-3.5 text-gray-400 text-base font-light max-w-3xl leading-relaxed">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold/60 shrink-0"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
