
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Coffee, Code2, Command, Database, FileJson, 
  Globe, Layers, Monitor, Smartphone, Server, Cloud, Settings, Activity } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const isMobile = useIsMobile();
  
  // Updated with refined technologies and descriptions
  const techStack = [
    { 
      name: "Java", 
      icon: Coffee, 
      type: "technology", 
      description: "Programming language" 
    },
    { 
      name: "Spring Boot", 
      icon: Layers, 
      type: "framework", 
      description: "Framework for Java" 
    },
    { 
      name: "TypeScript", 
      icon: FileJson, 
      type: "technology", 
      description: "Superset of JavaScript" 
    },
    { 
      name: "JavaScript", 
      icon: Code2, 
      type: "technology", 
      description: "Programming language" 
    },
    { 
      name: "Node.js", 
      icon: Server, 
      type: "technology", 
      description: "Runtime for JavaScript" 
    },
    { 
      name: "ReactJS", 
      icon: Globe, 
      type: "technology", 
      description: "UI library" 
    },
    { 
      name: "React Native", 
      icon: Smartphone, 
      type: "framework", 
      description: "Mobile app framework" 
    },
    { 
      name: "MongoDB", 
      icon: Database, 
      type: "technology", 
      description: "NoSQL database" 
    },
    { 
      name: "MySQL", 
      icon: Database, 
      type: "technology", 
      description: "Relational database" 
    },
    { 
      name: "Kubernetes", 
      icon: Settings, 
      type: "technology", 
      description: "Container orchestration" 
    },
    { 
      name: "Docker", 
      icon: Command, 
      type: "technology", 
      description: "Containerization platform" 
    },
    { 
      name: "CI/CD", 
      icon: Activity, 
      type: "concept", 
      description: "Integration & deployment methodology" 
    },
    { 
      name: "Cloud Services", 
      icon: Cloud, 
      type: "concept", 
      description: "AWS, Azure, Google Cloud" 
    },
    { 
      name: "UI/UX Design", 
      icon: Monitor, 
      type: "concept", 
      description: "Design discipline" 
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background gradient - Completely redesigned light mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-gray-50/80 dark:from-fidcent-navy dark:to-black -z-10"></div>
      
      {/* Abstract shapes - Enhanced for light mode */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fidcent-green/10 dark:bg-fidcent-green/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-fidcent-blue/10 dark:bg-fidcent-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-indigo-100 dark:bg-fidcent-blue/5 rounded-full filter blur-2xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-sky-100 dark:bg-fidcent-green/5 rounded-full filter blur-2xl"></div>
      </div>
      
      {/* Hero content */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="flex flex-col space-y-2">
                <span className="inline-block px-4 py-2 rounded-full bg-fidcent-green/10 text-fidcent-green font-medium text-sm border border-fidcent-green/20">
                  Innovative Technology Solutions
                </span>
                <span className="text-xs font-medium text-gray-600 dark:text-gray-400 inline-flex items-center">
                  RC 7718433
                </span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold leading-tight text-fidcent-navy dark:text-white">
                <span className="gradient-text">Transforming</span> Ideas into Digital Reality
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Fidcent Tech, a division of Fidcent Group, delivers cutting-edge software solutions, networking, and CCTV installation services that enhance growth, efficiency, and competitive advantage for businesses worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gradient-bg text-white hover:opacity-90 transition-opacity group">
                    Get Started
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="bg-white dark:bg-transparent border-gray-200 hover:border-fidcent-green">
                    Our Services
                  </Button>
                </Link>
              </div>
              
              {/* Tech stack section with updated descriptions */}
              <div className="pt-8">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Technologies & Concepts We Work With</p>
                <div className="flex flex-wrap gap-3">
                  {techStack.slice(0, isMobile ? 6 : techStack.length).map((tech, idx) => (
                    <div 
                      key={idx} 
                      className={cn(
                        "flex items-center gap-2 px-3 py-2 rounded-full bg-white dark:bg-fidcent-navy/80 shadow-sm border hover:shadow-md transition-all duration-300",
                        tech.type === "technology" ? "border-fidcent-green/20" : 
                        tech.type === "framework" ? "border-fidcent-blue/20" : "border-gray-200 dark:border-gray-800"
                      )}
                      title={`${tech.name}: ${tech.description}`}
                    >
                      <tech.icon size={16} className={cn(
                        tech.type === "technology" ? "text-fidcent-green" :
                        tech.type === "framework" ? "text-fidcent-blue" : "text-gray-500"
                      )} />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Hide the code illustration on mobile */}
            {!isMobile && (
              <div className="glass-card rounded-2xl overflow-hidden shadow-xl animate-fade-in-up border border-gray-200 dark:border-gray-800/20 soft-shadow">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-fidcent-green/10 to-fidcent-blue/10 p-8 flex items-center justify-center">
                  <div className="absolute w-24 h-24 bg-fidcent-green/15 rounded-full top-12 left-12 filter blur-xl"></div>
                  <div className="absolute w-32 h-32 bg-fidcent-blue/15 rounded-full bottom-12 right-12 filter blur-xl"></div>
                  
                  <div className="relative z-10 w-full max-w-md">
                    <div className="bg-white/90 dark:bg-fidcent-navy/90 rounded-xl shadow-lg p-6 backdrop-blur-sm border border-gray-200 dark:border-gray-800/20">
                      <div className="flex items-center gap-3 border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
                        <div className="flex space-x-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">code.fidcenttech.com</div>
                      </div>
                      <div className="space-y-2 font-mono text-sm">
                        <div className="text-gray-500 dark:text-gray-500">// Fidcent Tech solutions</div>
                        <div><span className="text-purple-700 dark:text-purple-400">const</span> <span className="text-blue-700 dark:text-blue-400">result</span> = <span className="text-orange-700 dark:text-orange-400">await</span> <span className="text-green-700 dark:text-green-500">FidcentTech</span>.<span className="text-blue-700 dark:text-blue-400">solve</span>(yourChallenge);</div>
                        <div className="text-gray-500 dark:text-gray-500">// Transforming businesses with technology</div>
                        <div><span className="text-red-700 dark:text-red-400">if</span> (result.<span className="text-blue-700 dark:text-blue-400">isSuccessful</span>) {"{"}</div>
                        <div className="pl-4"><span className="text-purple-700 dark:text-purple-400">return</span> <span className="text-green-700 dark:text-green-500">"Innovation delivered!"</span>;</div>
                        <div>{"}"}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
