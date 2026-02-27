import { Container } from "@/components/ui/Container";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FAQPageSchema } from "@/components/seo/FAQPageSchema";
import { FadeIn } from "@/components/sections/FadeIn";
import { SacredGeometry } from "@/components/sections/SacredGeometry";
import { homepageFAQ } from "@/data/faq";

export default function HomePage() {
  return (
    <>
      <FAQPageSchema items={homepageFAQ} />

      {/* ===== HERO ===== */}
      <section className="relative bg-primary-900 pt-28 pb-16 md:pt-36 md:pb-28 overflow-hidden">
        {/* Subtle radial warm glow behind content */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 25% 40%, rgba(200,168,124,0.12) 0%, transparent 55%), radial-gradient(ellipse at 75% 50%, rgba(180,147,95,0.08) 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div>
              <FadeIn>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-sand-50 leading-[1.08] tracking-tight">
                  Regulate Your Nervous System. Rebuild Your Identity Beyond
                  Survival.
                </h1>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="mt-6 text-lg sm:text-xl text-sand-300 leading-relaxed max-w-2xl">
                  For high-functioning, spiritually aware adults who look strong
                  on the outside but feel overwhelmed inside.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button href="/resources#reset" size="large">
                    Start the Baseline Reset
                  </Button>
                  <Button
                    href="/work-with-me"
                    variant="secondary"
                    size="large"
                    className="border-sand-400/40 !text-sand-100 hover:!bg-sand-400/10 hover:!border-gold-400/60"
                  >
                    Work With Me
                  </Button>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="mt-6 text-sm text-sand-400">
                  No hype. No shortcuts. Just regulated, embodied
                  transformation.
                </p>
              </FadeIn>
            </div>

            {/* Right — sacred geometry */}
            <div className="hidden lg:flex items-center justify-center">
              <SacredGeometry className="w-[480px] h-[480px] xl:w-[540px] xl:h-[540px]" />
            </div>
          </div>
        </Container>
      </section>

      {/* ===== TRUST STRIP ===== */}
      <section className="bg-white border-y border-stone-200 py-4">
        <Container>
          <p className="text-center text-sm text-muted font-sans tracking-wide">
            7 years embodied practice &bull; 201 YouTube videos &bull; 8.5K+
            subscribers &bull; 95% of revenue from YouTube
          </p>
        </Container>
      </section>

      {/* ===== PROBLEM MIRROR ===== */}
      <section className="bg-primary-800 py-16 md:py-28">
        <Container size="narrow">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-10">
              You&apos;re Not Failing. You&apos;re Dysregulated.
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {[
              "I know better\u2026 but I still react.",
              "I meditate, but I\u2019m still triggered.",
              "I\u2019m tired of holding everything together.",
              "Why can\u2019t I just relax?",
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <p className="text-lg sm:text-xl text-sand-100 font-serif italic leading-relaxed">
                  &ldquo;{item}&rdquo;
                </p>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <div className="mt-12 pt-10 border-t border-primary-600 space-y-3">
              <p className="text-xl text-gold-400 font-serif">
                You don&apos;t need more mindset work.
              </p>
              <p className="text-xl text-gold-400 font-serif font-semibold">
                You need nervous system regulation.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ===== AUTHORITY ===== */}
      <SectionWrapper background="white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-900 text-center mb-6">
                Why I&apos;m Different
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-center text-lg text-primary-700 leading-relaxed max-w-2xl mx-auto">
                My authority is embodied, not theoretical. I teach from nervous
                system coherence, not performance energy. Clients feel that
                difference immediately.
              </p>
            </FadeIn>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "7 years of consistent, embodied meditation practice",
                "I regulate under pressure — not just in quiet moments",
                "I hold steady during client turbulence",
                "I explain the neuroscience + spirituality without bypassing",
                "I lived the survival → coherence transformation myself",
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div className="flex gap-3 items-start">
                    <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500" />
                    <span className="text-primary-800">{item}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Testimonial cards */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { quote: "I felt calm just talking to you.", name: "Sarah M." },
                {
                  quote: "You explained the mechanics, not just the woo-woo.",
                  name: "Rachel T.",
                },
                { quote: "Now I understand why I was stuck.", name: "Emily K." },
              ].map((t, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-sand-50 rounded-xl p-6 sm:p-8 relative">
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
          </div>
        </Container>
      </SectionWrapper>

      {/* ===== METHOD: THE REGULATION PROTOCOL™ ===== */}
      <SectionWrapper background="sand">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-900 text-center">
                The Regulation Protocol&trade;
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-4 text-center text-lg text-muted max-w-2xl mx-auto">
                A structured path from survival conditioning to stable identity.
              </p>
            </FadeIn>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  phase: "Phase 1",
                  title: "Baseline Reset",
                  description:
                    "Interrupt chronic survival activation and recalibrate your default state.",
                },
                {
                  phase: "Phase 2",
                  title: "Identity Stabilization",
                  description:
                    "Build a regulated baseline that holds under pressure \u2014 not just in quiet moments.",
                },
                {
                  phase: "Phase 3",
                  title: "Coherent Expansion",
                  description:
                    "Create from stability, not stress. Expansion becomes safe.",
                },
              ].map((p, i) => (
                <FadeIn key={i} delay={i * 0.12}>
                  <div className="bg-white rounded-xl p-8 border border-stone-200 h-full">
                    <span className="text-xs font-sans font-medium text-gold-600 tracking-wider uppercase">
                      {p.phase}
                    </span>
                    <h3 className="mt-3 font-serif text-xl font-bold text-primary-900">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-muted leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      {/* ===== WHO THIS IS FOR / NOT FOR ===== */}
      <SectionWrapper background="white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            <FadeIn>
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-900 mb-8">
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
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-900 mb-8">
                  This Is Not For You If&hellip;
                </h2>
                <ul className="space-y-4">
                  {[
                    "You want productivity hacks.",
                    "You\u2019re brand new to meditation.",
                    "You blame others for everything.",
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

      {/* ===== OFFERS PREVIEW ===== */}
      <SectionWrapper background="sand">
        <Container>
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-900 text-center mb-12">
              Ways To Work With Me
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn delay={0.05}>
              <div className="bg-white rounded-xl p-8 md:p-10 border border-stone-200 h-full flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-primary-900">
                  1:1 Regulation Coaching
                </h3>
                <p className="mt-4 text-primary-700 leading-relaxed flex-1">
                  High-touch nervous system regulation and identity
                  stabilization. I work with you directly, one-on-one.
                </p>
                <div className="mt-8">
                  <Button href="/work-with-me#one-on-one">
                    Apply for 1:1
                  </Button>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-xl p-8 md:p-10 border border-stone-200 h-full flex flex-col">
                <h3 className="font-serif text-2xl font-bold text-primary-900">
                  3-Month Group Coaching
                </h3>
                <p className="mt-4 text-primary-700 leading-relaxed flex-1">
                  A structured group container where I guide you through
                  baseline reset, identity stabilization, and coherence.
                </p>
                <div className="mt-8">
                  <Button href="/work-with-me#group" variant="secondary">
                    Join the Waitlist
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </SectionWrapper>

      {/* ===== RESOURCES / START HERE ===== */}
      <SectionWrapper background="white">
        <Container size="narrow">
          <FadeIn>
            <div className="text-center">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary-900">
                Start Here
              </h2>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                Take the Survival Mode Diagnostic and get the 3-Day Regulation
                Reset.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/resources#diagnostic">
                  Take the Diagnostic
                </Button>
                <Button href="/resources#reset" variant="secondary">
                  Get the Reset
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </SectionWrapper>

      {/* ===== FAQ ===== */}
      <SectionWrapper background="sand">
        <Container size="narrow">
          <FadeIn>
            <FAQAccordion
              items={homepageFAQ}
              headline="Frequently Asked Questions"
            />
          </FadeIn>
        </Container>
      </SectionWrapper>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-primary-800 py-16 md:py-28">
        <Container>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                End Survival As Your Baseline.
              </h2>
              <p className="mt-4 text-lg text-sand-200 leading-relaxed">
                Start with the Baseline Reset. Build stability. Become someone
                new.
              </p>
              <div className="mt-8">
                <Button href="/resources#reset" size="large">
                  Start the Baseline Reset
                </Button>
              </div>
              <p className="mt-4 text-lg text-sand-200 leading-relaxed">
                I&apos;ll walk you through the first step myself.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
