import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import {
  blogPosts,
  getBlogPost,
  getAllBlogSlugs,
  OFFICIAL_REGISTER_URL,
  OFFICIAL_INVITE_CODE,
  OFFICIAL_TELEGRAM_URL,
  BASE_URL,
} from "@/data/blogData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Article Not Found | Veer Game",
      description: "The requested guide or article could not be found.",
    };
  }

  const postUrl = `${BASE_URL}/blog/${post.slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author, url: BASE_URL }],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url: postUrl,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author],
      siteName: "Veer Game",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [post.image],
      creator: "@veergames",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const postUrl = `${BASE_URL}/blog/${post.slug}`;

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: [post.image],
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    wordCount: post.wordCount,
    inLanguage: "en-IN",
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    author: {
      "@type": "Organization",
      name: post.author,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Veer Game",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logo/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".blog-article-main-title", ".quick-answer-text"],
    },
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <article className="blog-article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero / Header Section */}
      <header className="blog-article-header">
        <div className="site-shell">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.category, href: "/blog" },
            ]}
          />

          <div className="blog-article-hero-meta">
            <span className="blog-cat-badge">{post.category}</span>
            <span className="blog-read-time">
              <i className="far fa-clock"></i> {post.readTime}
            </span>
            <span className="blog-updated-date">
              <i className="far fa-calendar-check"></i> Updated:{" "}
              {new Date(post.dateModified).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h1 className="blog-article-main-title">{post.title}</h1>
          <p className="blog-article-lead">{post.excerpt}</p>

          <div className="blog-author-strip">
            <div className="blog-author-avatar">
              <i className="fas fa-shield-halved"></i>
            </div>
            <div>
              <div className="blog-author-name">{post.author}</div>
              <div className="blog-author-role">Official Veer Game Publication</div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Banner Image */}
      <div className="site-shell blog-featured-img-container">
        <div className="blog-featured-img-wrap">
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={500}
            priority
            className="blog-featured-img"
          />
        </div>
      </div>

      {/* Position 0 Featured Snippet Direct Answer Box */}
      <div className="site-shell" style={{ marginBottom: "1.75rem" }}>
        <div className="blog-quick-answer-card">
          <div className="quick-answer-badge">
            <i className="fas fa-bolt"></i> Quick Summary &amp; Direct Answer
          </div>
          <p className="quick-answer-text">{post.quickAnswer}</p>
          <div className="quick-answer-footer">
            <div className="quick-answer-pills">
              <span><strong>Invite Code:</strong> <code className="code-highlight">{OFFICIAL_INVITE_CODE}</code></span>
              <span><strong>Min Deposit:</strong> ₹100</span>
              <span><strong>Payout Time:</strong> 8-15 Mins</span>
            </div>
            <a
              href={OFFICIAL_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="quick-answer-btn"
            >
              Claim ₹100 Bonus <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Key Highlights Card with Quick Register CTA */}
      <div className="site-shell">
        <div className="blog-highlight-box">
          <div className="blog-highlight-left">
            <div className="blog-highlight-title">
              <i className="fas fa-certificate"></i> Official Player Verified Portal
            </div>
            <p className="blog-highlight-desc">
              Register now using official Invite Code <strong>{OFFICIAL_INVITE_CODE}</strong> to unlock ₹100 welcome bonus, low ₹100 minimum deposit, and priority VIP withdrawals.
            </p>
            <div className="blog-highlight-tags">
              <span><i className="fas fa-check"></i> Min Deposit: ₹100</span>
              <span><i className="fas fa-check"></i> Instant UPI Payouts</span>
              <span><i className="fas fa-check"></i> 100% Virus-Free APK</span>
            </div>
          </div>
          <div className="blog-highlight-actions">
            <a
              href={OFFICIAL_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero btn-hero-register"
              style={{ textDecoration: "none" }}
            >
              <i className="fas fa-user-plus"></i> Register Now
            </a>
            <a
              href={OFFICIAL_TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero btn-hero-telegram"
              style={{ textDecoration: "none" }}
            >
              <i className="fab fa-telegram"></i> Telegram VIP
            </a>
          </div>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="site-shell blog-layout-split">
        {/* Left Column: Article Body */}
        <div className="blog-body-main">
          {/* Table of Contents Mobile/Inline */}
          <nav className="blog-toc-box" aria-label="Table of Contents">
            <h2 className="blog-toc-title">
              <i className="fas fa-list-ol"></i> Table of Contents
            </h2>
            <ul className="blog-toc-list">
              {post.tableOfContents.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* HTML Content */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Mid Article Registration & Invite Code Banner */}
          <div className="blog-cta-banner">
            <div className="blog-cta-body">
              <span className="blog-cta-tag">Recommended Step</span>
              <h3>Create Your Official Veer Game Account</h3>
              <p>
                Join over 500,000+ players today. Use official invitation code{" "}
                <strong>{OFFICIAL_INVITE_CODE}</strong> during registration for exclusive bonus perks and telegram signal access.
              </p>
              <div className="blog-cta-buttons">
                <a
                  href={OFFICIAL_REGISTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero btn-hero-register"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fas fa-user-plus"></i> Open Free Account
                </a>
                <a
                  href={OFFICIAL_TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hero btn-hero-telegram"
                  style={{ textDecoration: "none" }}
                >
                  <i className="fab fa-telegram"></i> Join Telegram Signals
                </a>
              </div>
            </div>
          </div>

          {/* FAQs Section */}
          <section id="faqs" className="blog-faq-section">
            <h2 className="blog-h2">Frequently Asked Questions</h2>
            <div className="blog-faq-list">
              {post.faqs.map((faq, index) => (
                <div key={index} className="blog-faq-item pro-card">
                  <h3 className="blog-faq-question">
                    <i className="fas fa-circle-question"></i> {faq.question}
                  </h3>
                  <p className="blog-faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Contextual Backlinks to Homepage Hub */}
          <section className="blog-internal-backlinks-box">
            <h3>Explore More Veer Game Resources</h3>
            <p>Direct navigation to our core platform services and security audits:</p>
            <div className="blog-backlinks-pills">
              <Link href="/#overview">Veer Game Overview</Link>
              <Link href="/#register">Register Guide</Link>
              <Link href="/#login">Login Portal</Link>
              <Link href="/#apk">Download Android APK</Link>
              <Link href="/#wingo">Wingo Colour Prediction</Link>
              <Link href="/#deposit">Deposit ₹100 via UPI</Link>
              <Link href="/#withdraw">Instant Withdrawals</Link>
              <Link href="/#referral">Refer &amp; Earn Agent Salary</Link>
              <Link href="/#telegram">Official Telegram Channel</Link>
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Sidebar */}
        <aside className="blog-sidebar">
          {/* Quick Info Widget */}
          <div className="blog-sidebar-widget pro-card">
            <h3 className="widget-title">
              <i className="fas fa-bolt"></i> Quick Information
            </h3>
            <div className="widget-info-list">
              <div className="widget-info-row">
                <span>Platform:</span>
                <strong>Veer Game</strong>
              </div>
              <div className="widget-info-row">
                <span>Invite Code:</span>
                <strong className="code-highlight">{OFFICIAL_INVITE_CODE}</strong>
              </div>
              <div className="widget-info-row">
                <span>Min Deposit:</span>
                <strong>₹100</strong>
              </div>
              <div className="widget-info-row">
                <span>Min Withdrawal:</span>
                <strong>₹110</strong>
              </div>
              <div className="widget-info-row">
                <span>Payout Speed:</span>
                <strong>8 - 15 Mins</strong>
              </div>
              <div className="widget-info-row">
                <span>Android App:</span>
                <strong>v2.1 (12.4 MB)</strong>
              </div>
            </div>
            <a
              href={OFFICIAL_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sidebar-register"
            >
              <i className="fas fa-user-plus"></i> Register Free
            </a>
          </div>

          {/* Telegram Signals Widget */}
          <div className="blog-sidebar-widget telegram-widget pro-card">
            <div className="tg-widget-header">
              <i className="fab fa-telegram-plane"></i>
              <div>
                <h4>Official VIP Telegram</h4>
                <span>5 Daily Live Prediction Sessions</span>
              </div>
            </div>
            <p>
              Receive high-accuracy Wingo colour prediction signals directly on your phone with historical win rates of 85%+.
            </p>
            <a
              href={OFFICIAL_TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-sidebar-telegram"
            >
              <i className="fab fa-telegram"></i> Join Channel Free
            </a>
          </div>

          {/* Sticky Table of Contents for Desktop */}
          <div className="blog-sidebar-widget toc-widget pro-card">
            <h3 className="widget-title">
              <i className="fas fa-list"></i> On This Page
            </h3>
            <ul className="widget-toc-links">
              {post.tableOfContents.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      {/* Related Guides Section */}
      <section className="site-shell blog-related-section">
        <div className="section-divider" style={{ margin: "3rem auto 2rem" }}></div>
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "2rem" }}>
          More Essential Veer Game Guides
        </h2>
        <div className="blog-cards-grid">
          {relatedPosts.map((relPost) => (
            <article key={relPost.slug} className="blog-card pro-card">
              <Link href={`/blog/${relPost.slug}`} className="blog-card-img-link">
                <div className="blog-card-img-wrap">
                  <Image
                    src={relPost.image}
                    alt={relPost.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="blog-card-img"
                  />
                  <span className="blog-card-tag">{relPost.category}</span>
                </div>
              </Link>
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span>{relPost.readTime}</span>
                </div>
                <h3 className="blog-card-title">
                  <Link href={`/blog/${relPost.slug}`}>{relPost.title}</Link>
                </h3>
                <p className="blog-card-excerpt">{relPost.excerpt}</p>
                <div className="blog-card-footer">
                  <Link href={`/blog/${relPost.slug}`} className="blog-read-more">
                    <span>Read Article</span>
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}
