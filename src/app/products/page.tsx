'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ArrowRight, 
  ArrowLeft,
  Gift, 
  Sparkles,
  ExternalLink,
  Rocket,
  Mail,
  CheckCircle2,
  Loader2
} from 'lucide-react'

// Products data - simplified overview
const products = [
  {
    id: 'wishwing',
    name: 'WishWing',
    tagline: "Nigeria's Digital Gifting Platform",
    description: 'Transform how you celebrate. Make gift-giving personal, social, and memorable with WishCoins, social wishlists, and group gifting.',
    url: 'https://wishwing.fidcent.com',
    internalUrl: '/products/wishwing',
    status: 'launching-soon',
    statusLabel: 'Launching 2026',
    color: 'from-pink-500 to-rose-600',
    bgColor: 'bg-gradient-to-br from-pink-500/10 to-rose-600/10',
    icon: Gift,
    highlights: [
      'Social Wishlists & Group Gifting',
      'WishCoins Digital Currency',
      '105+ Early Adopters'
    ],
  },
]

export default function ProductsPage() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setLoading(true)
    // Simulate API call - replace with actual newsletter API
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubscribed(true)
    setLoading(false)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-fidcent-primary">
      {/* JSON-LD Schema for Products */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Fidcent Tech Products',
            description: 'Innovative products built by Fidcent Tech',
            itemListElement: products.map((product, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'SoftwareApplication',
                name: product.name,
                description: product.description,
                url: product.url,
                applicationCategory: 'FinanceApplication',
                operatingSystem: 'iOS, Android',
                offers: {
                  '@type': 'Offer',
                  price: '0',
                  priceCurrency: 'NGN',
                },
                author: {
                  '@type': 'Organization',
                  name: 'Fidcent Tech',
                  url: 'https://fidcent.com',
                },
              },
            })),
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 mesh-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-fidcent-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 text-fidcent-gold hover:text-fidcent-gold/80 transition-colors mb-6"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-fidcent-gold" />
              <span className="text-sm text-fidcent-light/80">Built by Fidcent Tech</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Products</span>
            </h1>
            
            <p className="text-lg md:text-xl text-fidcent-light/70 max-w-2xl mx-auto">
              Innovative solutions designed to transform everyday experiences. 
              From digital gifting to enterprise tools, we build products that make a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* WishWing Product Card */}
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`${product.bgColor} rounded-3xl p-8 card-hover`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${product.color} flex items-center justify-center`}>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold">{product.name}</h2>
                    <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      {product.statusLabel}
                    </span>
                  </div>
                </div>
                
                <p className="text-fidcent-gold font-medium mb-3">
                  {product.tagline}
                </p>
                
                <p className="text-fidcent-light/70 mb-6">
                  {product.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-fidcent-light/80">
                      <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href={product.internalUrl}
                    className="btn-primary inline-flex items-center justify-center gap-2 text-sm"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                  <a 
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center justify-center gap-2 text-sm"
                  >
                    Visit Website
                    <ExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Coming Soon Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass rounded-3xl p-8 flex flex-col items-center justify-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-fidcent-gold/10 flex items-center justify-center mb-4">
                <Rocket className="w-8 h-8 text-fidcent-gold" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2">Coming Soon</h3>
              <p className="text-fidcent-light/60 mb-4">
                More innovative products in development. Stay tuned for announcements.
              </p>
              <div className="text-sm text-fidcent-light/50">
                Subscribe below to be notified
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto glass rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-fidcent-gold/10 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-fidcent-gold" />
            </div>
            
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Stay in the Loop
            </h2>
            <p className="text-fidcent-light/70 mb-8">
              Subscribe to our newsletter to get notified about new products, 
              updates, and exclusive early access opportunities.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 text-green-400"
              >
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-medium">You&apos;re subscribed! We&apos;ll keep you posted.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-fidcent-light placeholder:text-fidcent-light/40 focus:outline-none focus:border-fidcent-gold/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}

            <p className="text-xs text-fidcent-light/40 mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Have a Product Idea?
            </h2>
            <p className="text-fidcent-light/70 mb-8">
              We love building innovative products. If you have an idea or want to partner with us, 
              let&apos;s talk about bringing it to life.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Get in Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
