import type { MetadataRoute } from "next";
import { blogPosts, BASE_URL } from "@/data/blogData";

const baseUrl = BASE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "always",
      priority: 1.0,
      images: [
        `${baseUrl}/images/logo/logo.png`,
        `${baseUrl}/og-image.png`,
      ],
    },
    {
      url: `${baseUrl}/download`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.95,
      images: [
        `${baseUrl}/images/imgs/veer-game-app-1-1024x683.jpeg`,
      ],
    },
    {
      url: `${baseUrl}/login`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.95,
      images: [
        `${baseUrl}/images/imgs/veer-game-login-573x1024.jpeg`,
      ],
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "hourly",
      priority: 0.95,
      images: [
        `${baseUrl}/images/imgs/veergame-1024x683.jpeg`,
      ],
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const imageUrl = post.image.startsWith("http")
      ? post.image
      : `${baseUrl}${post.image.startsWith("/") ? "" : "/"}${post.image}`;
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.dateModified || currentDate,
      changeFrequency: "daily",
      priority: 0.90,
      images: [imageUrl],
    };
  });

  return [...staticRoutes, ...blogRoutes];
}
