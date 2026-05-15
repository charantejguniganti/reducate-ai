"use client";

import { motion } from "framer-motion";

const faculty = [
  { name: "Dr. Namika Patel", school: "Management" },
  { name: "Dr. Hitesh Harwani", school: "Management" },
  { name: "CA Harshil Trivedi", school: "Commerce" },
  { name: "Dr. Sanjay Christian", school: "Management" },
  { name: "Dr. S Pushpalatha", school: "Computing" },
  { name: "Dr. Mona Shah", school: "Computing" },
  { name: "Prof. Afsar Mohammad", school: "Engineering" },
  { name: "Dr. Vaibhav Shah", school: "Registrar" },
  { name: "Prof. Janvi Solanki", school: "Computing" },
  { name: "Prof. Nilesh Taware", school: "Computing" },
];

export default function FacultyMarquee() {
  return (
    <section className="py-20 bg-white/[0.01] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-2xl font-bold text-white">World-Class <span className="text-electric-purple">Academic Faculty</span></h3>
          <p className="text-sm text-zinc-500">Inspiration by dynamic, brilliant scholars and industry experts.</p>
        </div>
      </div>

      <div className="flex overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />
        
        <motion.div
          animate={{ x: [0, -1500] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
          className="flex gap-8 items-center whitespace-nowrap px-4"
        >
          {[...faculty, ...faculty, ...faculty].map((member, i) => (
            <div
              key={i}
              className="px-8 py-6 rounded-2xl glass-card border border-white/5 hover:border-electric-purple/30 transition-all group"
            >
              <p className="text-lg font-bold text-white group-hover:text-electric-purple transition-colors mb-1">{member.name}</p>
              <p className="text-xs text-zinc-500 font-medium uppercase tracking-widest">{member.school}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
