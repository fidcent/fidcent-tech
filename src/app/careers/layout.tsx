import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join Fidcent Tech - Explore career opportunities in software development, IT infrastructure, and networking. Build your future with a leading tech company in Africa.',
  keywords: [
    'tech jobs Nigeria',
    'software developer jobs Lagos',
    'IT jobs Africa',
    'careers at Fidcent Tech',
    'software engineering jobs',
    'network engineer jobs Nigeria',
  ],
  openGraph: {
    title: 'Careers at Fidcent Tech',
    description: 'Join our team of innovative technologists. Explore career opportunities in software development, IT infrastructure, and networking.',
    url: 'https://fidcent.com/careers',
  },
  alternates: {
    canonical: 'https://fidcent.com/careers',
  },
}

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
