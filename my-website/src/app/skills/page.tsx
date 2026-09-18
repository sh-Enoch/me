"use client";

import { useState } from "react";
import Badge from "@/components/Badge";
import { Tabs } from "@/components/tabs";
import { skills } from "@/data/profile";
import { Badges } from "@/data/badges";

const tabs = [
  { id: "badges", label: "Badges" },
  { id: "certifications", label: "Certifications" },
];

const certifications = [
  "Google IT Support Certificate",
  "AWS Cloud Foundations",
  "Professional Cloud DevOps Fundamentals",
  "Frontend Development Practices",
  "Technical Support & Troubleshooting",
  "GitHub Collaboration Workflow",
];

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState("badges");

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 text-neutral-950 sm:px-6 lg:px-8">
      <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#006d77]">
          Skills & recognition
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Skills and badges
        </h1>
        <p className="max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
          Here are some of the skills and badges I&apos;ve earned throughout my
          career and my hands-on work in software, IT support, and cloud-focused
          delivery.
        </p>
      </section>

      <section className="mx-auto w-full max-w-4xl rounded-2xl border border-neutral-200 bg-white p-3 shadow-sm">
        <Tabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-6">
          {activeTab === "badges" ? (
            <div className="grid gap-4 md:grid-cols-2">
              {Badges.map((badge) => (
                <Badge
                  key={badge.cert_id}
                  name={badge.badge_title}
                  date_earned={badge.date_earned}
                  issued_by={badge.issued_by}
                  cert_id={badge.cert_id || ""}
                />
              ))}
            </div>
          ) : (
            <div className="grid gap-3 sm:grid-cols-2">
              {certifications.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-[#f7f5f0] px-4 py-3 text-sm text-neutral-700"
                >
                  <span className="flex size-8 items-center justify-center rounded-full bg-[#e5f2ef] text-[#006d77]">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-neutral-900">
          Core skill stack
        </h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {Object.values(skills)
            .flat()
            .map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-neutral-200 bg-[#f7f5f0] px-3 py-1.5 text-xs font-medium text-neutral-700"
              >
                {skill}
              </span>
            ))}
        </div>
      </section>
    </main>
  );
}
