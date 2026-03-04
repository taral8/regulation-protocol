import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FAQPageSchema } from "@/components/seo/FAQPageSchema";
import { ApplicationForm } from "@/components/sections/ApplicationForm";
import { LeadMagnetForm } from "@/components/sections/LeadMagnetForm";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/sections/FadeIn";
import { workWithMeFAQ } from "@/data/faq";

export const metadata: Metadata = generatePageMetadata({
  title: "Work With Me",
  description:
    "Apply for 1:1 Regulation Coaching or join the 3-Month Group Coaching waitlist. Nervous system regulation and identity transformation — I'll guide you personally.",
  path: "/work-with-me",
});

export default function WorkWithMePage() {
  return (
    <>
      <FAQPageSchema items={workWithMeFAQ} />

      <section className="bg-sand-50 pt-28 pb-8 md:pt-32 md:pb-10">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 tracking-tight">
              Work With Me
            </h1>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              I offer two paths to regulated, embodied transformation. Both
              built on The Regulation Protocol&trade;.
            </p>
          </div>
        </Container>
      </section>

      <div className="bg-white pt-4 pb-2">
        <Container>
          <Breadcrumbs items={[{ label: "Work With Me" }]} />
        </Container>
      </div>

      {/* 1:1 Coaching */}
      <SectionWrapper background="white" id="one-on-one">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
            <FadeIn>
              <div>
                <span className="text-xs font-sans font-medium text-gold-600 tracking-wider uppercase">
                  High-Touch
                </span>
                <h2 className="mt-2 font-serif text-3xl font-bold text-primary-900">
                  1:1 Regulation Coaching
                </h2>
                <p className="mt-4 text-primary-800 leading-relaxed">
                  High-touch nervous system regulation and identity
                  stabilization for high-functioning adults. Private sessions
                  with me, personalized protocols, and ongoing support.
                </p>

                <div className="mt-8 bg-sand-50 rounded-lg p-6 border border-stone-200">
                  <p className="text-sm text-muted uppercase tracking-wider font-sans font-medium">
                    Investment
                  </p>
                  <p className="mt-1 font-serif text-2xl font-bold text-primary-900">
                    Starting at $15,000
                  </p>
                  <p className="text-sm text-muted">3-month engagement</p>
                </div>

                <div className="mt-8">
                  <h3 className="font-serif text-lg font-semibold text-primary-900 mb-4">
                    What&apos;s Included
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Private coaching sessions with me",
                      "Personalized nervous system regulation protocols",
                      "Identity stabilization practices",
                      "Support between sessions",
                      "The full Regulation Protocol\u2122 framework",
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
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="bg-sand-50 rounded-xl p-8 border border-stone-200">
                <h3 className="font-serif text-xl font-bold text-primary-900 mb-6">
                  Apply for 1:1 Coaching
                </h3>
                <ApplicationForm />
              </div>
            </FadeIn>
          </div>
        </Container>
      </SectionWrapper>

      {/* Group Coaching */}
      <SectionWrapper background="sand" id="group">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <span className="text-xs font-sans font-medium text-gold-600 tracking-wider uppercase">
                Group Container
              </span>
              <h2 className="mt-2 font-serif text-3xl font-bold text-primary-900">
                3-Month Group Coaching
              </h2>
              <p className="mt-4 text-primary-800 leading-relaxed">
                A structured group container to reset your baseline, stabilize
                identity, and build coherence under pressure. The same
                Regulation Protocol&trade; framework I use in 1:1, in a shared
                container.
              </p>

              <div className="mt-8 bg-white rounded-lg p-6 border border-stone-200 inline-block">
                <p className="text-sm text-muted uppercase tracking-wider font-sans font-medium">
                  Next Cohort Pricing
                </p>
                <p className="mt-1 font-serif text-2xl font-bold text-primary-900">
                  $5,000
                </p>
                <p className="text-sm text-muted">3-month program</p>
              </div>

              <div className="mt-8">
                <h3 className="font-serif text-lg font-semibold text-primary-900 mb-4">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3 text-left max-w-md mx-auto">
                  {[
                    "Weekly group regulation sessions",
                    "The full 3-phase Regulation Protocol\u2122",
                    "Peer support and accountability",
                    "Guided practices and protocols",
                    "Community access between sessions",
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

              <div className="mt-10 max-w-md mx-auto">
                <p className="text-sm text-muted mb-4">
                  Join the waitlist for the next cohort.
                </p>
                <LeadMagnetForm
                  buttonText="Join the Waitlist"
                  source="group-waitlist"
                />
              </div>
            </FadeIn>
          </div>
        </Container>
      </SectionWrapper>

      {/* Who it's for / not for */}
      <SectionWrapper background="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <FadeIn>
              <div>
                <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">
                  This Is For You If&hellip;
                </h2>
                <ul className="space-y-4">
                  {[
                    "You are high-functioning but internally overwhelmed.",
                    "You\u2019ve done meditation or therapy but still feel reactive.",
                    "You are spiritually aware but emotionally dysregulated.",
                    "You want identity-level change, not surface tactics.",
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
                      <span className="text-primary-800 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div>
                <h2 className="font-serif text-2xl font-bold text-primary-900 mb-6">
                  This Is Not For You If&hellip;
                </h2>
                <ul className="space-y-4">
                  {[
                    "You want productivity hacks.",
                    "You\u2019re brand new to meditation.",
                    "You want quick money manifestation.",
                    "You\u2019re unwilling to regulate before expanding.",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 mt-1 text-stone-400">
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </span>
                      <span className="text-muted leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper background="sand">
        <Container size="narrow">
          <FadeIn>
            <FAQAccordion items={workWithMeFAQ} headline="Frequently Asked Questions" />
          </FadeIn>
        </Container>
      </SectionWrapper>

      <CTASection
        headline="End Survival As Your Baseline."
        body="Start with the Baseline Reset. Build stability. Become someone new."
        ctaText="Start the Baseline Reset"
        ctaHref="/resources#reset"
      />
    </>
  );
}
