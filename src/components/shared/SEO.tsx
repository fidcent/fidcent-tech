
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
}

export const SEO = ({
  title = "Fidcent Tech - Innovative Software Solutions",
  description = "Empowering businesses through innovative technology solutions that enhance growth, efficiency, and competitive advantage. Fidcent Tech specializes in custom software, mobile apps, web development and more.",
  canonicalUrl = "https://tech.fidcent.com",
  ogType = "website",
  ogImage = "/og-image.png",
  keywords = "Fidcent Tech, software development, technology solutions, custom software, mobile apps, web development, cloud solutions, AI, machine learning, IoT"
}: SEOProps) => {
  const fullTitle = title.includes("Fidcent Tech") ? title : `${title} | Fidcent Tech`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
    </Helmet>
  );
};
