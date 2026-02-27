import Link from "next/link";
import type { BlogPost } from "@/types";

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      {/* Image placeholder */}
      <div className="aspect-[16/9] bg-sand-100 flex items-center justify-center">
        <span className="text-sm text-stone-300 font-sans">
          Featured Image
        </span>
      </div>

      <div className="p-6">
        {/* Category badge */}
        <span className="inline-block text-xs font-sans font-medium text-gold-600 bg-gold-200/30 px-3 py-1 rounded-full">
          {post.category}
        </span>

        <h3 className="mt-3 font-serif text-xl font-semibold text-primary-900 leading-tight group-hover:text-gold-600 transition-colors">
          <Link href={`/blog/${post.slug}`} className="block">
            {post.title}
          </Link>
        </h3>

        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center justify-between text-xs text-stone-400">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span>{post.readingTime}</span>
        </div>
      </div>
    </article>
  );
}
