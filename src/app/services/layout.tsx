import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services - Software Development, IT Infrastructure & Cloud Solutions',
  description: 'Explore Fidcent Tech\'s comprehensive IT services including custom software development, network solutions, cloud services, cybersecurity, and IT consulting. Serving businesses across Africa and Europe.',
  keywords: [
    'software development services Nigeria',
    'IT infrastructure services Lagos',
    'cloud migration services Africa',
    'cybersecurity services Nigeria',
    'network solutions Lagos',
    'IT consulting Africa',
    'custom software development',
    'enterprise solutions',
    'DevOps services',
    'digital transformation'
  ],
  openGraph: {
    title: 'Our Services | Fidcent Tech',
    description: 'Comprehensive IT services including software development, cloud solutions, cybersecurity, and more. Transform your business with Fidcent Tech.',
    url: 'https://fidcent.com/services',
    images: [
      {
        url: '/og-services.png',
        width: 1200,
        height: 630,
        alt: 'Fidcent Tech Services',
      },
    ],
  },
  twitter: {
    title: 'Our Services | Fidcent Tech',
    description: 'Comprehensive IT services including software development, cloud solutions, cybersecurity, and more.',
    images: ['/og-services.png'],
  },
  alternates: {
    canonical: 'https://fidcent.com/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
