import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center bg-warm-white pt-20">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <p className="text-gold-500 font-sans text-sm font-medium tracking-wider uppercase">
            404
          </p>
          <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-bold text-primary-900">
            This page seems to have wandered off.
          </h1>
          <p className="mt-4 text-muted text-lg leading-relaxed">
            Let&apos;s guide you back to a regulated place.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/">Return Home</Button>
            <Button href="/resources" variant="secondary">
              Start Here
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
