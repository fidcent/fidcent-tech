
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/about/AboutSection";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/shared/SEO";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="About Us" 
        description="Learn about Fidcent - a premier software development company committed to innovation, customer centricity, and delivering exceptional digital solutions." 
      />
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
