import type { MetadataRoute } from "next";
import { getAllPosts } from "@/data/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.regulationprotocol.com";

  const staticPages = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
    {
      path: "/work-with-me",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/resources",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...blogPosts,
  ];
}
