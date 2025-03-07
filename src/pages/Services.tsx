
import { Navbar } from "@/components/layout/Navbar";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/shared/SEO";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Our Services | Fidcent Tech" 
        description="Explore Fidcent Tech's comprehensive range of technology services including custom software, mobile apps, web development, cloud solutions, AI & ML, and IoT." 
        keywords="Fidcent Tech services, software development services, mobile app development, web development, cloud solutions, AI services, machine learning, IoT development, technology consulting"
      />
      <Navbar />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Services;
