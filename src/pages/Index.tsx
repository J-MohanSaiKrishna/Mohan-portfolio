import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Languages from "@/components/Languages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="min-h-screen text-foreground relative bg-[#101318]">
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <Hero />
        <About />
        <Stack />
        <Projects />
        <Education />
        <Languages />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
