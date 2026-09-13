const siteConfig = {
  name: "Veer Game",
  url: "https://veergames1.com",
  description:
    "Welcome to the official Veer Game platform. Download the official Veer Games APK (v2.1), login securely, and access Wingo Colour Prediction and Aviator crash games with 256-bit encryption.",
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
  alternateName: ["Veer Games", "Veer Game", "VeerGame", "Veer Game Official Site", "veergames1.com"],
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

// 2. Website Schema with Sitelinks Searchbox
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: "Veer Game Official Site",
  alternateName: ["Veer Games", "Veer Game", "VeerGame", "Veer Game Official"],
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

// 3. WebApplication Schema
const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": `${siteConfig.url}/#webapp`,
  name: "Veer Game Official Web App",
  alternateName: ["Veer Games", "Veer Game App", "Veer Game Web"],
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
    ratingCount: "185400",
    bestRating: "5",
    worstRating: "1",
  },
  featureList: [
    "Wingo Colour Prediction (30s, 1m, 3m, 5m)",
    "Aviator Crash Game with 100x Multiplier",
    "K3 and 5D Lottery Games",
    "Instant ₹100 Minimum Deposit via UPI",
    "Fast 8-15 Minute Bank Withdrawals",
    "24/7 Live Telegram Support",
    "Agent Daily Salary Referral Program",
  ],
  downloadUrl: `${siteConfig.url}/download`,
  softwareVersion: "2.1",
  fileSize: "12.4 MB",
};

// 4. SoftwareApplication Schema (for APK download Google Rich Snippet)
const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": `${siteConfig.url}/#app`,
  name: "Veer Game Official Android APK v2.1",
  operatingSystem: "Android 5.0 and higher",
  applicationCategory: "GameApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "185400",
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
      name: "Veer Game Home",
      item: siteConfig.url,
    },
  ],
};

// 6. HowTo Register Schema (Google Rich Card)
const howToRegisterSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Register on Veer Game and Claim ₹100 Welcome Bonus",
  description:
    "Step-by-step guide to creating a verified account on Veer Game using official invitation code 69548120159 and depositing minimum ₹100 via UPI.",
  totalTime: "PT2M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Open Official Registration Portal",
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
      text: "Verify that the invitation code field is set to 69548120159 to unlock your ₹100 welcome bonus and VIP withdrawal route.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Create a Secure Password",
      text: "Choose a strong password containing letters, numbers, and symbols (minimum 8 characters).",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Deposit ₹100 via UPI & Start Playing",
      text: "Tap Register, navigate to Deposit, select UPI (PhonePe, Paytm, GPay), and deposit minimum ₹100 to activate your welcome bonus.",
    },
  ],
};

// 7. HowTo Login Schema (Google Rich Card for Login queries)
const howToLoginSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Login to Veer Game (Veer Games Login Kaise Kare)",
  description:
    "Quick tutorial for logging into your Veer Game account on mobile web or Android APK v2.1.",
  totalTime: "PT1M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Navigate to Veer Game Login Portal",
      text: "Open veergames1.com or launch the Veer Game APK on your Android smartphone.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Enter Registered Mobile Number",
      text: "Input your 10-digit phone number linked to invite code 69548120159.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Enter Password and Submit",
      text: "Enter your account password and tap 'Log In'. Enable biometrics for 1-tap instant access.",
    },
  ],
};

// 8. Speakable Schema (Google Assistant & Voice Search Optimization)
const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.url}/#webpage`,
  name: "Veer Games (Veer Game) Official Website 2026",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [
      ".hero-desc",
      ".vg-section-desc",
      ".quick-answer-card",
      ".faq-answer",
    ],
  },
  url: siteConfig.url,
};

