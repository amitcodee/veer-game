import { blogPosts, BASE_URL } from "@/data/blogData";

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const feedItems = blogPosts
    .map((post) => {
      const imageUrl = post.image.startsWith("http")
        ? post.image
        : `${BASE_URL}${post.image.startsWith("/") ? "" : "/"}${post.image}`;
      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.datePublished).toUTCString()}</pubDate>
      <author>support@veergames1.com (${escapeXml(post.author)})</author>
      <category><![CDATA[${post.category}]]></category>
      <enclosure url="${escapeXml(imageUrl)}" length="0" type="image/jpeg" />
      <media:content url="${escapeXml(imageUrl)}" medium="image" type="image/jpeg" />
    </item>`;
    })
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title><![CDATA[Veer Game Official Updates & Strategy Guides]]></title>
    <link>${BASE_URL}</link>
    <description><![CDATA[Latest official guides, login tutorials, APK updates, Wingo prediction strategies, and agent salary insights for Veer Game.]]></description>
    <language>en-IN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <atom:link rel="hub" href="https://pubsubhubbub.appspot.com/" />
    <image>
      <url>${BASE_URL}/images/logo/logo.png</url>
      <title><![CDATA[Veer Game]]></title>
      <link>${BASE_URL}</link>
    </image>
    ${feedItems}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
