
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, Linkedin, Facebook, Twitter, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-fidcent-navy text-white py-16 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="text-gray-300 mt-4">
              Empowering businesses through innovative and scalable technology solutions.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://linkedin.com/in/fidcent-tech" aria-label="LinkedIn" className="hover:text-fidcent-green transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/fidcent_tech" aria-label="Twitter" className="hover:text-fidcent-green transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="https://facebook.com/fidcenttech" aria-label="Facebook" className="hover:text-fidcent-green transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
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
                <Link to="/services#ai">AI & Machine Learning</Link>
              </li>
              <li className="flex items-center gap-1 hover:text-fidcent-green transition-colors">
                <ChevronRight className="w-4 h-4 text-fidcent-green" />
                <Link to="/services#iot">IoT Development</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
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
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p>16, Feenas Street, Adj mast,</p>
              <p>Ibafo, Ogun State</p>
              <p>Nigeria</p>
              <p className="mt-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-fidcent-green" />
                <a href="tel:+2348165131008" className="hover:text-fidcent-green transition-colors">+234 816 513 1008</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-fidcent-green" />
                <a href="mailto:tech@fidcent.com" className="hover:text-fidcent-green transition-colors">tech@fidcent.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fidcent Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
