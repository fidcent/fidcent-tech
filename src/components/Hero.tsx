'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Code2, Network, Server } from 'lucide-react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20
      
      heroRef.current.style.setProperty('--mouse-x', `${x}px`)
      heroRef.current.style.setProperty('--mouse-y', `${y}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-fidcent-gold/10 rounded-full blur-3xl float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-fidcent-accent/20 rounded-full blur-3xl float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fidcent-secondary/30 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/4 text-fidcent-gold/20 float" style={{ animationDelay: '1s' }}>
          <Code2 size={60} />
        </div>
        <div className="absolute top-1/3 right-1/4 text-fidcent-accent/30 float" style={{ animationDelay: '3s' }}>
          <Network size={80} />
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-fidcent-gold/15 float" style={{ animationDelay: '2s' }}>
          <Server size={50} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-fidcent-gold rounded-full animate-pulse" />
              <span className="text-sm text-fidcent-light/80">A Division of Fidcent Group</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-slide-up">
              Building{' '}
              <span className="gradient-text">Tomorrow&apos;s</span>
              <br />
              Technology Today
            </h1>
            
            <p className="text-lg md:text-xl text-fidcent-light/70 max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Empowering businesses across Africa and Europe with innovative software solutions 
              and robust IT infrastructure that drives growth and transformation. Proud creators of <Link href="/products/wishwing" className="text-fidcent-gold hover:underline">WishWing</Link>, the premier digital gifting and social wishlist platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link href="#contact" className="btn-primary inline-flex items-center justify-center gap-2 group">
                Start Your Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#services" className="btn-secondary inline-flex items-center justify-center gap-2">
                Explore Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 pt-8 border-t border-white/10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="text-sm text-fidcent-light/50 mb-4">Trusted by businesses in</p>
              <div className="flex items-center gap-8 justify-center lg:justify-start">
                <span className="text-fidcent-light/70 font-medium">🌍 Africa</span>
                <span className="text-fidcent-light/70 font-medium">🇪🇺 Europe</span>
                <span className="text-fidcent-light/70 font-medium">🇳🇬 Nigeria</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Decorative Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-fidcent-gold/20 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-4 rounded-full border border-fidcent-accent/30 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              
              {/* Logo Display */}
              <div className="absolute inset-12 glass rounded-full flex items-center justify-center pulse-glow">
                <Image
                  src="/assest/logo.png"
                  alt="Fidcent Tech"
                  width={200}
                  height={200}
                  className="w-32 h-32 md:w-40 md:h-40 object-contain float"
                  priority
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 glass p-4 rounded-xl float" style={{ animationDelay: '1s' }}>
                <Code2 className="text-fidcent-gold" size={24} />
                <p className="text-xs mt-1 text-fidcent-light/70">Software Dev</p>
              </div>
              <div className="absolute -bottom-4 -left-4 glass p-4 rounded-xl float" style={{ animationDelay: '2s' }}>
                <Network className="text-fidcent-gold" size={24} />
                <p className="text-xs mt-1 text-fidcent-light/70">Networking</p>
              </div>
              <div className="absolute top-1/2 -right-8 glass p-4 rounded-xl float" style={{ animationDelay: '1.5s' }}>
                <Server className="text-fidcent-gold" size={24} />
                <p className="text-xs mt-1 text-fidcent-light/70">Infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-fidcent-light/50">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-fidcent-light/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-fidcent-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
