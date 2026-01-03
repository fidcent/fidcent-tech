import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react'

const footerLinks = {
  products: [
    { label: 'WishWing', href: '/products/wishwing' },
    { label: 'All Products', href: '/products' },
  ],
  services: [
    { label: 'Software Development', href: '/services#software-development' },
    { label: 'Network Solutions', href: '/services#network-solutions' },
    { label: 'IT Infrastructure', href: '/services#it-infrastructure' },
    { label: 'Cloud Services', href: '/services#cloud-services' },
    { label: 'Cybersecurity', href: '/services#cybersecurity' },
    { label: 'IT Consulting', href: '/services#it-consulting' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Services', href: '/services' },
    { label: 'Why Choose Us', href: '/#why-us' },
    // { label: 'Careers', href: '/careers' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'Get a Quote', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
}

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/company/fidcenttech', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/fidcenttech', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/fidcenttech', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/fidcenttech', label: 'Facebook' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-fidcent-primary border-t border-white/5">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <Image
                src="/assest/logo.png"
                alt="Fidcent Tech Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-display text-xl font-bold gradient-text">
                Fidcent Tech
              </span>
            </Link>
            <p className="text-fidcent-light/60 mb-6 max-w-sm">
              Empowering businesses across Africa and Europe with innovative software solutions 
              and robust IT infrastructure.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@fidcent.com" className="flex items-center gap-3 text-fidcent-light/70 hover:text-fidcent-gold transition-colors">
                <Mail size={16} />
                <span>info@fidcent.com</span>
              </a>
              <a href="tel:+2348165131008" className="flex items-center gap-3 text-fidcent-light/70 hover:text-fidcent-gold transition-colors">
                <Phone size={16} />
                <span>+234 816 513 1008</span>
              </a>
              <div className="flex items-center gap-3 text-fidcent-light/70">
                <MapPin size={16} />
                <span>Lagos State, Nigeria</span>
              </div>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-display font-semibold text-fidcent-light mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.label}>
                  {'external' in link && link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-fidcent-light/60 hover:text-fidcent-gold transition-colors text-sm">
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-fidcent-light/60 hover:text-fidcent-gold transition-colors text-sm">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display font-semibold text-fidcent-light mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-fidcent-light/60 hover:text-fidcent-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display font-semibold text-fidcent-light mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-fidcent-light/60 hover:text-fidcent-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-display font-semibold text-fidcent-light mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-fidcent-light/60 hover:text-fidcent-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-fidcent-light/50 text-sm">
                © {currentYear} Fidcent Tech. All rights reserved.
              </p>
              <p className="text-fidcent-light/40 text-xs mt-1">
                A Division of Fidcent Group | RC 7718433
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-white/5 text-fidcent-light/60 hover:bg-fidcent-gold/20 hover:text-fidcent-gold transition-all"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
