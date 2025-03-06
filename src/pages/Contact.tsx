
import { Navbar } from "@/components/layout/Navbar";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
