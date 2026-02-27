import { JsonLd } from "./JsonLd";
import type { FAQItem } from "@/types";

interface FAQPageSchemaProps {
  items: FAQItem[];
}

export function FAQPageSchema({ items }: FAQPageSchemaProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }}
    />
  );
}
