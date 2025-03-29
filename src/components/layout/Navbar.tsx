
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 dark:bg-fidcent-navy/90 backdrop-blur-lg shadow-sm border-b border-gray-200/50 dark:border-gray-800/30" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/">
            <Logo />
          </Link>
          {!isMobile && (
            <div className="ml-4 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/50 px-2 py-1 rounded-md">
              RC 7718433
            </div>
          )}
        </div>
        
        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <div className="mr-4 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/50 px-2 py-1 rounded-md">
            RC 7718433
          </div>
          <button onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <Link to="/services" className="text-sm font-medium hover:text-fidcent-green transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-fidcent-green transition-colors">
            About
          </Link>
          <Link to="/careers" className="text-sm font-medium hover:text-fidcent-green transition-colors">
            Careers
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-fidcent-green transition-colors">
            Contact
          </Link>
          <ThemeToggle />
          <Link to="/contact">
            <Button className="gradient-bg text-white hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </Link>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white/95 dark:bg-fidcent-navy shadow-lg p-4 flex flex-col space-y-4 border-b border-gray-200 dark:border-gray-800 backdrop-blur-sm">
            <Link 
              to="/services" 
              className="text-sm font-medium hover:text-fidcent-green transition-colors p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium hover:text-fidcent-green transition-colors p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/careers" 
              className="text-sm font-medium hover:text-fidcent-green transition-colors p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium hover:text-fidcent-green transition-colors p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex justify-between items-center">
              <ThemeToggle />
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="gradient-bg text-white hover:opacity-90 transition-opacity">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
