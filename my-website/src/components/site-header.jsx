import { Mail } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";

const navItems = [
  // { label: "Work", href: "/#work" },
  // { label: "Skills", href: "/#skills" },
  { label: "Skills & badges", href: "/skills" },
  // { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Blogs", href: "/#blogs" },
  { label: "Contact", href: "/#contact" },
];

function GitHubIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.4 20.5h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.4V9h3.4v1.6h.1c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.3h-.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.1 2.1 2.1 0 0 1 0 4.1ZM7.1 20.5H3.6V9h3.5v11.5ZM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.7V1.7C24 .8 23.2 0 22.2 0Z" />
    </svg>
  );
}

const socialIcons = {
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
};

export function SiteHeader() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-950/10 bg-[#f7f5f0]/90 text-neutral-950 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-6 sm:px-6 md:grid-cols-[1fr_auto_1fr] md:items-center lg:px-8"
      >
        <Link
          href="/"
          className="group flex w-fit items-center gap-3 rounded-2xl outline-none transition focus-visible:ring-2 focus-visible:ring-[#006d77] focus-visible:ring-offset-4"
        >
          <span className="flex size-11 items-center justify-center rounded-xl bg-[#006d77] text-sm font-bold text-white shadow-[4px_4px_0_#d95d39] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            {initials}
          </span>
          <span className="leading-tight md:hidden lg:block">
            <span className="block text-sm font-bold tracking-tight">
              {profile.name}
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-neutral-500">
              Software + support
            </span>
          </span>
        </Link>

        <div className="order-3 min-w-0 md:order-0">
          <ul className="flex items-center gap-1 overflow-x-auto rounded-2xl border border-neutral-950/10 bg-white/70 p-3 text-sm font-semibold text-neutral-600 shadow-sm md:justify-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block whitespace-nowrap rounded-xl px-3 py-2 transition hover:bg-[#e5f2ef] hover:text-[#006d77] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006d77]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="absolute right-4 top-3 p-3 flex items-center gap-2 sm:right-6 md:static md:justify-self-end lg:right-auto">
          {profile.socials.map((social) => {
            const Icon = socialIcons[social.label];

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                title={social.label}
                className="group inline-flex size-10 items-center justify-center rounded-xl border border-neutral-950/10 bg-white/70 text-neutral-500 transition hover:border-[#006d77] hover:bg-[#e5f2ef] hover:text-[#006d77] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006d77] focus-visible:ring-offset-2"
              >
                {Icon ? <Icon className="size-4" /> : null}
              </a>
            );
          })}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-xl bg-neutral-950 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#006d77] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006d77] focus-visible:ring-offset-2"
          >
            <Mail className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">Let&apos;s talk</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
