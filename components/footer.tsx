import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Projects", href: "/projects" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "WordPress to Next.js", href: "/services" },
      { label: "Custom Design", href: "/services" },
      { label: "SEO Optimisation", href: "/services" },
      { label: "CMS Integration", href: "/services" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Infinitechx Home">
              <Image
                src="/images/logo.jpg"
                alt="Infinitechx logo"
                width={36}
                height={36}
                className="h-8 w-8 rounded-full object-cover ring-1 ring-border/60 brightness-110 hue-rotate-[200deg] saturate-150 drop-shadow-[0_0_6px_hsl(220_100%_61%/0.4)]"
              />
              <span className="font-heading text-xl font-bold tracking-tight text-foreground">
                Infinite<span className="text-primary">chx</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Modern websites that grow your business. We transform outdated
              WordPress sites into fast, secure, high-converting Next.js
              experiences.
            </p>
            <p className="text-sm text-muted-foreground">
              London, UK
            </p>
          </div>

          {/* Link Groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Infinitechx. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              hello@infinitechx.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
