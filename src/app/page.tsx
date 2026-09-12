import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import GamesCategoryTabs from "@/components/home/GamesCategoryTabs";
import RegisterButton from "@/components/shared/RegisterButton";

export const metadata: Metadata = {
  title: "Veer Games (Veer Game) Official Website 2026 | Login, Register & APK Download (Code: 69548120159)",
  description:
    "Veer Games (Veer Game) Official Portal 2026. Register with invite code 69548120159 to claim ₹100 welcome bonus. Play Wingo Colour Prediction, Aviator, K3, 5D. Min deposit ₹100, fast UPI withdrawals & 12MB APK download.",
  keywords: [
    "Veer Games",
    "Veer Game",
    "Veer Games official website",
    "Veer Game official website",
    "Veer Games login",
    "Veer Game login",
    "Veer Games register",
    "Veer Game register",
    "Veer Games app download",
    "Veer Game app download",
    "Veer Games APK download",
    "Veer Game APK download",
    "Veer Games invite code 69548120159",
    "Veer Games referral code",
    "Wingo colour prediction",
    "Veer Games real or fake",
    "Veer Games minimum deposit 100",
    "Veer Games telegram channel",
    "Veer Games login link",
    "Veer Games sign up",
    "Veer Games agent salary",
    "Veer Games 2026",
    "veergames1.com",
  ],
  alternates: {
    canonical: "/",
  },
};

const games = [
  {
    icon: "fa-bullseye",
    title: "Win Go - Colour Prediction",
    shortName: "Win Go",
    category: "Flagship Game",
    desc: "Veer Game's top-rated colour prediction game. Pick Green, Red, or Violet across 30s to 5-minute rounds for instant payouts.",
    rounds: "30s · 1m · 3m · 5m",
    highlight: "98.2% Payout Rate",
    tone: "coral",
    badge: "HOT",
  },
  {
    icon: "fa-paper-plane",
    title: "Aviator Crash Game",
    shortName: "Aviator",
    category: "Live Multiplayer",
    desc: "Watch the multiplier soar as the lucky plane climbs. Cash out before it flies away to lock in up to 100x+ returns.",
    rounds: "Real-Time Draw",
    highlight: "Up to 100x Payout",
    tone: "amber",
    badge: "LIVE",
  },
  {
    icon: "fa-dice",
    title: "K3 Lottery",
    shortName: "K3 Draw",
    category: "Dice Draw",
    desc: "Fast-paced dice prediction game where three dice determine the result. Predict totals, individual numbers, or odd/even.",
    rounds: "1m · 3m · 5m · 10m",
    highlight: "Triple Dice Thrill",
    tone: "violet",
    badge: "POPULAR",
  },
  {
    icon: "fa-hashtag",
    title: "5D Lottery",
    shortName: "5D Lotto",
    category: "Number Matrix",
    desc: "Five numbers drawn every round giving extensive combination options and strategic flexibility for high potential multipliers.",
    rounds: "1m · 3m · 5m",
    highlight: "High Multipliers",
    tone: "blue",
    badge: "",
  },
  {
    icon: "fa-coins",
    title: "Slots & Casino Games",
    shortName: "Slots",
    category: "Jili & JDB Jackpots",
    desc: "Top-tier video slots with dynamic themes, wild multipliers, free spins, and jackpot drops by leading international studios.",
    rounds: "Instant Play",
    highlight: "Mega Jackpot Drops",
    tone: "teal",
    badge: "NEW",
  },
  {
    icon: "fa-circle-dot",
    title: "Plinko Game",
    shortName: "Plinko",
    category: "Physics Mini-Game",
    desc: "Drop the ball through the peg pyramid and watch it bounce towards high multiplier slots at the base. Pure entertainment.",
    rounds: "Instant Rounds",
    highlight: "Adjustable Rows",
    tone: "pink",
    badge: "",
  },
  {
    icon: "fa-arrow-trend-up",
    title: "Limbo Game",
    shortName: "Limbo",
    category: "Target Multiplier",
    desc: "Set your target multiplier and see if the draw crosses above it. A simple yet exhilarating game with instant round conclusions.",
    rounds: "Instant Play",
    highlight: "Up to 1,000x Win",
    tone: "slate",
    badge: "",
  },
  {
    icon: "fa-diamond",
    title: "Poker & Card Games",
    shortName: "Poker",
    category: "Skill-Based Table",
    desc: "Enjoy classic card-based games and casual poker rooms. Test your prediction and strategy against players across India.",
    rounds: "Live PvP Tables",
    highlight: "Skill-Based Payouts",
    tone: "coral",
    badge: "SKILL",
  },
];

const bonuses = [
  {
    num: "01",
    title: "Daily Login Streak Rewards",
    desc: "Veer Game rewards consistency. Simply signing into your account every day unlocks daily bonus credits that increase exponentially over a 7-day streak.",
    tag: "Daily Check-In",
    highlight: "7-Day Progressive Streak Calendar",
    icon: "fa-calendar-check",
    tone: "blue",
  },
  {
    num: "02",
    title: "Referral Commission & Agent Salary",
    desc: "Share your referral link with friends and followers. Earn lifetime multi-tier commissions on member activity plus daily agent salaries reaching up to ₹50,000/day.",
    tag: "Lifetime Commission",
    highlight: "Up to ₹50,000 Daily Salary",
    icon: "fa-users-line",
    tone: "violet",
  },
  {
    num: "03",
    title: "Real-Time Rebate Cashback",
    desc: "Receive real-time cashback calculated on your total betting turnover across all game categories, regardless of whether individual rounds win or lose.",
    tag: "Instant Rebate",
    highlight: "0.6% – 1.2% Real-Time Turnover Refund",
    icon: "fa-percent",
    tone: "teal",
  },
  {
    num: "04",
    title: "Win Streak Multiplier Event",
    desc: "Predict consecutive correct outcomes in Wingo or Lottery draws to unlock scaling Win Streak bonuses credited directly into your playable balance.",
    tag: "Win Streak",
    highlight: "Scaling Boost on 3+ Consecutive Wins",
    icon: "fa-trophy",
    tone: "pink",
  },
  {
    num: "05",
    title: "VIP Loyalty Club Privileges",
    desc: "Climb through 10 VIP tier levels with active platform gameplay. Each tier unlocks higher daily withdrawal limits, dedicated VIP support, and birthday gifts.",
    tag: "VIP Club",
    highlight: "VIP 1 to VIP 10 Tier Privileges",
    icon: "fa-crown",
    tone: "amber",
  },
  {
    num: "06",
    title: "Mystery Daily Gift Codes",
    desc: "Claim exclusive time-limited Gift Codes published daily on our official Telegram channel. Redeem them inside your profile for instant free cash rewards.",
    tag: "Free Gift Drops",
    highlight: "Daily Codes via Official Telegram",
    icon: "fa-ticket-simple",
    tone: "coral",
  },
];

const paymentGateways = [
  { name: "UPI Instant", note: "Zero Fee", icon: "fa-mobile-screen-button" },
  { name: "PhonePe", note: "Instant UPI", icon: "fa-wallet" },
  { name: "Google Pay", note: "Direct Bank", icon: "fa-shield-halved" },
  { name: "Paytm", note: "UPI & Wallet", icon: "fa-qrcode" },
  { name: "Net Banking", note: "All Banks", icon: "fa-building-columns" },
  { name: "IMPS / NEFT", note: "Fast Transfer", icon: "fa-money-bill-transfer" },
];

const whyPopular = [
  {
    icon: "fa-bolt",
    badge: "2-Min Setup",
    title: "Quick and Simple Registration",
    desc: "The Register process takes only a few minutes. Just a mobile number and password — no complicated documents or lengthy verification.",
  },
  {
    icon: "fa-mobile-screen",
    badge: "All Android Devices",
    title: "Works on All Android Smartphones",
    desc: "The Veer Game App is designed to run smoothly on all types of Android phones — including budget and mid-range models with limited RAM and storage.",
  },
  {
    icon: "fa-indian-rupee-sign",
    badge: "Zero Convenience Fee",
    title: "Familiar Indian Payment Methods",
    desc: "Since most Indian users already use GPay, PhonePe, or Paytm every day, depositing and withdrawing on Veer Game feels natural and convenient.",
  },
  {
    icon: "fa-layer-group",
    badge: "8+ Game Types",
    title: "Everything in One Single App",
    desc: "Instead of installing multiple gaming apps, Veer Game gives access to colour prediction, lottery games, Aviator, Slots, Plinko, Limbo and Poker all in one place.",
  },
  {
    icon: "fa-clock-rotate-left",
    badge: "Fast Turnaround",
    title: "Fast Withdrawal Processing",
    desc: "Fast and reliable withdrawals build trust, and Veer Game delivers on this. UPI withdrawals in particular are processed quickly, usually within a few hours.",
  },
  {
    icon: "fa-award",
    badge: "Daily & VIP",
    title: "Generous Reward Programs",
    desc: "Welcome bonus, daily login rewards, referral commissions, VIP bonuses, win streak rewards and real-time cashback keep players engaged and rewarded.",
  },
];

const trustSignals = [
  {
    icon: "fa-lock",
    badge: "256-Bit SSL",
    title: "Secure Platform",
    desc: "All accounts and transactions protected with industry-standard encryption and verified payment gateways.",
  },
  {
    icon: "fa-mobile-screen",
    badge: "12MB APK",
    title: "Mobile Optimised",
    desc: "Veer Game App is fully optimised for Android smartphones of all sizes, price ranges, and performance levels.",
  },
  {
    icon: "fa-rotate",
    badge: "2026 Edition",
    title: "Regularly Updated",
    desc: "Games, features, bonus programs, and payment options are actively reviewed and updated throughout 2026.",
  },
  {
    icon: "fa-hand-holding-heart",
    badge: "18+ Only",
    title: "Responsible Gaming",
    desc: "We strongly promote safe and responsible gameplay. Veer Game is strictly available for users 18 years and above.",
  },
];

const alternatives = [
  {
    name: "Daman Game",
    category: "Colour & Lottery",
    desc: "Daman Game is a popular platform where users can explore games such as colour prediction, Wingo, K3, 5D, and other available gaming categories.",
    highlight: "Popular for Wingo",
    icon: "fa-fire",
  },
  {
    name: "Jai Club",
    category: "Multi-Gaming Hub",
    desc: "Jai Club offers multiple gaming categories, including Wingo, K3, 5D, Aviator, Slots, Plinko, and other games depending on current availability.",
    highlight: "Crash & Slots Variety",
    icon: "fa-star",
  },
  {
    name: "YaarWin",
    category: "Casino & Prediction",
    desc: "YaarWin is another online gaming platform with a mobile-friendly interface and various game categories including Wingo, K3, 5D, Aviator, Poker, Slots, Plinko, and Limbo.",
    highlight: "Fast Mobile Web App",
    icon: "fa-gem",
  },
];

