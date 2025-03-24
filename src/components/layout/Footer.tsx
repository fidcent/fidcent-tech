
import { Logo } from "@/components/ui/Logo";
import { Link } from "react-router-dom";
import { Linkedin, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-fidcent-navy dark:to-[#020617] text-gray-700 dark:text-white py-16 mt-auto border-t border-gray-200 dark:border-gray-800/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Logo className="text-fidcent-navy dark:text-white" />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                RC 7718433
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              Empowering businesses through innovative and scalable technology solutions. A division of <a href="https://fidcent.com" target="_blank" rel="noopener noreferrer" className="text-fidcent-green hover:underline">Fidcent Group</a>.
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
              <li className="hover:text-fidcent-green transition-colors">
                <Link to="/services#software">Custom Software Development</Link>
              </li>
              <li className="hover:text-fidcent-green transition-colors">
                <Link to="/services#mobile">Mobile App Development</Link>
              </li>
              <li className="hover:text-fidcent-green transition-colors">
                <Link to="/services#web">Web Development</Link>
              </li>
              <li className="hover:text-fidcent-green transition-colors">
                <Link to="/services#cloud">Cloud Solutions</Link>
              </li>
              <li className="hover:text-fidcent-green transition-colors">
                <Link to="/services#networking">Networking Solutions</Link>
              </li>
              <li className="hover:text-fidcent-green transition-colors">
                <Link to="/services#security">CCTV & Security Systems</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-fidcent-navy dark:text-white">Company</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="hover:text-fidcent-green transition-colors">
                <Link to="/about">About Us</Link>
              </li>
              <li className="hover:text-fidcent-green transition-colors">
                <Link to="/about#values">Our Values</Link>
              </li>
              <li className="hover:text-fidcent-green transition-colors">
                <Link to="/about#team">Our Team</Link>
              </li>
              <li className="hover:text-fidcent-green transition-colors">
                <Link to="/careers">Careers</Link>
              </li>
              <li className="hover:text-fidcent-green transition-colors">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-fidcent-navy dark:text-white">Contact</h3>
            <div className="text-gray-600 dark:text-gray-300 space-y-3">
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
                <a href="mailto:info@tech.fidcent.com" className="hover:text-fidcent-green transition-colors">info@tech.fidcent.com</a>
              </p>
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
