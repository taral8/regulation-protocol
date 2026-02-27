import { JsonLd } from "./JsonLd";
import { SITE } from "@/lib/constants";

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE.name,
        url: SITE.url,
        founder: {
          "@type": "Person",
          name: SITE.owner,
          jobTitle: SITE.ownerTitle,
          url: `${SITE.url}/about`,
        },
        description:
          "Nervous system regulation and identity transformation coaching. Helping high-functioning, spiritually aware adults move from survival mode into embodied coherence.",
        sameAs: [SITE.social.youtube, SITE.social.instagram],
      }}
    />
  );
}
