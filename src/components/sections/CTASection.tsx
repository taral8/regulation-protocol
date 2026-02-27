import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  headline: string;
  body?: string;
  ctaText: string;
  ctaHref: string;
  secondaryCta?: { text: string; href: string };
  variant?: "primary" | "secondary";
}

export function CTASection({
  headline,
  body,
  ctaText,
  ctaHref,
  secondaryCta,
  variant = "primary",
}: CTASectionProps) {
  if (variant === "primary") {
    return (
      <section className="bg-primary-800 py-12 md:py-28">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              {headline}
            </h2>
            {body && (
              <p className="mt-4 text-lg text-sand-200 leading-relaxed">
                {body}
              </p>
            )}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button href={ctaHref} size="large">
                {ctaText}
              </Button>
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant="ghost"
                  size="large"
                  className="text-sand-200 hover:text-gold-400"
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-sand-50 py-10 md:py-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary-900">
            {headline}
          </h2>
          {body && (
            <p className="mt-3 text-muted leading-relaxed">{body}</p>
          )}
          <div className="mt-6">
            <Button href={ctaHref}>{ctaText}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
