import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CTASection } from "@/components/sections/CTASection";
import { PersonSchema } from "@/components/seo/PersonSchema";
import { FadeIn } from "@/components/sections/FadeIn";

export const metadata: Metadata = generatePageMetadata({
  title: "About Kevin Gonzales",
  description:
    "I bridge neuroscience and spirituality to help high-functioning adults move from survival mode into embodied coherence. 7 years of embodied practice.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PersonSchema />

      <section className="bg-sand-50 pt-28 pb-8 md:pt-32 md:pb-10">
        <Container>
          <div className="max-w-3xl">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary-900 tracking-tight">
              Hi, I&apos;m Kevin Gonzales
            </h1>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              I teach people how to regulate their nervous system so they can
              become someone new.
            </p>
          </div>
        </Container>
      </section>

      <div className="bg-white pt-4 pb-2">
        <Container size="narrow">
          <Breadcrumbs items={[{ label: "About" }]} />
        </Container>
      </div>

      {/* Origin Story */}
      <SectionWrapper background="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <FadeIn>
              <div className="aspect-[4/5] relative rounded-xl overflow-hidden md:sticky md:top-28">
                <Image
                  src="/images/kevin-gonzales.jpg"
                  alt="Kevin Gonzales — Nervous System & Identity Transformation Coach"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <h2 className="font-serif text-3xl font-bold text-primary-900">
                  From Survival to Coherence
                </h2>
                <p className="text-primary-800 leading-relaxed">
                  I know what chronic anxiety feels like. I know what it&apos;s
                  like to hold everything together on the outside while falling
                  apart inside. For years, I lived in a state of hypervigilance
                  &mdash; driven by debt stress, depression, and the constant
                  hum of a nervous system that didn&apos;t know how to rest.
                </p>
                <p className="text-primary-800 leading-relaxed">
                  I tried everything. Therapy. Breathwork. Personal development.
                  And while each one gave me a piece of the puzzle, none of them
                  addressed the root: my nervous system was stuck in survival
                  mode.
                </p>
                <p className="text-primary-800 leading-relaxed">
                  The turning point came when I sought God &mdash; not as a
                  concept, but as a lived experience. Meditation became a direct
                  encounter, not a relaxation technique. And through that
                  encounter, I discovered that the bridge between neuroscience
                  and spirituality isn&apos;t theory. It&apos;s regulation.
                </p>
                <p className="text-primary-800 leading-relaxed">
                  Once I learned to regulate my nervous system first &mdash;
                  before the meditation, before the identity work, before the
                  expansion &mdash; everything shifted. Not overnight. But
                  deeply. Permanently. I moved from survival to coherence.
                </p>
                <p className="text-primary-800 leading-relaxed">
                  That transformation became The Regulation Protocol: a
                  structured path that helps others do what I did &mdash; not
                  through shortcuts, but through the honest, embodied work of
                  becoming someone new.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper background="sand">
        <Container size="narrow">
          <FadeIn>
            <h2 className="font-serif text-3xl font-bold text-primary-900 text-center mb-12">
              The Path
            </h2>
          </FadeIn>
          <div className="space-y-8">
            {[
              {
                year: "2019",
                event:
                  "Began daily meditation practice during deepest anxiety and debt crisis.",
              },
              {
                year: "2020",
                event:
                  "Discovered nervous system regulation as the missing foundation for meditation.",
              },
              {
                year: "2021",
                event:
                  "Started YouTube channel sharing regulation mechanics. First clients began working 1:1.",
              },
              {
                year: "2022\u20132024",
                event:
                  "Built to 200+ YouTube videos, 8.5K subscribers. 95% of revenue from YouTube audience trust.",
              },
              {
                year: "2025",
                event:
                  "Launched The Regulation Protocol\u2122 as a structured coaching framework.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="flex gap-6 items-start">
                  <span className="flex-shrink-0 text-lg font-serif font-bold text-gold-500 w-24">
                    {item.year}
                  </span>
                  <div className="flex-1 pb-8 border-l-2 border-stone-200 pl-6">
                    <p className="text-primary-800 leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Authority */}
      <SectionWrapper background="white">
        <Container size="narrow">
          <FadeIn>
            <h2 className="font-serif text-3xl font-bold text-primary-900 mb-8">
              What Makes My Work Different
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {[
              {
                title: "Embodied, Not Theoretical",
                body: "I don\u2019t teach from a script. I teach from a regulated nervous system. Clients feel the difference immediately.",
              },
              {
                title: "Mechanism-Focused",
                body: "I explain the neuroscience behind every practice. You\u2019ll understand why things work, not just what to do.",
              },
              {
                title: "Calm Under Pressure",
                body: "When clients are in turbulence, I hold steady. That\u2019s not a skill I learned in a course \u2014 it\u2019s the result of years of embodied regulation.",
              },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="border-l-2 border-gold-400 pl-6">
                  <h3 className="font-serif text-lg font-semibold text-primary-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-muted leading-relaxed">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper background="sand">
        <Container>
          <FadeIn>
            <h2 className="font-serif text-3xl font-bold text-primary-900 text-center mb-12">
              What My Clients Say
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { quote: "I felt calm just talking to you.", name: "Sarah M." },
              {
                quote: "You explained the mechanics, not just the woo-woo.",
                name: "Rachel T.",
              },
              {
                quote:
                  "I could feel he was regulated. That\u2019s what made me trust him.",
                name: "Natalie W.",
              },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 sm:p-8 relative">
                  <span
                    className="absolute top-4 right-6 text-5xl font-serif text-gold-200 leading-none select-none"
                    aria-hidden="true"
                  >
                    &rdquo;
                  </span>
                  <blockquote className="relative">
                    <p className="text-primary-800 leading-relaxed italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </blockquote>
                  <p className="mt-4 pt-3 border-t border-stone-200 font-sans font-semibold text-sm text-primary-900">
                    {t.name}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </SectionWrapper>

      <CTASection
        headline="Ready to Regulate?"
        body="Start with the Baseline Reset and build a foundation for identity-level change."
        ctaText="Start the Baseline Reset"
        ctaHref="/resources#reset"
        secondaryCta={{ text: "Work With Me", href: "/work-with-me" }}
      />
    </>
  );
}
