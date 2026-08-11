import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageMotion from "@/components/PageMotion";
import { ClockTime } from "@/components/Clock";

export const metadata: Metadata = {
  title: "Social",
  description: "Where to find Dhruv Shah online.",
};

const CHANNELS = [
  {
    href: "https://x.com/dhruvshah",
    name: "X",
    note: "Thoughts & updates",
  },
  {
    href: "https://www.linkedin.com/",
    name: "LinkedIn",
    note: "Work & career",
  },
  {
    href: "https://www.instagram.com/build_with_dhruv/",
    name: "Instagram",
    note: "Process & behind the scenes",
  },
  {
    href: "https://www.youtube.com/@dhruvshah",
    name: "YouTube",
    note: "Builds & walkthroughs",
    lastBorder: true,
  },
];

export default function SocialPage() {
  return (
    <PageMotion>
      <section className="w-full mt-12 sm:mt-20 px-6 sm:px-10 lg:px-40 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div className="leftheadings" data-hero>
          <h6 className="text-xl sm:text-2xl -mb-2 sm:-mb-3 tracking-tighter font-bold">
            Find me,
          </h6>
          <h1 className="text-[3.5rem] sm:text-[6rem] lg:text-[12rem] leading-none -ml-1 lg:-ml-2 tracking-tighter font-bold">
            Online.
          </h1>
        </div>
        <div className="rightheadings flex items-center gap-3" data-hero-meta>
          <h4 className="tracking-tight font-medium text-base sm:text-xl">
            [<ClockTime />]
          </h4>
          <div className="w-16 sm:w-32 h-px bg-black" data-hero-divider />
          <h3 className="font-medium tracking-tight text-base sm:text-xl">
            Always glad to talk shop
          </h3>
        </div>
      </section>

      <section className="w-full px-6 sm:px-10 lg:px-40 mt-24 sm:mt-32">
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-medium mb-6 sm:mb-10">
          Channels
        </h3>
        <div className="flex flex-col">
          {CHANNELS.map((channel) => (
            <a
              key={channel.name}
              href={channel.href}
              target="_blank"
              rel="noopener"
              data-reveal
              className={`group flex items-center justify-between gap-6 py-6 sm:py-8 border-t${
                channel.lastBorder ? " border-b" : ""
              } border-black/10`}
            >
              <h2 className="text-4xl sm:text-7xl lg:text-[8rem] leading-none tracking-tighter font-medium group-hover:opacity-30 transition-opacity duration-300">
                {channel.name}
              </h2>
              <span className="hidden lg:block text-xl font-medium text-zinc-400 truncate max-w-44">
                — {channel.note}
              </span>
              <Image
                src="/assets/arrow.png"
                alt=""
                width={420}
                height={134}
                className="w-10 sm:w-16 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                data-magnetic
              />
            </a>
          ))}
        </div>
      </section>

      <section
        className="w-full px-6 sm:px-10 lg:px-40 mt-24 sm:mt-32 flex items-center gap-10"
        data-reveal
      >
        <div className="w-16 sm:w-32 h-px bg-black" />
        <p className="text-base sm:text-xl text-zinc-500 max-w-xl">
          Prefer email? Head over to the{" "}
          <Link href="/contact" className="underline underline-offset-4 text-black">
            contact page
          </Link>{" "}
          — I read every message and try to reply within a day or two.
        </p>
      </section>
    </PageMotion>
  );
}
