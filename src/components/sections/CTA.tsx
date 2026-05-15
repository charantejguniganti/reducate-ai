"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Explosive Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-purple/10 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-electric-purple via-neon-cyan to-soft-pink rounded-full blur-[200px] opacity-20 pointer-events-none animate-pulse" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto glass-card rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group"
        >
          {/* Spotlight Effect on Hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight"
          >
            Your Journey to <br />
            <span className="gradient-text-primary">Greatness</span> Begins Here.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl text-zinc-300 mb-12 max-w-2xl mx-auto"
          >
            Join JG University and be part of a community that empowers you to explore, innovate, and lead. Admissions for 2026-27 are now open.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center gap-2">
              Apply Now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-colors flex items-center justify-center">
              Talk to Admissions
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
