import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Get a Free Consultation',
  description: 'Contact Fidcent Tech for software development, IT infrastructure, and technology solutions. Get a free consultation for your project. Based in Lagos, Nigeria, serving Africa and Europe.',
  keywords: [
    'contact Fidcent Tech',
    'IT consultation Lagos',
    'software development quote',
    'technology services Nigeria',
    'IT company contact',
    'tech support Lagos',
    'free IT consultation',
    'business technology solutions',
    'hire developers Nigeria'
  ],
  openGraph: {
    title: 'Contact Fidcent Tech | Get a Free Consultation',
    description: 'Get in touch with Fidcent Tech for your technology needs. Free consultation available.',
    url: 'https://fidcent.com/contact',
    images: [
      {
        url: '/og-contact.png',
        width: 1200,
        height: 630,
        alt: 'Contact Fidcent Tech',
      },
    ],
  },
  twitter: {
    title: 'Contact Fidcent Tech | Get a Free Consultation',
    description: 'Get in touch with Fidcent Tech for your technology needs. Free consultation available.',
    images: ['/og-contact.png'],
  },
  alternates: {
    canonical: 'https://fidcent.com/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
