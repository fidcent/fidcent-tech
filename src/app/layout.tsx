import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0D1B2A',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://fidcent.com'),
  title: {
    default: 'Fidcent Tech | Leading Software Development & IT Infrastructure Solutions in Africa',
    template: '%s | Fidcent Tech'
  },
  description: 'Fidcent Tech delivers cutting-edge software development, networking, and IT infrastructure solutions across Africa and Europe. Transform your business with our innovative technology services. Creators of WishWing, the leading digital gifting platform with social wishlists and group gifting features.',
  keywords: [
    'software development Nigeria',
    'IT infrastructure Lagos',
    'networking solutions Africa',
    'tech company Nigeria',
    'custom software development',
    'enterprise solutions',
    'cloud infrastructure',
    'digital transformation Africa',
    'Fidcent Tech',
    'Fidcent Group',
    'IT consulting Lagos',
    'software development Europe',
    'network setup Nigeria',
    'WishWing digital gifting',
    'social gifting platform Nigeria',
    'group gifting app',
    'WishCoins currency',
    'digital wishlist app',
    'birthday gift app Nigeria',
    'wedding registry app',
    'celebration gifting platform',
    'mobile gifting solution'
  ],
  authors: [{ name: 'Fidcent Tech', url: 'https://fidcent.com' }],
  creator: 'Fidcent Tech',
  publisher: 'Fidcent Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://fidcent.com',
    siteName: 'Fidcent Tech',
    title: 'Fidcent Tech | Leading Software Development & IT Infrastructure Solutions',
    description: 'Transform your business with cutting-edge software development, networking, and IT infrastructure solutions. Serving Africa and Europe.',
    images: [
      {
        url: 'https://fidcent.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Fidcent Tech - Innovative Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fidcent Tech | Software Development & IT Solutions',
    description: 'Cutting-edge software development, networking, and IT infrastructure solutions across Africa and Europe.',
    images: ['https://fidcent.com/og-image.png'],
    creator: '@fidcenttech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://fidcent.com',
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/assest/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assest/logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
