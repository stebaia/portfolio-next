import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectScrollSection from "./components/ProjectScrollSection";
import Services from "./components/ServiceSection";
import PricingSection from "./components/PricingSection";
import TextInfoSection from "./components/TextInfoSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar/>
      <HeroSection/>    
      
      <div className="container mt-24  mx-auto px-12 py-12">
        <TextInfoSection paragraph="Depending on your taste, you can choose whichever implementation you prefer. It's a classic animation that I've seen everywhere but it's mostly made with GSAP. So I hope you learned something from this Framer Motion implementation."/>
      <Services/>
      </div>
      <ProjectScrollSection/>
      <div className="container mt-24  mx-auto px-12 py-12">
      <AboutSection/>  
      <PricingSection />   
      </div>
    </main>
  );
}
