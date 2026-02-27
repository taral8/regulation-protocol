import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Regulation Protocol. How we collect, use, and protect your personal information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-sand-50 pt-28 pb-8 md:pt-32 md:pb-10">
        <Container size="narrow">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-muted">Last updated: February 2026</p>
        </Container>
      </section>

      <div className="bg-white pt-4 pb-2">
        <Container size="narrow">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
        </Container>
      </div>

      <SectionWrapper background="white">
        <Container size="narrow">
          <div className="prose prose-lg prose-brand max-w-none prose-headings:font-serif prose-headings:text-primary-900 prose-p:text-primary-800 prose-p:leading-relaxed">
            <h2>Overview</h2>
            <p>
              Regulation Protocol (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects your privacy and is committed to
              protecting your personal data. This privacy policy explains how we
              collect, use, and safeguard your information when you visit{" "}
              {SITE.url} or engage with our services.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Contact information:</strong> Name, email address when
                you subscribe to our newsletter, download resources, or submit
                an application form.
              </li>
              <li>
                <strong>Form submissions:</strong> Information you voluntarily
                provide through application forms, including goals and
                challenges.
              </li>
              <li>
                <strong>Usage data:</strong> Anonymous analytics data about how
                you interact with our website (page views, time on page, etc.)
                collected via privacy-focused analytics.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Deliver requested resources (diagnostics, resets, etc.)</li>
              <li>Respond to coaching applications</li>
              <li>Send relevant email communications (with your consent)</li>
              <li>Improve our website and services</li>
            </ul>

            <h2>Email Communications</h2>
            <p>
              If you provide your email address, we may send you emails related
              to nervous system regulation and our services. You can unsubscribe
              at any time by clicking the unsubscribe link in any email.
            </p>

            <h2>Third-Party Services</h2>
            <p>We may use the following third-party services:</p>
            <ul>
              <li>
                <strong>ConvertKit:</strong> Email marketing and delivery
              </li>
              <li>
                <strong>Plausible Analytics:</strong> Privacy-focused website
                analytics (no cookies, no personal data)
              </li>
              <li>
                <strong>Vercel:</strong> Website hosting
              </li>
            </ul>

            <h2>Cookies</h2>
            <p>
              Our website uses minimal cookies required for basic functionality.
              We do not use tracking cookies or third-party advertising cookies.
            </p>

            <h2>Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to
              fulfill the purposes outlined in this policy, unless a longer
              retention period is required by law.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Unsubscribe from email communications at any time</li>
            </ul>

            <h2>Contact</h2>
            <p>
              For any privacy-related questions or requests, contact us at{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
