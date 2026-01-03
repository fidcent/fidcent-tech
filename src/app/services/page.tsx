'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  Code2, 
  Network, 
  Server, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react'

const services = [
  {
    id: 'software-development',
    icon: Code2,
    title: 'Custom Software Development',
    shortDesc: 'Tailored software solutions designed to meet your unique business requirements.',
    description: 'We create bespoke software solutions that align perfectly with your business processes. Our experienced development team uses cutting-edge technologies to build scalable, maintainable, and efficient applications.',
    features: [
      'Custom Web Applications',
      'Mobile App Development (iOS & Android)',
      'Enterprise Software Solutions',
      'API Development & Integration',
      'E-commerce Platforms',
      'Content Management Systems'
    ],
    benefits: [
      'Increased operational efficiency',
      'Competitive advantage through technology',
      'Scalable solutions that grow with your business',
      '24/7 support and maintenance'
    ],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'network-solutions',
    icon: Network,
    title: 'Network Solutions',
    shortDesc: 'Comprehensive networking services to keep your business connected and secure.',
    description: 'Our networking experts design, implement, and maintain robust network infrastructures that ensure seamless connectivity, optimal performance, and enhanced security for your organization.',
    features: [
      'Network Design & Architecture',
      'VPN Setup & Configuration',
      'Wireless Network Solutions',
      'Network Security Implementation',
      'Network Monitoring & Management',
      'Load Balancing Solutions'
    ],
    benefits: [
      'Improved connectivity and reliability',
      'Enhanced security protocols',
      'Reduced network downtime',
      'Optimized network performance'
    ],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'it-infrastructure',
    icon: Server,
    title: 'IT Infrastructure',
    shortDesc: 'Robust infrastructure setup to support your business operations and growth.',
    description: 'We provide comprehensive IT infrastructure services that form the backbone of your digital operations. From server setup to data center management, we ensure your infrastructure is reliable, secure, and efficient.',
    features: [
      'Server Setup & Configuration',
      'Data Center Solutions',
      'System Integration Services',
      'Disaster Recovery Planning',
      'Backup Solutions',
      'Hardware Procurement & Setup'
    ],
    benefits: [
      'Maximized uptime and reliability',
      'Reduced operational costs',
      'Scalable infrastructure solutions',
      'Expert technical support'
    ],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    id: 'cloud-services',
    icon: Cloud,
    title: 'Cloud Services',
    shortDesc: 'Seamless cloud migration and management for scalable operations.',
    description: 'Embrace the power of cloud computing with our comprehensive cloud services. We help businesses migrate, manage, and optimize their cloud infrastructure across major platforms including AWS, Azure, and Google Cloud.',
    features: [
      'Cloud Migration Services',
      'AWS, Azure & GCP Solutions',
      'Cloud Architecture Design',
      'DevOps Implementation',
      'Containerization (Docker, Kubernetes)',
      'Serverless Architecture'
    ],
    benefits: [
      'Reduced infrastructure costs',
      'Enhanced scalability and flexibility',
      'Improved disaster recovery',
      'Access to cutting-edge technologies'
    ],
    gradient: 'from-green-500 to-teal-500',
  },
  {
    id: 'cybersecurity',
    icon: Shield,
    title: 'Cybersecurity',
    shortDesc: 'Protect your digital assets with comprehensive security solutions.',
    description: 'In today\'s digital landscape, security is paramount. Our cybersecurity services protect your organization from threats, ensure compliance, and give you peace of mind knowing your data is secure.',
    features: [
      'Security Audits & Assessments',
      'Threat Detection & Response',
      'Compliance Management (GDPR, ISO 27001)',
      'Security Awareness Training',
      'Penetration Testing',
      'Incident Response Planning'
    ],
    benefits: [
      'Protection against cyber threats',
      'Regulatory compliance assurance',
      'Reduced risk of data breaches',
      'Enhanced customer trust'
    ],
    gradient: 'from-red-500 to-orange-500',
  },
  {
    id: 'it-consulting',
    icon: Zap,
    title: 'IT Consulting',
    shortDesc: 'Strategic technology guidance to maximize your ROI.',
    description: 'Our IT consulting services help organizations make informed technology decisions. We provide strategic guidance, technology assessments, and implementation roadmaps to drive your digital transformation.',
    features: [
      'Digital Transformation Strategy',
      'Technology Assessment & Audits',
      'Process Optimization',
      'IT Training & Workshops',
      'Vendor Selection & Management',
      'Technology Roadmap Development'
    ],
    benefits: [
      'Informed technology decisions',
      'Optimized IT investments',
      'Improved operational efficiency',
      'Strategic competitive advantage'
    ],
    gradient: 'from-yellow-500 to-amber-500',
  },
]

export default function ServicesPage() {
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
            '@type': 'ItemList',
            name: 'Fidcent Tech Services',
            description: 'Comprehensive IT and software development services offered by Fidcent Tech',
            itemListElement: services.map((service, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Service',
                name: service.title,
                description: service.description,
                provider: {
                  '@type': 'Organization',
                  name: 'Fidcent Tech',
                },
                url: `https://fidcent.com/services#${service.id}`,
              },
            })),
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
                name: 'Services',
                item: 'https://fidcent.com/services',
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-fidcent-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,39,0.1)_0%,transparent_50%)]" />
        
        <div className="relative z-10 container mx-auto px-4 lg:px-8">
          {/* Breadcrumb */}
          <nav className={`flex items-center gap-2 text-sm mb-8 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <Link href="/" className="text-fidcent-light/60 hover:text-fidcent-gold transition-colors">Home</Link>
            <ChevronRight size={16} className="text-fidcent-light/40" />
            <span className="text-fidcent-gold">Services</span>
          </nav>

          <div className={`max-w-4xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-fidcent-light/70 text-lg md:text-xl max-w-2xl">
              Comprehensive technology solutions tailored to your business needs. 
              From software development to cybersecurity, we&apos;ve got you covered.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-fidcent-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`scroll-mt-32 transition-all duration-700 delay-${index * 100}`}
              >
                <div className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-fidcent-light/70 text-lg mb-8">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4 text-fidcent-gold">What We Offer</h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-fidcent-light/80">
                            <CheckCircle2 size={18} className="text-fidcent-gold flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href="/contact"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      Get Started
                      <ArrowRight size={18} />
                    </Link>
                  </div>

                  {/* Benefits Card */}
                  <div className={`glass rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-xl font-semibold mb-6">Key Benefits</h3>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-fidcent-primary/50">
                          <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white font-bold text-sm">{i + 1}</span>
                          </div>
                          <span className="text-fidcent-light/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-fidcent-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-fidcent-light/70 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our services can help you achieve your technology goals.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Contact Us Today
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
