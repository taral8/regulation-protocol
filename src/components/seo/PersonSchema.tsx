import { JsonLd } from "./JsonLd";
import { SITE } from "@/lib/constants";

export function PersonSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        name: SITE.owner,
        jobTitle: SITE.ownerTitle,
        worksFor: {
          "@type": "Organization",
          name: SITE.name,
        },
        url: `${SITE.url}/about`,
        description:
          "Founder of Regulation Protocol. Specializes in nervous system mastery, meditation coaching, and embodied transformation.",
        sameAs: [SITE.social.youtube, SITE.social.instagram],
      }}
    />
  );
}
