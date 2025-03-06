
import { Card } from "@/components/ui/card";
import { Code2Icon, HeartHandshakeIcon, ZapIcon, ShieldCheckIcon, BadgeCheckIcon, UsersIcon } from "lucide-react";

export const AboutSection = () => {
  const values = [
    {
      title: "Innovation",
      description: "Pioneering advanced technologies to deliver exceptional software solutions.",
      icon: ZapIcon
    },
    {
      title: "Customer Centricity",
      description: "Prioritizing clients' needs to exceed expectations and ensure satisfaction.",
      icon: HeartHandshakeIcon
    },
    {
      title: "Agility",
      description: "Embracing flexibility and adaptability to respond swiftly to changing needs.",
      icon: Code2Icon
    },
    {
      title: "Integrity",
      description: "Upholding the highest standards of honesty and accountability in all our actions.",
      icon: ShieldCheckIcon
    },
    {
      title: "Fidelity",
      description: "Ensuring reliability and trustworthiness in every aspect of our service.",
      icon: BadgeCheckIcon
    },
    {
      title: "Synergy",
      description: "Promoting a collaborative environment for our team and clients to enhance collective success.",
      icon: UsersIcon
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* About Us Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About Fidcent</h1>
          <p className="text-xl text-gray-600 mb-8">
            Founded in 2024, Fidcent is a dynamic software development company based in Ogun, Nigeria, 
            specializing in innovative software solutions for businesses across Africa and Europe.
          </p>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700 italic">
              "Our mission is to empower businesses by delivering innovative and scalable software solutions
              that enhance growth, efficiency, and competitive advantage with a strong focus on fidelity and
              customer-centricity."
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Our Vision</h2>
            <p className="text-gray-700 italic">
              "To become the premier provider of cutting-edge microSaaS solutions, revolutionizing the digital
              landscape for businesses globally."
            </p>
          </div>
        </div>
        
        {/* Our Values Section */}
        <div id="values" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="h-14 w-14 gradient-bg rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="text-white h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Target Market Section */}
        <div className="py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-xl text-gray-600 mb-8">
              We provide solutions for various industries, helping businesses digitize and scale
              their operations effectively.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Real Estate", "Apparel & Fashion", "Beauty", "Healthcare", "Finance", 
                "Retail", "Manufacturing", "Education", "Logistics", "Technology"].map((industry) => (
                <span key={industry} className="px-4 py-2 bg-gray-100 rounded-full text-gray-800">
                  {industry}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Geographical Focus</h3>
            <p className="text-gray-700">
              While our solutions can be implemented globally, we currently focus on markets in:
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <div className="px-6 py-3 bg-fidcent-navy text-white rounded-lg">
                Africa
              </div>
              <div className="px-6 py-3 bg-fidcent-navy text-white rounded-lg">
                Europe
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section - Placeholder */}
        <div id="team" className="py-16">
          <h2 className="text-3xl font-bold text-center mb-16">Our Team</h2>
          <p className="text-center text-xl text-gray-600 max-w-2xl mx-auto">
            At Fidcent, our team of expert developers, designers, and project managers work collaboratively
            to deliver exceptional results for our clients.
          </p>
          {/* Team member cards would go here */}
        </div>
      </div>
    </div>
  );
};
