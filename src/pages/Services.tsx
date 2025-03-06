
import { Navbar } from "@/components/layout/Navbar";
import { ServicesSection } from "@/components/services/ServicesSection";
import { Footer } from "@/components/layout/Footer";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Services;
