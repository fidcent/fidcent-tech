'use client'

import { useRef, useEffect, useState } from 'react'
import { 
  Lightbulb, 
  Heart, 
  Zap, 
  Shield, 
  Award, 
  Users 
} from 'lucide-react'

const reasons = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies to deliver forward-thinking solutions that keep you ahead.',
  },
  {
    icon: Heart,
    title: 'Customer Centricity',
    description: 'Our customers are at the heart of everything we do, driving our decisions and innovations.',
  },
  {
    icon: Zap,
    title: 'Agility',
    description: 'We adapt quickly to changing needs, delivering flexible solutions with speed and precision.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We conduct business with honesty, transparency, and ethical practices in all we do.',
  },
  {
    icon: Award,
    title: 'Fidelity',
    description: 'We remain faithful to our commitments, building lasting trust with our clients and partners.',
  },
  {
    icon: Users,
    title: 'Synergy',
    description: 'We collaborate seamlessly, combining diverse strengths to achieve extraordinary results.',
  },
]

export default function WhyUs() {
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
    <section id="why-us" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-fidcent-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,39,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(65,90,119,0.15)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block text-fidcent-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Your Trusted{' '}
            <span className="gradient-text">Technology Partner</span>
          </h2>
          <p className="text-fidcent-light/70 text-lg">
            We don&apos;t just deliver projects – we build lasting partnerships that drive your business forward.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`relative group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full glass rounded-2xl p-8 overflow-hidden card-hover">
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-fidcent-gold/0 to-fidcent-gold/0 group-hover:from-fidcent-gold/5 group-hover:to-transparent transition-all duration-300" />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex p-4 rounded-2xl bg-fidcent-gold/10 group-hover:bg-fidcent-gold/20 transition-colors duration-300">
                    <reason.icon className="w-8 h-8 text-fidcent-gold" />
                  </div>
                  {/* Number Badge */}
                  <span className="absolute -top-2 -right-2 w-8 h-8 flex items-center justify-center text-xs font-bold text-fidcent-primary bg-fidcent-gold rounded-full">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold mb-3 text-fidcent-light group-hover:text-fidcent-gold transition-colors">
                  {reason.title}
                </h3>
                <p className="text-fidcent-light/60 leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-fidcent-gold/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 glass-strong px-8 py-6 rounded-2xl">
            <p className="text-fidcent-light/80">
              Ready to transform your business with technology?
            </p>
            <a href="#contact" className="btn-primary whitespace-nowrap">
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
