import { Mail } from "lucide-react";
import { profile } from "@/data/profile";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
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
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#f7f5f0]/90 text-neutral-950 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"
      >
        <a
          href="#top"
          className="flex w-fit items-center gap-3 rounded-full outline-none transition focus-visible:ring-2 focus-visible:ring-[#006d77] focus-visible:ring-offset-4"
        >
          <span className="flex size-11 items-center justify-center rounded-full bg-neutral-950 text-sm font-semibold text-white">
            {initials}
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold">{profile.name}</span>
            <span className="block text-xs text-neutral-500">
              {profile.role}
            </span>
          </span>
        </a>

        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <ul className="flex flex-wrap items-center gap-1 text-sm font-medium text-neutral-600">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-full px-3 py-2 transition hover:bg-white hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006d77]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-neutral-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#006d77] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006d77] focus-visible:ring-offset-2"
            >
              <Mail className="size-4 opacity-70" aria-hidden="true" />
              Email me
            </a>
            {profile.socials.map((social) => {
              const Icon = socialIcons[social.label];

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-4 py-2 text-sm font-semibold text-neutral-700 transition hover:border-neutral-300 hover:bg-white hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006d77] focus-visible:ring-offset-2"
                >
                  {Icon ? (
                    <Icon className="size-4 text-neutral-400 transition group-hover:text-neutral-700" />
                  ) : null}
                  {social.label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
