'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  ArrowLeft,
  Gift, 
  Users, 
  Calendar, 
  CreditCard, 
  Bell, 
  Shield,
  Sparkles,
  ExternalLink,
  Globe,
  Smartphone,
  Heart,
  PartyPopper,
  Coins
} from 'lucide-react'

const features = [
  {
    icon: Calendar,
    title: 'Occasion-Centered',
    description: 'Smart reminders for birthdays, weddings, holidays—never miss a celebration again.',
  },
  {
    icon: Gift,
    title: 'Social Wishlists',
    description: 'Create wishes with photos, set funding goals, and watch contributions come in from friends and family.',
  },
  {
    icon: Users,
    title: 'Group Gifting',
    description: 'Pool contributions from multiple friends for big-ticket gifts effortlessly. No more awkward money collection.',
  },
  {
    icon: CreditCard,
    title: 'WishCoins Currency',
    description: 'Redeem for airtime, data, gift cards, and physical gifts—more meaningful than impersonal cash transfers.',
  },
  {
    icon: Bell,
    title: 'Automated Greetings',
    description: 'Schedule greetings via SMS, WhatsApp, or Email with 50+ customizable templates for every occasion.',
  },
  {
    icon: Shield,
    title: 'Secure & Transparent',
    description: 'Real-time balance tracking, full transaction history, and multiple payment methods you can trust.',
  },
]

const highlights = [
  {
    icon: Users,
    title: '105+ Early Adopters',
    description: 'Join our growing community of early supporters',
  },
  {
    icon: Coins,
    title: '1,000 FREE WishCoins',
    description: 'Worth ₦2,500 when you join the waitlist',
  },
  {
    icon: Smartphone,
    title: 'iOS & Android',
    description: 'Available on both platforms at launch',
  },
]

const useCases = [
  {
    icon: PartyPopper,
    title: 'Birthdays',
    description: 'Make birthday celebrations memorable with personalized wishlists and group contributions.',
  },
  {
    icon: Heart,
    title: 'Weddings',
    description: 'Help couples receive meaningful gifts through curated wedding registries.',
  },
  {
    icon: Gift,
    title: 'Baby Showers',
    description: 'Pool resources for baby essentials with transparent group gifting.',
  },
  {
    icon: Calendar,
    title: 'Holidays',
    description: 'Never forget Christmas, Eid, or any celebration with smart reminders.',
  },
]

