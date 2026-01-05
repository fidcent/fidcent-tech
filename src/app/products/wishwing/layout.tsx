import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WishWing - Nigeria\'s Digital Gifting Platform | Fidcent Tech',
  description: 'WishWing transforms gift-giving with WishCoins digital currency, social wishlists, group gifting, and automated greetings. Join 105+ early adopters. Launching 2026.',
  keywords: [
    'WishWing',
    'digital gifting Nigeria',
    'WishCoins',
    'social wishlists',
    'group gifting',
    'birthday gifts Nigeria',
    'wedding gifts',
    'gift cards Nigeria',
    'occasion reminders',
    'Fidcent Tech products',
    'digital currency gifts',
    'automated greetings',
    'celebration app Nigeria',
    'gift registry app',
    'mobile gifting app',
    'fintech gifting platform',
    'Nigerian gift app',
    'group gift contributions',
    'wishlist app Nigeria',
    'digital celebration platform'
  ],
  openGraph: {
    title: 'WishWing - Nigeria\'s Digital Gifting Platform',
    description: 'Transform how you celebrate. WishCoins, social wishlists, and group gifting. Join 105+ early adopters for 1,000 FREE WishCoins.',
    url: 'https://fidcent.com/products/wishwing',
    siteName: 'Fidcent Tech',
    images: [
      {
        url: 'https://wishwing.fidcent.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WishWing - Digital Gifting Platform',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WishWing - Nigeria\'s Digital Gifting Platform',
    description: 'Transform how you celebrate. WishCoins, social wishlists, and group gifting. Launching 2026.',
    images: ['https://wishwing.fidcent.com/og-image.png'],
    creator: '@fidcenttech',
  },
  alternates: {
    canonical: 'https://fidcent.com/products/wishwing',
  },
}

export default function WishWingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
