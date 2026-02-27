"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { mainNavigation } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold-500 focus:text-primary-900 focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to main content
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-warm-white/95 backdrop-blur-md shadow-sm"
            : "bg-warm-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <Link
              href="/"
              className="font-serif text-xl tracking-tight text-primary-900"
            >
              <span className="font-bold">REGULATION</span>{" "}
              <span className="font-normal text-primary-700">PROTOCOL</span>
            </Link>

            <nav
              className="hidden lg:flex items-center gap-8"
              aria-label="Main navigation"
            >
              {mainNavigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-sans font-medium text-primary-700 hover:text-gold-600 transition-colors py-2"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button
                href="/resources#reset"
                size="default"
                className="hidden lg:inline-flex"
              >
                Start Baseline Reset
              </Button>

              <button
                type="button"
                className="lg:hidden p-2 text-primary-800 hover:text-gold-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
