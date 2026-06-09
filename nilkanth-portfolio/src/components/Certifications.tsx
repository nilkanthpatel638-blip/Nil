"use client";

import { motion } from "framer-motion";
import { Award, FileText, CheckCircle2, ShieldAlert } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="w-full py-32 bg-[#0d0d0d] relative px-4 md:px-12 border-t border-white/5">
      {/* Dynamic Background Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-gold font-mono text-sm tracking-widest uppercase mb-4 font-semibold">Credentials</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Certifications.</h3>
          <p className="text-gray-400 mt-4 max-w-md mx-auto text-base font-light">
            Professional milestones validating compliance standards, strategic communication, and media accuracy.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ y: -8 }}
          className="group relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-gold/40 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-8 items-center"
        >
          {/* Card Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-3xl pointer-events-none"></div>

          {/* Certificate Icon Visual */}
          <div className="w-24 h-24 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(0,217,255,0.2)] group-hover:scale-105 transition-transform duration-300">
            <Award className="w-12 h-12 text-gold" />
          </div>

          {/* Certificate Details */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <span className="text-xs font-mono text-gold bg-gold/10 border border-gold/20 px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                Media Compliance
              </span>
              <span className="text-xs text-gray-500 font-mono flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                SEBI Awareness Initiative
              </span>
            </div>

            <h4 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight group-hover:text-gold transition-colors">
              SEBI Financial Awareness Certification
            </h4>

            <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed">
              Demonstrates proficiency in capital market frameworks, investor rights, and regulatory compliance guidelines, ensuring high-accuracy content standards in financial media production.
            </p>

            <div className="pt-2 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-gray-500 gap-2">
              <span>ISSUED BY: SECURITIES AND EXCHANGE BOARD OF INDIA (SEBI)</span>
              <span className="text-gold font-semibold">COMPLETED</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
