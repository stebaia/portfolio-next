
import Navbar from "../components/navbar/Navbar";
import ContactForm from "../components/ContactForm";
import FooterSection from "../components/FooterSection";
import AboutSection from "../components/about/AboutSection";


export default function About() {
  return (
    <main className={`flex min-h-screen flex-col bg-[#121212]`}>
      <Navbar/>
      
      <div className="container mt-24  mx-auto px-12 py-12">
      <AboutSection/>  
      
      <ContactForm/>
      </div>
      <FooterSection/>
    </main>
  );
}