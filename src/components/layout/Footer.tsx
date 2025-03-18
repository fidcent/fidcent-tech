
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Linkedin, Facebook, Twitter, Mail, Phone, CheckCircle, MapPin, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-fidcent-navy dark:to-[#020617] text-gray-700 dark:text-white py-16 mt-auto border-t border-gray-200 dark:border-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="text-fidcent-navy dark:text-white" />
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Empowering businesses through innovative and scalable technology solutions. A division of Fidcent Group.
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://linkedin.com/in/fidcenttech" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-fidcent-navy/60 shadow-sm border border-gray-200 dark:border-gray-700/30 hover:border-fidcent-green hover:text-fidcent-green transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com/fidcenttech" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-fidcent-navy/60 shadow-sm border border-gray-200 dark:border-gray-700/30 hover:border-fidcent-green hover:text-fidcent-green transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com/fidcenttech" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-fidcent-navy/60 shadow-sm border border-gray-200 dark:border-gray-700/30 hover:border-fidcent-green hover:text-fidcent-green transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-fidcent-navy dark:text-white">Services</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-1 hover:text-fidcent-green transition-colors">
                <ChevronRight className="w-4 h-4 text-fidcent-green" />
                <Link to="/services#software">Custom Software Development</Link>
              </li>
              <li className="flex items-center gap-1 hover:text-fidcent-green transition-colors">
                <ChevronRight className="w-4 h-4 text-fidcent-green" />
                <Link to="/services#mobile">Mobile App Development</Link>
              </li>
              <li className="flex items-center gap-1 hover:text-fidcent-green transition-colors">
                <ChevronRight className="w-4 h-4 text-fidcent-green" />
                <Link to="/services#web">Web Development</Link>
              </li>
              <li className="flex items-center gap-1 hover:text-fidcent-green transition-colors">
                <ChevronRight className="w-4 h-4 text-fidcent-green" />
                <Link to="/services#cloud">Cloud Solutions</Link>
              </li>
              <li className="flex items-center gap-1 hover:text-fidcent-green transition-colors">
                <ChevronRight className="w-4 h-4 text-fidcent-green" />
                <Link to="/services#networking">Networking Solutions</Link>
              </li>
              <li className="flex items-center gap-1 hover:text-fidcent-green transition-colors">
                <ChevronRight className="w-4 h-4 text-fidcent-green" />
                <Link to="/services#security">CCTV & Security Systems</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-fidcent-navy dark:text-white">Company</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-1 hover:text-fidcent-green transition-colors">
                <ChevronRight className="w-4 h-4 text-fidcent-green" />
                <Link to="/about">About Us</Link>
              </li>
              <li className="flex items-center gap-1 hover:text-fidcent-green transition-colors">
                <ChevronRight className="w-4 h-4 text-fidcent-green" />
                <Link to="/about#values">Our Values</Link>
              </li>
              <li className="flex items-center gap-1 hover:text-fidcent-green transition-colors">
                <ChevronRight className="w-4 h-4 text-fidcent-green" />
                <Link to="/about#team">Our Team</Link>
              </li>
              <li className="flex items-center gap-1 hover:text-fidcent-green transition-colors">
                <ChevronRight className="w-4 h-4 text-fidcent-green" />
                <Link to="/careers">Careers</Link>
              </li>
              <li className="flex items-center gap-1 hover:text-fidcent-green transition-colors">
                <ChevronRight className="w-4 h-4 text-fidcent-green" />
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div className="bg-white dark:bg-fidcent-navy/40 p-5 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800/20">
            <h3 className="text-lg font-bold mb-4 text-fidcent-navy dark:text-white">Contact</h3>
            <address className="not-italic text-gray-600 dark:text-gray-300 space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 text-fidcent-green flex-shrink-0" />
                <div>
                  <p>16, Feenas Street, Adj mast,</p>
                  <p>Ibafo, Ogun State</p>
                  <p>Nigeria</p>
                </div>
              </div>
              
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-fidcent-green flex-shrink-0" />
                <a href="tel:+2348165131008" className="hover:text-fidcent-green transition-colors">+234 816 513 1008</a>
              </p>
              
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-fidcent-green flex-shrink-0" />
                <a href="mailto:tech@fidcent.com" className="hover:text-fidcent-green transition-colors">tech@fidcent.com</a>
              </p>
            </address>
            
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700/30">
              <Link to="/contact" className="inline-flex items-center gap-1 text-fidcent-green hover:underline">
                Get in touch <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800/30">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 dark:text-gray-400">
            <p>&copy; {currentYear} Fidcent Tech - A division of Fidcent Group. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-fidcent-green text-sm">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-fidcent-green text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
