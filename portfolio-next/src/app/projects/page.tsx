import type { Metadata } from "next";
import Image from "next/image";
import PageMotion from "@/components/PageMotion";
import { ClockTime } from "@/components/Clock";

export const metadata: Metadata = {
  title: "Projects",
  description: "A small archive of Dhruv Shah's recent full-stack work.",
};

const PROJECTS = [
  {
    index: "01 — 2026",
    title: "Ledger — Expense Tracker",
    description:
      "A full-stack expense tracking app — a React front-end talking to a Node/Express API, with JWT auth, a MongoDB store, and interactive charts for spending trends. Built for speed and a clean data model.",
    tags: ["React", "Node.js", "MongoDB"],
    reverse: false,
  },
  {
    index: "02 — 2026",
    title: "ARKIV — E-commerce Platform",
    description:
      "A full-stack e-commerce storefront — product catalogue, cart and checkout backed by a REST API, with a PostgreSQL database, Stripe payments, and an admin dashboard for managing orders and inventory.",
    tags: ["REST APIs", "PostgreSQL", "Stripe"],
    reverse: true,
  },
  {
    index: "03 — 2026",
    title: "Studio Ledger — Task Manager",
    description:
      "A collaborative task management tool for small teams — real-time updates over WebSockets, drag-and-drop boards, and role-based access, deployed with a CI/CD pipeline for fast, reliable releases.",
    tags: ["WebSockets", "CI/CD"],
    reverse: false,
  },
];

export default function ProjectsPage() {
  return (
    <PageMotion>
      <section className="w-full mt-12 sm:mt-20 px-6 sm:px-10 lg:px-40 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div className="leftheadings" data-hero>
          <h6 className="text-xl sm:text-2xl -mb-2 sm:-mb-3 tracking-tighter font-bold">
            Selected,
          </h6>
          <h1 className="text-[3.5rem] sm:text-[6rem] lg:text-[12rem] leading-none -ml-1 lg:-ml-2 tracking-tighter font-bold">
            Projects.
          </h1>
        </div>
        <div className="rightheadings flex items-center gap-3" data-hero-meta>
          <h4 className="tracking-tight font-medium text-base sm:text-xl">
            [<ClockTime />]
          </h4>
          <div className="w-16 sm:w-32 h-px bg-black" data-hero-divider />
          <h3 className="font-medium tracking-tight text-base sm:text-xl">
            A small archive of recent work
          </h3>
        </div>
      </section>

      <section className="w-full px-6 sm:px-10 lg:px-40 mt-24 sm:mt-32 flex flex-col gap-24 sm:gap-32">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className={`w-full flex flex-col lg:flex-row${
              project.reverse ? "-reverse" : ""
            } gap-8 lg:gap-20`}
          >
            <div className="lg:w-2/5" data-reveal>
              <span className="text-base sm:text-lg font-medium text-zinc-400">
                {project.index}
              </span>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight mt-2">
                {project.title}
              </h2>
              <p className="text-base sm:text-lg text-zinc-500 mt-4 max-w-md">
                {project.description}
              </p>
              <div className="flex gap-3 mt-6 items-center flex-wrap">
                {project.tags.map((tag, i) => (
                  <span key={tag} className="contents">
                    {i > 0 && (
                      <Image
                        src="/assets/arrow.png"
                        alt=""
                        width={420}
                        height={134}
                        className="w-8 sm:w-10"
                        data-magnetic
                      />
                    )}
                    <h3 className="text-sm sm:text-base font-medium">{tag}</h3>
                  </span>
                ))}
              </div>
            </div>
            <div
              className="lg:w-3/5 w-full h-64 sm:h-96 lg:h-136 bg-black opacity-10"
              data-wipe
            />
          </article>
        ))}
      </section>
    </PageMotion>
  );
}
