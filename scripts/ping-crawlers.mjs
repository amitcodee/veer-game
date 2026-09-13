/**
 * Automated Search Engine & Crawler Notification Script
 * Dispatches instant indexing pings to IndexNow (Bing, Yandex, Naver, Seznam),
 * Google Sitemaps, and Bing Sitemaps.
 */

const BASE_URL = "https://veergames1.com";
const INDEXNOW_KEY = "9f8b417c8d2a4e5f93b1670c5284e912";
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;

const URL_LIST = [
  `${BASE_URL}/`,
  `${BASE_URL}/download`,
  `${BASE_URL}/login`,
  `${BASE_URL}/blog`,
  `${BASE_URL}/blog/veer-game-login-registration-guide`,
  `${BASE_URL}/blog/veer-game-app-download-apk`,
  `${BASE_URL}/blog/wingo-colour-prediction-tricks-veer-game`,
  `${BASE_URL}/blog/veer-game-real-or-fake-withdrawal-proof`,
  `${BASE_URL}/blog/veer-game-invite-code-referral-daily-salary`,
  `${BASE_URL}/blog/veer-game-aviator-game-tricks-signals-strategy`,
  `${BASE_URL}/blog/veer-game-deposit-withdrawal-methods-upi-limits`,
  `${BASE_URL}/blog/veer-game-gift-code-today-free-bonus-redeem`,
  `${BASE_URL}/blog/veer-game-vs-daman-game-bdg-win-comparison`,
];

async function pingIndexNow() {
  const payload = {
    host: "veergames1.com",
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: URL_LIST,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });
    console.log(`[IndexNow] Status ${res.status}: Dispatched ${URL_LIST.length} URLs to Bing & Yandex`);
  } catch (err) {
    console.warn(`[IndexNow] Warning: ${err.message}`);
  }
}

async function pingGoogleSitemap() {
  try {
    const res = await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`);
    console.log(`[Google Ping] Status ${res.status}: Google crawler notified of sitemap`);
  } catch (err) {
    console.warn(`[Google Ping] Warning: ${err.message}`);
  }
}

async function pingBingSitemap() {
  try {
    const res = await fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`);
    console.log(`[Bing Ping] Status ${res.status}: Bing crawler notified of sitemap`);
  } catch (err) {
    console.warn(`[Bing Ping] Warning: ${err.message}`);
  }
}

async function main() {
  console.log("⚡ Initiating rapid search engine crawl notifications...");
  await Promise.allSettled([pingIndexNow(), pingGoogleSitemap(), pingBingSitemap()]);
  console.log("✅ All crawler ping notifications completed.");
}

main().catch((err) => {
  console.error("Crawler notification error:", err);
  // Do not fail build if network ping times out
  process.exit(0);
});
