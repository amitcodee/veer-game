import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogData";

const baseUrl = "https://veergames1.com";

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
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "hourly",
      priority: 0.95,
      images: [
        "https://picsum.photos/id/1073/1200/630",
      ],
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.dateModified || currentDate,
    changeFrequency: "daily",
    priority: 0.90,
    images: [post.image],
  }));

  return [...staticRoutes, ...blogRoutes];
}