export default function WishWingPage() {
  return (
    <div className="min-h-screen bg-fidcent-primary">
      {/* JSON-LD Schema for WishWing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'WishWing',
            alternateName: 'WishWing - Digital Gifting Platform',
            description: "Nigeria's premier digital gifting platform. Transform how you celebrate with WishCoins, social wishlists, and group gifting features.",
            url: 'https://wishwing.fidcent.com',
            applicationCategory: 'FinanceApplication',
            applicationSubCategory: 'Gift-giving, Social Commerce',
            operatingSystem: 'iOS, Android',
            availableOnDevice: ['Mobile'],
            countriesSupported: 'Nigeria',
            inLanguage: 'en',
            isAccessibleForFree: true,
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'NGN',
              availability: 'https://schema.org/PreOrder',
            },
            featureList: [
              'Social Wishlists',
              'Group Gifting',
              'WishCoins Currency',
              'Automated Greetings',
              'Occasion Reminders',
              'Gift Card Redemption',
            ],
            screenshot: 'https://wishwing.fidcent.com/og-image.png',
            author: {
              '@type': 'Organization',
              name: 'Fidcent Technologies Limited',
              url: 'https://fidcent.com',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Fidcent Tech',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5',
              ratingCount: '105',
              bestRating: '5',
              worstRating: '1',
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
                name: 'Products',
                item: 'https://fidcent.com/products',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'WishWing',
                item: 'https://fidcent.com/products/wishwing',
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 mesh-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-500/15 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-fidcent-light/60 mb-6">
              <Link href="/" className="hover:text-fidcent-gold transition-colors">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-fidcent-gold transition-colors">Products</Link>
              <span>/</span>
              <span className="text-fidcent-gold">WishWing</span>
            </nav>

            <div className="bg-gradient-to-br from-pink-500/10 to-rose-600/10 rounded-3xl p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center">
                      <Gift className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h1 className="font-display text-4xl md:text-5xl font-bold">WishWing</h1>
                      <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 mt-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />Launching 2026
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-2xl md:text-3xl text-fidcent-gold font-medium mb-4">
                    Nigeria&apos;s Digital Gifting Platform
                  </p>
                  
                  <p className="text-fidcent-light/70 text-lg mb-8 max-w-xl">
                    Transform how you celebrate. Make gift-giving personal, social, and memorable—from birthdays to weddings and every occasion in between.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a 
                      href="https://wishwing.fidcent.com/#early-access"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center justify-center gap-2"
                    >
                      Join the Waitlist
                      <ArrowRight size={18} />
                    </a>
                    <a 
                      href="https://wishwing.fidcent.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center justify-center gap-2"
                    >
                      Visit Website
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
                
                <div className="lg:w-1/3 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full blur-3xl opacity-30" />
                    <div className="relative w-48 h-48 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <Gift className="w-24 h-24 text-pink-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-fidcent-gold/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-fidcent-gold" />
                </div>
                <h2 className="font-display text-2xl font-bold">The Problem We&apos;re Solving</h2>
              </div>
              <p className="text-fidcent-light/70 text-lg leading-relaxed mb-6">
                Gift-giving in Nigeria is culturally important but current options are fragmented. 
                Cash feels impersonal, physical gifting is complex and logistically challenging, 
                group gifting requires awkward coordination, and important dates often get missed.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="text-red-400 font-medium mb-1">❌ Cash Transfers</p>
                  <p className="text-fidcent-light/60 text-sm">Impersonal, lacks emotional value</p>
                </div>
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="text-red-400 font-medium mb-1">❌ Physical Gifts</p>
                  <p className="text-fidcent-light/60 text-sm">Logistics, wrong size/color, returns</p>
                </div>
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="text-red-400 font-medium mb-1">❌ Group Collections</p>
                  <p className="text-fidcent-light/60 text-sm">Awkward coordination, trust issues</p>
                </div>
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="text-red-400 font-medium mb-1">❌ Missed Occasions</p>
                  <p className="text-fidcent-light/60 text-sm">Forgotten birthdays and anniversaries</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution - WishWing */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-fidcent-gold" />
              <span className="text-sm text-fidcent-light/80">The Solution</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              WishWing Makes <span className="gradient-text">Gifting Personal</span>
            </h2>
            <p className="text-fidcent-light/60 max-w-2xl mx-auto text-lg">
              WishWing sits between payments, social interaction, and commerce—making every gift 
              personal and memorable with our unique WishCoins currency.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-semibold text-fidcent-light text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-fidcent-light/60">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Perfect for <span className="gradient-text">Every Occasion</span>
            </h2>
            <p className="text-fidcent-light/60 max-w-2xl mx-auto">
              From intimate celebrations to grand events, WishWing makes every occasion special.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-rose-600/20 flex items-center justify-center mx-auto mb-4">
                  <useCase.icon className="w-7 h-7 text-pink-400" />
                </div>
                <h3 className="font-display font-semibold text-fidcent-light mb-2">
                  {useCase.title}
                </h3>
                <p className="text-fidcent-light/60 text-sm">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights / Why Join Early */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-pink-500/10 to-rose-600/10 rounded-3xl p-8 md:p-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
                Why Join Early?
              </h2>
              
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 rounded-2xl bg-white/5"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 flex items-center justify-center mx-auto mb-4">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-display font-semibold text-fidcent-light mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-fidcent-light/60 text-sm">
                      {highlight.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <a 
                  href="https://wishwing.fidcent.com/#early-access"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4"
                >
                  Join the Waitlist Now
                  <ArrowRight size={20} />
                </a>
                <p className="text-fidcent-light/50 text-sm mt-4">
                  No credit card required. Be the first to know when we launch.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Back to Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Link 
              href="/products"
              className="inline-flex items-center gap-2 text-fidcent-gold hover:text-fidcent-gold/80 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to All Products
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
