"use client";

import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { footerNavigation } from "@/data/navigation";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer-newsletter" }),
      });
    } catch {
      // silent fail in production
    }
    setSubscribed(true);
  };

  return (
    <footer className="bg-primary-800 text-white" role="contentinfo">
      <Container>
        <div className="py-10 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-1">
              <Link
                href="/"
                className="font-serif text-xl tracking-tight text-white"
              >
                <span className="font-bold">REGULATION</span>{" "}
                <span className="font-normal text-sand-300">PROTOCOL</span>
              </Link>
              <p className="mt-4 text-sm text-sand-300 leading-relaxed">
                Kevin Gonzales bridges neuroscience and spirituality to help
                high-functioning, spiritually curious adults move from survival
                mode into embodied coherence.
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href={SITE.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand-400 hover:text-gold-400 transition-colors"
                  aria-label="YouTube"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sand-400 hover:text-gold-400 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-serif text-base font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {footerNavigation.quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-sand-300 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-serif text-base font-semibold text-white mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerNavigation.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-sand-300 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-serif text-base font-semibold text-white mb-4">
                Newsletter
              </h3>
              {subscribed ? (
                <p className="text-sm text-gold-400">
                  You&apos;re in. Check your inbox.
                </p>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <p className="text-sm text-sand-300">
                    Regulation insights, not spam.
                  </p>
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full px-3 py-2 rounded-lg bg-primary-700 border border-primary-600 text-sand-100 placeholder:text-sand-400 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                  <button
                    type="submit"
                    className="w-full px-3 py-2 rounded-lg bg-gold-500 text-primary-900 text-sm font-medium hover:bg-gold-600 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 md:mt-16 pt-8 border-t border-primary-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-sand-400">
                &copy; {currentYear} {SITE.name}. All rights reserved.
              </p>
              <div className="flex gap-6">
                {footerNavigation.legal.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-xs text-sand-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
