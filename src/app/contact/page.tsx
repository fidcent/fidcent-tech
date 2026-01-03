'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Linkedin,
  Twitter,
  MessageSquare,
  CheckCircle
} from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'info@fidcent.com',
    link: 'mailto:info@fidcent.com',
    description: 'We typically respond within 24 hours',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '+234 816 513 1008',
    link: 'tel:+2348165131008',
    description: 'Mon-Fri from 9am to 6pm WAT',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Lagos, Nigeria',
    link: '#',
    description: 'Schedule a meeting at our office',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Fri: 9am - 6pm',
    link: '#',
    description: 'West Africa Time (WAT)',
  },
]

const services = [
  'Custom Software Development',
  'Network Solutions',
  'IT Infrastructure',
  'Cloud Services',
  'Cybersecurity',
  'IT Consulting',
  'Other',
]

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      })
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            mainEntity: {
              '@type': 'Organization',
              name: 'Fidcent Tech',
              telephone: '+234-816-513-1008',
              email: 'info@fidcent.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Lagos',
                addressRegion: 'Lagos State',
                addressCountry: 'NG',
              },
              openingHours: 'Mo-Fr 09:00-18:00',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+234-816-513-1008',
                contactType: 'customer service',
                email: 'info@fidcent.com',
                availableLanguage: 'English',
              },
            },
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://fidcent.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Contact',
                item: 'https://fidcent.com/contact',
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-fidcent-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,39,0.1)_0%,transparent_50%)]" />
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <nav className={`flex items-center gap-2 text-sm mb-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Link href="/" className="text-fidcent-light/60 hover:text-fidcent-gold transition-colors">Home</Link>
            <ChevronRight size={16} className="text-fidcent-light/40" />
            <span className="text-fidcent-gold">Contact</span>
          </nav>

          <div className={`max-w-4xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-fidcent-light/70 text-lg md:text-xl max-w-2xl">
              Have a project in mind? Want to learn more about our services? 
              We&apos;d love to hear from you. Let&apos;s start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-fidcent-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <a
                key={info.title}
                href={info.link}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-fidcent-gold to-amber-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{info.title}</h3>
                <p className="text-fidcent-gold font-medium mb-1">{info.value}</p>
                <p className="text-fidcent-light/50 text-sm">{info.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-fidcent-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="glass rounded-2xl p-8">
              <h2 className="font-display text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-fidcent-light/60">
                    Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-fidcent-primary/50 border border-fidcent-light/10 rounded-xl focus:outline-none focus:border-fidcent-gold transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-fidcent-primary/50 border border-fidcent-light/10 rounded-xl focus:outline-none focus:border-fidcent-gold transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-fidcent-primary/50 border border-fidcent-light/10 rounded-xl focus:outline-none focus:border-fidcent-gold transition-colors"
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-fidcent-primary/50 border border-fidcent-light/10 rounded-xl focus:outline-none focus:border-fidcent-gold transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-fidcent-primary/50 border border-fidcent-light/10 rounded-xl focus:outline-none focus:border-fidcent-gold transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-fidcent-primary/50 border border-fidcent-light/10 rounded-xl focus:outline-none focus:border-fidcent-gold transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">Why Work With Us?</h2>
                <p className="text-fidcent-light/70 mb-6">
                  When you choose Fidcent Tech, you&apos;re partnering with a team dedicated to your success. 
                  Here&apos;s what you can expect:
                </p>
                <ul className="space-y-4">
                  {[
                    'Free initial consultation to understand your needs',
                    'Detailed project proposal within 48 hours',
                    'Transparent pricing with no hidden costs',
                    'Dedicated project manager for your account',
                    '24/7 support for critical issues',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-fidcent-light/80">
                      <CheckCircle size={20} className="text-fidcent-gold flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="font-semibold mb-4">Connect With Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/company/fidcenttech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-fidcent-primary/50 flex items-center justify-center hover:bg-fidcent-gold transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 group-hover:text-fidcent-primary transition-colors" />
                  </a>
                  <a
                    href="https://twitter.com/fidcenttech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-fidcent-primary/50 flex items-center justify-center hover:bg-fidcent-gold transition-colors group"
                  >
                    <Twitter className="w-5 h-5 group-hover:text-fidcent-primary transition-colors" />
                  </a>
                  <a
                    href="https://wa.me/2348165131008"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-fidcent-primary/50 flex items-center justify-center hover:bg-fidcent-gold transition-colors group"
                  >
                    <MessageSquare className="w-5 h-5 group-hover:text-fidcent-primary transition-colors" />
                  </a>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h3 className="font-semibold mb-4">Response Time</h3>
                <p className="text-fidcent-light/70 text-sm">
                  We aim to respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly or reach out via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-20 bg-fidcent-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold mb-4">Our Location</h2>
          <p className="text-fidcent-light/70 mb-8">
            Based in Lagos, Nigeria, serving clients across Africa and Europe.
          </p>
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <MapPin className="w-12 h-12 text-fidcent-gold mx-auto mb-4" />
            <p className="text-fidcent-light/80">
              Lagos, Nigeria<br />
              <span className="text-fidcent-light/50 text-sm">
                (Exact address available upon scheduling a meeting)
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
