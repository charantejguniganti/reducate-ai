"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jigardan Gadhvi",
    role: "Celebrity Singer & Alumnus",
    image: "https://i.pravatar.cc/150?img=12",
    content: "As a celebrity singer today, I owe a great deal to JG for shaping me. The faculty were mentors who guided us at every step. This experience instilled in me the virtues of discipline and hard work.",
  },
  {
    name: "Sumit Khurana",
    role: "General Manager, Ahmedabad Mirror",
    image: "https://i.pravatar.cc/150?img=15",
    content: "My education at JG has been instrumental in shaping my career. The comprehensive academic program and exceptional faculty provided me with a solid grounding in my chosen field.",
  },
  {
    name: "Parth Prajapati",
    role: "Sr. BDM, KGL India Shipping",
    image: "https://i.pravatar.cc/150?img=14",
    content: "JG was instrumental in shaping my career and helping me achieve my professional goals. The BBA program provided me with a strong foundation in business principles and experiential learning.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden bg-black/30 border-y border-white/5">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[url('https://ui.aceternity.com/_next/image?url=%2Fgrid.svg&w=384&q=75')] opacity-[0.02] pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Stories of <span className="gradient-text-primary">Success</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400"
          >
            Our graduates are leading innovation at global tech giants and creative powerhouses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8 rounded-3xl relative group hover:-translate-y-2 transition-transform duration-500"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-electric-purple/20 transition-colors duration-500" />
              
              <div className="flex gap-4 items-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-electric-purple to-neon-cyan blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full relative z-10 border border-white/20" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">{t.name}</h4>
                  <p className="text-xs text-electric-purple">{t.role}</p>
                </div>
              </div>
              
              <p className="text-zinc-400 leading-relaxed relative z-10">
                &quot;{t.content}&quot;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
