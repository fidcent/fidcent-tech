'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Lock, Eye, FileText, Users, Globe, Mail, ArrowLeft } from 'lucide-react'

const sections = [
  {
    icon: FileText,
    title: 'Information We Collect',
    content: [
      'Personal identification information (name, email address, phone number)',
      'Business information (company name, job title)',
      'Technical data (IP address, browser type, device information)',
      'Usage data (how you interact with our website and services)',
      'Communication records (emails, support tickets)',
    ],
  },
  {
    icon: Eye,
    title: 'How We Use Your Information',
    content: [
      'To provide and maintain our services',
      'To communicate with you about projects and inquiries',
      'To improve our website and services',
      'To send promotional communications (with your consent)',
      'To comply with legal obligations',
      'To protect against fraudulent or illegal activity',
    ],
  },
  {
    icon: Shield,
    title: 'Data Security',
    content: [
      'We implement industry-standard security measures',
      'Data is encrypted in transit and at rest',
      'Regular security audits and assessments',
      'Access controls and authentication protocols',
      'Employee training on data protection',
    ],
  },
  {
    icon: Users,
    title: 'Information Sharing',
    content: [
      'We do not sell your personal information to third parties',
      'We may share data with trusted service providers who assist in our operations',
      'We may disclose information when required by law',
      'Business transfers may involve data sharing with proper safeguards',
    ],
  },
  {
    icon: Globe,
    title: 'International Data Transfers',
    content: [
      'We operate in Africa and Europe',
      'Data may be transferred across borders with appropriate protections',
      'We comply with applicable data protection laws in all jurisdictions',
      'Standard contractual clauses are used where necessary',
    ],
  },
  {
    icon: Lock,
    title: 'Your Rights',
    content: [
      'Access your personal data',
      'Request correction of inaccurate data',
      'Request deletion of your data',
      'Object to processing of your data',
      'Data portability',
      'Withdraw consent at any time',
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-fidcent-primary">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 mesh-gradient">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
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
            
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-fidcent-gold/10 border border-fidcent-gold/20 mb-6">
              <Shield className="w-8 h-8 text-fidcent-gold" />
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            
            <p className="text-lg md:text-xl text-fidcent-light/70 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how Fidcent Tech 
              collects, uses, and protects your personal information.
            </p>
            
            <p className="text-sm text-fidcent-light/50 mt-6">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 md:p-8 mb-8"
            >
              <p className="text-fidcent-light/80 leading-relaxed">
                Fidcent Tech (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy describes how we collect, use, and share information about you when you 
                use our website, services, and interact with us. By using our services, you agree to the 
                collection and use of information in accordance with this policy.
              </p>
            </motion.div>

            {/* Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 md:p-8"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-fidcent-gold/10 shrink-0">
                      <section.icon className="w-6 h-6 text-fidcent-gold" />
                    </div>
                    <h2 className="font-display text-xl md:text-2xl font-bold text-fidcent-light">
                      {section.title}
                    </h2>
                  </div>
                  <ul className="space-y-3 ml-0 md:ml-16">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-fidcent-light/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-fidcent-gold mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Cookies Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 md:p-8 mt-8"
            >
              <h2 className="font-display text-xl md:text-2xl font-bold text-fidcent-light mb-4">
                Cookies and Tracking Technologies
              </h2>
              <p className="text-fidcent-light/70 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store 
                certain information. You can instruct your browser to refuse all cookies or to indicate when 
                a cookie is being sent.
              </p>
              <p className="text-fidcent-light/70">
                Types of cookies we use:
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-3 text-fidcent-light/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-fidcent-gold mt-2 shrink-0" />
                  <span><strong>Essential cookies:</strong> Required for website functionality</span>
                </li>
                <li className="flex items-start gap-3 text-fidcent-light/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-fidcent-gold mt-2 shrink-0" />
                  <span><strong>Analytics cookies:</strong> Help us understand how visitors use our site</span>
                </li>
                <li className="flex items-start gap-3 text-fidcent-light/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-fidcent-gold mt-2 shrink-0" />
                  <span><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</span>
                </li>
              </ul>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 md:p-8 mt-8 text-center"
            >
              <Mail className="w-10 h-10 text-fidcent-gold mx-auto mb-4" />
              <h2 className="font-display text-xl md:text-2xl font-bold text-fidcent-light mb-4">
                Contact Us About Privacy
              </h2>
              <p className="text-fidcent-light/70 mb-6">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:privacy@fidcent.com" 
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  privacy@fidcent.com
                </a>
                <Link href="/contact" className="btn-secondary inline-flex items-center justify-center gap-2">
                  Contact Form
                </Link>
              </div>
            </motion.div>

            {/* Policy Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-xl border border-fidcent-gold/20 bg-fidcent-gold/5"
            >
              <p className="text-fidcent-light/70 text-sm text-center">
                <strong className="text-fidcent-gold">Policy Updates:</strong> We may update this Privacy Policy 
                from time to time. We will notify you of any changes by posting the new Privacy Policy on this 
                page and updating the &quot;Last updated&quot; date.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
