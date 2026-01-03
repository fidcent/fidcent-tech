'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, AlertCircle, Scale, CreditCard, Ban, RefreshCw, Gavel, Mail, ArrowLeft } from 'lucide-react'

const sections = [
  {
    icon: FileText,
    title: '1. Acceptance of Terms',
    content: `By accessing or using Fidcent Tech's website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services. These terms apply to all visitors, users, and clients of our services.`,
  },
  {
    icon: Scale,
    title: '2. Services Description',
    content: `Fidcent Tech provides software development, IT infrastructure, networking solutions, cloud services, and related technology consulting services. The specific scope, deliverables, timelines, and pricing for each project will be outlined in separate service agreements or statements of work.`,
  },
  {
    icon: CreditCard,
    title: '3. Payment Terms',
    items: [
      'Payment terms will be specified in individual service agreements',
      'Invoices are due within 30 days unless otherwise specified',
      'Late payments may incur interest charges as permitted by law',
      'All fees are exclusive of applicable taxes unless stated otherwise',
      'Deposits may be required before commencement of work',
    ],
  },
  {
    icon: AlertCircle,
    title: '4. Client Responsibilities',
    items: [
      'Provide accurate and complete information necessary for service delivery',
      'Timely feedback and approvals as required during project execution',
      'Maintain confidentiality of any access credentials provided',
      'Ensure proper licensing for any third-party software or content provided',
      'Designate authorized representatives for project communication',
    ],
  },
  {
    icon: Ban,
    title: '5. Intellectual Property',
    content: `Unless otherwise agreed in writing, upon full payment, clients receive ownership of custom-developed work specifically created for their project. Fidcent Tech retains ownership of pre-existing code, frameworks, libraries, and general methodologies. We may use non-confidential aspects of completed projects for portfolio purposes.`,
  },
  {
    icon: RefreshCw,
    title: '6. Warranties and Limitations',
    items: [
      'We warrant that services will be performed professionally and competently',
      'Software is provided with a limited warranty period for bug fixes (typically 30-90 days)',
      'We do not guarantee uninterrupted or error-free operation of delivered software',
      'Maximum liability is limited to fees paid for the specific service in question',
      'We are not liable for indirect, incidental, or consequential damages',
    ],
  },
  {
    icon: Gavel,
    title: '7. Termination',
    content: `Either party may terminate services with written notice as specified in the service agreement. Upon termination, the client is responsible for payment for work completed. We will provide reasonable assistance in transitioning services and delivering completed work products.`,
  },
]

const additionalTerms = [
  {
    title: 'Confidentiality',
    content: 'Both parties agree to maintain confidentiality of proprietary information shared during the engagement. This obligation survives termination of services.',
  },
  {
    title: 'Non-Solicitation',
    content: 'During the engagement and for 12 months after, neither party shall solicit employees or contractors of the other party who were involved in providing or receiving services.',
  },
  {
    title: 'Force Majeure',
    content: 'Neither party shall be liable for delays or failures in performance resulting from circumstances beyond reasonable control, including natural disasters, war, or government actions.',
  },
  {
    title: 'Dispute Resolution',
    content: 'Any disputes shall first be attempted to be resolved through good-faith negotiation. Unresolved disputes shall be submitted to arbitration in Lagos, Nigeria, under the Arbitration and Conciliation Act.',
  },
  {
    title: 'Governing Law',
    content: 'These terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to conflict of law principles.',
  },
  {
    title: 'Amendments',
    content: 'We reserve the right to modify these terms at any time. Material changes will be communicated to active clients. Continued use of our services constitutes acceptance of updated terms.',
  },
]

export default function TermsPage() {
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
              <Scale className="w-8 h-8 text-fidcent-gold" />
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            
            <p className="text-lg md:text-xl text-fidcent-light/70 max-w-2xl mx-auto">
              Please read these terms carefully before engaging our services. 
              These terms govern your use of Fidcent Tech&apos;s services.
            </p>
            
            <p className="text-sm text-fidcent-light/50 mt-6">
              Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Main Terms */}
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
                  <div className="ml-0 md:ml-16">
                    {section.content && (
                      <p className="text-fidcent-light/70 leading-relaxed">{section.content}</p>
                    )}
                    {section.items && (
                      <ul className="space-y-3">
                        {section.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-fidcent-light/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-fidcent-gold mt-2 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-fidcent-light mb-8 text-center">
                Additional Terms
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {additionalTerms.map((term, index) => (
                  <motion.div
                    key={term.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-xl p-6"
                  >
                    <h3 className="font-display font-semibold text-fidcent-gold mb-3">
                      {term.title}
                    </h3>
                    <p className="text-fidcent-light/70 text-sm leading-relaxed">
                      {term.content}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 md:p-8 mt-12 text-center"
            >
              <Mail className="w-10 h-10 text-fidcent-gold mx-auto mb-4" />
              <h2 className="font-display text-xl md:text-2xl font-bold text-fidcent-light mb-4">
                Questions About These Terms?
              </h2>
              <p className="text-fidcent-light/70 mb-6">
                If you have any questions about these Terms of Service, please contact our legal team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:legal@fidcent.com" 
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <Mail size={18} />
                  legal@fidcent.com
                </a>
                <Link href="/contact" className="btn-secondary inline-flex items-center justify-center gap-2">
                  Contact Us
                </Link>
              </div>
            </motion.div>

            {/* Acknowledgment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-xl border border-fidcent-gold/20 bg-fidcent-gold/5"
            >
              <p className="text-fidcent-light/70 text-sm text-center">
                <strong className="text-fidcent-gold">Acknowledgment:</strong> By engaging Fidcent Tech&apos;s services, 
                you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. 
                Individual service agreements may contain additional terms specific to your project.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
