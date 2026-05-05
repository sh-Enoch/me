import { ArrowRight } from "lucide-react";

export function ProjectCard({ project }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#006d77]/40 hover:shadow-lg">
      <div>
        <h3 className="text-xl font-semibold tracking-tight text-neutral-950">
          {project.title}
        </h3>
        <p className="mt-3 leading-7 text-neutral-600">{project.description}</p>
      </div>

      <div className="mt-8">
        <ul
          className="flex flex-wrap gap-2"
          aria-label={`${project.title} technology stack`}
        >
          {project.stack.map((item) => (
            <li
              key={item}
              className="rounded-full border border-neutral-200 bg-[#f7f5f0] px-3 py-1 text-xs font-semibold text-neutral-700"
            >
              {item}
            </li>
          ))}
        </ul>
        <a
          href={project.href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#006d77] transition hover:text-[#d95d39] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006d77] focus-visible:ring-offset-4"
          aria-label={`Discuss ${project.title}`}
        >
          Discuss this work
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
