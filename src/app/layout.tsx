import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.regulationprotocol.com"),
  title: {
    default:
      "Regulation Protocol | Nervous System Regulation & Identity Transformation — Kevin Gonzales",
    template: "%s | Regulation Protocol",
  },
  description:
    "I teach people how to regulate their nervous system so they can become someone new. Kevin Gonzales bridges neuroscience and spirituality for high-functioning adults moving from survival mode into embodied coherence.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Regulation Protocol",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <head>
        {/* Plausible analytics stub — add domain when ready */}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="antialiased">
        <OrganizationSchema />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
