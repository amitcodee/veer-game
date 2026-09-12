import Script from "next/script";

const siteConfig = {
  name: "Veer Game",
  url: "http://veergames1.com",
  description: "India's #1 online gaming platform with 150+ games including color prediction, aviator, dice, and slots.",
  logo: "http://veergames1.com/logo.png",
  email: "support@veergames1.com",
  telephone: "+91-XXXXXXXXXX",
  address: {
    country: "IN",
    region: "India",
  },
  socialLinks: [
    "https://t.me/+SQ2smTBoOV82ZjY9",
  ],
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
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
      contactType: "customer service",
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
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 50,
    maxValue: 100,
  },
  slogan: "Play Smart, Win Big!",
};

// Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
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
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  ],
  inLanguage: ["en-IN", "hi-IN"],
};

// WebApplication Schema (for the gaming platform)
const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${siteConfig.url}/#webapp`,
  name: "Veer Game App",
  url: siteConfig.url,
  description: "Veer Game mobile and web application for color prediction and online gaming in India",
  applicationCategory: "GameApplication",
  operatingSystem: "Android, iOS, Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "25000",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "Color Prediction Games",
    "Aviator Crash Game",
    "Dice Games",
    "Slot Games",
    "Instant Withdrawals",
    "24/7 Support",
    "Secure Payments",
    "Welcome Bonus",
  ],
  downloadUrl: `${siteConfig.url}/#login`,
  screenshot: [
    `${siteConfig.url}/screenshots/home.png`,
    `${siteConfig.url}/screenshots/games.png`,
    `${siteConfig.url}/screenshots/wallet.png`,
  ],
  softwareVersion: "2.5.1",
  fileSize: "8.20 MB",
};

// SoftwareApplication Schema (for app download)
const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${siteConfig.url}/#app`,
  name: "Veer Game",
  operatingSystem: "Android",
  applicationCategory: "GameApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "25000",
    bestRating: "5",
    worstRating: "1",
  },
  downloadUrl: `${siteConfig.url}/#apk`,
  fileSize: "8.20 MB",
  softwareVersion: "2.5.1",
  author: {
    "@id": `${siteConfig.url}/#organization`,
  },
};

// BreadcrumbList Schema for homepage
const homeBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
  ],
};

// LocalBusiness Schema (for local SEO in India)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteConfig.url}/#localbusiness`,
  name: siteConfig.name,
  url: siteConfig.url,
  logo: siteConfig.logo,
  image: siteConfig.logo,
  description: "Veer Game - India's trusted online gaming platform offering color prediction, aviator, dice, slots, and 150+ exciting games with instant withdrawals.",
  email: siteConfig.email,
  telephone: siteConfig.telephone,
  address: {
    "@type": "PostalAddress",
    addressCountry: "India",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "20.5937",
    longitude: "78.9629",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  priceRange: "Free to play",
  openingHoursSpecification: {
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
  sameAs: siteConfig.socialLinks,
};

export default function JsonLd() {
  const schemas = [
    organizationSchema,
    websiteSchema,
    webApplicationSchema,
    softwareApplicationSchema,
    homeBreadcrumbSchema,
    localBusinessSchema,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`json-ld-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
