import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = generatePageMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service for Regulation Protocol. Terms and conditions for using our website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <section className="bg-sand-50 pt-28 pb-8 md:pt-32 md:pb-10">
        <Container size="narrow">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-primary-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-muted">Last updated: February 2026</p>
        </Container>
      </section>

      <div className="bg-white pt-4 pb-2">
        <Container size="narrow">
          <Breadcrumbs items={[{ label: "Terms of Service" }]} />
        </Container>
      </div>

      <SectionWrapper background="white">
        <Container size="narrow">
          <div className="prose prose-lg prose-brand max-w-none prose-headings:font-serif prose-headings:text-primary-900 prose-p:text-primary-800 prose-p:leading-relaxed">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the Regulation Protocol website ({SITE.url})
              and services, you agree to be bound by these Terms of Service. If
              you do not agree, please do not use our website or services.
            </p>

            <h2>Services</h2>
            <p>
              Regulation Protocol provides coaching services related to nervous
              system regulation and identity transformation. Our services are
              educational and coaching in nature and are not a substitute for
              professional medical advice, diagnosis, or treatment.
            </p>

            <h2>Disclaimer</h2>
            <p>
              The information provided on this website and through our coaching
              services is for educational and informational purposes only. Kevin
              Gonzales is not a licensed therapist, psychologist, or medical
              professional. Always seek the advice of your physician or other
              qualified health provider with any questions you may have regarding
              a medical condition.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and
              the &ldquo;Regulation Protocol&rdquo; brand and methodology, is
              the property of Regulation Protocol and is protected by copyright
              and intellectual property laws.
            </p>

            <h2>User Conduct</h2>
            <p>When using our website and services, you agree to:</p>
            <ul>
              <li>Provide accurate information in any forms you submit</li>
              <li>Not misuse or disrupt the website or services</li>
              <li>
                Respect the confidentiality of other coaching participants
              </li>
              <li>Not reproduce or distribute our proprietary content</li>
            </ul>

            <h2>Coaching Engagements</h2>
            <p>
              Coaching programs are subject to separate agreements provided at
              the time of enrollment. Refund policies, payment terms, and
              engagement details are outlined in those agreements.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Regulation Protocol and Kevin Gonzales shall not be liable for any
              indirect, incidental, special, or consequential damages arising out
              of or in connection with the use of our website or services.
              Results from coaching vary by individual.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to update these terms at any time. Changes
              will be posted on this page with an updated date.
            </p>

            <h2>Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </div>
        </Container>
      </SectionWrapper>
    </>
  );
}
