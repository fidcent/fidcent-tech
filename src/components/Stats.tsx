'use client'

import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered', duration: 2000 },
  { value: 30, suffix: '+', label: 'Happy Clients', duration: 2000 },
  { value: 2, suffix: '', label: 'Continents Served', duration: 1500 },
  { value: 99, suffix: '%', label: 'Client Satisfaction', duration: 2500 },
]

function AnimatedCounter({ target, suffix, duration, isVisible }: { target: number; suffix: string; duration: number; isVisible: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const startValue = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * (target - startValue) + startValue)
      
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [target, duration, isVisible])

  return (
    <span className="tabular-nums">
      {count}{suffix}
    </span>
  )
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-fidcent-primary via-fidcent-secondary to-fidcent-primary" />
      
      {/* Animated Background Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-fidcent-gold to-transparent" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-fidcent-gold to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-fidcent-gold to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative inline-block mb-4">
                {/* Glow Effect */}
                <div className="absolute inset-0 blur-2xl bg-fidcent-gold/30 rounded-full scale-150" />
                
                <span className="relative font-display text-5xl md:text-6xl lg:text-7xl font-bold gradient-text">
                  <AnimatedCounter 
                    target={stat.value} 
                    suffix={stat.suffix} 
                    duration={stat.duration}
                    isVisible={isVisible}
                  />
                </span>
              </div>
              <p className="text-fidcent-light/70 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
