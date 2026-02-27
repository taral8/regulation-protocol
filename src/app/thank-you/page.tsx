import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = generatePageMetadata({
  title: "Thank You",
  description: "Thank you for reaching out to Regulation Protocol.",
  path: "/thank-you",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <section className="min-h-[70vh] flex items-center bg-warm-white pt-20">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <div className="w-16 h-16 mx-auto bg-gold-200/30 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-gold-500"
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
          </div>
          <h1 className="font-serif text-4xl font-bold text-primary-900">
            Thank you &mdash; we&apos;ll be in touch.
          </h1>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            Your request has been received. I&apos;ll personally review it and
            get back to you within 48 hours. In the meantime, take a breath.
            You&apos;ve taken the first step.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/">Return Home</Button>
            <Button href="/blog" variant="secondary">
              Read the Blog
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
