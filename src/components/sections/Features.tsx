"use client";

import { motion } from "framer-motion";
import { Globe, Layers, Rocket, Shield, Terminal, Webhook, Zap } from "lucide-react";
import React, { useRef, useState } from "react";

const features = [
  {
    title: "NEP 2020 Compliant",
    description: "Aligning with the National Education Policy 2020 for a holistic and flexible learning experience.",
    icon: Rocket,
  },
  {
    title: "Industry Experts",
    description: "Learn from faculty members with vast industry experience and academic brilliance.",
    icon: Terminal,
  },
  {
    title: "Foreign Collaborations",
    description: "Partnerships with global universities for curriculum delivery and student exchange programs.",
    icon: Globe,
  },
  {
    title: "Experiential Learning",
    description: "Hands-on experience using industry use-cases and emerging technologies.",
    icon: Webhook,
  },
  {
    title: "Full Pay OJT",
    description: "Opportunities for on-the-job training with full pay to build real-world expertise.",
    icon: Shield,
  },
  {
    title: "24/7 Accessibility",
    description: "Round-the-clock access to state-of-the-art facilities for both students and faculty.",
    icon: Zap,
  },
];

// Tilt Card Component
function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative glass-card rounded-2xl p-8 overflow-hidden group transition-transform duration-300 hover:-translate-y-2"
    >
      {/* Dynamic Hover Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />
      
      {/* Border Trace */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          boxShadow: `inset 0 0 0 1px rgba(139, 92, 246, 0.3)`,
          maskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent 100%)`,
        }}
      />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/50 transition-colors">
          <feature.icon className="w-7 h-7 text-white group-hover:text-primary transition-colors" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
        <p className="text-zinc-400 leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-6"
          >
            Built for <span className="gradient-text-primary">Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-zinc-400"
          >
            We've stripped away the fluff and focused on the core engineering skills that top-tier companies actually test for and require in production.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
