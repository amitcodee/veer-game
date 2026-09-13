import type { MetadataRoute } from "next";

const baseUrl = "https://veergames1.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/download",
          "/login",
          "/register",
          "/wingo",
          "/aviator",
          "/referral",
          "/_next/static/",
          "/images/",
          "/blog/",
          "/*.js$",
          "/*.css$",
          "/*.png$",
          "/*.jpg$",
          "/*.svg$",
          "/*.webp$",
          "/*.ico$",
        ],
        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
          "/private/",
          "/*.json$",
          "/*?*utm_*",
          "/*?*fbclid*",
          "/*?*gclid*",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
          "/private/",
          "/*?*utm_*",
        ],
      },
      {
        userAgent: "Googlebot-Image",
        allow: ["/", "/images/", "/_next/static/media/", "/*.png$", "/*.jpg$", "/*.svg$", "/*.webp$"],
        disallow: ["/private/"],
      },
      {
        userAgent: "Googlebot-News",
        allow: ["/", "/blog/"],
        disallow: ["/private/", "/api/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/dashboard/",
          "/private/",
          "/*?*utm_*",
        ],
      },
      {
        userAgent: "msnbot-media",
        allow: ["/", "/images/", "/*.png$", "/*.jpg$"],
        disallow: ["/private/"],
      },
      {
        userAgent: "Slurp",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/private/"],
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/private/"],
      },
      {
        userAgent: "Applebot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/private/"],
      },
      {
        userAgent: "Baiduspider",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/private/"],
      },
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: ["/api/", "/admin/", "/dashboard/", "/private/"],
      },
      {
        userAgent: "YandexImages",
        allow: ["/", "/images/"],
        disallow: ["/private/"],
      },
      // Block aggressive scrapers and AI bots to prevent content theft & preserve server crawl budget
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        disallow: "/",
      },
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        disallow: "/",
      },
      {
        userAgent: "Claude-Web",
        disallow: "/",
      },
      {
        userAgent: "Bytespider",
        disallow: "/",
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/feed.xml`,
    ],
    host: baseUrl,
  };
}
