const siteConfig = {
  name: "Veer Game Guide",
  url: "https://veergames1.com",
  description:
    "Veer Game Guide - Complete information about the Veer Game casual entertainment app including features, download instructions, and user reviews. Your comprehensive resource for this popular mobile app.",
  logo: "https://veergames1.com/images/logo/logo.svg",
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
  alternateName: ["Veer Games Guide", "Veer Game Review"],
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
          "Monday", "Tuesday", "Wednesday", "Thursday",
          "Friday", "Saturday", "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
  ],
  foundingDate: "2023",
};

// 2. Website Schema
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

// 3. WebPage Schema
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

// 4. SoftwareApplication Schema
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

// 5. BreadcrumbList Schema
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
    "Step-by-step guide to downloading and installing the Veer Game casual entertainment app on Android devices.",
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

// 7. FAQ Schema
const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Veer Game?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veer Game is a casual entertainment app featuring various interactive mini-games including puzzle challenges, pattern recognition activities, arcade experiences, and strategy games. This guide provides comprehensive information about the app.",
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
      name: "What type of entertainment does Veer Game offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veer Game offers casual entertainment including interactive puzzles, pattern-matching challenges, arcade-style mini-games, and strategy activities designed for short-session mobile entertainment.",
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
        text: "This is an independent informational guide and review website about the Veer Game app. We provide comprehensive information, tutorials, and user guides for educational and informational purposes.",
      },
    },
  ],
};

// 8. Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Complete Guide to Veer Game Casual Entertainment App 2026",
  description: siteConfig.description,
  author: {
    "@type": "Organization",
    name: "Veer Game Guide",
  },
  publisher: {
    "@id": `${siteConfig.url}/#organization`,
  },
  datePublished: "2026-01-01",
  dateModified: "2026-09-24",
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
