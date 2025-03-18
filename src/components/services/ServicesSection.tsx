
import { Card } from "@/components/ui/card";
import { CheckIcon, CodeIcon, CloudIcon, SmartphoneIcon, ServerIcon, CpuIcon, MonitorIcon, ShieldIcon } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      id: "software",
      title: "Custom Software Development",
      description: "Tailored software solutions to meet unique business needs with full-cycle development from planning and design to deployment and support.",
      icon: CodeIcon,
      features: [
        "Requirements analysis and planning",
        "Custom software architecture design",
        "Frontend and backend development",
        "Quality assurance and testing",
        "Deployment and maintenance"
      ]
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps with user-centric design and robust performance for iOS and Android platforms.",
      icon: SmartphoneIcon,
      features: [
        "iOS and Android native apps",
        "Cross-platform development (React Native)",
        "UI/UX design for mobile",
        "Mobile app testing",
        "App store submission and maintenance"
      ]
    },
    {
      id: "web",
      title: "Web Development",
      description: "Responsive and dynamic web applications including e-commerce solutions, CMS, and custom web portals using React, TypeScript, and more.",
      icon: ServerIcon,
      features: [
        "Responsive web design",
        "Progressive web applications",
        "E-commerce platforms",
        "Content management systems",
        "Custom web portals and dashboards"
      ]
    },
    {
      id: "cloud",
      title: "Cloud Solutions",
      description: "Cloud migration, integration, and management with scalable and secure cloud infrastructure solutions using Docker, Kubernetes, and more.",
      icon: CloudIcon,
      features: [
        "Cloud migration strategies",
        "Multi-cloud architecture",
        "Serverless applications",
        "Cloud security implementation",
        "Performance optimization"
      ]
    },
    {
      id: "ai",
      title: "AI & Machine Learning",
      description: "AI-driven solutions for data analysis, automation, decision-making, and custom machine learning models.",
      icon: ServerIcon,
      features: [
        "Predictive analytics",
        "Natural language processing",
        "Computer vision solutions",
        "Recommendation systems",
        "Machine learning model deployment"
      ]
    },
    {
      id: "iot",
      title: "IoT Development",
      description: "Internet of Things solutions for smart devices and systems, integrated with existing business processes.",
      icon: CpuIcon,
      features: [
        "IoT device prototyping",
        "Embedded systems development",
        "IoT data analytics",
        "Smart home/office solutions",
        "Industrial IoT applications"
      ]
    },
    {
      id: "networking",
      title: "Networking Solutions",
      description: "Comprehensive networking services including infrastructure setup, maintenance, and optimization for businesses of all sizes.",
      icon: MonitorIcon,
      features: [
        "Network design and implementation",
        "Network security solutions",
        "Wireless network setup",
        "Network maintenance and troubleshooting",
        "Network performance optimization"
      ]
    },
    {
      id: "security",
      title: "CCTV & Security Systems",
      description: "End-to-end security solutions including CCTV installation, access control systems, and integrated security management.",
      icon: ShieldIcon,
      features: [
        "CCTV system design and installation",
        "Access control systems",
        "Intrusion detection systems",
        "Security system integration",
        "24/7 monitoring solutions"
      ]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Our Services</h1>
          <p className="text-xl text-gray-600">
            Fidcent Tech, a division of Fidcent Group, delivers cutting-edge software solutions, networking, and security systems that enhance growth, efficiency, and competitive advantage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} id={service.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-14 w-14 gradient-bg rounded-lg flex items-center justify-center mb-4">
                <service.icon className="text-white h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-fidcent-green mt-0.5 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