const agentSalaries = [
  { tier: "Tier 1", members: "10", deposit: "₹5,000", salary: "₹600" },
  { tier: "Tier 2", members: "25", deposit: "₹10,000", salary: "₹1,300" },
  { tier: "Tier 3", members: "40", deposit: "₹20,000", salary: "₹2,500" },
  { tier: "Tier 4", members: "60", deposit: "₹35,000", salary: "₹4,000" },
  { tier: "Tier 5", members: "80", deposit: "₹60,000", salary: "₹6,000" },
  { tier: "Tier 6", members: "100", deposit: "₹80,000", salary: "₹8,000" },
  { tier: "Tier 7", members: "150", deposit: "₹1,30,000", salary: "₹13,000" },
  { tier: "Tier 8", members: "200", deposit: "₹2,20,000", salary: "₹20,000" },
  { tier: "Tier 9", members: "500", deposit: "₹5,00,000", salary: "₹50,000" },
];

const faqs = [
  ["What is Veer Game?", "Veer Game is an online gaming platform where users can explore available game categories including Wingo, K3, 5D, Aviator, Slots, Plinko, Limbo & Poker, along with account features and wallet management."],
  ["How do I register on Veer Game?", "Visit veergame14.com or veergames1.com, click Register, enter your mobile number, create a password, and complete OTP verification. You can also enter invitation code 69548120159 for a welcome bonus."],
  ["Is Veer Game login secure?", "Yes. Veer Game uses encrypted connections and secure servers to protect all user accounts and personal information."],
  ["What games are available on Veer Game?", "Veer Game offers Wingo colour prediction (30s, 1min, 3min, 5min rounds), K3 Lottery, 5D Lottery, Aviator crash game, Slots & Casino, Plinko, Limbo, and Poker & Card Games."],
  ["What is the minimum withdrawal amount?", "The minimum withdrawal amount on Veer Game is generally Rs.100. Available withdrawal methods include Bank Account and UPI ID."],
  ["How long do withdrawals take to process?", "UPI and digital wallet withdrawals are usually processed within a few hours. Bank account transfers may take up to 24 hours depending on banking processing times."],
  ["How do I use a Veer Game referral code?", "During registration, you will see a field for an invitation or referral code. Enter the code shared by your friend to activate referral rewards for both of you."],
  ["Is Veer Game real or fake?", "Veer Game is a genuine online gaming platform with working registration, multiple verified Indian payment methods, transparent terms, and an active user community with successful withdrawals."],
  ["What payment methods does Veer Game accept?", "Veer Game accepts UPI payments (GPay, PhonePe, Paytm), bank account transfers, and digital wallets for both deposits and withdrawals."],
  ["How do I download the Veer Game APK?", "The Veer Game APK is available for direct download from the official website. The app is currently available for Android devices and is around 12MB in size."],
  ["What is the minimum deposit?", "The minimum deposit on Veer Game is Rs.100 across all verified UPI and banking channels."],
  ["Can I play Veer Game on iPhone?", "Currently, the Veer Game App is available as an Android APK download only. iPhone users can access the full platform through the mobile browser at veergames1.com."],
];

const heroTiles = [
  { icon: "fa-bullseye", title: "Win Go", note: "Colour prediction", tone: "coral", href: "/#games" },
  { icon: "fa-paper-plane", title: "Aviator", note: "Crash game", tone: "blue", href: "/#games" },
  { icon: "fa-dice", title: "K3 Lottery", note: "Dice draws", tone: "violet", href: "/#games" },
  { icon: "fa-coins", title: "Slots", note: "Jili & JDB", tone: "teal", href: "/#games" },
];

const heroStats = [
  { value: "10 Lakh+", label: "Active Players" },
  { value: "₹100", label: "Min Deposit" },
  { value: "₹100", label: "Min Withdrawal" },
  { value: "24/7", label: "Support" },
  { value: "8+", label: "Game Types" },
];

