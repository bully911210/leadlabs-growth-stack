import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl: string;
  ogImage?: string;
}

const SEOHead = ({ title, description, keywords, canonicalUrl, ogImage = "https://leadlabs.co.za/og-image.jpg" }: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | LeadLabs`;

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updatePropertyTag = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updatePropertyTag('og:title', `${title} | LeadLabs`);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:url', canonicalUrl);
    updatePropertyTag('og:image', ogImage);

    // Twitter Card tags
    updateMetaTag('twitter:title', `${title} | LeadLabs`);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [title, description, keywords, canonicalUrl, ogImage]);

  return null;
};

export default SEOHead;
