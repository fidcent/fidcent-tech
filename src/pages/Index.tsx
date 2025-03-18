
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { Footer } from "@/components/layout/Footer";
import { SEO } from "@/components/shared/SEO";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-50/50 dark:bg-gray-950">
      <SEO 
        title="Fidcent Tech - Innovative Software Solutions | Part of Fidcent Group"
        description="Transforming businesses through innovative technology solutions. Fidcent Tech, a division of Fidcent Group, specializes in custom software development, mobile apps, web development, networking, CCTV installation, cloud solutions, AI, and IoT."
        keywords="Fidcent Tech, Fidcent Group, tech solutions, software development, digital transformation, custom software, mobile apps, web development, cloud solutions, AI development, IoT solutions, networking solutions, CCTV installation, security systems, IT consulting, Java, Spring Boot, React, TypeScript, Node.js, MongoDB, DevOps, Nigeria tech company"
      />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
