"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Code, Building, Briefcase, GraduationCap, ShieldCheck, Scale, Plane, Laptop, Microscope, Palette } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const schools = [
  {
    id: "computing",
    title: "School of Computing",
    icon: Code,
    courses: [
      "BCA (Hons) - 4 years, 8 semesters",
      "iMSc (IT) - 5 years, 10 semesters",
      "iMCA - 5 years, 10 semesters",
      "MCA - 2 years, 4 semesters",
      "MCA - AI & Full Stack - 2 years"
    ],
    description: "Master the digital future with AI, Full-Stack, and System Architecture.",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: "management",
    title: "School of Management",
    icon: Briefcase,
    courses: [
      "BBA (Hons) - 4 years, 8 semesters",
      "iMBA - 5 years, 10 semesters",
      "iMBA (Global) - 5 years, 10 semesters",
      "MBA - 2 years, 4 semesters",
      "Masters in Int Trade & Finance"
    ],
    description: "Elite business education focused on global leadership and innovation.",
    gradient: "from-emerald-500/20 to-cyan-500/20"
  },
  {
    id: "engineering",
    title: "School of Engineering",
    icon: Building,
    courses: [
      "B.Tech CSE - 4 years, 8 semesters",
      "B.Tech AI & DS - 4 years, 8 semesters",
      "B.Tech AI & ML - 4 years, 8 semesters",
      "B.Tech CE - 4 years, 8 semesters",
      "B.Tech CSE (Big Data) - 4 years"
    ],
    description: "Precision engineering with a focus on emerging tech and innovation.",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    id: "commerce",
    title: "School of Commerce",
    icon: GraduationCap,
    courses: [
      "B.Com (Hons) - 4 years, 8 semesters",
      "B.Com (Hons) with ACCA - 4 years",
      "M.Com (Hons) - 2 years, 4 semesters"
    ],
    description: "Comprehensive financial and trade education with global standards.",
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    id: "sias",
    title: "SIAS (Forensics)",
    icon: ShieldCheck,
    courses: [
      "iMSc Forensic Science - 5 years",
      "iMSc Cyber Security - 5 years",
      "iMSc Clinical Embryology - 5 years",
      "M.Sc Forensic Science - 2 years"
    ],
    description: "Investigative sciences and forensic technology at the cutting edge.",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    id: "law",
    title: "School of Law",
    icon: Scale,
    courses: [
      "LL.B. - 3 years, 6 semesters",
      "LL.M. - 2 years, 4 semesters"
    ],
    description: "Shaping future-ready legal practitioners with strong ethics.",
    gradient: "from-indigo-500/20 to-blue-500/20"
  },
  {
    id: "aviation",
    title: "School of Aviation",
    icon: Plane,
    courses: [
      "iMBA Aviation & Hospitality - 5 years",
      "Masters in Aviation & Hospitality"
    ],
    description: "Take flight with specialized aviation and travel management.",
    gradient: "from-sky-500/20 to-indigo-500/20"
  },
  {
    id: "design",
    title: "School of Design",
    icon: Palette,
    courses: [
      "B.Design - UI/UX - 3 years",
      "B.Design - Game Design - 3 years"
    ],
    description: "Creative design programs for the digital and physical world.",
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];

export default function Programs() {
  const [activeSchool, setActiveSchool] = useState(schools[0]);

  return (
    <section className="py-24 relative overflow-hidden" id="academics">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Academic <span className="gradient-text-primary">Ecosystem</span>
          </motion.h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Choose from a diverse range of schools designed to build global change leaders with appropriate skills and values.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          {/* Left: School Selection (Scrollable on mobile) */}
          <div className="lg:w-1/3 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide snap-x snap-mandatory">
            {schools.map((school) => (
              <button
                key={school.id}
                onClick={() => setActiveSchool(school)}
                className={cn(
                  "flex items-center gap-4 px-6 py-4 rounded-2xl border transition-all duration-300 text-left group shrink-0 w-[240px] lg:w-full snap-center",
                  activeSchool.id === school.id
                    ? "bg-white/10 border-electric-purple/50 text-white shadow-[0_0_30px_rgba(139,92,246,0.1)]"
                    : "bg-white/5 border-white/10 text-zinc-400 hover:bg-white/[0.07] hover:border-white/20"
                )}
              >
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                  activeSchool.id === school.id 
                    ? "bg-electric-purple text-black scale-110" 
                    : "bg-white/5 text-zinc-500 group-hover:text-white"
                )}>
                  <school.icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm lg:text-base">{school.title}</span>
                  <span className="text-[10px] text-zinc-500 hidden lg:block">{school.courses.length} Programmes</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Detailed View */}
          <div className="lg:w-2/3 min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSchool.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="h-full"
              >
                <div className={cn(
                  "h-full glass-card p-8 md:p-12 border border-white/10 relative overflow-hidden flex flex-col justify-between",
                  "before:absolute before:inset-0 before:bg-gradient-to-br before:opacity-10 before:pointer-events-none transition-all duration-500",
                  activeSchool.gradient.split(' ').map(g => g.replace('from-', 'before:from-').replace('to-', 'before:to-')).join(' ')
                )}>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-electric-purple/20 flex items-center justify-center text-electric-purple border border-electric-purple/20">
                        <activeSchool.icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-1">{activeSchool.title}</h3>
                        <div className="h-1 w-12 bg-electric-purple rounded-full" />
                      </div>
                    </div>

                    <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl">
                      {activeSchool.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {activeSchool.courses.map((course, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group/item"
                        >
                          <span className="text-zinc-300 text-sm font-medium pr-2">{course}</span>
                          <ArrowRight className="w-4 h-4 text-zinc-600 group-hover/item:text-electric-purple group-hover/item:translate-x-1 transition-all" />
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-12 flex flex-wrap gap-4 relative z-10">
                    <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 group">
                      Enquire Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-white hover:bg-white/10 transition-colors">
                      Download Prospectus
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
