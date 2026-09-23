const siteConfig = {
  name: "Veer Game Guide",
  url: "https://veergames1.com",
  description:
    "Veer Game Guide - Complete information about the Veer Games app including features, game types, download instructions, and user reviews. Your comprehensive resource for entertainment gaming.",
  logo: "https://veergames1.com/images/logo/logo.png",
  email: "support@veergames1.com",
  telephone: "+91-8000000000",
  address: {
    country: "IN",
    region: "India",
  },
  socialLinks: [
    "https://t.me/+SQ2smTBoOV82ZjY9",
  ],
};

// 1. Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: ["Veer Games Guide", "Veer Game Review", "VeerGame Guide"],
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: siteConfig.logo,
    width: 512,
    height: 512,
  },
  image: siteConfig.logo,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.telephone,
  address: {
    "@type": "PostalAddress",
    addressCountry: siteConfig.address.country,
  },
  sameAs: siteConfig.socialLinks,
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.telephone,
      contactType: "customer support",
      email: siteConfig.email,
      availableLanguage: ["English", "Hindi"],
      areaServed: "IN",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
  ],
  foundingDate: "2023",
};

// 2. Website Schema with Sitelinks Searchbox
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: "Veer Game Guide & Review",
  alternateName: ["Veer Games Guide", "Veer Game Information"],
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
  potentialAction: [
    {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  ],
  inLanguage: ["en-IN", "hi-IN"],
};

// 3. WebPage Schema (Information Site)
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.url}/#webpage`,
  name: "Veer Game Guide - Complete App Information & Review",
  url: siteConfig.url,
  description: siteConfig.description,
  isPartOf: {
    "@id": `${siteConfig.url}/#website`,
  },
  about: {
    "@type": "SoftwareApplication",
    name: "Veer Game App",
    applicationCategory: "Entertainment",
  },
  inLanguage: ["en-IN", "hi-IN"],
};

// 4. SoftwareApplication Schema (for APK info - informational)
const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${siteConfig.url}/#app`,
  name: "Veer Game Android App v2.1",
  operatingSystem: "Android 5.0 and higher",
  applicationCategory: "EntertainmentApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    ratingCount: "15000",
    bestRating: "5",
    worstRating: "1",
  },
  downloadUrl: `${siteConfig.url}/download`,
  fileSize: "12.4 MB",
  softwareVersion: "2.1",
  author: {
    "@id": `${siteConfig.url}/#organization`,
  },
};

// 5. BreadcrumbList Schema for homepage
const homeBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Veer Game Guide Home",
      item: siteConfig.url,
    },
  ],
};

// 6. HowTo Schema (Download Guide)
const howToDownloadSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Download Veer Game App",
  description:
    "Step-by-step guide to downloading and installing the Veer Game entertainment app on Android devices.",
  totalTime: "PT3M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Visit Download Page",
      text: "Navigate to the official Veer Game download page to access the APK file.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Enable Unknown Sources",
      text: "Go to Android Settings > Security and enable 'Install from Unknown Sources' to allow APK installation.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Download and Install",
      text: "Download the APK file (12.4 MB) and tap to install once the download completes.",
    },
  ],
};

// 7. Comprehensive FAQ Schema
const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Veer Game?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veer Game is an entertainment app featuring various game types including Wingo, Aviator, K3, 5D, Slots, Plinko, Limbo, and Poker. This guide provides comprehensive information about the app's features and functionality.",
      },
    },
    {
      "@type": "Question",
      name: "How do I download the Veer Game app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Veer Game APK (v2.1, 12.4 MB) can be downloaded from the official website. Enable 'Unknown Sources' in your Android settings before installation.",
      },
    },
    {
      "@type": "Question",
      name: "What games are available in Veer Game?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veer Game offers entertainment games including Wingo (colour selection game), Aviator (flight-themed game), K3 and 5D (number games), Slots, Plinko, Limbo, and Poker-style card games.",
      },
    },
    {
      "@type": "Question",
      name: "Is Veer Game available for iPhone?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Currently, the Veer Game app is available as an Android APK. iPhone users can access features through the mobile web browser.",
      },
    },
    {
      "@type": "Question",
      name: "What are the system requirements for Veer Game?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veer Game requires Android 5.0 or higher. The app is optimized to work on budget and mid-range smartphones with limited RAM and storage.",
      },
    },
    {
      "@type": "Question",
      name: "Is this an official Veer Game website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is an informational guide and review website about the Veer Game app. We provide comprehensive information, tutorials, and user guides for entertainment purposes.",
      },
    },
  ],
};

// 8. SiteNavigationElement Schema (for Google Sitelinks)
const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Veer Game Guide Navigation",
  description: "Primary navigational links for Veer Game information guide",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "Veer Game Download",
      description: "Download information for Android APK v2.1",
      url: `${siteConfig.url}/download`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Wingo Game Guide",
      description: "Complete guide to the Wingo colour selection game",
      url: `${siteConfig.url}/wingo`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Aviator Game Guide",
      description: "Information about the Aviator flight-themed game",
      url: `${siteConfig.url}/aviator`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "Blog & Guides",
      description: "Articles, tutorials, and guides about Veer Game",
      url: `${siteConfig.url}/blog`,
    },
  ],
};

// 9. Article Schema (for blog/guide content)
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Complete Guide to Veer Game App 2026",
  description: siteConfig.description,
  author: {
    "@type": "Organization",
    name: "Veer Game Guide",
  },
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
  datePublished: "2026-01-01",
  dateModified: "2026-09-23",
  mainEntityOfPage: siteConfig.url,
};

export default function JsonLd() {
  const schemas = [
    organizationSchema,
    websiteSchema,
    webPageSchema,
    softwareApplicationSchema,
    homeBreadcrumbSchema,
    howToDownloadSchema,
    homepageFaqSchema,
    siteNavigationSchema,
    articleSchema,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
