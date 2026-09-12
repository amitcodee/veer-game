/**
 * Centralized Image Configuration for Veer Game
 * Uses authentic local screenshots and promotional assets from /images/imgs/
 */

export const localImgs = {
  heroBanner: "/images/imgs/veergame-1024x683.jpeg",
  appLandscape: "/images/imgs/veer-game-app-1-1024x683.jpeg",
  appMobileScreen: "/images/imgs/veer-game-app-465x1024.jpeg",
  loginScreen: "/images/imgs/veer-game-login-573x1024.jpeg",
  salaryChart: "/images/imgs/veer-game-salary-1024x936.jpeg",
  walletAudit: "/images/imgs/veer-493x1024.jpeg",
  squareBadge: "/images/imgs/veer-game-300x300.jpeg",
  logo: "/images/logo/logo.png",
};

// Helper function to generate UI Avatars
const avatar = (name: string, size: number = 200) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=${size}&background=ff5d43&color=fff&bold=true&format=png`;

// Game images with local authentic assets
export const gameImages = {
  colorPrediction: {
    thumbnail: localImgs.heroBanner,
    banner: localImgs.heroBanner,
    icon: "/images/games/color-prediction-icon.svg",
    alt: "Color Prediction Game - Predict colors and win rewards",
  },
  diceGames: {
    thumbnail: localImgs.appLandscape,
    banner: localImgs.appLandscape,
    icon: "/images/games/dice-icon.svg",
    alt: "Dice Games - Roll the dice and test your luck",
  },
  slots: {
    thumbnail: localImgs.squareBadge,
    banner: localImgs.heroBanner,
    icon: "/images/games/slots-icon.svg",
    alt: "Slots - Spin the reels for jackpots",
  },
  strategyGames: {
    thumbnail: localImgs.appMobileScreen,
    banner: localImgs.appLandscape,
    icon: "/images/games/strategy-icon.svg",
    alt: "Strategy Games - Outsmart your opponents",
  },
  aviator: {
    thumbnail: localImgs.appLandscape,
    banner: localImgs.heroBanner,
    icon: "/images/games/aviator-icon.svg",
    alt: "Aviator - Ride the wave and cash out",
  },
  spinWin: {
    thumbnail: localImgs.squareBadge,
    banner: localImgs.appLandscape,
    icon: "/images/games/spin-icon.svg",
    alt: "Spin and Win - Daily prizes and bonuses",
  },
};

// Game category images
export const categoryImages = {
  prediction: localImgs.heroBanner,
  diceCards: localImgs.appLandscape,
  slots: localImgs.squareBadge,
  crashGames: localImgs.appMobileScreen,
  strategy: localImgs.loginScreen,
  spinGames: localImgs.squareBadge,
  sports: localImgs.appLandscape,
  premium: localImgs.salaryChart,
};

// Team member images
export const teamImages = {
  securityTeam: {
    photo: avatar("ST", 200),
    alt: "Veer Game Security Team - Data Protection Experts",
  },
  gameDevelopers: {
    photo: avatar("GD", 200),
    alt: "Veer Game Development Team - Fair Play Innovators",
  },
  supportTeam: {
    photo: avatar("CS", 200),
    alt: "Veer Game Support Team - 24/7 Customer Assistance",
  },
  members: [
    { name: "Security Team", photo: avatar("Security", 200), role: "Data Protection & Encryption" },
    { name: "Game Developers", photo: avatar("Developers", 200), role: "Fair Play & Innovation" },
    { name: "Support Team", photo: avatar("Support", 200), role: "24/7 Customer Assistance" },
    { name: "QA Team", photo: avatar("QA", 200), role: "Quality Assurance" },
    { name: "Finance Team", photo: avatar("Finance", 200), role: "Fast & Secure Payments" },
    { name: "Marketing Team", photo: avatar("Marketing", 200), role: "Promotions & Rewards" },
  ],
};

// Blog post images
export const blogImages = {
  colorPredictionStrategy: {
    thumbnail: localImgs.heroBanner,
    featured: localImgs.heroBanner,
    alt: "Wingo Color Prediction Strategy Guide",
  },
  beginnersGuide: {
    thumbnail: localImgs.loginScreen,
    featured: localImgs.loginScreen,
    alt: "Veer Game Login and Registration Guide",
  },
  apkDownload: {
    thumbnail: localImgs.appLandscape,
    featured: localImgs.appLandscape,
    alt: "Veer Game Android APK v2.1 Download",
  },
  secureGaming: {
    thumbnail: localImgs.walletAudit,
    featured: localImgs.walletAudit,
    alt: "Veer Game Real or Fake Audit & Payout Proof",
  },
  referralProgram: {
    thumbnail: localImgs.salaryChart,
    featured: localImgs.salaryChart,
    alt: "Veer Game Invite Code 69548120159 & Agent Daily Salary",
  },
  aviatorStrategies: {
    thumbnail: localImgs.appLandscape,
    featured: localImgs.appLandscape,
    alt: "Aviator Game Strategies",
  },
};

// Promotion images
export const promotionImages = {
  welcomeBonus: {
    banner: localImgs.heroBanner,
    thumbnail: localImgs.squareBadge,
    alt: "Welcome Bonus - Get up to ₹100 free on signup",
  },
  dailyCheckin: {
    banner: localImgs.appLandscape,
    thumbnail: localImgs.squareBadge,
    alt: "Daily Check-in Bonus",
  },
  inviteEarn: {
    banner: localImgs.salaryChart,
    thumbnail: localImgs.salaryChart,
    alt: "Invite & Earn - Daily Agent Salary",
  },
  vipRewards: {
    banner: localImgs.heroBanner,
    thumbnail: localImgs.squareBadge,
    alt: "VIP Rewards Program",
  },
  rechargeBonus: {
    banner: localImgs.walletAudit,
    thumbnail: localImgs.walletAudit,
    alt: "Recharge Bonus - Extra rewards on UPI deposits",
  },
  cashback: {
    banner: localImgs.appLandscape,
    thumbnail: localImgs.squareBadge,
    alt: "Cashback - Real-time turnover rebate",
  },
};

// App download section images
export const appImages = {
  phoneMockup: localImgs.appMobileScreen,
  backgroundPattern: localImgs.heroBanner,
  appScreenshot: localImgs.appLandscape,
  qrCode: "/images/qr-code.png",
  badges: {
    googlePlay: "/images/badges/google-play-badge.svg",
    appStore: "/images/badges/app-store-badge.svg",
    directApk: "/images/badges/direct-apk-badge.svg",
  },
};

// Trust and security badges
export const trustBadges = [
  {
    icon: "/images/badges/ssl-secure.svg",
    label: "256-Bit SSL Secured",
    alt: "SSL Secured Encryption",
  },
  {
    icon: "/images/badges/fair-play.svg",
    label: "Provably Fair RNG",
    alt: "Fair Play Certified",
  },
  {
    icon: "/images/badges/instant-payout.svg",
    label: "Instant UPI Payouts",
    alt: "Instant UPI & Bank Withdrawals",
  },
  {
    icon: "/images/badges/support-247.svg",
    label: "24/7 Telegram Support",
    alt: "24/7 Customer Support",
  },
];

// Page hero background images
export const heroBackgrounds = {
  homeHero: localImgs.heroBanner,
  aboutHero: localImgs.heroBanner,
  contactHero: localImgs.appLandscape,
  faqHero: localImgs.loginScreen,
  gamesHero: localImgs.heroBanner,
  promotionsHero: localImgs.salaryChart,
  blogHero: localImgs.heroBanner,
  notFound: localImgs.squareBadge,
  error: localImgs.squareBadge,
};

// Export all as default config object
const imagesConfig = {
  localImgs,
  gameImages,
  categoryImages,
  teamImages,
  blogImages,
  promotionImages,
  appImages,
  trustBadges,
  heroBackgrounds,
};

export default imagesConfig;
