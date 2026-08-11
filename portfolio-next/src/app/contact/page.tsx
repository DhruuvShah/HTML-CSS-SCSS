import type { Metadata } from "next";
import Link from "next/link";
import PageMotion from "@/components/PageMotion";
import { ClockTime } from "@/components/Clock";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Dhruv Shah for freelance web projects.",
};

export default function ContactPage() {
  return (
    <PageMotion>
      <section className="w-full mt-12 sm:mt-20 px-6 sm:px-10 lg:px-40 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div className="leftheadings" data-hero>
          <h6 className="text-xl sm:text-2xl -mb-2 sm:-mb-3 tracking-tighter font-bold">
            Let&apos;s talk,
          </h6>
          <h1 className="text-[3.5rem] sm:text-[6rem] lg:text-[12rem] leading-none -ml-1 lg:-ml-2 tracking-tighter font-bold">
            Contact.
          </h1>
        </div>
        <div className="rightheadings flex items-center gap-3" data-hero-meta>
          <h4 className="tracking-tight font-medium text-base sm:text-xl">
            [<ClockTime />]
          </h4>
          <div className="w-16 sm:w-32 h-px bg-black" data-hero-divider />
          <h3 className="font-medium tracking-tight text-base sm:text-xl">
            Usually replies within a day
          </h3>
        </div>
      </section>

      <section className="w-full px-6 sm:px-10 lg:px-40 mt-24 sm:mt-32 flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="lg:w-2/5" data-reveal>
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-medium mb-6 sm:mb-10">
            Reach out
          </h3>
          <p className="text-base sm:text-xl text-zinc-500 max-w-md">
            Whether it&apos;s a web app, a full-stack build, or just a
            collaboration you have in mind — drop a note below or write
            directly. I read everything myself.
          </p>

          <div className="flex flex-col gap-6 mt-10">
            <a href="mailto:dhruv27shah@gmail.com" className="group flex items-center gap-4">
              <span className="text-sm sm:text-base font-medium text-zinc-400 w-20">
                Email
              </span>
              <span className="text-lg sm:text-2xl font-medium tracking-tight group-hover:opacity-30 transition-opacity duration-300">
                dhruv27shah@gmail.com
              </span>
            </a>
            <div className="group flex items-center gap-4">
              <span className="text-sm sm:text-base font-medium text-zinc-400 w-20">
                Based in
              </span>
              <span className="text-lg sm:text-2xl font-medium tracking-tight">
                India
              </span>
            </div>
            <Link href="/social" className="group flex items-center gap-4">
              <span className="text-sm sm:text-base font-medium text-zinc-400 w-20">
                Social
              </span>
              <span className="text-lg sm:text-2xl font-medium tracking-tight group-hover:opacity-30 transition-opacity duration-300">
                View channels →
              </span>
            </Link>
          </div>
        </div>

        <ContactForm />
      </section>
    </PageMotion>
  );
}
