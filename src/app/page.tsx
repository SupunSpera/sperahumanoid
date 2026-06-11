import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import RobotPlatform from "@/components/RobotPlatform";
import Capabilities from "@/components/Capabilities";
import HowItWorks from "@/components/HowItWorks";
import Deployment from "@/components/Deployment";
import Features from "@/components/Features";
import VideoGallery from "@/components/VideoGallery";
import TechnicalDirection from "@/components/TechnicalDirection";
import Partnership from "@/components/Partnership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-foreground overflow-x-hidden selection:bg-brand-cyan/20 selection:text-brand-cyan">
      {/* Sticky Navigation & HUD */}
      <Header />

      <main className="flex flex-col">
        {/* Section 1: Hero Landing */}
        <Hero />

        {/* Section 2: Mission & Core Pillars */}
        <Mission />

        {/* Section 3: Robot Platform Specs & Walk Demo */}
        <RobotPlatform />

        {/* Section 4: Capabilities Grid */}
        <Capabilities />

        {/* Section 5: How It Works Interactive Stepper */}
        <HowItWorks />

        {/* Section 6: Deployment Sectors Use Cases */}
        <Deployment />

        {/* Section 7: Features Configuration */}
        <Features />

        {/* Section 8: Video Demonstration Gallery */}
        <VideoGallery />

        {/* Section 9: Technical direction quote */}
        <TechnicalDirection />

        {/* Section 10: Partnership and Funding */}
        <Partnership />

        {/* Section 11: Contact / Transmission Console */}
        <Contact />
      </main>

      {/* Footer & secure status */}
      <Footer />
    </div>
  );
}
