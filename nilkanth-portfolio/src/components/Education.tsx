"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, Landmark, BookOpen } from "lucide-react";

const educationHistory = [
  {
    degree: "MBA – Finance",
    institution: "Indus University",
    period: "Expected 2027",
    details: "Focusing on advanced corporate finance, investment analysis, portfolio management, and digital strategy.",
    grade: "Pursuing"
  },
  {
    degree: "Bachelor of Commerce (Accounting & Finance)",
    institution: "Gujarat University",
    period: "Graduated 2025",
    details: "Studied financial accounting, corporate accounting, commercial laws, taxation, and auditing.",
    grade: "CGPA: 6.67"
  }
];

export default function Education() {
  return (
    <section id="education" className="w-full py-32 bg-[#050505] relative px-4 md:px-12 border-t border-white/5">
      {/* Light highlights */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-900/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-gold font-mono text-sm tracking-widest uppercase mb-4 font-semibold">Academic Foundation</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Education.</h3>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base font-light">
            My formal studies in accounting, business finance, and management strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationHistory.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-md hover:border-gold/30 hover:bg-white/10 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-gold/10 border border-gold/20 rounded-xl">
                    <GraduationCap className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-xs font-mono text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                  {edu.degree}
                </h4>
                
                <div className="flex items-center gap-2 text-blue-400 font-medium mb-4 text-sm">
                  <Landmark className="w-4 h-4" />
                  <span>{edu.institution}</span>
                </div>

                <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                  {edu.details}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-gray-500 uppercase tracking-widest">Performance</span>
                <span className="text-white font-semibold">{edu.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
