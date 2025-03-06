
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/about/AboutSection";
import { Footer } from "@/components/layout/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
