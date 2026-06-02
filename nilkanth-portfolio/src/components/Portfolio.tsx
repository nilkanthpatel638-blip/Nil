"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Video Editing", "Graphic Design", "AI Projects"];

const projects = [
  {
    id: 1,
    title: "Cinematic Reel 2026",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Neon Brand Identity",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Synthetic Futures",
    category: "AI Projects",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Urban Motion",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Vogue Magazine Concept",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Neural Dreams",
    category: "AI Projects",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section className="w-full min-h-screen bg-[#050505] py-32 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h2 className="text-gold font-mono text-sm tracking-widest uppercase mb-4">Selected Works</h2>
            <h3 className="text-4xl md:text-6xl font-bold text-foreground">Portfolio Collection.</h3>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat 
                    ? "bg-gold text-black" 
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-white/5 cursor-pointer"
              >
                {/* Fallback image if unsplash fails, but assuming it loads */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gold text-sm font-mono mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.category}</p>
                  <h4 className="text-2xl font-bold text-white">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-20 text-center">
          <button className="px-8 py-4 bg-transparent border border-gold text-gold hover:bg-gold hover:text-black transition-colors duration-300 rounded-full font-semibold uppercase tracking-wider text-sm">
            View Full Archive
          </button>
        </div>
      </div>
    </section>
  );
}
