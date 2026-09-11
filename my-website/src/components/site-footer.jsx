import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-neutral-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="font-semibold text-neutral-900 transition hover:text-[#006d77] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006d77] focus-visible:ring-offset-4"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