export default function HomePage() {
  return (
    <>
      {/* ===== 1. HERO SECTION ===== */}
      <section className="vg-hero">
        <div className="site-shell hero-inner">
          <Breadcrumbs items={[{ label: "Home", href: "/" }]} tone="dark" />

          <div className="hero-top">
            <div className="hero-content">
              <span className="hero-eyebrow">
                <span className="pulse-dot" aria-hidden="true"></span>
                Official Veer Game Platform 2026
              </span>
              <h1>
                Veer Game - Login, Register, APK Download &amp;{" "}
                <em>Online Gaming Platform in India</em>
              </h1>
              <p>
                <strong>Veer Game</strong> is a secure online gaming platform where
                users can explore a variety of popular games such as{" "}
                <strong>Wingo, K3, 5D, and Aviator</strong>. Users can test their
                skills, play to earn exciting real rewards through skill-based gameplay.
              </p>
              <p>
                In this guide, you&rsquo;ll learn about Veer Game, including step-by-step
                registration, Veer Game Login, APK download, key features, wallet
                management, deposit and withdrawal methods, Gift Codes, and the
                Refer &amp; Earn Program.
              </p>
              <div className="hero-btns">
                <RegisterButton />
                <a
                  href="https://t.me/+SQ2smTBoOV82ZjY9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero btn-hero-telegram"
                >
                  <i className="fab fa-telegram"></i> Telegram Channel
                </a>
                <Link href="/#games" className="btn-hero btn-hero-primary">
                  <i className="fas fa-gamepad"></i> Explore Games
                </Link>
                <a href="#apk" className="btn-hero btn-hero-secondary">
                  <i className="fab fa-android"></i> Download APK (12MB)
                </a>
                <Link href="/#about" className="btn-hero btn-hero-secondary">
                  <i className="fas fa-info-circle"></i> About Us
                </Link>
              </div>
              <div className="invite-perk">
                <i className="fas fa-ticket-alt"></i> Use Official Invite Code:{" "}
                <strong style={{ color: "#ffd75e", letterSpacing: "0.05em" }}>
                  69548120159
                </strong>{" "}
                for ₹100 Welcome Bonus
              </div>
            </div>

            <aside className="hero-panel" aria-label="Featured games">
              <div className="hero-panel-head">
                <b>Today&rsquo;s Picks</b>
                <span className="hero-panel-live">
                  <span className="pulse-dot" aria-hidden="true"></span> LIVE
                </span>
              </div>
              <div className="hero-tiles">
                {heroTiles.map((t) => (
                  <Link
                    href={t.href}
                    className="hero-tile"
                    data-tone={t.tone}
                    key={t.title}
                  >
                    <i className={`fas ${t.icon}`} aria-hidden="true"></i>
                    <span>
                      <b>{t.title}</b>
                      <small>{t.note}</small>
                    </span>
                  </Link>
                ))}
              </div>
              <div className="hero-panel-foot">
                <span>8 game categories available</span>
                <Link href="/#games">View all &rarr;</Link>
              </div>
            </aside>
          </div>

          <div className="hero-highlights">
            {heroStats.map((s) => (
              <div className="highlight-item" key={s.label}>
                <span className="highlight-val">{s.value}</span>
                <span className="highlight-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-meta">
            <span>
              <i className="fas fa-shield-halved"></i> Official Veer Game Platform
            </span>
            <span>
              <i className="fas fa-calendar-day"></i> Last Updated: September 2026
            </span>
            <span>
              <i className="fas fa-users"></i> Trusted by Lakhs of Players in India
            </span>
          </div>
        </div>
      </section>

      {/* ===== 2. PLATFORM OVERVIEW ===== */}
      <section className="vg-section vg-overview vg-section-light" id="overview">
        <div className="site-shell">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-layer-group"></i> Platform Overview
            </span>
            <h2 className="vg-section-title">Overview of Veer Game</h2>
            <p className="vg-section-desc">
              Discover India&apos;s leading online gaming and colour prediction platform with high-speed rounds and secure wallet management.
            </p>
          </div>
          <div className="overview-split">
            <div className="overview-content">
              <p>
                Veer Game is a modern online gaming platform where users can explore
                a variety of interactive and prediction-based games such as Wingo,
                K3, 5D, Slots, Plinko, Limbo, and Aviator, depending on current
                platform availability.
              </p>
              <p>
                Whether you enjoy colour prediction, lottery-style numbers, a crash
                game like Aviator, or just want to explore casual mini games, Veer
                Game keeps everything organised in one simple interface.
              </p>
              <p>
                After you complete the registration process, you get direct access
                to your game wallet, bonus section, referral program, and all
                available games. Veer Game also promotes{" "}
                <Link href="/#responsible">responsible gaming</Link> and has a
                dedicated support team available throughout the day.
              </p>
              <div className="overview-highlights-pills">
                <div className="overview-pill">
                  <i className="fas fa-circle-check"></i> 100% Verified Platform
                </div>
                <div className="overview-pill">
                  <i className="fas fa-bolt"></i> Instant UPI Payouts
                </div>
                <div className="overview-pill">
                  <i className="fas fa-shield-halved"></i> 256-Bit SSL Security
                </div>
                <div className="overview-pill">
                  <i className="fab fa-android"></i> 12MB Android APK
                </div>
              </div>
            </div>
            <div className="overview-image">
              <div className="overview-image-card">
                <Image
                  src="/images/imgs/veer-game-300x300.jpeg"
                  alt="Veer Game - Online Gaming Platform"
                  width={300}
                  height={300}
                  className="section-img section-img-square"
                />
                <div className="image-floating-badge">
                  <i className="fas fa-certificate"></i> Official 2026 Platform
                </div>
              </div>
            </div>
          </div>
          <div className="overview-facts">
            <h3>Veer Game - Quick Platform Facts</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Details</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>App Name</td>
                    <td><strong>Veer Game</strong></td>
                    <td><span className="status-pill status-pill-green">Verified</span></td>
                  </tr>
                  <tr>
                    <td>Latest Version</td>
                    <td>2.1 (September 2026 Release)</td>
                    <td><span className="status-pill status-pill-green">Latest</span></td>
                  </tr>
                  <tr>
                    <td>Platform Type</td>
                    <td>Wingo Colour Prediction, K3, 5D, Aviator &amp; Slots</td>
                    <td><span className="status-pill status-pill-green">8+ Modes</span></td>
                  </tr>
                  <tr>
                    <td>App Size</td>
                    <td>12MB (Ultra-Lightweight)</td>
                    <td><span className="status-pill status-pill-green">Lite</span></td>
                  </tr>
                  <tr>
                    <td>Official Website</td>
                    <td>veergames1.com</td>
                    <td><span className="status-pill status-pill-green">Official</span></td>
                  </tr>
                  <tr>
                    <td>Invite Code</td>
                    <td><strong>69548120159</strong></td>
                    <td><span className="status-pill status-pill-coral">Active</span></td>
                  </tr>
                  <tr>
                    <td>Welcome Bonus</td>
                    <td>Up to ₹100 for New Registrations</td>
                    <td><span className="status-pill status-pill-green">Instant</span></td>
                  </tr>
                  <tr>
                    <td>Minimum Deposit</td>
                    <td>₹100 (Instant UPI / Bank)</td>
                    <td><span className="status-pill status-pill-green">Low Entry</span></td>
                  </tr>
                  <tr>
                    <td>Minimum Withdrawal</td>
                    <td>₹100 (Direct Bank / UPI)</td>
                    <td><span className="status-pill status-pill-green">Fast Payout</span></td>
                  </tr>
                  <tr>
                    <td>Supported Payments</td>
                    <td>UPI, PhonePe, Paytm, GPay, Bank Transfer</td>
                    <td><span className="status-pill status-pill-green">Instant 0%</span></td>
                  </tr>
                  <tr>
                    <td>Customer Support</td>
                    <td>24/7 Live Desk Support Available</td>
                    <td><span className="status-pill status-pill-green">Active</span></td>
                  </tr>
                  <tr>
                    <td>Age Requirement</td>
                    <td>18+ Years Only</td>
                    <td><span className="status-pill status-pill-coral">Strict</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 3. GAMES SECTION ===== */}
      <section className="vg-section vg-games vg-section-dark" id="games">
        <div className="site-shell">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-gamepad" aria-hidden="true"></i> Popular Games
            </span>
            <h2 className="vg-section-title">Games Available on Veer Game</h2>
            <p className="vg-section-desc">
              From colour prediction to lottery draws, crash games and mini games
              — we have the perfect game for every type of player.
            </p>
          </div>

          <div className="games-category-pills" role="tablist" aria-label="Game categories">
            <span className="cat-pill active"><i className="fas fa-border-all" aria-hidden="true"></i> All Games (8)</span>
            <span className="cat-pill"><i className="fas fa-bullseye" aria-hidden="true"></i> Colour Prediction</span>
            <span className="cat-pill"><i className="fas fa-paper-plane" aria-hidden="true"></i> Aviator Crash</span>
            <span className="cat-pill"><i className="fas fa-dice" aria-hidden="true"></i> Lottery &amp; Dice</span>
            <span className="cat-pill"><i className="fas fa-coins" aria-hidden="true"></i> Slots &amp; Casino</span>
            <span className="cat-pill"><i className="fas fa-diamond" aria-hidden="true"></i> Cards &amp; Mini</span>
          </div>
          <GamesCategoryTabs />

          <div className="games-grid">
            {games.map((g) => (
              <div className={`game-card game-card-${g.tone}`} key={g.title}>
                <div className="game-card-content">
                  <div className="game-card-top">
                    <div className="game-card-icon">
                      <i className={`fas ${g.icon}`} aria-hidden="true"></i>
                    </div>
                    {g.badge && (
                      <span className={`game-badge badge-${g.badge.toLowerCase()}`}>
                        {g.badge === "LIVE" && <span className="pulse-dot" aria-hidden="true"></span>}
                        {g.badge === "HOT" && <i className="fas fa-fire" aria-hidden="true"></i>}
                        {g.badge === "NEW" && <i className="fas fa-sparkles" aria-hidden="true"></i>}
                        {g.badge === "POPULAR" && <i className="fas fa-star" aria-hidden="true"></i>}
                        {g.badge === "SKILL" && <i className="fas fa-trophy" aria-hidden="true"></i>}
                        {g.badge}
                      </span>
                    )}
                  </div>
                  <div className="game-card-body">
                    <span className="game-card-category">{g.category}</span>
                    <h3 className="game-card-title">{g.title}</h3>
                    <p className="game-card-desc">{g.desc}</p>
                  </div>
                </div>

                <div className="game-card-bottom">
                  <div className="game-card-meta-row" style={{ marginBottom: 0 }}>
                    <span className="game-meta-chip">
                      <i className="fas fa-clock" aria-hidden="true"></i>
                      {g.rounds}
                    </span>
                    <span className="game-meta-chip">
                      <i className="fas fa-bolt" aria-hidden="true"></i>
                      {g.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="games-cta-strip">
            <div className="games-cta-text">
              <i className="fas fa-gift" aria-hidden="true"></i>
              <div>
                <b>New to Veer Game? Claim Up to ₹100 Welcome Bonus!</b>
                <p>
                  Register in less than 2 minutes using invitation code <strong>69548120159</strong> to start playing any of our 8+ popular game categories.
                </p>
              </div>
            </div>
            <div className="games-cta-actions">
              <RegisterButton>
                <i className="fas fa-user-plus" aria-hidden="true"></i> Register to Play
              </RegisterButton>
              <a href="#bonus" className="btn-hero btn-hero-primary">
                <i className="fas fa-tags" aria-hidden="true"></i> View Bonuses
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4. JOIN TELEGRAM CHANNEL ===== */}
      <section className="vg-section vg-telegram vg-section-light" id="telegram">
        <div className="site-shell">
          <div className="vg-section-header">
            <span className="vg-tag vg-tag-telegram">
              <i className="fab fa-telegram"></i> Official Community
            </span>
            <h2 className="vg-section-title">
              Join Veer Game Official Telegram Channel
            </h2>
            <p className="vg-section-desc">
              Connect with India&apos;s fastest growing prediction gaming community. Get instant Wingo signals, daily gift code drops, and VIP promotions.
            </p>
          </div>

          <div className="telegram-card-main">
            <div className="telegram-hero-banner">
              <div className="telegram-badge-row">
                <span className="telegram-live-tag">
                  <span className="pulse-dot"></span> LIVE CHANNEL
                </span>
                <span className="telegram-stat-chip">
                  <i className="fas fa-users"></i> 50,000+ Active Members
                </span>
                <span className="telegram-stat-chip">
                  <i className="fas fa-shield-check"></i> 100% Free &amp; Verified
                </span>
              </div>
              <h3>Exclusive Daily Signals &amp; Free Gift Code Drops</h3>
              <p>
                Our official Telegram channel delivers round-by-round Wingo color predictions, daily morning &amp; evening redeem codes, win-rate strategies, and direct admin announcements.
              </p>
              <div className="telegram-action-group">
                <a
                  href="https://t.me/+SQ2smTBoOV82ZjY9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-telegram-hero"
                >
                  <i className="fab fa-telegram"></i> Join Telegram Channel
                </a>
                <RegisterButton />
              </div>
            </div>

            <div className="telegram-features-grid">
              <div className="telegram-feat-card">
                <div className="telegram-feat-icon icon-gift">
                  <i className="fas fa-ticket-simple"></i>
                </div>
                <h4>Daily Free Gift Codes</h4>
                <p>Morning and evening mystery codes released every single day for instant wallet balance top-ups.</p>
              </div>

              <div className="telegram-feat-card">
                <div className="telegram-feat-icon icon-chart">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4>Accurate Wingo Signals</h4>
                <p>Expert trend analysis and real-time colour prediction calls with detailed parity probability charts.</p>
              </div>

              <div className="telegram-feat-card">
                <div className="telegram-feat-icon icon-bell">
                  <i className="fas fa-bell"></i>
                </div>
                <h4>Instant Bonus Alerts</h4>
                <p>Be the first to participate in weekend deposit matches, cashback promotions, and festival tournaments.</p>
              </div>

              <div className="telegram-feat-card">
                <div className="telegram-feat-icon icon-support">
                  <i className="fas fa-headset"></i>
                </div>
                <h4>Direct Moderator Help</h4>
                <p>Verified platform moderators available round-the-clock for real-time channel assistance and tips.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. FEATURES SECTION ===== */}
      <section className="vg-section vg-features vg-section-light vg-section-soft" id="features">
        <div className="site-shell">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-star"></i> Core Advantages
            </span>
            <h2 className="vg-section-title">Key Features of Veer Game</h2>
            <p className="vg-section-desc">
              Engineered for speed, security, and effortless mobile entertainment across India with seamless UPI integrations.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-mobile-screen"></i></div>
              <span className="feature-badge">12MB Lite App</span>
              <h3>Mobile Optimised</h3>
              <p>Fully optimised for Android smartphones of all screen sizes and budget performance levels.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-shield-halved"></i></div>
              <span className="feature-badge">256-Bit SSL</span>
              <h3>Secure Platform</h3>
              <p>All user accounts, credentials, and transactions protected with industry-standard encryption.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-bolt"></i></div>
              <span className="feature-badge">Instant Payouts</span>
              <h3>Fast Withdrawals</h3>
              <p>Direct UPI withdrawals processed within hours. Direct bank transfers within 24 hours.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-headset"></i></div>
              <span className="feature-badge">24/7 Live Desk</span>
              <h3>Dedicated Support</h3>
              <p>Support team available around the clock to assist with games, recharges, and payouts.</p>
            </div>
          </div>

          <div className="payment-showcase">
            <div className="payment-showcase-header">
              <h3>
                <i className="fas fa-credit-card"></i> Supported Indian Payment Gateways
              </h3>
              <span className="payment-fee-badge">
                <i className="fas fa-check"></i> Zero Convenience Fee
              </span>
            </div>
            <div className="payment-gateways-grid">
              {paymentGateways.map((p) => (
                <div className="gateway-item" key={p.name}>
                  <div className="gateway-icon">
                    <i className={`fas ${p.icon}`}></i>
                  </div>
                  <b>{p.name}</b>
                  <span>{p.note}</span>
                </div>
              ))}
            </div>
            <div className="payment-showcase-foot">
              <span><i className="fas fa-circle-check"></i> Min Deposit: ₹100</span>
              <span><i className="fas fa-circle-check"></i> Min Withdrawal: ₹100</span>
              <span><i className="fas fa-circle-check"></i> 100% RBI &amp; Banking Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. HOW PLATFORM WORKS ===== */}
      <section className="vg-section vg-platform-works vg-section-dark" id="how-it-works">
        <div className="site-shell">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-route"></i> Simple Workflow
            </span>
            <h2 className="vg-section-title">How Veer Game Platform Works</h2>
            <p className="vg-section-desc">
              From account registration to picking your favorite game and cashing out winnings, follow our smooth step-by-step workflow.
            </p>
          </div>
          <div className="guide-split">
            <div className="guide-content">
              <ol className="guide-steps">
                <li>
                  <strong>Create Your Account:</strong> Sign up in under 2 minutes using your active mobile number.
                </li>
                <li>
                  <strong>Verify via OTP:</strong> Confirm your mobile number securely with instant one-time SMS verification.
                </li>
                <li>
                  <strong>Access Game Wallet:</strong> Navigate to your personal wallet and review deposit options starting from ₹100.
                </li>
                <li>
                  <strong>Select from 8+ Categories:</strong> Choose between Colour Prediction (Wingo), K3, 5D, Aviator Crash, or Slots.
                </li>
                <li>
                  <strong>Review Round Rules:</strong> Check game odds, draw timers, and payout tables before placing predictions.
                </li>
                <li>
                  <strong>Place Predictions:</strong> Join available rounds and place your entry before the countdown timer hits zero.
                </li>
                <li>
                  <strong>Instant Draw Results:</strong> Watch transparent round draws announced live right on your screen.
                </li>
                <li>
                  <strong>Automatic Wallet Crediting:</strong> Eligible winnings are immediately credited to your balance in real time.
                </li>
                <li>
                  <strong>Instant 1-Click Withdrawal:</strong> Request payout directly to your bank account or UPI ID starting from ₹100.
                </li>
              </ol>
              <div className="guide-tip">
                <i className="fas fa-circle-exclamation"></i>
                <div>
                  <strong>Important Notice:</strong> Always play responsibly and review the
                  latest platform rules, eligibility requirements, and applicable
                  regulations before participating.
                </div>
              </div>
            </div>
            <div className="guide-image">
              <div className="phone-mock-frame">
                <Image
                  src="/images/imgs/veer-493x1024.jpeg"
                  alt="Veer Game App - Games Dashboard"
                  width={493}
                  height={1024}
                  className="section-img section-img-phone"
                />
                <span className="phone-floating-badge">
                  <span className="pulse-dot"></span> Live Rounds 24/7
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 6. REGISTRATION GUIDE ===== */}
      <section className="vg-section vg-register-guide vg-section-light" id="register">
        <div className="site-shell site-shell-full">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-user-plus"></i> Sign Up Guide
            </span>
            <h2 className="vg-section-title">
              How to Register on Veer Game (Easy Steps)
            </h2>
            <p className="vg-section-desc">
              Getting started on Veer Game is fast, safe, and beginner-friendly. Complete our 2-minute onboarding and unlock your verified welcome rewards.
            </p>
          </div>

          <div className="register-split-modern">
            {/* Left Steps List */}
            <div className="register-steps-list">
              <div className="register-step-item">
                <div className="register-step-num-badge">01</div>
                <div className="register-step-info">
                  <div className="register-step-header">
                    <h4>Visit Official Website</h4>
                    <span className="register-step-time">Instant</span>
                  </div>
                  <p>
                    Open <strong>veergames1.com</strong> on your mobile or desktop browser to ensure you are accessing the verified, secure Veer Game portal.
                  </p>
                </div>
              </div>

              <div className="register-step-item">
                <div className="register-step-num-badge">02</div>
                <div className="register-step-info">
                  <div className="register-step-header">
                    <h4>Click Register</h4>
                    <span className="register-step-time">5 Sec</span>
                  </div>
                  <p>
                    Tap the prominent <strong>Register</strong> button located at the top right of the navigation header to open the onboarding modal.
                  </p>
                </div>
              </div>

              <div className="register-step-item">
                <div className="register-step-num-badge">03</div>
                <div className="register-step-info">
                  <div className="register-step-header">
                    <h4>Enter Mobile &amp; Password</h4>
                    <span className="register-step-time">30 Sec</span>
                  </div>
                  <p>
                    Provide your active 10-digit Indian mobile number and set a strong, memorable password containing alphanumeric characters.
                  </p>
                </div>
              </div>

              <div className="register-step-item">
                <div className="register-step-num-badge">04</div>
                <div className="register-step-info">
                  <div className="register-step-header">
                    <h4>Verify via SMS OTP</h4>
                    <span className="register-step-time">20 Sec</span>
                  </div>
                  <p>
                    Request and type the 6-digit one-time verification passcode delivered to your phone to secure and authenticate your player profile.
                  </p>
                </div>
              </div>

              <div className="register-step-item">
                <div className="register-step-num-badge">05</div>
                <div className="register-step-info">
                  <div className="register-step-header">
                    <h4>Apply Invite Code: 69548120159</h4>
                    <span className="register-step-time" style={{ color: "#059669", background: "rgba(16,185,129,0.1)", borderColor: "rgba(16,185,129,0.3)" }}>Bonus Active</span>
                  </div>
                  <p>
                    Type verified invitation voucher code <strong>69548120159</strong> into the referral field to automatically qualify for welcome bonuses up to ₹100!
                  </p>
                </div>
              </div>

              <div className="register-step-item">
                <div className="register-step-num-badge">06</div>
                <div className="register-step-info">
                  <div className="register-step-header">
                    <h4>Access Dashboard &amp; Play</h4>
                    <span className="register-step-time">Ready</span>
                  </div>
                  <p>
                    Agree to terms, click Complete Registration, and immediately explore Wingo, Slots, Aviator, and Lottery with your active bonus!
                  </p>
                </div>
              </div>
            </div>

            {/* Right Sticky Voucher Card */}
            <aside className="register-voucher-card">
              <div className="register-voucher-header">
                <span className="invite-badge">
                  <i className="fas fa-sparkles"></i> Official VIP Voucher 2026
                </span>
                <h3>Join 10 Lakh+ Players on Veer Game</h3>
                <p>
                  Register using this verified official referral code to unlock welcome rewards up to ₹100 and VIP Level 1 privileges instantly!
                </p>
              </div>

              <div className="register-voucher-box">
                <div className="register-voucher-box-left">
                  <span>Official Invite Code</span>
                  <strong style={{ color: "#ffd75e", letterSpacing: "0.1em" }}>69548120159</strong>
                </div>
                <i className="fas fa-ticket-simple" style={{ fontSize: "24px", color: "#ffd75e", opacity: 0.9 }}></i>
              </div>

              <div className="register-voucher-perks-list">
                <div className="register-voucher-perk">
                  <i className="fas fa-circle-check"></i>
                  <span>Unlocks Up to ₹100 Welcome Gift</span>
                </div>
                <div className="register-voucher-perk">
                  <i className="fas fa-circle-check"></i>
                  <span>VIP Level 1 Instant Upgrade</span>
                </div>
                <div className="register-voucher-perk">
                  <i className="fas fa-circle-check"></i>
                  <span>10%–200% First Deposit Match</span>
                </div>
                <div className="register-voucher-perk">
                  <i className="fas fa-circle-check"></i>
                  <span>Instant 24/7 Automated UPI Cashouts</span>
                </div>
              </div>

              <RegisterButton
                className="btn-hero btn-hero-primary"
                style={{ width: "100%", textAlign: "center", justifyContent: "center", border: "none" }}
              >
                <i className="fas fa-user-plus"></i> Register &amp; Claim Reward
              </RegisterButton>
            </aside>
          </div>

          {/* Quick Metrics Strip */}
          <div className="fullwidth-strip" style={{ marginTop: "32px" }}>
            <div className="strip-card">
              <div className="strip-icon strip-green"><i className="fas fa-bolt"></i></div>
              <div className="strip-text">
                <strong>2-Minute Quick Setup</strong>
                <span>Fast onboarding without complex documents</span>
              </div>
            </div>
            <div className="strip-card">
              <div className="strip-icon strip-amber"><i className="fas fa-gift"></i></div>
              <div className="strip-text">
                <strong>₹100 Welcome Bonus</strong>
                <span>Automatic starter balance on registration</span>
              </div>
            </div>
            <div className="strip-card">
              <div className="strip-icon strip-blue"><i className="fas fa-shield-check"></i></div>
              <div className="strip-text">
                <strong>SMS OTP Security</strong>
                <span>Single-session verified authentication</span>
              </div>
            </div>
            <div className="strip-card">
              <div className="strip-icon"><i className="fas fa-certificate"></i></div>
              <div className="strip-text">
                <strong>100% Free Account</strong>
                <span>Zero registration fee or hidden charges</span>
              </div>
            </div>
          </div>

          {/* Registration Security Callout Banner */}
          <div className="fullwidth-alert-banner" style={{ marginTop: "28px" }}>
            <div className="alert-banner-content">
              <div className="alert-banner-icon icon-green">
                <i className="fas fa-shield-halved"></i>
              </div>
              <div className="alert-banner-text">
                <h4>Official Account Safety &amp; Player Verification Guarantee</h4>
                <p>
                  Always ensure you are registering through <strong>veergames1.com</strong>. Keep your login password and OTP strictly confidential. The Veer Game support desk will never contact you asking for your password, UPI MPIN, or bank details. Users must be 18 years or older to participate.
                </p>
              </div>
            </div>
            <div className="alert-banner-pills">
              <span className="alert-pill"><i className="fas fa-lock"></i> 256-Bit SSL</span>
              <span className="alert-pill"><i className="fas fa-check-circle"></i> OTP Verified</span>
              <span className="alert-pill"><i className="fas fa-user-shield"></i> 18+ Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. LOGIN GUIDE ===== */}
      <section className="vg-section vg-login-guide vg-section-dark" id="login">
        <div className="site-shell">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-right-to-bracket"></i> Account Access
            </span>
            <h2 className="vg-section-title">Veer Game Login &ndash; How to Sign In</h2>
            <p className="vg-section-desc">
              Access your wallet balance, continue ongoing game streaks, and initiate withdrawals with seamless 1-tap authentication.
            </p>
          </div>
          <div className="guide-split guide-split-reverse">
            <div className="guide-image">
              <div className="phone-mock-frame">
                <Image
                  src="/images/imgs/veer-game-login-573x1024.jpeg"
                  alt="Veer Game Login Page"
                  width={573}
                  height={1024}
                  className="section-img section-img-phone"
                />
                <span className="phone-floating-badge">
                  <i className="fas fa-lock"></i> Encrypted Sign-In
                </span>
              </div>
            </div>
            <div className="guide-content">
              <p>
                Logging in to Veer Game is quick and straightforward. If you already
                have an account, follow these simple steps:
              </p>
              <ol className="guide-steps">
                <li><strong>Open Website or App:</strong> Navigate to the official Veer Game portal or open the Android APK.</li>
                <li><strong>Select Login:</strong> Tap the Login button prominently displayed on the upper header.</li>
                <li><strong>Enter Mobile Number:</strong> Provide the mobile number associated with your account.</li>
                <li><strong>Provide Password:</strong> Type your account password or request an OTP sign-in.</li>
                <li><strong>Click Sign In:</strong> Tap the Sign In button to access your personalized dashboard.</li>
              </ol>
              <div className="guide-tip">
                <i className="fas fa-key"></i>
                <div>
                  <strong>Forgot Password?</strong> Click on &quot;Forgot Password&quot; on the login modal to receive an OTP and reset your credentials in under 30 seconds.
                </div>
              </div>
              <div className="guide-cta">
                <RegisterButton>
                  <i className="fas fa-user-plus"></i> New User? Register Now
                </RegisterButton>
                <Link href="/#games" className="btn-hero btn-hero-primary">
                  <i className="fas fa-gamepad"></i> Explore Games
                </Link>
                <a href="#apk" className="btn-hero btn-hero-secondary">
                  <i className="fab fa-android"></i> Download App
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 8. DEPOSIT GUIDE ===== */}
      <section className="vg-section vg-deposit-guide vg-section-light vg-section-soft" id="deposit">
        <div className="site-shell site-shell-full">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-wallet"></i> Wallet Recharge
            </span>
            <h2 className="vg-section-title">How to Add Money (Deposit) on Veer Game</h2>
            <p className="vg-section-desc">
              Adding funds to your Veer Game wallet is fast, safe, and convenient with zero convenience fees and a low ₹100 minimum threshold.
            </p>
          </div>
          <div className="guide-content">
            <div className="steps-cards">
              <div className="step-card">
                <div className="step-icon-box"><i className="fas fa-right-to-bracket"></i></div>
                <span className="step-num">Step 1</span>
                <h4>Log In Profile</h4>
                <p>Sign in to your Veer Game account with your registered mobile number.</p>
              </div>
              <div className="step-card">
                <div className="step-icon-box"><i className="fas fa-wallet"></i></div>
                <span className="step-num">Step 2</span>
                <h4>Open Wallet Tab</h4>
                <p>Tap on the Wallet icon from the main account navigation bar.</p>
              </div>
              <div className="step-card">
                <div className="step-icon-box"><i className="fas fa-circle-plus"></i></div>
                <span className="step-num">Step 3</span>
                <h4>Select Deposit</h4>
                <p>Tap &quot;Deposit&quot; to review active recharge promotions and bonus tiers.</p>
              </div>
              <div className="step-card">
                <div className="step-icon-box"><i className="fas fa-qrcode"></i></div>
                <span className="step-num">Step 4</span>
                <h4>Pick Channel</h4>
                <p>Choose UPI QR, PhonePe, Google Pay, Paytm, or Direct Net Banking.</p>
              </div>
              <div className="step-card">
                <div className="step-icon-box"><i className="fas fa-circle-check"></i></div>
                <span className="step-num">Step 5</span>
                <h4>Confirm &amp; Pay</h4>
                <p>Enter the recharge amount and approve payment in your chosen UPI app.</p>
              </div>
            </div>

            <div className="fullwidth-strip">
              <div className="strip-card">
                <div className="strip-icon strip-green"><i className="fas fa-indian-rupee-sign"></i></div>
                <div className="strip-text">
                  <strong>₹100 Minimum Deposit</strong>
                  <span>Lowest deposit threshold in India</span>
                </div>
              </div>
              <div className="strip-card">
                <div className="strip-icon strip-blue"><i className="fas fa-bolt"></i></div>
                <div className="strip-text">
                  <strong>30–60s Auto-Credit</strong>
                  <span>Instant balance update via automated API</span>
                </div>
              </div>
              <div className="strip-card">
                <div className="strip-icon"><i className="fas fa-percent"></i></div>
                <div className="strip-text">
                  <strong>Zero Platform Fees</strong>
                  <span>100% of your deposit goes to your wallet</span>
                </div>
              </div>
              <div className="strip-card">
                <div className="strip-icon strip-amber"><i className="fas fa-shield-halved"></i></div>
                <div className="strip-text">
                  <strong>NPCI &amp; RBI Compliant</strong>
                  <span>Safe and verified Indian payment routing</span>
                </div>
              </div>
            </div>

            <div className="fullwidth-alert-banner">
              <div className="alert-banner-content">
                <div className="alert-banner-icon icon-green">
                  <i className="fas fa-circle-check"></i>
                </div>
                <div className="alert-banner-text">
                  <h4>Instant Deposit Guarantee &amp; Automated UTR Verification</h4>
                  <p>
                    Recharges start from just ₹100. After completing your payment in PhonePe, GPay, or Paytm, your wallet balance will automatically update within 30–60 seconds. If any bank delay occurs, submit your 12-digit UTR reference number to our 24/7 live desk for immediate manual clearance.
                  </p>
                </div>
              </div>
              <div className="alert-banner-pills">
                <span className="alert-pill"><i className="fas fa-bolt"></i> Instant UTR Sync</span>
                <span className="alert-pill"><i className="fas fa-clock"></i> 24/7 Live Desk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. ADD BANK ACCOUNT ===== */}
      <section className="vg-section vg-bank-guide vg-section-light" id="bank">
        <div className="site-shell site-shell-full">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-building-columns"></i> Banking Setup
            </span>
            <h2 className="vg-section-title">How to Add a Bank Account in Veer Game</h2>
            <p className="vg-section-desc">
              Link your verified Indian bank account or UPI ID to enable automated withdrawals straight to your account.
            </p>
          </div>
          <div className="guide-content">
            <div className="steps-cards">
              <div className="step-card">
                <div className="step-icon-box"><i className="fas fa-arrow-right-to-bracket"></i></div>
                <span className="step-num">Step 1</span>
                <h4>Sign In Profile</h4>
                <p>Open Veer Game and log into your verified user profile.</p>
              </div>
              <div className="step-card">
                <div className="step-icon-box"><i className="fas fa-id-badge"></i></div>
                <span className="step-num">Step 2</span>
                <h4>Profile Tab</h4>
                <p>Navigate to your Profile or Wallet management dashboard.</p>
              </div>
              <div className="step-card">
                <div className="step-icon-box"><i className="fas fa-building-columns"></i></div>
                <span className="step-num">Step 3</span>
                <h4>Add Bank Account</h4>
                <p>Select &ldquo;Add Bank Account&rdquo; or &ldquo;Payment Settings&rdquo;.</p>
              </div>
              <div className="step-card">
                <div className="step-icon-box"><i className="fas fa-pen-to-square"></i></div>
                <span className="step-num">Step 4</span>
                <h4>Enter Bank Info</h4>
                <p>Provide Account Holder Name, Bank Name, Account No &amp; IFSC.</p>
              </div>
              <div className="step-card">
                <div className="step-icon-box"><i className="fas fa-shield-check"></i></div>
                <span className="step-num">Step 5</span>
                <h4>Verify via OTP</h4>
                <p>Confirm information and authenticate with instant SMS OTP.</p>
              </div>
            </div>

            <div className="banks-showcase-bar">
              <div className="banks-bar-title">
                <i className="fas fa-building-columns"></i> Supported Indian Banks &amp; UPI Handles
              </div>
              <div className="banks-grid-pills">
                <span className="bank-tag"><i className="fas fa-check-circle"></i> State Bank of India (SBI)</span>
                <span className="bank-tag"><i className="fas fa-check-circle"></i> HDFC Bank</span>
                <span className="bank-tag"><i className="fas fa-check-circle"></i> ICICI Bank</span>
                <span className="bank-tag"><i className="fas fa-check-circle"></i> Axis Bank</span>
                <span className="bank-tag"><i className="fas fa-check-circle"></i> Punjab National Bank (PNB)</span>
                <span className="bank-tag"><i className="fas fa-check-circle"></i> Bank of Baroda</span>
                <span className="bank-tag"><i className="fas fa-check-circle"></i> Kotak Mahindra Bank</span>
                <span className="bank-tag"><i className="fas fa-check-circle"></i> Canara Bank</span>
                <span className="bank-tag"><i className="fas fa-qrcode"></i> All UPI VPAs (@okaxis, @ybl, @paytm)</span>
              </div>
            </div>

            <div className="fullwidth-alert-banner">
              <div className="alert-banner-content">
                <div className="alert-banner-icon icon-blue">
                  <i className="fas fa-shield-halved"></i>
                </div>
                <div className="alert-banner-text">
                  <h4>Bank-Grade 256-Bit SSL Protection &amp; Confidentiality</h4>
                  <p>
                    Veer Game uses 256-bit encryption for all linked banking details. Your data is strictly encrypted for payout routing and never shared with third parties. Veer Game will never ask for your ATM PIN, Net Banking passwords, or OTP.
                  </p>
                </div>
              </div>
              <div className="alert-banner-pills">
                <span className="alert-pill"><i className="fas fa-lock"></i> 256-Bit SSL</span>
                <span className="alert-pill"><i className="fas fa-key"></i> OTP Protected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 10. WITHDRAWAL GUIDE ===== */}
      <section className="vg-section vg-withdraw-guide vg-section-dark" id="withdraw">
        <div className="site-shell site-shell-full">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-money-bill-transfer"></i> Fast Cashout
            </span>
            <h2 className="vg-section-title">How to Withdraw Money from Veer Game</h2>
            <p className="vg-section-desc">
              Withdraw your winnings directly to your bank account or UPI ID with automated, zero-fee processing.
            </p>
          </div>
          <div className="guide-content">
            <div className="steps-cards">
              <div className="step-card">
                <div className="step-icon-box"><i className="fas fa-right-to-bracket"></i></div>
                <span className="step-num">Step 1</span>
                <h4>Log In Account</h4>
                <p>Sign in to your registered Veer Game gaming account.</p>
              </div>
              <div className="step-card">
                <div className="step-icon-box"><i className="fas fa-wallet"></i></div>
                <span className="step-num">Step 2</span>
                <h4>Open Wallet</h4>
                <p>Tap on the Wallet section from the dashboard navigation.</p>
              </div>
              <div className="step-card">
                <div className="step-icon-box"><i className="fas fa-money-bill-wave"></i></div>
                <span className="step-num">Step 3</span>
                <h4>Tap Withdrawal</h4>
                <p>Select the Withdrawal tab on top of the wallet screen.</p>
              </div>
              <div className="step-card">
                <div className="step-icon-box"><i className="fas fa-building-columns"></i></div>
                <span className="step-num">Step 4</span>
                <h4>Select Method</h4>
                <p>Choose your linked Bank Account or saved UPI ID.</p>
              </div>
              <div className="step-card">
                <div className="step-icon-box"><i className="fas fa-circle-check"></i></div>
                <span className="step-num">Step 5</span>
                <h4>Submit Cashout</h4>
                <p>Enter payout amount (min ₹100) and click Submit Request.</p>
              </div>
            </div>

            <div className="withdrawal-card-full">
              <div className="withdrawal-card-header">
                <h3>
                  <i className="fas fa-money-bill-transfer"></i> Withdrawal Processing Timeframes &amp; Payout Channels
                </h3>
                <span className="withdrawal-live-status">
                  <span className="pulse-dot"></span> Payout Servers 100% Operational
                </span>
              </div>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Payment Method</th>
                      <th>Estimated Processing Time</th>
                      <th>Minimum Amount</th>
                      <th>Daily Limit</th>
                      <th>Fee Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>UPI (GPay, PhonePe, Paytm, BHIM)</strong>
                      </td>
                      <td>
                        <span className="status-pill status-pill-green">
                          <i className="fas fa-bolt"></i> Within a Few Hours
                        </span>
                      </td>
                      <td>₹100</td>
                      <td>Up to ₹50,000</td>
                      <td>
                        <span className="status-pill status-pill-green">0% Free</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Bank Account Transfer (IMPS / NEFT)</strong>
                      </td>
                      <td>
                        <span className="status-pill status-pill-amber">
                          <i className="fas fa-clock"></i> Up to 24 Hours
                        </span>
                      </td>
                      <td>₹100</td>
                      <td>Up to ₹1,00,000</td>
                      <td>
                        <span className="status-pill status-pill-green">0% Free</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="fullwidth-strip">
              <div className="strip-card">
                <div className="strip-icon strip-green"><i className="fas fa-wallet"></i></div>
                <div className="strip-text">
                  <strong>₹100 Low Min Limit</strong>
                  <span>Low threshold cashout for all users</span>
                </div>
              </div>
              <div className="strip-card">
                <div className="strip-icon strip-blue"><i className="fas fa-clock-rotate-left"></i></div>
                <div className="strip-text">
                  <strong>3 Free Daily Payouts</strong>
                  <span>Zero platform commission or deduction</span>
                </div>
              </div>
              <div className="strip-card">
                <div className="strip-icon strip-amber"><i className="fas fa-server"></i></div>
                <div className="strip-text">
                  <strong>24/7 Automated Clearance</strong>
                  <span>Continuous round-the-clock clearance</span>
                </div>
              </div>
              <div className="strip-card">
                <div className="strip-icon"><i className="fas fa-building-columns"></i></div>
                <div className="strip-text">
                  <strong>Direct Bank IMPS</strong>
                  <span>Real-time transfer to verified accounts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 11. BONUSES SECTION ===== */}
      <section className="vg-section vg-bonuses vg-section-light vg-section-soft" id="bonus">
        <div className="site-shell site-shell-full">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-gift"></i> Rewards Program
            </span>
            <h2 className="vg-section-title">Bonuses and Reward Programs</h2>
            <p className="vg-section-desc">
              Maximize your rewards with daily login streaks, welcome packages, win streak bonuses, and VIP loyalty rewards.
            </p>
          </div>

          {/* Featured Welcome Bonus Hero Banner */}
          <div className="bonus-hero-banner">
            <div className="bonus-hero-left">
              <span className="bonus-hero-eyebrow">
                <i className="fas fa-sparkles"></i> New Player Welcome Package
              </span>
              <h3>Get Up to ₹100 Free Bonus + 200% First Recharge Boost</h3>
              <p>
                Start your journey on Veer Game with maximum advantage! Register using verified invitation code <strong>69548120159</strong> to unlock an immediate welcome balance and up to 200% deposit match on your initial recharge.
              </p>
              <div className="bonus-hero-code-strip">
                <div className="bonus-hero-code-badge">
                  <i className="fas fa-ticket"></i> CODE: 69548120159
                </div>
                <a href="https://www.veergame14.com/#/register?invitationCode=69548120159" target="_blank" rel="noopener noreferrer" className="btn-hero btn-hero-primary" style={{ padding: "10px 22px" }}>
                  <i className="fas fa-arrow-right"></i> Claim Bonus Now
                </a>
              </div>
            </div>

            <div className="bonus-hero-right">
              <div className="bonus-hero-perks">
                <div className="bonus-hero-perk-item">
                  <i className="fas fa-circle-check"></i>
                  <span>Instant Welcome Credit: Up to ₹100 free</span>
                </div>
                <div className="bonus-hero-perk-item">
                  <i className="fas fa-circle-check"></i>
                  <span>1st Recharge Match: 10% to 200% extra</span>
                </div>
                <div className="bonus-hero-perk-item">
                  <i className="fas fa-circle-check"></i>
                  <span>Transparent Terms: No impossible wagering traps</span>
                </div>
                <div className="bonus-hero-perk-item">
                  <i className="fas fa-circle-check"></i>
                  <span>Valid Across: Wingo, Slots, Aviator &amp; K3</span>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Grid Cards */}
          <div className="bonuses-grid">
            {bonuses.map((b) => (
              <div className="bonus-card" key={b.num}>
                <div>
                  <div className="bonus-card-top">
                    <div
                      className="bonus-icon-box"
                      style={{
                        background:
                          b.tone === "coral"
                            ? "linear-gradient(135deg, #ff5d43, #ff8c42)"
                            : b.tone === "amber"
                            ? "linear-gradient(135deg, #f59e0b, #fbbf24)"
                            : b.tone === "blue"
                            ? "linear-gradient(135deg, #3b82f6, #60a5fa)"
                            : b.tone === "violet"
                            ? "linear-gradient(135deg, #8b5cf6, #a78bfa)"
                            : b.tone === "teal"
                            ? "linear-gradient(135deg, #14b8a6, #2dd4bf)"
                            : "linear-gradient(135deg, #ec4899, #f472b6)",
                      }}
                    >
                      <i className={`fas ${b.icon}`}></i>
                    </div>
                    <span className="status-pill status-pill-green">{b.tag}</span>
                  </div>
                  <div className="bonus-card-body">
                    <h3>{b.title}</h3>
                    <p>{b.desc}</p>
                    <div className="bonus-card-highlight">
                      <i className="fas fa-check-circle"></i>
                      <span>{b.highlight}</span>
                    </div>
                  </div>
                </div>
                <div className="bonus-card-bottom">
                  <span>Benefit #{b.num}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Metrics Strip */}
          <div className="fullwidth-strip" style={{ marginTop: "28px" }}>
            <div className="strip-card">
              <div className="strip-icon strip-green"><i className="fas fa-gift"></i></div>
              <div className="strip-text">
                <strong>₹100 Welcome Gift</strong>
                <span>Instant reward for new registrations</span>
              </div>
            </div>
            <div className="strip-card">
              <div className="strip-icon strip-amber"><i className="fas fa-bolt"></i></div>
              <div className="strip-text">
                <strong>Up to 200% Match</strong>
                <span>First deposit multiplier booster</span>
              </div>
            </div>
            <div className="strip-card">
              <div className="strip-icon strip-blue"><i className="fas fa-chart-line"></i></div>
              <div className="strip-text">
                <strong>Real-Time Rebate</strong>
                <span>Instant turnover cashback on all rounds</span>
              </div>
            </div>
            <div className="strip-card">
              <div className="strip-icon"><i className="fas fa-crown"></i></div>
              <div className="strip-text">
                <strong>VIP 10 Tier Club</strong>
                <span>Higher cashouts &amp; dedicated host</span>
              </div>
            </div>
          </div>

          {/* Bonus Notice Banner */}
          <div className="bonus-notice-banner">
            <div className="bonus-notice-icon">
              <i className="fas fa-circle-exclamation"></i>
            </div>
            <div className="bonus-notice-text">
              <h4>Promotional Guidelines &amp; Transparency Notice</h4>
              <p>
                All promotional offers, reward percentages, and event conditions are subject to platform terms and periodic campaign updates. Bonuses are intended for entertaining gameplay and require account verification before initiating related cashouts. Always check active promotions directly within your Veer Game app dashboard.
              </p>
            </div>
          </div>

          <div className="bonus-cta-bar" style={{ marginTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "linear-gradient(135deg, rgba(255, 93, 67, 0.08), rgba(255, 184, 0, 0.08))", border: "1px solid rgba(255, 93, 67, 0.2)", borderRadius: "14px", padding: "18px 24px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <strong style={{ fontSize: "16px", color: "var(--vg-ink)", display: "block" }}>Claim Your ₹100 Welcome Bonus Today</strong>
              <span style={{ fontSize: "14px", color: "var(--vg-text-light)" }}>Register with invite code <strong>69548120159</strong> to start earning immediately.</span>
            </div>
            <RegisterButton />
          </div>
        </div>
      </section>

      {/* ===== 12. WINGO COLOUR PREDICTION ===== */}
      <section className="vg-section vg-wingo vg-section-dark" id="wingo">
        <div className="site-shell site-shell-full">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-bullseye"></i> Flagship Game Strategy
            </span>
            <h2 className="vg-section-title">
              How to Play Wingo Colour Prediction on Veer Game
            </h2>
            <p className="vg-section-desc">
              Wingo is Veer Game&apos;s flagship prediction game featuring transparent color and number draws every 30 seconds to 5 minutes with up to 9.0x multipliers.
            </p>
          </div>

          {/* Interactive Wingo Live Arena Simulation Card */}
          <div className="wingo-arena-card">
            {/* Arena Top Bar */}
            <div className="wingo-arena-top">
              <div className="wingo-mode-pills">
                <span className="wingo-mode-btn"><i className="fas fa-bolt"></i> Wingo 30s</span>
                <span className="wingo-mode-btn active"><i className="fas fa-stopwatch"></i> Wingo 1Min (Popular)</span>
                <span className="wingo-mode-btn"><i className="fas fa-hourglass-half"></i> Wingo 3Min</span>
                <span className="wingo-mode-btn"><i className="fas fa-chess"></i> Wingo 5Min</span>
              </div>
              <div className="wingo-timer-badge">
                <span>Draw #202609110482</span>
                <div className="wingo-timer-clock">
                  <span className="pulse-dot"></span> 00:24
                </div>
              </div>
            </div>

            {/* 3 Main Colour Prediction Cards */}
            <div className="wingo-colours-row">
              <div className="wingo-colour-card colour-green">
                <span className="wingo-colour-name">Green</span>
                <span className="wingo-colour-payout">2.0x Payout</span>
                <span className="wingo-colour-matches">Winning Numbers: 1, 3, 7, 9</span>
              </div>
              <div className="wingo-colour-card colour-violet">
                <span className="wingo-colour-name">Violet</span>
                <span className="wingo-colour-payout">4.5x Payout</span>
                <span className="wingo-colour-matches">Special Bonus Numbers: 0, 5</span>
              </div>
              <div className="wingo-colour-card colour-red">
                <span className="wingo-colour-name">Red</span>
                <span className="wingo-colour-payout">2.0x Payout</span>
                <span className="wingo-colour-matches">Winning Numbers: 2, 4, 6, 8</span>
              </div>
            </div>

            {/* Interactive Number Pad (0-9) */}
            <div className="wingo-numpad-container">
              <div className="wingo-numpad-title">
                <span><i className="fas fa-hand-pointer"></i> Select Single Number</span>
                <span>Payout: 9.0x Multiplier</span>
              </div>
              <div className="wingo-numbers-grid">
                <div className="wingo-num-btn num-split-red-violet" title="0 - Red/Violet (4.5x/9.0x)">0</div>
                <div className="wingo-num-btn num-green" title="1 - Green (9.0x)">1</div>
                <div className="wingo-num-btn num-red" title="2 - Red (9.0x)">2</div>
                <div className="wingo-num-btn num-green" title="3 - Green (9.0x)">3</div>
                <div className="wingo-num-btn num-red" title="4 - Red (9.0x)">4</div>
                <div className="wingo-num-btn num-split-green-violet" title="5 - Green/Violet (4.5x/9.0x)">5</div>
                <div className="wingo-num-btn num-red" title="6 - Red (9.0x)">6</div>
                <div className="wingo-num-btn num-green" title="7 - Green (9.0x)">7</div>
                <div className="wingo-num-btn num-red" title="8 - Red (9.0x)">8</div>
                <div className="wingo-num-btn num-green" title="9 - Green (9.0x)">9</div>
              </div>
            </div>

            {/* Big / Small Choice */}
            <div className="wingo-big-small-row">
              <div className="wingo-bs-btn btn-big">
                <b>BIG (Numbers 5, 6, 7, 8, 9)</b>
                <span>2.0x Multiplier</span>
              </div>
              <div className="wingo-bs-btn btn-small">
                <b>SMALL (Numbers 0, 1, 2, 3, 4)</b>
                <span>2.0x Multiplier</span>
              </div>
            </div>
          </div>

          {/* 5-Step How to Play Timeline */}
          <div className="steps-cards">
            <div className="step-card">
              <div className="step-icon-box"><i className="fas fa-right-to-bracket"></i></div>
              <span className="step-num">Step 1</span>
              <h4>Sign In &amp; Open Wingo</h4>
              <p>Log in to your Veer Game account and select Wingo from the top navigation bar.</p>
            </div>
            <div className="step-card">
              <div className="step-icon-box"><i className="fas fa-stopwatch"></i></div>
              <span className="step-num">Step 2</span>
              <h4>Pick Round Duration</h4>
              <p>Choose between 30s Lightning, 1-Min Rapid, 3-Min Classic, or 5-Min Strategic.</p>
            </div>
            <div className="step-card">
              <div className="step-icon-box"><i className="fas fa-palette"></i></div>
              <span className="step-num">Step 3</span>
              <h4>Choose Prediction</h4>
              <p>Predict Green, Red, Violet, Big/Small, or pick a direct single number (0–9).</p>
            </div>
            <div className="step-card">
              <div className="step-icon-box"><i className="fas fa-coins"></i></div>
              <span className="step-num">Step 4</span>
              <h4>Set Stake &amp; Confirm</h4>
              <p>Select your entry amount starting from ₹1 and submit before the countdown reaches 5s.</p>
            </div>
            <div className="step-card">
              <div className="step-icon-box"><i className="fas fa-circle-check"></i></div>
              <span className="step-num">Step 5</span>
              <h4>Collect Instant Win</h4>
              <p>When the round concludes, winning payouts are credited automatically to your wallet.</p>
            </div>
          </div>

          {/* Payout Breakdown Table */}
          <div className="wingo-table-card">
            <h3>
              <i className="fas fa-table-list"></i> Wingo Payout Multipliers &amp; Winning Conditions
            </h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Selection Type</th>
                    <th>Winning Draw Conditions</th>
                    <th>Payout Multiplier</th>
                    <th>Risk Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Green Colour</strong></td>
                    <td>Draw concludes on numbers 1, 3, 7, 9 (Half on 5)</td>
                    <td><span className="status-pill status-pill-green">2.0x Multiplier</span></td>
                    <td>Low Risk</td>
                  </tr>
                  <tr>
                    <td><strong>Red Colour</strong></td>
                    <td>Draw concludes on numbers 2, 4, 6, 8 (Half on 0)</td>
                    <td><span className="status-pill status-pill-green">2.0x Multiplier</span></td>
                    <td>Low Risk</td>
                  </tr>
                  <tr>
                    <td><strong>Violet Colour</strong></td>
                    <td>Special mixed draw ending on 0 or 5</td>
                    <td><span className="status-pill status-pill-green">4.5x Multiplier</span></td>
                    <td>Medium Risk</td>
                  </tr>
                  <tr>
                    <td><strong>Single Number (0–9)</strong></td>
                    <td>Exact prediction of the single draw digit</td>
                    <td><span className="status-pill status-pill-amber">9.0x Multiplier</span></td>
                    <td>High Reward</td>
                  </tr>
                  <tr>
                    <td><strong>Big / Small Selection</strong></td>
                    <td>Big (5, 6, 7, 8, 9) or Small (0, 1, 2, 3, 4)</td>
                    <td><span className="status-pill status-pill-green">2.0x Multiplier</span></td>
                    <td>Low Risk</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 4-Item Quick Strategy Strip */}
          <div className="fullwidth-strip" style={{ marginTop: "28px" }}>
            <div className="strip-card">
              <div className="strip-icon strip-green"><i className="fas fa-indian-rupee-sign"></i></div>
              <div className="strip-text">
                <strong>₹1 Minimum Entry</strong>
                <span>Test your predictions with minimal capital</span>
              </div>
            </div>
            <div className="strip-card">
              <div className="strip-icon strip-blue"><i className="fas fa-shield-halved"></i></div>
              <div className="strip-text">
                <strong>Certified RNG Draws</strong>
                <span>Provably fair and transparent outcome system</span>
              </div>
            </div>
            <div className="strip-card">
              <div className="strip-icon strip-amber"><i className="fas fa-bolt"></i></div>
              <div className="strip-text">
                <strong>30s Rapid Cycles</strong>
                <span>Continuous rounds running 24/7 without delays</span>
              </div>
            </div>
            <div className="strip-card">
              <div className="strip-icon"><i className="fas fa-wallet"></i></div>
              <div className="strip-text">
                <strong>Instant Auto-Payout</strong>
                <span>Immediate wallet crediting as soon as round ends</span>
              </div>
            </div>
          </div>

          {/* Strategy Tip Banner */}
          <div className="fullwidth-alert-banner" style={{ marginTop: "28px" }}>
            <div className="alert-banner-content">
              <div className="alert-banner-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="alert-banner-text">
                <h4>Wingo Strategy &amp; Bankroll Discipline Advice</h4>
                <p>
                  Always examine the past round history and parity trend chart before confirming your entry. Set strict daily loss limits and avoid aggressively chasing previous entries. Consistent players often combine Big/Small or Colour predictions for steady gameplay while reserving single numbers for selective high-multiplier rounds.
                </p>
              </div>
            </div>
            <div className="alert-banner-pills">
              <span className="alert-pill"><i className="fas fa-chart-pie"></i> Trend Analysis</span>
              <span className="alert-pill"><i className="fas fa-shield-heart"></i> Responsible Play</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 13. APK DOWNLOAD ===== */}
      <section className="vg-section vg-apk vg-section-light" id="apk">
        <div className="site-shell">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fab fa-android"></i> Android Application
            </span>
            <h2 className="vg-section-title">
              Veer Game App Download &amp; Installation Guide
            </h2>
            <p className="vg-section-desc">
              Download the official lightweight 12MB Android APK for faster loading times, push notifications, and ultra-smooth gameplay.
            </p>
          </div>

          <div className="apk-specs-grid">
            <div className="apk-spec-card">
              <b>v2.1</b>
              <span style={{ color: "#000000", fontWeight: 700 }}>Latest Edition</span>
            </div>
            <div className="apk-spec-card">
              <b>12MB</b>
              <span style={{ color: "#000000", fontWeight: 700 }}>Ultra-Light Size</span>
            </div>
            <div className="apk-spec-card">
              <b>Android 5.0+</b>
              <span style={{ color: "#000000", fontWeight: 700 }}>Compatibility</span>
            </div>
            <div className="apk-spec-card">
              <b style={{ color: "#059669" }}>100% Clean</b>
              <span style={{ color: "#000000", fontWeight: 700 }}>Virus-Free Verified</span>
            </div>
          </div>

          <div className="apk-banner">
            <Image
              src="/images/imgs/veer-game-app-1-1024x683.jpeg"
              alt="Veer Game App - Download and Install in 3 Easy Steps"
              width={1024}
              height={683}
              className="section-img section-img-wide"
            />
          </div>

          <div className="apk-download-hero-card">
            <div className="apk-download-hero-left">
              <i className="fab fa-android"></i>
              <div>
                <h4>Official Veer Game Android APK (v2.1)</h4>
                <p>
                  Optimised for smooth gaming on all Xiaomi, Samsung, Realme, Vivo, and OnePlus smartphones.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <RegisterButton />
              <a href="#apk" className="btn-hero btn-hero-primary">
                <i className="fas fa-download"></i> Download APK (12MB)
              </a>
            </div>
          </div>

          <div className="apk-content" style={{ marginTop: "32px" }}>
            <div className="apk-info">
              <h3>Why Install the Official Android App?</h3>
              <ul className="apk-benefits">
                <li>Faster loading speed and lower latency than web browser versions</li>
                <li>Smooth and stable graphics performance across budget smartphones</li>
                <li>Quick 1-tap biometric or saved credential login access</li>
                <li>Real-time push notifications for daily bonuses and VIP gift codes</li>
                <li>Ultra-compact app package — only 12MB storage required</li>
                <li>Secure end-to-end encrypted connection to gaming servers</li>
              </ul>
            </div>
            <div className="apk-steps">
              <h3>Steps to Install Veer Game App</h3>
              <ol className="guide-steps">
                <li>Visit the official website veergames1.com on your Android phone.</li>
                <li>Tap on the &quot;Download APK&quot; button to begin file download.</li>
                <li>When prompted by Android, tap &quot;Download Anyway&quot;.</li>
                <li>Open Settings &rarr; Security and enable &quot;Install Unknown Apps&quot;.</li>
                <li>Tap the downloaded Veer Game APK file from your Notifications.</li>
                <li>Click Install and wait a few seconds for completion.</li>
                <li>Open the app, register or login, and claim your ₹100 welcome bonus!</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 14. REFER & EARN ===== */}
      <section className="vg-section vg-referral vg-section-dark" id="referral">
        <div className="site-shell">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-users-line"></i> Affiliate Program
            </span>
            <h2 className="vg-section-title">Veer Game Refer &amp; Earn Program</h2>
            <p className="vg-section-desc">
              Invite friends to Veer Game using your personal invitation code and build a strong network with daily automated salary payouts.
            </p>
          </div>
          <div className="guide-content">
            <p>
              The Refer &amp; Earn Program on Veer Game allows eligible users to
              receive promotional rewards by inviting new users to join the
              platform. By inviting new users, eligible participants gain
              access to generous promotional commissions on every active round.
            </p>
            <h3>How to Use the Referral Program</h3>
            <ol className="guide-steps">
              <li>Open the &quot;Refer &amp; Earn&quot; or &quot;Promotion&quot; section in your Veer Game account.</li>
              <li>Copy your personal referral link or unique invitation code (<strong>69548120159</strong>).</li>
              <li>Share your link via Telegram or directly with friends and family.</li>
              <li>Ensure new users enter your invitation code during their signup.</li>
              <li>Track referral signups, active player counts, and commissions in real time.</li>
              <li>Withdraw your accumulated agent commission directly to UPI or bank account anytime.</li>
            </ol>
          </div>
          <div className="agent-salary">
            <h3>Veer Game Agent - Daily Salary System</h3>
            <p>
              Becoming a Veer Game agent enables you to earn a steady daily income based on your team&apos;s active player participation:
            </p>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Tier Level</th>
                    <th>Team Members</th>
                    <th>Min Team Deposit</th>
                    <th>Daily Salary</th>
                  </tr>
                </thead>
                <tbody>
                  {agentSalaries.map((s) => (
                    <tr key={s.tier}>
                      <td><span className="tier-badge">{s.tier}</span></td>
                      <td>{s.members} Active Members</td>
                      <td>{s.deposit}</td>
                      <td><span className="salary-val">{s.salary} / Day</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="guide-tip" style={{ marginTop: "16px" }}>
              <i className="fas fa-circle-info"></i>
              <div>
                <strong>Agent Note:</strong> Daily salaries are calculated and credited automatically every 24 hours based on active team member qualifications.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 15. GIFT CODE ===== */}
      <section className="vg-section vg-giftcode vg-section-light vg-section-soft" id="giftcode">
        <div className="site-shell">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-ticket"></i> Redeem Codes
            </span>
            <h2 className="vg-section-title">How to Use a Veer Game Gift Code</h2>
            <p className="vg-section-desc">
              Redeem exclusive platform gift codes released during events and VIP milestones to claim free wallet top-ups.
            </p>
          </div>
          <div className="guide-content">
            <p>
              Using a gift code on Veer Game allows eligible users to claim
              special promotional credits directly into their game balance.
            </p>
            <ol className="guide-steps">
              <li>Log in to your Veer Game account on the app or browser.</li>
              <li>Tap on the &quot;Activity&quot; or &quot;Gift Code&quot; button in your dashboard.</li>
              <li>Paste or type the valid promotional Gift Code carefully.</li>
              <li>Click &quot;Redeem&quot; or &quot;Submit&quot; to verify the code.</li>
              <li>Once verified, your bonus balance is immediately credited to your wallet.</li>
            </ol>
            <div className="guide-tip">
              <i className="fas fa-clock"></i>
              <div>
                <strong>Redemption Tip:</strong> Gift codes often have limited redemptions and expiry times. Redeem them immediately upon release to secure your reward.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 16. REAL OR FAKE ===== */}
      <section className="vg-section vg-legitimacy vg-section-dark" id="legitimacy">
        <div className="site-shell">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-shield-check"></i> Platform Transparency
            </span>
            <h2 className="vg-section-title">
              Veer Game Real or Fake? Here Is What You Should Know
            </h2>
            <p className="vg-section-desc">
              A comprehensive factual review of safety credentials, payment transparency, and responsible gameplay advisories.
            </p>
          </div>
          <div className="guide-content">
            <p>
              It is completely natural for new users to ask whether Veer Game is a
              genuine platform before depositing funds or creating an account.
            </p>
            <h3>Verified Legitimacy Indicators</h3>
            <ul className="check-list">
              <li>Official website with transparent platform information, terms, and game guides</li>
              <li>Smooth, verified registration and OTP-backed authentication protocols</li>
              <li>Support for major Indian payment methods (UPI, GPay, PhonePe, Paytm, Net Banking)</li>
              <li>Fast automated payouts processed within hours with public transaction logs</li>
              <li>Encrypted HTTPS connections protecting personal and banking credentials</li>
              <li>Active community of over 10 Lakh players across India with verified payout proofs</li>
              <li>24/7 customer support team assisting with account, game, and payment queries</li>
            </ul>
            <div className="guide-tip" style={{ marginTop: "16px" }}>
              <i className="fas fa-triangle-exclamation"></i>
              <div>
                <strong>Risk Disclosure:</strong> Online prediction games involve real financial risk. Results depend on probability and outcomes are never guaranteed. Only play with funds you can afford to allocate for recreational entertainment.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 17. HOW TO PLAY ===== */}
      <section className="vg-section vg-howtoplay vg-section-light" id="howtoplay">
        <div className="site-shell">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-circle-play"></i> Beginner Playbook
            </span>
            <h2 className="vg-section-title">
              How to Play on Veer Game - Beginner Guide
            </h2>
            <p className="vg-section-desc">
              A simple 8-step roadmap to get you started safely from registration to picking your first game and cashing out.
            </p>
          </div>
          <div className="guide-content">
            <ol className="guide-steps">
              <li><strong>Complete Signup:</strong> Register your account using your mobile number and invite code 69548120159.</li>
              <li><strong>Sign In:</strong> Log into your dashboard with your credentials.</li>
              <li><strong>Fund Wallet:</strong> Add starting balance starting from ₹100 using your preferred UPI app.</li>
              <li><strong>Choose Game:</strong> Explore Win Go, Aviator, K3 Lottery, 5D, or Slots from the games lobby.</li>
              <li><strong>Understand Rules:</strong> Take a moment to read the round duration and multiplier odds.</li>
              <li><strong>Start Small:</strong> Place modest entries while getting accustomed to round pacing.</li>
              <li><strong>Track Draws:</strong> Review game history charts and trends for structured participation.</li>
              <li><strong>Withdraw Profits:</strong> Cash out winnings directly to your UPI ID once you meet the ₹100 minimum.</li>
            </ol>
            <div className="guide-tip">
              <i className="fas fa-lightbulb"></i>
              <div>
                <strong>Pro Tip:</strong> Always set a daily recreational budget before playing and stick to it regardless of wins or losses.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 18. WHY POPULAR ===== */}
      <section className="vg-section vg-why-popular vg-section-light vg-section-soft" id="popular">
        <div className="site-shell">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-thumbs-up"></i> Player Benefits
            </span>
            <h2 className="vg-section-title">
              Why Is Veer Game the Most Popular Gaming App in India?
            </h2>
            <p className="vg-section-desc">
              Discover why lakhs of active gamers across India choose Veer Game for daily online gaming entertainment.
            </p>
          </div>
          <div className="why-grid">
            {whyPopular.map((w) => (
              <div className="why-card" key={w.title}>
                <div className="why-card-top">
                  <div className="why-icon">
                    <i className={`fas ${w.icon}`}></i>
                  </div>
                  <span className="why-badge">{w.badge}</span>
                </div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 19. ABOUT SECTION ===== */}
      <section className="vg-section vg-about vg-section-dark" id="about">
        <div className="site-shell">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-info-circle"></i> Platform Story
            </span>
            <h2 className="vg-section-title">About Veer Game</h2>
            <p className="vg-section-desc">
              Learn about our vision, core values, and ongoing commitment to fair, transparent, and enjoyable mobile gaming.
            </p>
          </div>
          <div className="about-content">
            <p>
              Veer Game is an online gaming platform built to give players across
              India access to colour prediction games, lottery-style number games,
              crash games like Aviator, and casual mini games — all through a
              single, easy-to-use mobile app and website.
            </p>
            <p>
              Our core goal is to offer a transparent, secure, and genuinely
              enjoyable gaming experience. We believe that users should always
              have clear access to game rules, payment terms, and support
              channels.
            </p>
            <p>
              Veer Game is continuously updated based on user feedback. New games
              are added regularly, existing features are improved, and payment
              options are expanded to meet the needs of our growing user base.
            </p>
            <p>
              We take <Link href="/#responsible">responsible gaming</Link>{" "}
              seriously. Players are encouraged to set personal spending limits,
              take breaks from gaming, and treat the platform as a source of
              entertainment.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 20. FAQ SECTION ===== */}
      <section className="vg-section vg-faq vg-section-light" id="faq">
        <div className="site-shell">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-circle-question"></i> Help &amp; FAQs
            </span>
            <h2 className="vg-section-title">Frequently Asked Questions</h2>
            <p className="vg-section-desc">
              Everything you need to know about Veer Game registration, games, payments, and APK downloads.
            </p>
          </div>
          <div className="faq-accordion">
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>
                  <span>
                    <i className="fas fa-circle-question" style={{ marginRight: "10px", color: "var(--vg-coral)" }}></i>
                    {q}
                  </span>
                  <i className="fas fa-chevron-down"></i>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 21. TRUST SIGNALS ===== */}
      <section className="vg-section vg-trust vg-section-dark" id="trust">
        <div className="site-shell trust-grid">
          {trustSignals.map((t) => (
            <div className="trust-item" key={t.title}>
              <div className="trust-icon-box">
                <i className={`fas ${t.icon}`}></i>
              </div>
              <span className="trust-badge">{t.badge}</span>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

    
      {/* ===== 23. DISCLAIMER ===== */}
      <section className="vg-section vg-disclaimer vg-section-dark" id="disclaimer">
        <div className="site-shell">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-triangle-exclamation"></i> Legal Notice
            </span>
            <h2 className="vg-section-title">Disclaimer</h2>
          </div>
          <div className="disclaimer-card">
            <p>
              This website is an informational and educational portal about Veer Game and related online gaming platforms. The content published here is intended solely for awareness and instructional purposes.
            </p>
            <p>
              We do not directly operate, manage, or provide banking services on behalf of Veer Game or any third-party gaming provider. All logos, registered brand names, and trademarks remain the property of their respective owners.
            </p>
            <p>
              Online gaming and color prediction involve financial risk and may lead to loss of deposited funds. <strong>Winning is never guaranteed.</strong> Participation is strictly limited to individuals 18 years of age or older in jurisdictions where online skill gaming is permitted by applicable law.
            </p>
          </div>
        </div>
      </section>

      {/* ===== 24. RESPONSIBLE GAMING ===== */}
      <section className="vg-section vg-responsible vg-section-light" id="responsible">
        <div className="site-shell">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-hand-holding-heart"></i> Player Protection
            </span>
            <h2 className="vg-section-title">Responsible Gaming on Veer Game</h2>
            <p className="vg-section-desc">
              Essential guidelines to ensure your gaming experience remains safe, controlled, and enjoyable at all times.
            </p>
          </div>
          <div className="guide-content">
            <ul className="responsible-list">
              <li>
                <strong>Set Spending Limits:</strong> Pre-determine your monthly gaming entertainment budget and never exceed it.
              </li>
              <li>
                <strong>Control Session Durations:</strong> Take frequent breaks and avoid extended continuous gaming sessions.
              </li>
              <li>
                <strong>Entertainment First:</strong> View color prediction and gaming as leisure entertainment, not a source of income.
              </li>
              <li>
                <strong>Avoid Chasing Losses:</strong> Never increase bet amounts in an attempt to recover prior round outcomes.
              </li>
              <li>
                <strong>Protect Your Account:</strong> Keep your mobile password and SMS verification OTP strictly confidential.
              </li>
              <li>
                <strong>Strict 18+ Age Restriction:</strong> Veer Game is exclusively intended for adults 18 years of age and older.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 25. CONCLUSION ===== */}
      <section className="vg-section vg-conclusion vg-section-light vg-section-soft" id="conclusion">
        <div className="site-shell">
          <div className="vg-section-header">
            <span className="vg-tag">
              <i className="fas fa-flag-checkered"></i> Summary
            </span>
            <h2 className="vg-section-title">Conclusion</h2>
          </div>
          <div className="guide-content">
            <p>
              Veer Game provides a reliable, mobile-friendly online gaming experience
              where players across India can enjoy Colour Prediction (Wingo), Aviator,
              K3, 5D, and Slots in one intuitive application. From 2-minute registration
              and fast UPI deposits to transparent withdrawals and daily agent commissions,
              the platform is designed for effortless entertainment.
            </p>
            <p>
              Remember to always play responsibly, observe healthy session limits, and
              enjoy the thrill of interactive gaming. Download the official 12MB Android
              APK or access the platform directly in your browser today to claim your
              welcome bonus!
            </p>
          </div>
        </div>
      </section>

      {/* ===== 26. FINAL CTA ===== */}
      <section className="vg-cta" id="cta">
        <div className="site-shell cta-inner">
          <h2>Ready to Start Playing on Veer Game?</h2>
          <p>
            Join over 10 Lakh active players across India today. Complete registration in under 2 minutes and claim your welcome bonus of up to ₹100!
          </p>
          <div className="cta-actions">
            <RegisterButton className="btn-hero btn-hero-register btn-lg" />
            <a
              href="https://t.me/+SQ2smTBoOV82ZjY9"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero btn-hero-telegram btn-lg"
            >
              <i className="fab fa-telegram"></i> Join Telegram Channel
            </a>
            <Link href="/#games" className="btn-hero btn-hero-primary btn-lg">
              <i className="fas fa-gamepad"></i> Explore Games
            </Link>
            <a href="#apk" className="btn-hero btn-hero-secondary btn-lg">
              <i className="fab fa-android"></i> Download APK (12MB)
            </a>
          </div>
          <div className="cta-guarantee-row">
            <span><i className="fas fa-shield-halved"></i> 256-Bit SSL Encrypted</span>
            <span><i className="fas fa-bolt"></i> Instant UPI Payouts</span>
            <span><i className="fas fa-user-check"></i> 18+ Only</span>
            <span><i className="fas fa-headset"></i> 24/7 Live Support</span>
          </div>
        </div>
      </section>
    </>
  );
}
