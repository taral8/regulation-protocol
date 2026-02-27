import type { NavItem } from "@/types";

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
];

export const footerNavigation = {
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/about" },
    { label: "Work With Me", href: "/work-with-me" },
    { label: "Resources", href: "/resources" },
    { label: "Blog", href: "/blog" },
  ],
  resources: [
    { label: "Survival Mode Diagnostic", href: "/resources#diagnostic" },
    { label: "3-Day Regulation Reset", href: "/resources#reset" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};
