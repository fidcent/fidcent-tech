
import { Navbar } from "@/components/layout/Navbar";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/shared/SEO";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50/50 dark:bg-gray-950">
      <SEO 
        title="Our Services | Fidcent Tech | Part of Fidcent Group" 
        description="Explore Fidcent Tech's comprehensive range of technology services including custom software, mobile apps, web development, networking, CCTV installation, cloud solutions, AI & ML, and IoT. Part of Fidcent Group providing complete IT solutions." 
        keywords="Fidcent Tech services, Fidcent Group, software development services, mobile app development, web development, cloud solutions, AI services, machine learning, IoT development, networking solutions, CCTV installation, security systems, technology consulting, Java, Spring Boot, React, TypeScript, Node.js, MongoDB"
      />
      <Navbar />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Services;
