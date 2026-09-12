import { blogPosts, BASE_URL } from "@/data/blogData";

export async function GET() {
  const feedItems = blogPosts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.datePublished).toUTCString()}</pubDate>
      <author>support@veergames1.com (${post.author})</author>
      <category>${post.category}</category>
      <enclosure url="${post.image}" length="0" type="image/jpeg" />
    </item>`
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Veer Game Official Updates &amp; Strategy Guides</title>
    <link>${BASE_URL}</link>
    <description>Latest official guides, login tutorials, APK updates, Wingo prediction strategies, and agent salary insights for Veer Game.</description>
    <language>en-IN</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${BASE_URL}/images/logo/logo.png</url>
      <title>Veer Game</title>
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
