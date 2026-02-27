import type { Metadata } from "next";
import { SITE } from "./constants";

interface PageMetadataInput {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noindex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage,
  noindex,
}: PageMetadataInput): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noindex ? { index: false, follow: false } : undefined,
  };
}
