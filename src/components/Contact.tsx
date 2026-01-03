'use client'

import { useRef, useEffect, useState } from 'react'
import { Mail, Phone, MapPin, Send, Clock, ArrowRight } from 'lucide-react'

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    setFormStatus('sent')
    
    // Reset after 3 seconds
    setTimeout(() => setFormStatus('idle'), 3000)
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden mesh-gradient">
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-fidcent-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-fidcent-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-fidcent-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Let&apos;s Build Something{' '}
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-fidcent-light/70 text-lg">
            Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll 
            respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="glass rounded-2xl p-6 card-hover group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-fidcent-gold/10 group-hover:bg-fidcent-gold/20 transition-colors">
                    <Mail className="w-6 h-6 text-fidcent-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fidcent-light mb-1">Email Us</h4>
                    <a href="mailto:info@fidcent.com" className="text-fidcent-light/70 hover:text-fidcent-gold transition-colors">
                      info@fidcent.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 card-hover group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-fidcent-gold/10 group-hover:bg-fidcent-gold/20 transition-colors">
                    <Phone className="w-6 h-6 text-fidcent-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fidcent-light mb-1">Call Us</h4>
                    <a href="tel:+2348165131008" className="text-fidcent-light/70 hover:text-fidcent-gold transition-colors">
                      +234 816 513 1008
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 card-hover group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-fidcent-gold/10 group-hover:bg-fidcent-gold/20 transition-colors">
                    <MapPin className="w-6 h-6 text-fidcent-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fidcent-light mb-1">Visit Us</h4>
                    <p className="text-fidcent-light/70">
                      Lagos State, Nigeria
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 card-hover group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-fidcent-gold/10 group-hover:bg-fidcent-gold/20 transition-colors">
                    <Clock className="w-6 h-6 text-fidcent-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fidcent-light mb-1">Business Hours</h4>
                    <p className="text-fidcent-light/70">
                      Mon - Fri: 9:00 AM - 6:00 PM (WAT)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="mt-8 p-6 glass-strong rounded-2xl">
              <h4 className="font-semibold text-fidcent-light mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-fidcent-gold rounded-full" />
                Quick Response Guarantee
              </h4>
              <p className="text-fidcent-light/70 text-sm">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-8 md:p-10">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-fidcent-light/80 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-fidcent-primary/50 border border-white/10 rounded-xl text-fidcent-light placeholder:text-fidcent-light/40 focus:outline-none focus:border-fidcent-gold/50 focus:ring-1 focus:ring-fidcent-gold/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-fidcent-light/80 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-fidcent-primary/50 border border-white/10 rounded-xl text-fidcent-light placeholder:text-fidcent-light/40 focus:outline-none focus:border-fidcent-gold/50 focus:ring-1 focus:ring-fidcent-gold/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-fidcent-light/80 mb-2">
                    Company (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 bg-fidcent-primary/50 border border-white/10 rounded-xl text-fidcent-light placeholder:text-fidcent-light/40 focus:outline-none focus:border-fidcent-gold/50 focus:ring-1 focus:ring-fidcent-gold/50 transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-fidcent-light/80 mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 bg-fidcent-primary/50 border border-white/10 rounded-xl text-fidcent-light focus:outline-none focus:border-fidcent-gold/50 focus:ring-1 focus:ring-fidcent-gold/50 transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="software">Software Development</option>
                    <option value="networking">Network Solutions</option>
                    <option value="infrastructure">IT Infrastructure</option>
                    <option value="cloud">Cloud Services</option>
                    <option value="security">Cybersecurity</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-fidcent-light/80 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-fidcent-primary/50 border border-white/10 rounded-xl text-fidcent-light placeholder:text-fidcent-light/40 focus:outline-none focus:border-fidcent-gold/50 focus:ring-1 focus:ring-fidcent-gold/50 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'idle' && (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                  {formStatus === 'sending' && (
                    <>
                      Sending...
                      <div className="w-5 h-5 border-2 border-fidcent-primary/30 border-t-fidcent-primary rounded-full animate-spin" />
                    </>
                  )}
                  {formStatus === 'sent' && (
                    <>
                      Message Sent!
                      <ArrowRight size={18} />
                    </>
                  )}
                  {formStatus === 'error' && 'Try Again'}
                </button>

                <p className="text-xs text-fidcent-light/50 text-center">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
