import { JsonLd } from "./JsonLd";
import { SITE } from "@/lib/constants";

interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  url: string;
  image?: string;
}

export function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  url,
  image,
}: ArticleSchemaProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline,
        description,
        author: {
          "@type": "Person",
          name: SITE.owner,
        },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          logo: {
            "@type": "ImageObject",
            url: `${SITE.url}/images/regulation-protocol-logo.webp`,
          },
        },
        datePublished,
        dateModified: dateModified || datePublished,
        mainEntityOfPage: `${SITE.url}${url}`,
        ...(image && { image }),
      }}
    />
  );
}
