"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const leaders = [
  {
    name: "M.P. Chandran",
    role: "President, JG University",
    image: "/leaders/mp-chandran.jpg",
    bio: "M.P Chandran is a postgraduate in management with more than 30 years of experience in senior and board-level positions in public and private sectors in India and abroad. He is the Chairperson of the Education Task Force, Gujarat Chamber of Commerce and Industry. He is also the chairman of ASIA Charitable Trust (ACT). ACT owns and successfully runs 3 schools, 17 colleges, and JG University.",
  },
  {
    name: "Dr. CA Achyut Dani",
    role: "Director-General and Provost, JG University",
    image: "/leaders/achyut-dani.jpg",
    bio: "Dr. CA Achyut Dani has more than 21 years of experience and expertise in academics and industry. He holds a doctorate in management and commerce and is also a research guide. He has been a fellow member of CRET of ICAI, and a senior mentor at Academic Staff College, Gujarat University. He is on the Governing Council of the Asian-African Chambers of Commerce & Industry.",
  },
];

export default function Leaders() {
  return (
    <section className="py-24 relative overflow-hidden" id="leaders">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Visionary <span className="gradient-text-primary">Leadership</span>
          </motion.h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Guided by leaders with decades of global expertise in academia and industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8 group hover:border-electric-purple/50 transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden shrink-0 border border-white/10 group-hover:border-electric-purple/50 transition-colors">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="flex-1">
                  <Quote className="w-8 h-8 text-electric-purple/40 mb-4 mx-auto md:mx-0" />
                  <h3 className="text-2xl font-bold text-white mb-1">{leader.name}</h3>
                  <p className="text-electric-purple font-medium mb-4 text-sm uppercase tracking-wider">{leader.role}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed italic">
                    "{leader.bio}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
