'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-strong py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex items-center gap-3">
            <Image
              src="/assest/logo.png"
              alt="Fidcent Tech Logo"
              width={45}
              height={45}
              className="w-10 h-10 md:w-12 md:h-12"
              priority
            />
            <span className="font-display text-xl md:text-2xl font-bold gradient-text">
              Fidcent Tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 group ${
                  pathname === link.href 
                    ? 'text-fidcent-gold' 
                    : 'text-fidcent-light/80 hover:text-fidcent-gold'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-fidcent-gold transition-all duration-300 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-10 p-2 text-fidcent-light"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden fixed inset-0 bg-fidcent-primary/98 backdrop-blur-lg transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl font-display font-semibold transition-colors ${
                    pathname === link.href 
                      ? 'text-fidcent-gold' 
                      : 'text-fidcent-light hover:text-fidcent-gold'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary text-lg mt-4"
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
