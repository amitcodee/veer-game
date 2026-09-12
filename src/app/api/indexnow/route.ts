import { NextResponse } from "next/server";
import { blogPosts, BASE_URL } from "@/data/blogData";

const INDEXNOW_KEY = "9f8b417c8d2a4e5f93b1670c5284e912";
const HOST = "veergames1.com";

export async function GET() {
  const urlList = [
    `${BASE_URL}/`,
    `${BASE_URL}/blog`,
    ...blogPosts.map((post) => `${BASE_URL}/blog/${post.slug}`),
  ];

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urlList,
  };

  try {
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: true,
      message: "IndexNow submission dispatched successfully to search engines",
      status: response.status,
      submittedUrls: urlList,
    });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      {
        success: false,
        message: "Failed to submit to IndexNow",
        error: errMessage,
        submittedUrls: urlList,
      },
      { status: 500 }
    );
  }
}

export async function POST() {
  return GET();
}
