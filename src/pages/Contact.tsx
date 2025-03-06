
import { Navbar } from "@/components/layout/Navbar";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/shared/SEO";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Fidcent for your software development needs. We're ready to help transform your business with innovative digital solutions." 
      />
      <Navbar />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
