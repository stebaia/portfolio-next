import HeroSection from "./components/HeroSection";
import Navbar from "./components/navbar/Navbar";
import ProjectScrollSection from "./components/project/ProjectScrollSection";
import Services from "./components/ServiceSection";
import PricingSection from "./components/PricingSection";
import TextInfoSection from "./components/TextInfoSection";
import ContactForm from "./components/ContactForm";
import FooterSection from "./components/FooterSection";
import AboutShortSection from './components/about/AboutShortSection';


export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col bg-[#121212]`}>
      <Navbar/>
      <HeroSection/>    
      <br></br>
      <div className="container mt-24  mx-auto px-12 py-12">
        {/*  */}
        <TextInfoSection paragraph="Amo sviluppare App e Siti Web e mi diverto a farli nella maniera migliore e più funzionale possibile." imageUrl={"/images/work.jpg"}/>
      
      </div>
      <div className="md:px-12 md:py-12">
        <Services/>
      </div>
      <ProjectScrollSection/>
      <div className="container mt-24  mx-auto px-12 py-12">
      <AboutShortSection/>  
      <PricingSection />   
      <ContactForm/>
      </div>
      <FooterSection/>
    </main>
  );
}
