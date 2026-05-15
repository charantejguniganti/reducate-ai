"use client";

import { motion } from "framer-motion";

const companies = [
  "IBM", "ISRO", "SAC", "Yudiz", "TCS", "Cognizant", "ICICI Bank", 
  "Godrej", "Viacom 18", "Colors Gujarati", "Ahmedabad Mirror", "United HR"
];

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.01] overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex items-center justify-center mb-8">
        <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
          Our alumni build the future at
        </p>
      </div>

      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex gap-16 items-center whitespace-nowrap px-8"
        >
          {[...companies, ...companies].map((company, i) => (
            <span
              key={`${company}-${i}`}
              className="text-2xl font-bold text-zinc-600 hover:text-white transition-colors cursor-default"
            >
              {company}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
