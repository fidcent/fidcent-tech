'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  MapPin, Clock, ArrowRight, Users, Rocket, Heart, 
  GraduationCap, Coffee, Globe, Mail, Send, ArrowLeft,
  Code2, Network, Server, Shield, Lightbulb, Headphones
} from 'lucide-react'

const benefits = [
  {
    icon: Rocket,
    title: 'Growth Opportunities',
    description: 'Continuous learning with access to courses, certifications, and conferences.',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health coverage and wellness programs for you and your family.',
  },
  {
    icon: Coffee,
    title: 'Work-Life Balance',
    description: 'Flexible working hours and remote work options to suit your lifestyle.',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'Work alongside talented professionals in a supportive team environment.',
  },
  {
    icon: GraduationCap,
    title: 'Training & Development',
    description: 'Regular training sessions, mentorship programs, and skill development workshops.',
  },
  {
    icon: Globe,
    title: 'Global Exposure',
    description: 'Work on projects spanning Africa and Europe with diverse clients.',
  },
]

const openPositions = [
  {
    title: 'Senior Software Developer',
    department: 'Engineering',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    icon: Code2,
    description: 'Lead development of enterprise applications using modern technologies.',
    requirements: ['5+ years experience', 'React/Next.js', 'Node.js', 'Cloud Services'],
  },
  {
    title: 'Network Engineer',
    department: 'Infrastructure',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    icon: Network,
    description: 'Design and implement network solutions for enterprise clients.',
    requirements: ['3+ years experience', 'CCNA/CCNP', 'Network Security', 'Cloud Networking'],
  },
  {
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time',
    icon: Server,
    description: 'Build and maintain CI/CD pipelines and cloud infrastructure.',
    requirements: ['4+ years experience', 'AWS/Azure', 'Docker/Kubernetes', 'IaC'],
  },
  {
    title: 'Cybersecurity Analyst',
    department: 'Security',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    icon: Shield,
    description: 'Protect client systems and implement security best practices.',
    requirements: ['3+ years experience', 'Security certifications', 'Penetration testing', 'SIEM'],
  },
  {
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Lagos / Remote',
    type: 'Full-time',
    icon: Lightbulb,
    description: 'Create intuitive and beautiful interfaces for web and mobile applications.',
    requirements: ['3+ years experience', 'Figma', 'User Research', 'Design Systems'],
  },
  {
    title: 'Technical Support Specialist',
    department: 'Support',
    location: 'Lagos, Nigeria',
    type: 'Full-time',
    icon: Headphones,
    description: 'Provide technical assistance and ensure client satisfaction.',
    requirements: ['2+ years experience', 'IT Support', 'Customer Service', 'Problem Solving'],
  },
]

const values = [
  {
    title: 'Innovation First',
    description: 'We embrace new technologies and creative solutions.',
  },
  {
    title: 'Client Success',
    description: 'Our clients\' success is our primary measure of achievement.',
  },
  {
    title: 'Continuous Learning',
    description: 'We invest in our people\'s growth and development.',
  },
  {
    title: 'Integrity',
    description: 'We operate with honesty and transparency in all we do.',
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-fidcent-primary">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 mesh-gradient overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-fidcent-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-fidcent-accent/10 rounded-full blur-3xl" />
        
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
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-fidcent-light/80">We&apos;re Hiring!</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Build Your <span className="gradient-text">Future</span> With Us
            </h1>
            
            <p className="text-lg md:text-xl text-fidcent-light/70 max-w-2xl mx-auto mb-8">
              Join a team of passionate technologists shaping the future of 
              digital transformation across Africa and Europe.
            </p>
            
            <motion.a
              href="#positions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              View Open Positions
              <ArrowRight size={18} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why Join <span className="gradient-text">Fidcent Tech</span>?
            </h2>
            <p className="text-fidcent-light/60 max-w-2xl mx-auto">
              We believe in creating an environment where talent thrives and innovation flourishes.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-fidcent-gold/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-fidcent-gold" />
                </div>
                <h3 className="font-display font-semibold text-fidcent-light mb-2">
                  {benefit.title}
                </h3>
                <p className="text-fidcent-light/60 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-fidcent-light/60 max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl border border-white/10 hover:border-fidcent-gold/30 transition-colors"
              >
                <h3 className="font-display font-semibold text-fidcent-gold mb-2">
                  {value.title}
                </h3>
                <p className="text-fidcent-light/60 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-fidcent-light/60 max-w-2xl mx-auto">
              Find your perfect role and start making an impact today.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-6 md:p-8 card-hover group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                  <div className="w-14 h-14 rounded-xl bg-fidcent-gold/10 flex items-center justify-center shrink-0">
                    <position.icon className="w-7 h-7 text-fidcent-gold" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="font-display text-xl font-semibold text-fidcent-light">
                        {position.title}
                      </h3>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-fidcent-gold/10 text-fidcent-gold w-fit">
                        {position.department}
                      </span>
                    </div>
                    
                    <p className="text-fidcent-light/70 mb-4">
                      {position.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {position.requirements.map((req) => (
                        <span 
                          key={req}
                          className="text-xs px-2 py-1 rounded-md bg-white/5 text-fidcent-light/60"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-4 text-sm text-fidcent-light/60">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {position.type}
                        </span>
                      </div>
                      
                      <a 
                        href={`mailto:careers@fidcent.com?subject=Application for ${position.title}`}
                        className="inline-flex items-center gap-2 text-fidcent-gold hover:text-fidcent-gold/80 transition-colors font-medium text-sm group/link"
                      >
                        Apply Now
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't See Your Role? */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass rounded-2xl p-8 md:p-12 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-fidcent-gold/10 flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-fidcent-gold" />
            </div>
            
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Don&apos;t See Your Role?
            </h2>
            
            <p className="text-fidcent-light/70 mb-8 max-w-lg mx-auto">
              We&apos;re always looking for talented individuals. Send us your resume 
              and let us know how you can contribute to our team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:careers@fidcent.com"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Mail size={18} />
                Send Your Resume
              </a>
              <Link href="/contact" className="btn-secondary inline-flex items-center justify-center gap-2">
                Contact HR
              </Link>
            </div>
            
            <p className="text-fidcent-light/50 text-sm mt-6">
              Email your resume to <a href="mailto:careers@fidcent.com" className="text-fidcent-gold hover:underline">careers@fidcent.com</a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
