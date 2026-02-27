import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { BlogPostCard } from "@/components/sections/BlogPostCard";
import { CTASection } from "@/components/sections/CTASection";
import { getAllPosts } from "@/data/blog/posts";

export const metadata: Metadata = generatePageMetadata({
  title: "Blog",
  description:
    "Articles I've written on nervous system regulation, identity transformation, and embodied change.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-sand-50 pt-28 pb-8 md:pt-32 md:pb-10">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 tracking-tight">
              The Regulation Protocol Blog
            </h1>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Mechanism-focused articles I&apos;ve written on nervous system
              regulation, identity transformation, and embodied change.
            </p>
          </div>
        </Container>
      </section>

      <div className="bg-white pt-4 pb-2">
        <Container>
          <Breadcrumbs items={[{ label: "Blog" }]} />
        </Container>
      </div>

      <SectionWrapper background="white">
        <Container>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted text-lg">
                Blog posts coming soon. Check back shortly.
              </p>
            </div>
          )}
        </Container>
      </SectionWrapper>

      <CTASection
        headline="Want to Go Deeper?"
        body="Take the Survival Mode Diagnostic or get the 3-Day Regulation Reset."
        ctaText="Start Here"
        ctaHref="/resources"
        variant="secondary"
      />
    </>
  );
}
