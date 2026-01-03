import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Products',
  description: 'Discover innovative products by Fidcent Tech. From WishWing - Nigeria\'s digital gifting platform, to enterprise solutions transforming businesses across Africa and Europe.',
  keywords: [
    'WishWing',
    'digital gifting platform Nigeria',
    'Fidcent Tech products',
    'Nigerian tech products',
    'gift-giving app Nigeria',
    'WishCoins',
    'celebration platform',
    'group gifting app',
    'social wishlists',
    'African fintech products',
  ],
  openGraph: {
    title: 'Our Products | Fidcent Tech',
    description: 'Innovative products built by Fidcent Tech - transforming celebrations, businesses, and digital experiences across Africa.',
    url: 'https://fidcent.com/products',
  },
  alternates: {
    canonical: 'https://fidcent.com/products',
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
