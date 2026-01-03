'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ChevronRight,
  Target,
  Eye,
  Heart,
  Users,
  Globe,
  Award,
  ArrowRight
} from 'lucide-react'

const values = [
  {
    icon: Globe,
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies to deliver forward-thinking solutions.',
  },
  {
    icon: Heart,
    title: 'Customer Centricity',
    description: 'Our customers are at the heart of everything we do, driving our decisions and innovations.',
  },
  {
    icon: Target,
    title: 'Agility',
    description: 'We adapt quickly to changing needs, delivering flexible solutions with speed and precision.',
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical practices.',
  },
  {
    icon: Users,
    title: 'Fidelity',
    description: 'We remain faithful to our commitments, building lasting trust with our clients and partners.',
  },
  {
    icon: Eye,
    title: 'Synergy',
    description: 'We collaborate seamlessly, combining diverse strengths to achieve extraordinary results.',
  },
]

const milestones: { year: string; title: string; description: string; link?: string }[] = [
  { year: '2024', title: 'Founded', description: 'Fidcent Tech was established as part of Fidcent Group' },
  { year: '2024', title: 'Structuring & Hiring', description: 'Fidcent Tech was established and began building our talented team' },
  { year: '2025', title: 'Built WishWing', description: 'Developed WishWing, our innovative gifting platform', link: 'https://wishwing.fidcent.com' },
  { year: '2026', title: 'Launch WishWing', description: 'Official public launch of WishWing to the market' },
]

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            mainEntity: {
              '@type': 'Organization',
              name: 'Fidcent Tech',
              description: 'Fidcent Tech is a leading technology company specializing in software development, IT infrastructure, and digital transformation solutions across Africa and Europe.',
              foundingDate: '2024',
              foundingLocation: 'Lagos, Nigeria',
              parentOrganization: {
                '@type': 'Organization',
                name: 'Fidcent Group',
              },
              areaServed: ['Africa', 'Europe'],
              knowsAbout: [
                'Software Development',
                'IT Infrastructure',
                'Cloud Computing',
                'Cybersecurity',
                'Network Solutions',
              ],
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
                name: 'About',
                item: 'https://fidcent.com/about',
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-fidcent-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(201,162,39,0.1)_0%,transparent_50%)]" />
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <nav className={`flex items-center gap-2 text-sm mb-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Link href="/" className="text-fidcent-light/60 hover:text-fidcent-gold transition-colors">Home</Link>
            <ChevronRight size={16} className="text-fidcent-light/40" />
            <span className="text-fidcent-gold">About Us</span>
          </nav>

          <div className={`max-w-4xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="gradient-text">Fidcent Tech</span>
            </h1>
            <p className="text-fidcent-light/70 text-lg md:text-xl max-w-2xl">
              A subsidiary of Fidcent Group, we&apos;re on a mission to transform businesses 
              across Africa and Europe through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-fidcent-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-fidcent-gold text-sm font-semibold tracking-wider uppercase mb-4">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Building the Future of Technology in Africa
              </h2>
              <div className="space-y-4 text-fidcent-light/70">
                <p>
                  Fidcent Tech was born from a vision to bridge the technology gap in Africa 
                  while delivering world-class solutions that compete globally. As a proud 
                  member of the Fidcent Group family, we bring together decades of combined 
                  expertise in software development, IT infrastructure, and digital innovation.
                </p>
                <p>
                  Our team comprises passionate technologists, creative problem-solvers, and 
                  dedicated professionals who believe in the transformative power of technology. 
                  We&apos;ve worked with startups, SMEs, and enterprises across various industries, 
                  helping them leverage technology to achieve their goals.
                </p>
                <p>
                  Today, we continue to expand our reach, bringing cutting-edge solutions to 
                  businesses across Africa and Europe, while staying true to our core values 
                  of excellence, integrity, and innovation.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="glass rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-fidcent-primary/50 rounded-xl">
                    <div className="text-4xl font-bold text-fidcent-gold mb-2">50+</div>
                    <div className="text-fidcent-light/60 text-sm">Projects Delivered</div>
                  </div>
                  <div className="text-center p-6 bg-fidcent-primary/50 rounded-xl">
                    <div className="text-4xl font-bold text-fidcent-gold mb-2">30+</div>
                    <div className="text-fidcent-light/60 text-sm">Happy Clients</div>
                  </div>
                  <div className="text-center p-6 bg-fidcent-primary/50 rounded-xl">
                    <div className="text-4xl font-bold text-fidcent-gold mb-2">2</div>
                    <div className="text-fidcent-light/60 text-sm">Continents Served</div>
                  </div>
                  <div className="text-center p-6 bg-fidcent-primary/50 rounded-xl">
                    <div className="text-4xl font-bold text-fidcent-gold mb-2">24/7</div>
                    <div className="text-fidcent-light/60 text-sm">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-fidcent-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-fidcent-gold to-amber-500 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-display text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-fidcent-light/70 leading-relaxed">
                To empower businesses across Africa and Europe with innovative technology solutions 
                that drive growth, enhance efficiency, and create sustainable competitive advantages. 
                We are committed to delivering excellence in every project while fostering long-term 
                partnerships built on trust and results.
              </p>
            </div>
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-display text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-fidcent-light/70 leading-relaxed">
                To become Africa&apos;s most trusted technology partner, recognized globally for our 
                innovative solutions, technical excellence, and positive impact on businesses 
                and communities. We envision a future where every African business has access 
                to world-class technology solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-fidcent-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-fidcent-gold text-sm font-semibold tracking-wider uppercase mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              What Drives Us
            </h2>
            <p className="text-fidcent-light/70">
              Our core values guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div key={value.title} className="glass rounded-2xl p-6 text-center">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-fidcent-gold to-amber-500 mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-fidcent-light/60 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="py-20 bg-fidcent-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-fidcent-gold text-sm font-semibold tracking-wider uppercase mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Key Milestones
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={milestone.year + milestone.title} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-fidcent-gold flex items-center justify-center text-fidcent-primary font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-fidcent-gold/30 mt-2" />
                  )}
                </div>
                <div className="glass rounded-xl p-6 flex-1">
                  <div className="text-fidcent-gold text-sm font-semibold mb-1">{milestone.year}</div>
                  <h3 className="font-display text-lg font-bold mb-2">{milestone.title}</h3>
                  <p className="text-fidcent-light/60 text-sm">{milestone.description}</p>
                  {milestone.link && (
                    <a 
                      href={milestone.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-fidcent-gold text-sm hover:underline"
                    >
                      Visit WishWing <ArrowRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-fidcent-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Award className="w-16 h-16 text-fidcent-gold mx-auto mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-fidcent-light/70 text-lg mb-8 max-w-2xl mx-auto">
            Join the growing list of businesses that trust Fidcent Tech for their technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-primary inline-flex items-center gap-2">
              Explore Our Services
              <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
