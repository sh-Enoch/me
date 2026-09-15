import { skills } from "@/data/profile";

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 text-neutral-950">
      <section className="mx-auto w-fit items-center flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-gray-900 ">SKILLS AND BADGES</h1>
        <p className="text-lg text-gray-600 leading-7 tracking-wide ">
          Here are some of the skills and badges I've earned throughout my
          career.
        </p>
      </section>
      <div>
        <hr />
      </div>
      <section className="bg-white"></section>
    </main>
  );
}
