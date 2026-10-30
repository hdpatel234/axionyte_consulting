import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PartnersTicker from "@/components/common/PartnersTicker";
import { BLOG_POSTS, COMPANY } from "@/lib/company-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: `Article Not Found | ${COMPANY.name}`,
    };
  }

  return {
    title: `${post.title} | ${COMPANY.name}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug);

  return (
    <>
      {/* Page Header Section Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  {post.title}
                </h1>
                <div className="post-single-meta wow fadeInUp">
                  <ol className="breadcrumb">
                    <li>
                      <i className="fa-regular fa-user"></i> {COMPANY.name} Editorial
                    </li>
                    <li>
                      <i className="fa-regular fa-clock"></i> {post.date}
                    </li>
                    <li>
                      <i className="fa-regular fa-bookmark"></i> {post.category}
                    </li>
                    <li>
                      <i className="fa-regular fa-hourglass"></i> {post.readTime}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header Section End */}

      {/* Industries Marquee */}
      <PartnersTicker />

      {/* Page Single Post Start */}
      <div className="page-single-post">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* Post Featured Image Start */}
              <div className="post-image">
                <figure className="image-anime">
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: "100%", maxHeight: "560px", objectFit: "cover", borderRadius: "12px" }}
                  />
                </figure>
              </div>
              {/* Post Featured Image End */}

              {/* Post Single Content Start */}
              <div className="post-content">
                <div className="post-entry">
                  <p className="lead wow fadeInUp" style={{ fontSize: "1.2rem", fontWeight: 500 }}>
                    {post.excerpt}
                  </p>

                  <div className="wow fadeInUp" data-wow-delay="0.2s">
                    {post.content
                      .trim()
                      .split("\n\n")
                      .map((paragraph, index) => {
                        const trimmed = paragraph.trim();
                        if (trimmed.startsWith("Key Pillars") || trimmed.startsWith("A comprehensive assessment") || trimmed.startsWith("Building Sustainable")) {
                          return (
                            <h3 key={index} className="mt-4 mb-3" style={{ fontSize: "1.35rem" }}>
                              {trimmed.split(":")[0]}
                            </h3>
                          );
                        }
                        if (trimmed.includes("1. ") || trimmed.includes("- ")) {
                          const lines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);
                          return (
                            <ul key={index} className="my-3 ps-4" style={{ listStyleType: "disc" }}>
                              {lines.map((li, i) => (
                                <li key={i} className="mb-2">
                                  {li.replace(/^\d+\.\s*/, "").replace(/^-\s*/, "")}
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        return (
                          <p key={index} className="mb-3">
                            {trimmed}
                          </p>
                        );
                      })}
                  </div>

                  <blockquote className="wow fadeInUp" data-wow-delay="0.4s">
                    <p>
                      &ldquo;Proactive digital defense and intelligent workflow modernization represent two sides of the same coin in modern enterprise architecture.&rdquo;
                    </p>
                    <cite className="d-block mt-2 font-weight-bold" style={{ fontStyle: "normal", color: "var(--accent-color, #ff7a00)" }}>
                      — {COMPANY.owner}, {COMPANY.role}
                    </cite>
                  </blockquote>

                  <h3 className="wow fadeInUp" data-wow-delay="0.5s">
                    Connecting Strategy with Action
                  </h3>
                  <p className="wow fadeInUp" data-wow-delay="0.6s">
                    Every organization operates within unique constraints and regulatory expectations. Whether hardening your infrastructure against sophisticated cyber intrusions or adopting applied artificial intelligence to boost operational resilience, our advisory team brings rigorous methodology and practical domain expertise.
                  </p>

                  {/* Consultation Banner Callout */}
                  <div
                    className="p-4 my-5 rounded text-white"
                    style={{
                      background: "linear-gradient(135deg, rgba(16, 32, 54, 0.95), rgba(10, 48, 30, 0.95))",
                      border: "1px solid rgba(46, 204, 113, 0.3)",
                    }}
                  >
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <h4 className="text-white mb-2">Need Guidance on Your Security or AI Roadmap?</h4>
                        <p className="mb-0 text-white-50">
                          Schedule a direct consultation with {COMPANY.owner} to discuss your organization&apos;s specific requirements.
                        </p>
                      </div>
                      <div className="col-md-4 text-md-end mt-3 mt-md-0">
                        <Link href="/contact" className="btn-default">
                          Talk with Our Expert
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Post Tag Links Start */}
                <div className="post-tag-links">
                  <div className="row align-items-center">
                    <div className="col-lg-8">
                      <div className="post-tags wow fadeInUp" data-wow-delay="0.3s">
                        <span className="tag-links">
                          Category:
                          <Link href="/blogs">{post.category}</Link>
                          <Link href="/service">Consulting</Link>
                          <Link href="/service">Enterprise AI</Link>
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                      <Link href="/blogs" className="btn-default btn-sm no-arrow">
                        &larr; Back to All Blogs
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Post Tag Links End */}
              </div>
              {/* Post Single Content End */}

              {/* Related Posts Section Start */}
              {relatedPosts.length > 0 && (
                <div className="related-posts mt-5 pt-4">
                  <div className="section-title mb-4">
                    <h3 className="wow fadeInUp">Further Reading</h3>
                    <h2 className="text-anime-style-2">Related Articles</h2>
                  </div>
                  <div className="row">
                    {relatedPosts.slice(0, 2).map((item) => (
                      <div key={item.slug} className="col-md-6 mb-4">
                        <div className="post-item" style={{ background: "rgba(255,255,255,0.03)", padding: "20px", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)" }}>
                          <div className="post-featured-image mb-3">
                            <figure>
                              <Link href={`/blogs/${item.slug}`}>
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  style={{ width: "100%", height: "220px", objectFit: "cover", borderRadius: "8px" }}
                                />
                              </Link>
                            </figure>
                          </div>
                          <div className="post-item-body">
                            <span style={{ fontSize: "13px", color: "var(--accent-color, #ff7a00)" }}>{item.category}</span>
                            <h4 className="mt-2" style={{ fontSize: "1.15rem" }}>
                              <Link href={`/blogs/${item.slug}`}>{item.title}</Link>
                            </h4>
                            <p style={{ fontSize: "14px", color: "var(--text-color)" }}>{item.excerpt}</p>
                            <Link href={`/blogs/${item.slug}`} className="readmore-btn">
                              Read Article &rarr;
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {/* Related Posts Section End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page Single Post End */}
    </>
  );
}
