import { useState } from "react";
import LoadingScreen from "@/components/shared/LoadingScreen";
import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Stack from "@/components/sections/Stack";
import Projects from "@/components/sections/Projects";
import Languages from "@/components/sections/Languages";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layouts/Footer";

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
