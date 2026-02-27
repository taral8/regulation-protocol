# Regulation Protocol — Kevin Gonzales

Nervous system regulation & identity transformation coaching website.

## Tech Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4** with custom design system
- **Framer Motion** for scroll animations
- **Playfair Display + Inter** via `next/font`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/                    # Pages (App Router)
    page.tsx              # Homepage
    about/                # About Kevin
    work-with-me/         # Offers: 1:1 + Group
    resources/            # Lead magnets
    blog/                 # Blog listing
    blog/[slug]/          # Individual posts
    privacy/              # Privacy Policy
    terms/                # Terms of Service
    api/lead/             # Email capture endpoint
    api/application/      # 1:1 application endpoint
  components/
    layout/               # Header, Footer, MobileMenu, Breadcrumbs
    sections/             # Reusable page sections
    seo/                  # JSON-LD schema components
    ui/                   # Button, Container, SectionWrapper
  data/
    navigation.ts         # Nav links
    testimonials.ts       # Client testimonials
    faq.ts                # FAQ content
    blog/posts.ts         # Blog post content
  lib/
    constants.ts          # Site config (name, URL, socials)
    metadata.ts           # Metadata helper
  types/
    index.ts              # TypeScript interfaces
```

## Editing Copy

All page copy is directly in the page files under `src/app/`.
Data-driven content lives in `src/data/`:

- **Testimonials:** `src/data/testimonials.ts`
- **FAQ:** `src/data/faq.ts`
- **Blog posts:** `src/data/blog/posts.ts`
- **Navigation:** `src/data/navigation.ts`
- **Site config:** `src/lib/constants.ts`

## Adding Blog Posts

Add a new entry to the `blogPosts` array in `src/data/blog/posts.ts`:

```ts
{
  slug: "your-post-slug",
  title: "Your Post Title",
  excerpt: "Short description for cards and meta.",
  date: "2026-03-01",
  category: "Nervous System",
  readingTime: "5 min read",
  content: `Your markdown-style content here...`,
}
```

Posts support basic markdown: `## headings`, `**bold**`, `- lists`, and `[links](url)`.

## ConvertKit Integration

1. Copy `.env.example` to `.env.local`
2. Add your ConvertKit API key and form IDs
3. The lead capture and application forms will automatically send to ConvertKit

```env
CONVERTKIT_API_KEY=your_api_key
CONVERTKIT_FORM_ID=your_lead_form_id
CONVERTKIT_APPLICATION_FORM_ID=your_application_form_id
```

Without ConvertKit configured, leads are stored locally in `data/leads.json` and `data/applications.json`.

## Plausible Analytics

Add your domain to enable privacy-focused analytics:

```env
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=regulationprotocol.com
```

## Deploy to Vercel

```bash
npm run build     # Verify build succeeds
vercel            # Deploy
```

Or connect your Git repo to Vercel for automatic deployments.

## SEO

- Per-page metadata (title, description, OG) in each page file
- JSON-LD schemas: Organization, Person, FAQPage, Article, BreadcrumbList
- Auto-generated `sitemap.xml` and `robots.txt`
- Semantic headings (one H1 per page)
- Accessible: skip links, focus styles, ARIA labels, keyboard nav
