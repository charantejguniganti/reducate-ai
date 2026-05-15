"use client";

import Link from "next/link";
import { Mail, Globe, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20 pb-10 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-electric-purple/20 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 inline-block">
              <img 
                src="/logo.png" 
                alt="JG University Logo" 
                className="h-12 w-auto brightness-110"
              />
            </Link>
            <p className="text-zinc-400 max-w-sm mb-8">
              Ahmedabad's best new-age tech-driven university. Sponsored by the ASIA Charitable Trust, shaping futures since 1965.
            </p>
            <div className="flex items-center gap-4">
              {[Mail, Globe, MessageSquare].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-electric-purple hover:bg-electric-purple/10 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Schools</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-neon-cyan transition-colors">School of Computing</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">School of Management</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">School of Engineering</a></li>
              <li><a href="#" className="hover:text-neon-cyan transition-colors">School of Commerce</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Admissions</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-electric-purple transition-colors">Apply Online</a></li>
              <li><a href="#" className="hover:text-electric-purple transition-colors">Fee Structure</a></li>
              <li><a href="#" className="hover:text-electric-purple transition-colors">Scholarships</a></li>
              <li><a href="#" className="hover:text-electric-purple transition-colors">International Students</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Connect</h4>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex items-start gap-2">
                <span className="text-zinc-500 text-xs">Address:</span>
                <span>ASIA Campus, Drive In Rd, Thaltej, Ahmedabad-380054</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-zinc-500 text-xs">Email:</span>
                <a href="mailto:connect@jguni.in" className="hover:text-white transition-colors">connect@jguni.in</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-zinc-500 text-xs">Phone:</span>
                <a href="tel:+917567756758" className="hover:text-white transition-colors">+91 7567 7567 58/59</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500">
          <p>© 2026 JG University. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
             <span>Redesigned by</span>
             <span className="text-electric-purple font-bold">Antigravity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
