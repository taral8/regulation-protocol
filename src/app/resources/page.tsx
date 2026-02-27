import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { LeadMagnetForm } from "@/components/sections/LeadMagnetForm";
import { BlogPostCard } from "@/components/sections/BlogPostCard";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/sections/FadeIn";
import { getAllPosts } from "@/data/blog/posts";

export const metadata: Metadata = generatePageMetadata({
  title: "Resources",
  description:
    "Free nervous system regulation resources I've created for you. Take the Survival Mode Diagnostic and get the 3-Day Regulation Reset.",
  path: "/resources",
});

export default function ResourcesPage() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="bg-sand-50 pt-28 pb-8 md:pt-32 md:pb-10">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 tracking-tight">
              Start Here
            </h1>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              Free tools I&apos;ve created to help you begin regulating your
              nervous system today.
            </p>
          </div>
        </Container>
      </section>

      <div className="bg-white pt-4 pb-2">
        <Container>
          <Breadcrumbs items={[{ label: "Resources" }]} />
        </Container>
      </div>

      {/* Survival Mode Diagnostic */}
      <SectionWrapper background="white" id="diagnostic">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="bg-sand-50 rounded-xl p-8 md:p-12 border border-stone-200">
                <span className="text-xs font-sans font-medium text-gold-600 tracking-wider uppercase">
                  Free Assessment
                </span>
                <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-primary-900">
                  Survival Mode Diagnostic
                </h2>
                <p className="mt-4 text-primary-800 leading-relaxed">
                  Find out if your nervous system is stuck in survival mode
                  &mdash; and what to do about it.
                </p>

                <div className="mt-6">
                  <h3 className="font-serif text-lg font-semibold text-primary-900 mb-4">
                    What You&apos;ll Learn
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Whether your baseline nervous system state is regulated or dysregulated",
                      "Which survival patterns are running your daily life",
                      "Why your meditation practice may not be working",
                      "Your personalized next step toward regulation",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="flex-shrink-0 mt-1 text-gold-500">
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        </span>
                        <span className="text-primary-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <LeadMagnetForm
                    buttonText="Take the Diagnostic"
                    source="survival-diagnostic"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </SectionWrapper>

      {/* 3-Day Regulation Reset */}
      <SectionWrapper background="sand" id="reset">
        <Container>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="bg-white rounded-xl p-8 md:p-12 border border-stone-200">
                <span className="text-xs font-sans font-medium text-gold-600 tracking-wider uppercase">
                  Free Program
                </span>
                <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-primary-900">
                  3-Day Regulation Reset
                </h2>
                <p className="mt-4 text-primary-800 leading-relaxed">
                  A structured 3-day introduction to nervous system regulation.
                  The same foundation I teach in my coaching programs.
                </p>

                <div className="mt-6">
                  <h3 className="font-serif text-lg font-semibold text-primary-900 mb-4">
                    What You&apos;ll Learn
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Day 1: How to recognize your nervous system state in real-time",
                      "Day 2: A specific regulation technique you can use before meditation",
                      "Day 3: How to begin building a stable baseline that holds under pressure",
                      "Bonus: The science behind why regulation must come before transformation",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="flex-shrink-0 mt-1 text-gold-500">
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                        </span>
                        <span className="text-primary-800">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <LeadMagnetForm
                    buttonText="Get the Reset"
                    source="3-day-reset"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </SectionWrapper>

      {/* Blog Preview */}
      {recentPosts.length > 0 && (
        <SectionWrapper background="white">
          <Container>
            <FadeIn>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-900 text-center mb-10">
                From the Blog
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <FadeIn key={post.slug}>
                  <BlogPostCard post={post} />
                </FadeIn>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="text-gold-600 font-medium hover:underline"
              >
                Read all articles &rarr;
              </Link>
            </div>
          </Container>
        </SectionWrapper>
      )}

      <CTASection
        headline="Ready for More?"
        body="If you've done the diagnostic and the reset and want to go deeper, let's work together directly."
        ctaText="Work With Me"
        ctaHref="/work-with-me"
      />
    </>
  );
}
