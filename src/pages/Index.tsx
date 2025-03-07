
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/shared/SEO";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Fidcent Tech - Innovative Software Solutions"
        description="Transforming businesses through innovative technology solutions. Fidcent Tech specializes in custom software development, mobile apps, web development, cloud solutions, AI, and IoT."
        keywords="Fidcent Tech, tech solutions, software development, digital transformation, custom software, mobile apps, web development, cloud solutions, AI development, IoT solutions, Nigeria tech company"
      />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
