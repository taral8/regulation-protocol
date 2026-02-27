import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CTASection } from "@/components/sections/CTASection";
import { ArticleSchema } from "@/components/seo/ArticleSchema";
import { getAllPosts, getPostBySlug } from "@/data/blog/posts";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

function markdownToHtml(content: string): string {
  return content
    .split("\n\n")
    .map((block) => {
      if (block.startsWith("## ")) {
        return `<h2>${block.slice(3)}</h2>`;
      }
      if (block.startsWith("### ")) {
        return `<h3>${block.slice(4)}</h3>`;
      }
      if (block.startsWith("- ")) {
        const items = block
          .split("\n")
          .filter((line) => line.startsWith("- "))
          .map((line) => {
            const withLinks = line
              .slice(2)
              .replace(
                /\[([^\]]+)\]\(([^)]+)\)/g,
                '<a href="$2">$1</a>'
              );
            const withBold = withLinks.replace(
              /\*\*([^*]+)\*\*/g,
              "<strong>$1</strong>"
            );
            return `<li>${withBold}</li>`;
          })
          .join("");
        return `<ul>${items}</ul>`;
      }
      const withLinks = block.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2">$1</a>'
      );
      const withBold = withLinks.replace(
        /\*\*([^*]+)\*\*/g,
        "<strong>$1</strong>"
      );
      return `<p>${withBold}</p>`;
    })
    .join("\n");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const contentHtml = markdownToHtml(post.content);

  return (
    <>
      <ArticleSchema
        headline={post.title}
        description={post.excerpt}
        datePublished={post.date}
        url={`/blog/${post.slug}`}
      />

      <section className="bg-sand-50 pt-28 pb-8 md:pt-32 md:pb-10">
        <Container size="narrow">
          <Breadcrumbs
            items={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
          />
          <span className="inline-block text-xs font-sans font-medium text-gold-600 bg-gold-200/30 px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 leading-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted">
            <span>By Kevin Gonzales</span>
            <span>&middot;</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span>&middot;</span>
            <span>{post.readingTime}</span>
          </div>
        </Container>
      </section>

      <SectionWrapper background="white">
        <Container size="narrow">
          <article
            className="prose prose-lg prose-brand max-w-none prose-headings:font-serif prose-headings:text-primary-900 prose-p:text-primary-800 prose-p:leading-relaxed prose-strong:text-primary-900 prose-a:text-gold-600 prose-a:no-underline hover:prose-a:underline prose-ul:text-primary-800 prose-li:text-primary-800"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </Container>
      </SectionWrapper>

      <SectionWrapper background="sand" padding="small">
        <Container size="narrow">
          <div className="flex gap-6 items-center">
            <div className="flex-shrink-0 w-16 h-16 relative rounded-full overflow-hidden">
              <Image
                src="/images/kevin-gonzales.jpg"
                alt="Kevin Gonzales"
                fill
                className="object-cover object-top"
                sizes="64px"
              />
            </div>
            <div>
              <p className="font-serif font-semibold text-primary-900">
                Kevin Gonzales
              </p>
              <p className="text-sm text-muted mt-1">
                I&apos;m a nervous system &amp; identity transformation coach
                and the founder of Regulation Protocol.
              </p>
              <Link
                href="/about"
                className="text-sm text-gold-600 hover:underline mt-1 inline-block"
              >
                Learn more about me
              </Link>
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {relatedPosts.length > 0 && (
        <SectionWrapper background="white">
          <Container>
            <h2 className="font-serif text-2xl font-bold text-primary-900 mb-8">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="group">
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <h3 className="font-serif text-lg font-semibold text-primary-900 group-hover:text-gold-600 transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </SectionWrapper>
      )}

      <CTASection
        headline="Ready to Regulate?"
        body="Start with the Baseline Reset and build the foundation for identity-level change."
        ctaText="Start the Baseline Reset"
        ctaHref="/resources#reset"
        secondaryCta={{ text: "Work With Me", href: "/work-with-me" }}
      />
    </>
  );
}