// 9. Comprehensive FAQ Schema (Targeting High-Volume English & Hinglish Searches)
const homepageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Veer Game (Veer Games)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veer Games (Veer Game) is India's leading online gaming platform featuring Wingo Colour Prediction, Aviator Crash, K3 Lottery, 5D Lottery, Slots, and PvP card games with instant ₹100 UPI deposits and rapid bank withdrawals.",
      },
    },
    {
      "@type": "Question",
      name: "What is the official Veer Game invite code for 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The official Veer Game invite code is 69548120159. Entering this code during registration unlocks up to ₹100 welcome bonus, minimum ₹100 deposit, priority 8-15 minute withdrawals, and agent daily salary eligibility.",
      },
    },
    {
      "@type": "Question",
      name: "How to register on Veer Game (Veer Game me register kaise kare)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To register on Veer Game, visit the official portal veergames1.com or direct cashier veergame14.com, enter your 10-digit mobile number, set a password, and enter invite code 69548120159. Your account activates in under 60 seconds.",
      },
    },
    {
      "@type": "Question",
      name: "How to login to Veer Game (Veer Games login kaise kare)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To log in to Veer Game, visit veergames1.com or open the Android APK, enter your registered 10-digit phone number and password, and tap 'Login'. If you forgot your password, tap 'Forgot Password' to reset it via SMS OTP.",
      },
    },
    {
      "@type": "Question",
      name: "How to download the official Veer Game APK v2.1?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can download the authentic Veer Game APK v2.1 (12.4 MB) directly from veergames1.com. It is 100% virus-free, tested on Play Protect, and compatible with all Android 5.0+ smartphones.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum deposit and minimum withdrawal on Veer Game?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum deposit on Veer Game is only ₹100 via PhonePe, Google Pay, Paytm, or UPI. The minimum withdrawal is ₹110, credited directly to your bank account or UPI within 8 to 15 minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Is Veer Game real or fake? Does it give real withdrawal proof?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veer Game is 100% verified real and legitimate. It uses certified Provably Fair RNG algorithms for all game outcomes and processes thousands of daily withdrawals with real-time bank IMPS transaction receipts.",
      },
    },
    {
      "@type": "Question",
      name: "How to play and win Wingo colour prediction on Veer Game?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Wingo, players predict whether the next drawn number will be Green (1,3,7,9), Red (2,4,6,8), or Violet (0,5). Using disciplined bankroll management such as the 3X investment plan and following trends in the history chart yields consistent success.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Veer Game Agent daily salary and referral program work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Veer Game agents earn multi-tier turnover commissions on every bet placed by referred members, plus fixed daily salaries ranging from ₹300 up to ₹50,000+ per day credited every midnight without wagering requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What is the official Telegram channel for Veer Game signals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The official Veer Game Telegram channel is https://t.me/+SQ2smTBoOV82ZjY9. Join to receive daily 90%+ accurate Wingo prediction signals, exclusive gift codes, and platform maintenance updates.",
      },
    },
  ],
};

// 10. SiteNavigationElement Schema (for Google Sitelinks)
const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Veer Game Sitelinks Navigation",
  description: "Primary navigational sitelinks for Veer Game official portal",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "Veer Game Login",
      description: "Secure account login for registered players",
      url: `${siteConfig.url}/login`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Veer Game Register",
      description: "Official registration portal with invite code 69548120159",
      url: "https://www.veergame14.com/#/register?invitationCode=69548120159",
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Veer Game APK Download",
      description: "Download official 12.4MB Android APK v2.1 with sub-20ms latency",
      url: `${siteConfig.url}/download`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "Popular Games",
      description: "Explore Wingo Colour Prediction, Aviator Crash, K3, and 5D Lottery",
      url: `${siteConfig.url}/#games`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 5,
      name: "Wingo Strategy Guide",
      description: "Winning formulas, 3X investment plan, and period trend analysis",
      url: `${siteConfig.url}/blog/wingo-colour-prediction-tricks-veer-game`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 6,
      name: "Aviator Crash Tricks",
      description: "Auto-cashout multiplier strategies and Provably Fair seed signals",
      url: `${siteConfig.url}/blog/veer-game-aviator-game-tricks-signals-strategy`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 7,
      name: "UPI Deposit & Withdrawal",
      description: "Instant ₹100 recharge via PhonePe/Paytm/GPay and 8-15 min bank payouts",
      url: `${siteConfig.url}/blog/veer-game-deposit-withdrawal-methods-upi-limits`,
    },
    {
      "@type": "SiteNavigationElement",
      position: 8,
      name: "Official Blog Hub",
      description: "Browse verified tutorials, platform reviews, and agent daily salary charts",
      url: `${siteConfig.url}/blog`,
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
    howToLoginSchema,
    speakableSchema,
    homepageFaqSchema,
    siteNavigationSchema,
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
