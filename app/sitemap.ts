import { MetadataRoute } from "next";
import { BLOG_POSTS, SHOW_BLOGS } from "@/lib/company-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://axionyte-consulting.vercel.app";

  const staticRoutes = [
    "",
    "/company",
    "/service",
    "/partnerships",
    "/contact",
    "/case-studies",
    "/privacy-policy",
    "/terms-and-conditions",
    "/cookie-policy",
    "/faqs",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-10-30"),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const blogRoutes = SHOW_BLOGS
    ? BLOG_POSTS.map((post) => ({
        url: `${baseUrl}/blogs/${post.slug}`,
        lastModified: new Date("2026-10-30"),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
    : [];

  return [...staticRoutes, ...blogRoutes];
}
