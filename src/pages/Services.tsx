
import { Navbar } from "@/components/layout/Navbar";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/shared/SEO";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Our Services" 
        description="Explore our comprehensive range of software development services including custom software, mobile apps, web development, cloud solutions, AI & ML, and IoT." 
      />
      <Navbar />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Services;
