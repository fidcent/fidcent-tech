
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  keywords?: string;
}

export const SEO = ({
  title = "Fidcent Tech - Innovative Software Solutions | Part of Fidcent Group",
  description = "Empowering businesses through innovative technology solutions including custom software, mobile apps, web development, networking, CCTV installation, cloud solutions, AI, and IoT. Fidcent Tech is a division of Fidcent Group specializing in comprehensive IT services.",
  canonicalUrl = "https://tech.fidcent.com",
  ogType = "website",
  ogImage = "/public/lovable-uploads/b57cfb44-95d1-4607-9eb5-de1b5a19c1e8.png",
  keywords = "Fidcent Tech, Fidcent Group, software development, Java, Spring Boot, React, Node.js, TypeScript, JavaScript, MongoDB, DevOps, networking, CCTV installation, security systems, cloud management, IT consulting, mobile apps, web development, cloud solutions, AI, machine learning, IoT, Nigeria tech company"
}: SEOProps) => {
  const fullTitle = title.includes("Fidcent Tech") ? title : `${title} | Fidcent Tech`;
  const location = useLocation();
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={`${canonicalUrl}${location.pathname}`} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={`${canonicalUrl}${location.pathname}`} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Fidcent Tech" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${canonicalUrl}${location.pathname}`} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional SEO metadata */}
      <meta name="author" content="Fidcent Tech" />
      <meta name="publisher" content="Fidcent Group" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="geo.region" content="NG" />
      <meta name="geo.placename" content="Ibafo, Ogun State" />
    </Helmet>
  );
};
