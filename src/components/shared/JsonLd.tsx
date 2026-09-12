import Script from "next/script";

const siteConfig = {
  name: "Veer Game",
  url: "https://veergames1.com",
  description:
    "Veer Game - India's most trusted online gaming platform with Wingo colour prediction, Aviator crash, K3, 5D, slots, and instant UPI withdrawals.",
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

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: ["Veer Games", "Veer Game", "VeerGame", "Veer Games Official", "veergames1.com"],
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
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 100,
    maxValue: 250,
  },
  slogan: "Play Smart, Predict & Win Real Rewards",
};

// Website Schema with Sitelinks Searchbox
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: "Veer Games (Veer Game)",
  alternateName: ["Veer Games", "Veer Game", "VeerGame"],
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

// WebApplication Schema
const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${siteConfig.url}/#webapp`,
  name: "Veer Games Official Web App",
  alternateName: ["Veer Games", "Veer Game App"],
  url: siteConfig.url,
  description:
    "Veer Game mobile and web gaming portal for Wingo colour prediction, Aviator crash, lottery, and slots in India",
  applicationCategory: "GameApplication",
  operatingSystem: "Android, iOS, Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "154200",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "Wingo Colour Prediction (1m, 3m, 5m, 10m)",
    "Aviator Crash Game with 100x Multiplier",
    "K3 and 5D Lottery Games",
    "Instant ₹100 Minimum Deposit via UPI",
    "Fast 8-15 Minute Bank Withdrawals",
    "24/7 Live Telegram Support",
    "Agent Daily Salary Referral Program",
  ],
  downloadUrl: `${siteConfig.url}/#apk`,
  softwareVersion: "2.1",
  fileSize: "12.4 MB",
};

// SoftwareApplication Schema (for APK download rich card)
const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${siteConfig.url}/#app`,
  name: "Veer Game Official Android App",
  operatingSystem: "Android 5.0+",
  applicationCategory: "GameApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "154200",
    bestRating: "5",
    worstRating: "1",
  },
  downloadUrl: `${siteConfig.url}/#apk`,
  fileSize: "12.4 MB",
  softwareVersion: "2.1",
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
      name: "Veer Game Home",
      item: siteConfig.url,
    },
  ],
};

// HowTo Schema (Google HowTo Rich Card for registration)
const howToRegisterSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Register on Veer Game and Claim Welcome Bonus",
  description:
    "Learn how to create a verified account on Veer Game using official invitation code 69548120159 and deposit minimum ₹100 via UPI.",
  totalTime: "PT2M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Open the Official Registration Page",
      text: "Visit the verified Veer Game portal at https://www.veergame14.com/#/register?invitationCode=69548120159",
      url: "https://www.veergame14.com/#/register?invitationCode=69548120159",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Enter Your Mobile Number",
      text: "Type your active 10-digit Indian phone number capable of receiving SMS OTP verification.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Confirm Invitation Code 69548120159",
      text: "Verify that the invitation code field is set to 69548120159 to unlock your ₹100 welcome bonus.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Create a Secure Password",
      text: "Choose a strong password containing letters, numbers, and symbols.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Submit and Deposit ₹100",
      text: "Tap Register, navigate to Deposit, select UPI (PhonePe, Paytm, GPay), and add minimum ₹100 to start playing.",
    },
  ],
};

// Homepage FAQ Schema (Expandable SERP Rich Snippets)
const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Veer Game?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veer Game is India's leading online gaming platform featuring Wingo Colour Prediction, Aviator, K3, 5D lottery, slots, and interactive card games with instant UPI payouts.",
      },
    },
    {
      "@type": "Question",
      name: "What is the official Veer Game invite code?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The official Veer Game invite code is 69548120159. Entering this code during registration unlocks up to ₹100 welcome bonus, minimum ₹100 deposit, and VIP Telegram access.",
      },
    },
    {
      "@type": "Question",
      name: "How to download the Veer Game APK?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can download the official Veer Game APK v2.1 (12.4 MB) directly from veergames1.com. It is 100% virus-free, secure, and compatible with all Android 5.0+ smartphones.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum deposit on Veer Game?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum deposit on Veer Game is only ₹100, supported via all major UPI applications including PhonePe, Google Pay, Paytm, and BHIM.",
      },
    },
    {
      "@type": "Question",
      name: "Is Veer Game real or fake?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veer Game is verified real and legitimate, processing thousands of daily withdrawals within 8 to 15 minutes via IMPS and UPI with certified Provably Fair RNG algorithms.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Veer Game Agent Salary program work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veer Game agents earn 6-tier lifetime turnover commissions plus fixed daily salaries ranging from ₹300 to over ₹50,000 per day based on active referral team volume.",
      },
    },
  ],
};

export default function JsonLd() {
  const schemas = [
    organizationSchema,
    websiteSchema,
    webApplicationSchema,
    softwareApplicationSchema,
    homeBreadcrumbSchema,
    howToRegisterSchema,
    homepageFaqSchema,
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
