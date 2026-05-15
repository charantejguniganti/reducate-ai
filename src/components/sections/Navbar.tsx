"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Academics", href: "#academics" },
  { name: "Admissions", href: "#admissions" },
  { name: "Campus Life", href: "#campus" },
  { name: "Research", href: "#research" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-4",
        isScrolled ? "py-2" : "py-6"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "mx-auto max-w-7xl flex items-center justify-between rounded-full transition-all duration-500",
            isScrolled
              ? "bg-black/50 backdrop-blur-md border border-white/10 px-6 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
              : "bg-transparent px-2 py-2"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group relative z-50">
            <img 
              src="/logo.png" 
              alt="JG University Logo" 
              className="h-10 w-auto brightness-110 group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-electric-purple to-neon-cyan transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 relative z-50">
            <button className="hidden md:flex items-center gap-2 text-sm font-medium bg-white text-black px-5 py-2.5 rounded-full hover:scale-105 transition-transform duration-300 group">
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? "auto" : "none",
        }}
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex items-center justify-center md:hidden"
      >
        <nav className="flex flex-col items-center gap-8">
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              <Link
                href={item.href}
                className="text-4xl font-heading font-bold text-white/70 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: navItems.length * 0.1, duration: 0.4 }}
            className="mt-8 px-8 py-4 bg-gradient-to-r from-electric-purple to-neon-cyan rounded-full text-white font-bold text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Start Learning Now
          </motion.button>
        </nav>
      </motion.div>
    </motion.header>
  );
}
