"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Star, Users, Zap } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-electric-purple/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-neon-cyan/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none" style={{ animation: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite" }} />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('https://ui.aceternity.com/_next/image?url=%2Fgrid.svg&w=384&q=75')] opacity-[0.03] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            style={{ y: y2, opacity }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-ping" />
              <span className="text-sm font-medium text-zinc-300">Admission Open for 2026-27 Intake</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6 leading-[1.1]"
            >
              Where Knowledge Meets <br className="hidden md:block" />
              <span className="gradient-text-primary">Innovation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              JG University is a New Age Tech-Driven University offering programmes that evolve as per future industry demand. Experience experiential learning at Ahmedabad's premier institution.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Enquire Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-electric-purple/20 to-neon-cyan/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </button>
              
              <button className="w-full sm:w-auto px-8 py-4 glass-card rounded-full font-bold text-lg text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play className="w-4 h-4 fill-white" />
                </div>
                Campus Tour
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-zinc-500 text-sm"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-zinc-800 flex items-center justify-center overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span><strong className="text-white">50,000+</strong> alumni worldwide</span>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D Visual/Mockup */}
          <motion.div 
            className="flex-1 relative w-full max-w-2xl mx-auto lg:mx-0 perspective-[1000px] scale-90 sm:scale-100"
            style={{ y: y1 }}
          >
            <motion.div
              initial={{ rotateY: 15, rotateX: 5, opacity: 0, scale: 0.8 }}
              animate={{ rotateY: -5, rotateX: 5, opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              className="relative w-full aspect-square md:aspect-[4/3] rounded-2xl border border-white/10 bg-black/40 backdrop-blur-2xl shadow-[0_0_100px_rgba(139,92,246,0.15)] overflow-hidden flex flex-col"
            >
               {/* Mockup Header */}
               <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-white/[0.02]">
                 <div className="flex gap-1.5">
                   <div className="w-3 h-3 rounded-full bg-red-500/80" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                   <div className="w-3 h-3 rounded-full bg-green-500/80" />
                 </div>
                 <div className="mx-auto px-4 py-1 rounded-md bg-white/5 text-xs text-zinc-500 font-mono">
                   jguni.in/admission
                 </div>
               </div>
               
               {/* Mockup Body */}
               <div className="flex-1 p-6 flex flex-col gap-4 relative">
                 <div className="flex justify-between items-center mb-4">
                   <div className="h-6 w-32 bg-white/10 rounded animate-pulse" />
                   <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-electric-purple to-neon-cyan" />
                 </div>
                 
                 {/* Fake Editor/Stats */}
                 <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.01] p-4 font-mono text-sm text-zinc-400 overflow-hidden relative group">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                   <p><span className="text-soft-pink">const</span> <span className="text-neon-cyan">university</span> = <span className="text-electric-purple">new</span> JGUniversity();</p>
                   <p className="mt-2 text-zinc-600">// Experiential learning active...</p>
                   <p className="mt-2 text-green-400">✓ Industry relevant skills</p>
                   <p className="mt-1 text-green-400">✓ Global perspective acquired</p>
                   
                   {/* Floating Elements inside mockup */}
                   <motion.div 
                     animate={{ y: [-10, 10, -10] }}
                     transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                     className="absolute top-1/4 right-4 w-24 h-24 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md z-20 flex flex-col items-center justify-center gap-2"
                   >
                     <Zap className="w-6 h-6 text-yellow-400" />
                     <span className="text-xs font-bold text-white">Legacy 1965</span>
                   </motion.div>
                 </div>
               </div>
               
               {/* Glossy overlay */}
               <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
            </motion.div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -right-8 -bottom-8 p-4 glass-card rounded-2xl flex items-center gap-4 border border-white/10 z-20"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                <Users className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">98%</p>
                <p className="text-xs text-zinc-400">Placements</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
