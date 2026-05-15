"use client";

import { motion } from "framer-motion";
import { Code, Cpu, Globe, Layout, Sparkles } from "lucide-react";

const features = [
  {
    title: "Global Network",
    desc: "Connect with elite peers worldwide.",
    icon: Globe,
    colSpan: "col-span-1 md:col-span-2",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "AI-Powered",
    desc: "Personalized curriculum that adapts.",
    icon: Cpu,
    colSpan: "col-span-1 md:col-span-1",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Production Ready",
    desc: "Build real SaaS products.",
    icon: Layout,
    colSpan: "col-span-1 md:col-span-1",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Modern Stack",
    desc: "Next.js, React, Tailwind, TS.",
    icon: Code,
    colSpan: "col-span-1 md:col-span-2",
    color: "from-pink-500/20 to-rose-500/20",
  },
];

export default function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Content */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6"
            >
              <Sparkles className="w-4 h-4 text-electric-purple" />
              <span className="text-sm font-medium">The Reducate Difference</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Not just a University.<br />
              A <span className="gradient-text-primary">Launchpad.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed"
            >
              Sponsored by the ASIA Charitable Trust (est. 1965), JG University is Ahmedabad's premier tech-driven institution. We bridge the gap between academia and industry through immersive, experiential learning.
            </motion.p>
            
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-bold text-white mb-1">1965</p>
                <p className="text-sm text-zinc-500">Legacy Begins</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-white mb-1">17+</p>
                <p className="text-sm text-zinc-500">Colleges</p>
              </div>
              <div className="w-px bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-white mb-1">UGC</p>
                <p className="text-sm text-zinc-500">Approved</p>
              </div>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card p-6 rounded-2xl flex flex-col justify-between group relative overflow-hidden ${feature.colSpan} min-h-[200px]`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${feature.color}`} />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
