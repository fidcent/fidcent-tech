
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Command, Database, FileJson, Github, Layers, Lock, 
  PackageOpen, Server, Smartphone, Coffee, Globe, Cpu, Cloud, Settings, Activity, Monitor } from "lucide-react";

export const Hero = () => {
  // Updated with refined technologies
  const techStack = [
    { name: "Java", icon: Coffee },
    { name: "Spring Boot", icon: Layers },
    { name: "TypeScript", icon: FileJson },
    { name: "JavaScript", icon: Code2 },
    { name: "Node.js", icon: Server },
    { name: "ReactJS", icon: Globe },
    { name: "React Native", icon: Smartphone },
    { name: "MongoDB", icon: Database },
    { name: "MySQL", icon: Database },
    { name: "Kubernetes", icon: Settings },
    { name: "Docker", icon: PackageOpen },
    { name: "CI/CD", icon: Activity },
    { name: "Cloud Services", icon: Cloud },
    { name: "UI/UX Design", icon: Monitor },
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
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 ml-2">
                  RC 7718433
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-fidcent-navy dark:text-white">
                <span className="gradient-text">Transforming</span> Ideas into Digital Reality
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
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
              
              {/* Tech stack logos - Updated for better light mode */}
              <div className="pt-8">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Technologies we work with</p>
                <div className="flex flex-wrap gap-3">
                  {techStack.map((tech, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-3 py-2 rounded-full bg-white dark:bg-fidcent-navy/80 shadow-sm border border-gray-200 dark:border-gray-800 hover:border-fidcent-green hover:shadow-md transition-all duration-300">
                      <tech.icon size={16} className="text-fidcent-green" />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
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
          </div>
        </div>
      </section>
    </div>
  );
};
