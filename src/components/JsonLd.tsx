export default function JsonLd() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fidcent Tech',
    alternateName: 'Fidcent Technology',
    url: 'https://fidcent.com',
    logo: 'https://fidcent.com/assest/logo.png',
    description: 'Fidcent Tech delivers cutting-edge software development, networking, and IT infrastructure solutions across Africa and Europe.',
    foundingDate: '2024',
    founders: [
      {
        '@type': 'Organization',
        name: 'Fidcent Group',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lagos',
      addressRegion: 'Lagos State',
      addressCountry: 'NG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+234-816-513-1008',
      contactType: 'customer service',
      email: 'info@fidcent.com',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://www.linkedin.com/company/fidcenttech',
      'https://twitter.com/fidcenttech',
    ],
    areaServed: [
      {
        '@type': 'Continent',
        name: 'Africa',
      },
      {
        '@type': 'Continent',
        name: 'Europe',
      },
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://fidcent.com/#localbusiness',
    name: 'Fidcent Tech',
    image: 'https://fidcent.com/assest/logo.png',
    telephone: '+234-816-513-1008',
    email: 'info@fidcent.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lagos',
      addressRegion: 'Lagos State',
      addressCountry: 'Nigeria',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '6.5244',
      longitude: '3.3792',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
  }

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Fidcent Tech Services',
    description: 'Technology services offered by Fidcent Tech',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'Service',
          name: 'Custom Software Development',
          description: 'Tailored software solutions designed to meet your unique business requirements.',
          provider: {
            '@type': 'Organization',
            name: 'Fidcent Tech',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'Service',
          name: 'Network Solutions',
          description: 'Comprehensive networking services to keep your business connected and secure.',
          provider: {
            '@type': 'Organization',
            name: 'Fidcent Tech',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'Service',
          name: 'IT Infrastructure Setup',
          description: 'Robust infrastructure setup and management to support your business operations.',
          provider: {
            '@type': 'Organization',
            name: 'Fidcent Tech',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'Service',
          name: 'Cloud Services',
          description: 'Seamless cloud migration and management services for scalable business operations.',
          provider: {
            '@type': 'Organization',
            name: 'Fidcent Tech',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'Service',
          name: 'Cybersecurity',
          description: 'Protect your digital assets with comprehensive security solutions.',
          provider: {
            '@type': 'Organization',
            name: 'Fidcent Tech',
          },
        },
      },
      {
        '@type': 'ListItem',
        position: 6,
        item: {
          '@type': 'Service',
          name: 'IT Consulting',
          description: 'Strategic technology guidance to help you make informed decisions.',
          provider: {
            '@type': 'Organization',
            name: 'Fidcent Tech',
          },
        },
      },
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Fidcent Tech',
    url: 'https://fidcent.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://fidcent.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}
