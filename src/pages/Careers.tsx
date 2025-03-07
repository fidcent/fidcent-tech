
import { Navbar } from "@/components/layout/Navbar";
import { CareersSection } from "@/components/careers/CareersSection";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/shared/SEO";

const Careers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Careers at Fidcent Tech" 
        description="Join our team of innovative technology professionals. Explore career opportunities at Fidcent Tech and be part of a team committed to creating cutting-edge solutions." 
        keywords="Fidcent Tech careers, technology jobs, software development careers, tech jobs, Nigeria tech jobs, remote tech jobs"
      />
      <Navbar />
      <CareersSection />
      <Footer />
    </div>
  );
};

export default Careers;
