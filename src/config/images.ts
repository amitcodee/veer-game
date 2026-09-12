/**
 * Centralized Image Configuration for Veer Game
 *
 * This file contains all image URLs used throughout the site.
 * Uses external placeholder services for professional-looking images:
 * - picsum.photos for general images
 * - ui-avatars.com for avatars/team photos
 * - placehold.co for specific sized placeholders
 */

// Helper function to generate Picsum URLs with specific IDs for consistency
const picsum = (id: number, width: number, height: number) =>
  `https://picsum.photos/id/${id}/${width}/${height}`;

// Helper function to generate UI Avatars
const avatar = (name: string, size: number = 200) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=${size}&background=7c3aed&color=fff&bold=true&format=png`;

// Helper function for placeholder.co
const placeholder = (width: number, height: number, text: string, bgColor: string = '7c3aed', textColor: string = 'ffffff') =>
  `https://placehold.co/${width}x${height}/${bgColor}/${textColor}?text=${encodeURIComponent(text)}`;

// Game images with gaming-themed placeholders
export const gameImages = {
  colorPrediction: {
    thumbnail: picsum(206, 400, 300), // Colorful abstract
    banner: picsum(206, 800, 400),
    icon: "/images/games/color-prediction-icon.svg",
    alt: "Color Prediction Game - Predict colors and win rewards",
  },
  diceGames: {
    thumbnail: picsum(534, 400, 300), // Dice/gaming themed
    banner: picsum(534, 800, 400),
    icon: "/images/games/dice-icon.svg",
    alt: "Dice Games - Roll the dice and test your luck",
  },
  slots: {
    thumbnail: picsum(250, 400, 300), // Casino/slots themed
    banner: picsum(250, 800, 400),
    icon: "/images/games/slots-icon.svg",
    alt: "Slots - Spin the reels for jackpots",
  },
  strategyGames: {
    thumbnail: picsum(1003, 400, 300), // Strategy/thinking
    banner: picsum(1003, 800, 400),
    icon: "/images/games/strategy-icon.svg",
    alt: "Strategy Games - Outsmart your opponents",
  },
  aviator: {
    thumbnail: picsum(146, 400, 300), // Sky/flight themed
    banner: picsum(146, 800, 400),
    icon: "/images/games/aviator-icon.svg",
    alt: "Aviator - Ride the wave and cash out",
  },
  spinWin: {
    thumbnail: picsum(186, 400, 300), // Spinning/circular
    banner: picsum(186, 800, 400),
    icon: "/images/games/spin-icon.svg",
    alt: "Spin and Win - Daily prizes and bonuses",
  },
};

// Game category images
export const categoryImages = {
  prediction: picsum(206, 200, 200),
  diceCards: picsum(534, 200, 200),
  slots: picsum(250, 200, 200),
  crashGames: picsum(146, 200, 200),
  strategy: picsum(1003, 200, 200),
  spinGames: picsum(186, 200, 200),
  sports: picsum(54, 200, 200),
  premium: picsum(238, 200, 200),
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
  // Individual team members for enhanced about page
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
    thumbnail: picsum(206, 600, 400),
    featured: picsum(206, 1200, 600),
    alt: "Color Prediction Strategy Guide",
  },
  beginnersGuide: {
    thumbnail: picsum(1073, 600, 400),
    featured: picsum(1073, 1200, 600),
    alt: "Beginner's Guide to Veer Game",
  },
  topGames: {
    thumbnail: picsum(96, 600, 400),
    featured: picsum(96, 1200, 600),
    alt: "Top Games to Play This Month",
  },
  secureGaming: {
    thumbnail: picsum(60, 600, 400),
    featured: picsum(60, 1200, 600),
    alt: "Secure Gaming Tips",
  },
  referralProgram: {
    thumbnail: picsum(64, 600, 400),
    featured: picsum(64, 1200, 600),
    alt: "Referral Program Guide",
  },
  aviatorStrategies: {
    thumbnail: picsum(146, 600, 400),
    featured: picsum(146, 1200, 600),
    alt: "Aviator Game Strategies",
  },
};

// Promotion images
export const promotionImages = {
  welcomeBonus: {
    banner: picsum(238, 800, 400),
    thumbnail: picsum(238, 400, 300),
    alt: "Welcome Bonus - Get 21 rupees free on signup",
  },
  depositBonus: {
    banner: picsum(96, 800, 400),
    thumbnail: picsum(96, 400, 300),
    alt: "100% Deposit Bonus - Double your first deposit",
  },
  referEarn: {
    banner: picsum(64, 800, 400),
    thumbnail: picsum(64, 400, 300),
    alt: "Refer and Earn - Get 500 rupees per referral",
  },
  dailyRewards: {
    banner: picsum(170, 800, 400),
    thumbnail: picsum(170, 400, 300),
    alt: "Daily Rewards - Win up to 10000 rupees daily",
  },
  weeklyTournament: {
    banner: picsum(20, 800, 400),
    thumbnail: picsum(20, 400, 300),
    alt: "Weekly Tournament - Compete for big prizes",
  },
  vipRewards: {
    banner: picsum(248, 800, 400),
    thumbnail: picsum(248, 400, 300),
    alt: "VIP Rewards - Exclusive benefits for top players",
  },
};

// Hero section images
export const heroImages = {
  phoneMockup: picsum(306, 400, 800),
  backgroundPattern: picsum(281, 1920, 1080),
  appScreenshot: picsum(3, 400, 700),
  alt: {
    phoneMockup: "Veer Game Mobile App Preview",
    backgroundPattern: "Gaming Background Pattern",
    appScreenshot: "Veer Game App Screenshot",
  },
};

// Icon images (for features, benefits, etc.)
export const iconImages = {
  security: "/images/icons/security.svg",
  fastPayouts: "/images/icons/fast-payouts.svg",
  support: "/images/icons/support.svg",
  fairPlay: "/images/icons/fair-play.svg",
  games: "/images/icons/games.svg",
  rewards: "/images/icons/rewards.svg",
};

// Trust badges and certifications
export const trustImages = {
  ssl: "/images/trust/ssl-secure.svg",
  rng: "/images/trust/rng-certified.svg",
  payment: "/images/trust/secure-payment.svg",
  responsible: "/images/trust/responsible-gaming.svg",
};

// General/Miscellaneous images
export const miscImages = {
  aboutHero: picsum(1029, 1200, 600),
  contactHero: picsum(497, 1200, 600),
  faqHero: picsum(119, 1200, 600),
  gamesHero: picsum(96, 1200, 600),
  promotionsHero: picsum(238, 1200, 600),
  blogHero: picsum(1073, 1200, 600),
  notFound: picsum(219, 800, 600),
  error: picsum(669, 800, 600),
};

// Default placeholder generator for dynamic content
export const getPlaceholder = (
  width: number,
  height: number,
  text: string = "Veer Game"
) => placeholder(width, height, text);

// Avatar generator for user-generated content
export const getUserAvatar = (name: string, size: number = 80) => avatar(name, size);

// Export all configurations
export default {
  games: gameImages,
  categories: categoryImages,
  team: teamImages,
  blog: blogImages,
  promotions: promotionImages,
  hero: heroImages,
  icons: iconImages,
  trust: trustImages,
  misc: miscImages,
  getPlaceholder,
  getUserAvatar,
};
