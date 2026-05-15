import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import About from "@/components/sections/About";
import Leaders from "@/components/sections/Leaders";
import Features from "@/components/sections/Features";
import Programs from "@/components/sections/Programs";
import Campus from "@/components/sections/Campus";
import Faculty from "@/components/sections/Faculty";
import Showcase from "@/components/sections/Showcase";
import Testimonials from "@/components/sections/Testimonials";
import Stats from "@/components/sections/Stats";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative z-10">
      <Navbar />
      
      <div className="w-full relative">
        <Hero />
        <SocialProof />
        <About />
        <Leaders />
        <Features />
        <Programs />
        <Campus />
        <Faculty />
        <Showcase />
        <Testimonials />
        <Stats />
        <CTA />
      </div>

      <Footer />
    </main>
  );
}
