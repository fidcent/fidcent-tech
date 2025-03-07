
import { Navbar } from "@/components/layout/Navbar";
import { ContactSection } from "@/components/contact/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/shared/SEO";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contact Us | Fidcent Tech" 
        description="Get in touch with Fidcent Tech for your technology and software development needs. We're ready to help transform your business with innovative digital solutions." 
        keywords="contact Fidcent Tech, technology consultancy, software development contact, tech solutions Nigeria, hire developers, tech project consultation"
      />
      <Navbar />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
