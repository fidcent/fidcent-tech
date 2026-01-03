'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { Code2, Network, Server, Cloud, Shield, Zap, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your unique business requirements. From web applications to enterprise systems.',
    features: ['Web Applications', 'Mobile Apps', 'Enterprise Software', 'API Development'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Network,
    title: 'Network Solutions',
    description: 'Comprehensive networking services to keep your business connected, secure, and running efficiently.',
    features: ['Network Design', 'VPN Setup', 'Wireless Solutions', 'Network Security'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Server,
    title: 'IT Infrastructure',
    description: 'Robust infrastructure setup and management to support your business operations and growth.',
    features: ['Server Setup', 'Data Centers', 'System Integration', 'Disaster Recovery'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    description: 'Seamless cloud migration and management services for scalable and flexible business operations.',
    features: ['Cloud Migration', 'AWS/Azure/GCP', 'Cloud Architecture', 'DevOps'],
    gradient: 'from-green-500 to-teal-500',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Protect your digital assets with our comprehensive security solutions and practices.',
    features: ['Security Audits', 'Threat Detection', 'Compliance', 'Training'],
    gradient: 'from-red-500 to-orange-500',
  },
  {
    icon: Zap,
    title: 'IT Consulting',
    description: 'Strategic technology guidance to help you make informed decisions and maximize ROI.',
    features: ['Digital Strategy', 'Tech Assessment', 'Process Optimization', 'Training'],
    gradient: 'from-yellow-500 to-amber-500',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  return (
    <section id="services" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-fidcent-secondary" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-fidcent-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technology Solutions That{' '}
            <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-fidcent-light/70 text-lg">
            We deliver comprehensive technology services tailored to your business needs, 
            helping you stay ahead in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative glass rounded-2xl p-6 lg:p-8 card-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
              
              {/* Icon */}
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-fidcent-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-fidcent-light/60 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-fidcent-light/70">
                    <span className="w-1.5 h-1.5 bg-fidcent-gold rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-fidcent-gold text-sm font-medium group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link href="/services" className="btn-primary inline-flex items-center gap-2">
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
