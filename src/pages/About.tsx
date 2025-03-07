
import { Navbar } from "@/components/layout/Navbar";
import { AboutSection } from "@/components/about/AboutSection";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/shared/SEO";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="About Us | Fidcent Tech" 
        description="Learn about Fidcent Tech - a premier technology company committed to innovation, customer centricity, and delivering exceptional digital solutions." 
        keywords="Fidcent Tech, about Fidcent Tech, tech company Nigeria, software development company, technology innovation, tech team, software engineering team"
      />
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default About;
