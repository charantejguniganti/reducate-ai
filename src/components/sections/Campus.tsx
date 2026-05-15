"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin, Wifi, BookOpen, Microscope } from "lucide-react";
import React, { useState } from "react";

const campusHighlights = [
  { icon: Wifi, title: "Wi-Fi Enabled", desc: "Seamless connectivity across the entire campus." },
  { icon: Microscope, title: "IIoT Lab", desc: "State-of-the-art Industrial IoT and automation lab." },
  { icon: BookOpen, title: "Tech Library", desc: "Digital and physical resources accessible 24/7." },
  { icon: MapPin, title: "R&D Center", desc: "Incubation and research hub for innovation." },
];

const campusPhotos = [
  "/campus/uni1.jpg",
  "/campus/uni2.webp",
  "/campus/uni3.webp",
  "/campus/uni4.jpg",
  "/campus/uni5.jpg",
  "/campus/uni6.jpg"
];

export default function Campus() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const nextPhoto = React.useCallback(() => {
    setCurrentPhoto((prev) => (prev + 1) % campusPhotos.length);
  }, []);

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + campusPhotos.length) % campusPhotos.length);
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      nextPhoto();
    }, 3000);
    return () => clearInterval(timer);
  }, [nextPhoto, currentPhoto]); // currentPhoto added to reset timer on manual click

  return (
    <section className="py-24 relative overflow-hidden" id="campus">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Photo Slider */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentPhoto}
                  src={campusPhotos[currentPhoto]}
                  alt={`Campus Photo ${currentPhoto + 1}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full h-full object-cover transition-all duration-700"
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
                <button 
                  onClick={prevPhoto}
                  className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-electric-purple transition-all group/btn"
                >
                  <ChevronLeft className="w-6 h-6 group-hover/btn:-translate-x-0.5 transition-transform" />
                </button>
                <button 
                  onClick={nextPhoto}
                  className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-electric-purple transition-all group/btn"
                >
                  <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Photo Indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 z-20">
                <div className="flex gap-1.5">
                  {campusPhotos.map((_, i) => (
                    <div 
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === currentPhoto ? 'bg-electric-purple w-4' : 'bg-white/30'}`}
                    />
                  ))}
                </div>
              </div>

              <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 z-20">
                <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Campus Gallery</span>
              </div>
            </div>
            {/* Decorative blurs */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-electric-purple/20 blur-[80px] -z-10" />
          </motion.div>

          {/* Right: Info */}
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold mb-6"
            >
              Immersive <span className="gradient-text-primary">Campus</span> Experience
            </motion.h2>
            <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
              Explore a campus built for the next generation. From high-speed connectivity to specialized research labs, JG University provides the perfect environment for both cognitive and experiential growth.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {campusHighlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-electric-purple/10 flex items-center justify-center text-electric-purple shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
