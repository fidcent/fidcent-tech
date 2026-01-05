import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - Our Story, Mission & Values',
  description: 'Learn about Fidcent Tech, a subsidiary of Fidcent Group and creators of WishWing digital gifting platform. Discover our mission to transform businesses across Africa and Europe through innovative technology solutions.',
  keywords: [
    'about Fidcent Tech',
    'Fidcent Group',
    'tech company Nigeria',
    'IT company Lagos',
    'software company Africa',
    'technology solutions Africa',
    'Nigerian tech company',
    'IT services Europe',
    'digital transformation company',
    'WishWing creators',
    'digital gifting platform developers',
    'fintech solutions Nigeria'
  ],
  openGraph: {
    title: 'About Fidcent Tech | Our Story & Mission',
    description: 'Learn about Fidcent Tech - a leading technology company transforming businesses across Africa and Europe with innovative solutions.',
    url: 'https://fidcent.com/about',
    images: [
      {
        url: '/og-about.png',
        width: 1200,
        height: 630,
        alt: 'About Fidcent Tech',
      },
    ],
  },
  twitter: {
    title: 'About Fidcent Tech | Our Story & Mission',
    description: 'Learn about Fidcent Tech - a leading technology company transforming businesses across Africa and Europe.',
    images: ['/og-about.png'],
  },
  alternates: {
    canonical: 'https://fidcent.com/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
