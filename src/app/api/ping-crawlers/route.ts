import { NextResponse } from "next/server";
import { blogPosts, BASE_URL } from "@/data/blogData";

const INDEXNOW_KEY = "9f8b417c8d2a4e5f93b1670c5284e912";
const HOST = "veergames1.com";
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;

export async function GET() {
  const urlList = [
    `${BASE_URL}/`,
    `${BASE_URL}/blog`,
    ...blogPosts.map((post) => `${BASE_URL}/blog/${post.slug}`),
  ];

  const results: Record<string, unknown> = {};

  // 1. Google Sitemaps Ping
  try {
    const googleRes = await fetch(
      `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
      { method: "GET" }
    );
    results.google = {
      status: googleRes.status,
      message: googleRes.ok ? "Google pinged successfully" : "Google ping response: " + googleRes.status,
    };
  } catch (err: unknown) {
    results.google = {
      status: "error",
      message: err instanceof Error ? err.message : "Google ping network error",
    };
  }

  // 2. Bing Sitemaps Ping
  try {
    const bingRes = await fetch(
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
      { method: "GET" }
    );
    results.bing = {
      status: bingRes.status,
      message: bingRes.ok ? "Bing pinged successfully" : "Bing ping response: " + bingRes.status,
    };
  } catch (err: unknown) {
    results.bing = {
      status: "error",
      message: err instanceof Error ? err.message : "Bing ping network error",
    };
  }

  // 3. IndexNow Submission (Bing, Yandex, Naver, Seznam)
  try {
    const indexNowPayload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urlList,
    };

    const indexNowRes = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(indexNowPayload),
    });

    results.indexNow = {
      status: indexNowRes.status,
      message: indexNowRes.ok ? "IndexNow dispatched to Bing and Yandex" : "IndexNow response: " + indexNowRes.status,
      submittedUrlsCount: urlList.length,
    };
  } catch (err: unknown) {
    results.indexNow = {
      status: "error",
      message: err instanceof Error ? err.message : "IndexNow network error",
    };
  }

  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    sitemap: SITEMAP_URL,
    totalUrls: urlList.length,
    crawlersNotified: results,
  });
}

export async function POST() {
  return GET();
}
