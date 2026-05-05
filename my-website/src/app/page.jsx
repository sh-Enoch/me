import Image from "next/image";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { experience, profile, projects, skills } from "@/data/profile";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Mail,
  MapPin,
  Star,
  Icon,
} from "lucide-react";

const strengths = [
  "Responsive interfaces",
  "Product-minded delivery",
  "Maintainable codebases",
];

const aboutCards = [
  {
    title: "Interface craft",
    description:
      "Clear layout, responsive behavior, and interaction details that make products easier to use.",
    icon: Code2,
  },
  {
    title: "Reliable execution",
    description:
      "Structured components, practical styling systems, and attention to performance from the start.",
    icon: BriefcaseBusiness,
  },
];

export default function Home() {
  return (
    <main id="top" className="bg-[#f7f5f0] text-neutral-950">
      <SiteHeader />
      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-12 px-4 py-16 sm:px-6 lg:px-8">
          {/* Left: Sticky Hero Content */}
          <div className="md:sticky md:top-0 md:h-screen md:flex md:flex-col md:justify-start md:py-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#006d77]">
              {profile.role}
            </p>
            <h1 className="mt-2 text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-700">
              {profile.headline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#006d77]"
              >
                View work
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:border-[#006d77] hover:text-[#006d77]"
              >
                <Mail className="size-4" aria-hidden="true" />
                Contact me
              </a>
            </div>

            {/* ✅ Optional: Add Social Links or Location */}
            <div className="mt-8 flex items-center gap-4 text-neutral-600">
              <a href="#" className="hover:text-[#006d77] transition-colors">
                {/* <GitHub className="size-5" /> */}
              </a>
              <a href="#" className="hover:text-[#006d77] transition-colors">
                {/* <LinkedIn className="size-5" /> */}
              </a>
              <a href="#" className="hover:text-[#006d77] transition-colors">
                {/* <Twitter className="size-5" /> */}
              </a>
            </div>
          </div>

          {/* Right: About Content */}
          <div className="md:h-screen md:py-16 md:overflow-y-auto space-y-8 text-neutral-700 leading-8 md:pr-8">
            {/* About Section */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#006d77]">
                About
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-neutral-950">
                Who I am
              </h2>
              <div className="mt-4 space-y-4">
                {profile.summary.split("\n").map((paragraph, index) => (
                  <p key={index} className="text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* ✅ Add More Sections */}
            <div className="pt-8 border-t border-neutral-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#006d77]">
                Expertise
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-neutral-950">
                What I do
              </h2>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {profile.skills?.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#006d77]" />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ✅ Add Experience Section */}
            <div className="pt-8 border-t border-neutral-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#006d77]">
                Experience
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-neutral-950">
                My journey
              </h2>
              <div className="mt-4 space-y-6">
                {profile.experience?.map((exp, i) => (
                  <div key={i}>
                    <h3 className="font-semibold text-neutral-900">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {exp.company} • {exp.years}
                    </p>
                    <p className="mt-2 text-sm">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-neutral-950">
          What I focus on
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {aboutCards.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-5 flex size-11 items-center justify-center rounded-full bg-[#e5f2ef] text-[#006d77]">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-neutral-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="work"
        className="border-y border-neutral-200 bg-white px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects shaped around clarity and performance"
            >
              A focused sample of product, dashboard, and component work that
              shows how I approach useful web experiences.
            </SectionHeading>
            <div className="flex items-center gap-1 text-[#d95d39]">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className="size-4 fill-current"
                  aria-hidden="true"
                />
              ))}
              <span className="ml-2 text-sm font-semibold text-neutral-700">
                Detail oriented delivery
              </span>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="skills"
        className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"
      >
        <SectionHeading
          eyebrow="Capabilities"
          title="Practical tools for shipping polished interfaces"
        >
          A concise stack for building dependable frontend products, integrating
          APIs, and refining the user experience.
        </SectionHeading>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="flex min-h-20 items-center rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm font-semibold text-neutral-800 shadow-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="experience"
        className="border-y border-neutral-200 bg-[#eef7f4] px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading eyebrow="Experience" title="Recent work history" />

          <div className="space-y-4">
            {experience.map((item) => (
              <article
                key={`${item.company}-${item.role}`}
                className="rounded-2xl border border-[#c7ddd6] bg-white p-6 shadow-sm"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-950">
                      {item.role}
                    </h3>
                    <p className="font-medium text-[#006d77]">{item.company}</p>
                  </div>
                  <time className="rounded-full border border-neutral-200 px-3 py-1 text-sm font-semibold text-neutral-600">
                    {item.period}
                  </time>
                </div>
                <p className="mt-4 leading-7 text-neutral-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-neutral-950 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-8 text-white md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8bd6cf]">
              Contact
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Have a project or role in mind?
            </h2>
            <p className="mt-4 leading-7 text-neutral-300">
              Send a short note and I will get back to you about availability,
              fit, and the best next step.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-[#8bd6cf] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-950"
              href={`mailto:${profile.email}`}
            >
              <Mail className="size-4" aria-hidden="true" />
              Email me
            </a>
            {profile.socials.map((social) => (
              <a
                key={social.label}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-950"
                href={social.href}
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
