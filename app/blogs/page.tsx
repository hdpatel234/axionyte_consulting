import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/common/PageHeader";
import PartnersTicker from "@/components/common/PartnersTicker";
import { BLOG_POSTS } from "@/lib/company-data";

export const metadata: Metadata = {
  title: "Blogs & Editorial Insights | AXIONYTE Consulting",
  description:
    "Read the latest articles and analyses on enterprise cybersecurity strategy, vulnerability assessment, and artificial intelligence integration.",
};

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        title="Our Latest"
        highlightedWord="Articles"
        breadcrumbCurrent="Blogs"
      />

      <PartnersTicker />

      {/* Blog Listing Grid */}
      <div className="our-blog" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-8">
              <div className="section-title">
                <h3 className="wow fadeInUp">Thought Leadership</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Cybersecurity & AI <span>Insights</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  Strategic perspectives on defending digital infrastructure, managing enterprise compliance, and safely leveraging machine intelligence.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {BLOG_POSTS.map((post, idx) => (
              <div className="col-lg-4 col-md-6 mb-4" key={post.slug}>
                <div
                  className="blog-item wow fadeInUp"
                  data-wow-delay={`${0.15 * (idx + 1)}s`}
                  style={{ height: "100%" }}
                >
                  <div className="blog-featured-image">
                    <figure className="image-anime">
                      <Link href={`/blogs/${post.slug}`}>
                        <img src={post.image} alt={post.title} />
                      </Link>
                    </figure>
                    <div className="blog-date">
                      <p>{post.date}</p>
                    </div>
                  </div>

                  <div className="blog-content">
                    <div className="blog-content-header">
                      <span
                        className="badge mb-2"
                        style={{
                          backgroundColor: "rgba(0,240,255,0.1)",
                          color: "#00f0ff",
                          padding: "4px 10px",
                          borderRadius: "4px",
                          fontSize: "12px",
                        }}
                      >
                        {post.category}
                      </span>
                      <h3>
                        <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                      </h3>
                    </div>

                    <p>{post.excerpt}</p>

                    <div className="blog-btn mt-3">
                      <Link href={`/blogs/${post.slug}`} className="readmore-btn">
                        Read Full Article <i className="fa-solid fa-arrow-right ms-1"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
