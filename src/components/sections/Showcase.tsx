"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Terminal } from "lucide-react";

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);

  return (
    <section id="showcase" ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            The Ultimate <span className="gradient-text-primary">Workspace</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400"
          >
            Experience an integrated environment that feels like magic.
          </motion.p>
        </div>

        <motion.div
          style={{ rotateX, scale, y }}
          className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-3xl border border-white/10 bg-black/60 backdrop-blur-3xl shadow-[0_0_100px_rgba(6,182,212,0.15)] overflow-hidden flex flex-col perspective-[2000px]"
        >
           {/* macOS like header */}
           <div className="h-14 border-b border-white/10 flex items-center justify-between px-6 bg-white/[0.02]">
             <div className="flex gap-2">
               <div className="w-3.5 h-3.5 rounded-full bg-red-500/80" />
               <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80" />
               <div className="w-3.5 h-3.5 rounded-full bg-green-500/80" />
             </div>
             <div className="flex gap-4 items-center">
               <span className="text-sm font-medium text-zinc-400">workspace.ts</span>
               <span className="text-xs text-zinc-600">Saved</span>
             </div>
             <div className="w-16" /> {/* Spacer */}
           </div>

           {/* Content area split */}
           <div className="flex-1 flex overflow-hidden">
              {/* Sidebar */}
              <div className="w-64 border-r border-white/10 p-4 hidden md:flex flex-col gap-2 bg-white/[0.01]">
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Explorer</div>
                {['components', 'hooks', 'lib', 'styles'].map(folder => (
                  <div key={folder} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white cursor-pointer px-2 py-1 rounded hover:bg-white/5 transition-colors">
                    <span>📁</span> {folder}
                  </div>
                ))}
                <div className="flex items-center gap-2 text-sm text-neon-cyan bg-neon-cyan/10 px-2 py-1 rounded cursor-pointer mt-2">
                  <span>📄</span> workspace.ts
                </div>
              </div>

              {/* Code Editor Area */}
              <div className="flex-1 p-6 font-mono text-sm leading-relaxed overflow-hidden relative">
                <div className="text-zinc-500 select-none absolute left-6 top-6 bottom-6 flex flex-col gap-1 w-6 text-right pr-2 border-r border-white/10">
                  {Array.from({length: 20}).map((_, i) => <span key={i}>{i+1}</span>)}
                </div>
                
                <div className="pl-10">
                  <p><span className="text-electric-purple">import</span> {'{'} <span className="text-neon-cyan">Engineer</span> {'}'} <span className="text-electric-purple">from</span> <span className="text-green-400">'@reducate/core'</span>;</p>
                  <p className="mt-4"><span className="text-soft-pink">const</span> developer = <span className="text-electric-purple">new</span> <span className="text-neon-cyan">Engineer</span>({'{'}</p>
                  <p className="pl-4">skills: [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Next.js'</span>, <span className="text-green-400">'System Design'</span>],</p>
                  <p className="pl-4">mindset: <span className="text-green-400">'10x'</span>,</p>
                  <p className="pl-4">dedication: <span className="text-orange-400">100</span></p>
                  <p>{'}'});</p>
                  <p className="mt-4"><span className="text-electric-purple">await</span> developer.<span className="text-blue-400">train</span>();</p>
                  <p><span className="text-electric-purple">await</span> developer.<span className="text-blue-400">deploy</span>();</p>
                  
                  {/* Cursor blink */}
                  <motion.span 
                    animate={{ opacity: [1, 0] }} 
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-5 bg-white/80 translate-y-1 ml-1"
                  />
                </div>

                {/* Floating terminal over the code */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute bottom-6 right-6 w-80 glass-card rounded-xl border border-white/10 overflow-hidden"
                >
                  <div className="bg-white/5 border-b border-white/10 px-3 py-2 text-xs text-zinc-400 flex items-center gap-2">
                    <Terminal className="w-3 h-3" /> Terminal
                  </div>
                  <div className="p-3 text-xs font-mono text-green-400 space-y-1">
                    <p>$ npm run build</p>
                    <p className="text-zinc-400">Compiling application...</p>
                    <p className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Build successful</p>
                    <p className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> 0 vulnerabilities</p>
                    <p className="text-electric-purple">Ready for production.</p>
                  </div>
                </motion.div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
}
