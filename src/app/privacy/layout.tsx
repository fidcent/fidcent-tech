import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Fidcent Tech Privacy Policy - Learn how we collect, use, and protect your personal information. Your privacy is our priority.',
  openGraph: {
    title: 'Privacy Policy | Fidcent Tech',
    description: 'Learn how Fidcent Tech collects, uses, and protects your personal information.',
    url: 'https://fidcent.com/privacy',
  },
  alternates: {
    canonical: 'https://fidcent.com/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
