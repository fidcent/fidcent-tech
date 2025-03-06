
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/Logo";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/services" className="text-sm font-medium hover:text-fidcent-green transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-fidcent-green transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-fidcent-green transition-colors">
            Contact
          </Link>
          <Link to="/contact">
            <Button className="gradient-bg text-white hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
