import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Fidcent Tech Terms of Service - Read our terms and conditions for using our software development and IT services.',
  openGraph: {
    title: 'Terms of Service | Fidcent Tech',
    description: 'Terms and conditions for using Fidcent Tech software development and IT services.',
    url: 'https://fidcent.com/terms',
  },
  alternates: {
    canonical: 'https://fidcent.com/terms',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
