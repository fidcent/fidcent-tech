'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { Globe, Users, Target, Lightbulb } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies to deliver forward-thinking solutions.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We strive for excellence in every project, no matter the scale.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We work alongside our clients as true partners in their success.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Serving businesses across Africa and Europe with world-class solutions.',
  },
]

export default function About() {
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
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden mesh-gradient">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-fidcent-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fidcent-accent/10 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative glass rounded-3xl p-4 overflow-hidden">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/assest/horizontal_logo_with_text.png"
                    alt="Fidcent Tech - Building Tomorrow's Technology"
                    fill
                    className="object-contain p-8 bg-fidcent-primary/50"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 glass-strong p-6 rounded-2xl">
                <div className="text-center">
                  <span className="text-3xl font-display font-bold gradient-text">2024</span>
                  <p className="text-sm text-fidcent-light/70 mt-1">Founded</p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-fidcent-gold/20 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-fidcent-accent/30 rounded-full" />
            </div>
          </div>

          {/* Content Side */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <span className="inline-block text-fidcent-gold text-sm font-semibold tracking-wider uppercase mb-4">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Pioneering Technology{' '}
              <span className="gradient-text">Excellence</span>
            </h2>
            
            <div className="space-y-4 text-fidcent-light/70 mb-8">
              <p>
                <strong className="text-fidcent-light">Fidcent Tech</strong>, a proud division of Fidcent Group, 
                was founded in 2024 with a vision to transform how businesses leverage technology across 
                Africa and Europe.
              </p>
              <p>
                Based in Lagos, Nigeria, we specialize in delivering cutting-edge software development, 
                networking solutions, and IT infrastructure setup. Our team combines technical expertise 
                with deep industry knowledge to create solutions that drive real business value.
              </p>
              <p>
                We believe in building long-term partnerships with our clients, understanding their 
                unique challenges, and crafting tailored solutions that propel their growth in the 
                digital age.
              </p>
            </div>

            {/* Company Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass p-4 rounded-xl">
                <p className="text-sm text-fidcent-light/50">Registration</p>
                <p className="font-semibold text-fidcent-light">RC 7718433</p>
              </div>
              <div className="glass p-4 rounded-xl">
                <p className="text-sm text-fidcent-light/50">Location</p>
                <p className="font-semibold text-fidcent-light">Lagos, Nigeria</p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`flex items-start gap-3 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="p-2 rounded-lg bg-fidcent-gold/10">
                    <value.icon className="w-5 h-5 text-fidcent-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-fidcent-light">{value.title}</h4>
                    <p className="text-sm text-fidcent-light/60">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
