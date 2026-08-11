"use client";

import Link from "next/link";
import Image from "next/image";
import { useSiteMotion } from "@/hooks/useSiteMotion";
import { ClockDateTime } from "./Clock";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/social", label: "Social" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const SOCIALS = [
  {
    href: "https://www.instagram.com/build_with_dhruv/",
    label: "Instagram",
    icon: "/icons/instagram-svgrepo-com.svg",
  },
  {
    href: "https://x.com/dhruvshah",
    label: "X (Twitter)",
    icon: "/icons/x-twitter-svgrepo-com.svg",
  },
  {
    href: "https://www.linkedin.com/",
    label: "LinkedIn",
    icon: "/icons/linkedin-1-svgrepo-com.svg",
  },
  {
    href: "https://www.youtube.com/@dhruvshah",
    label: "YouTube",
    icon: "/icons/youtube-svgrepo-com.svg",
  },
];

export default function Footer() {
  const scope = useSiteMotion<HTMLElement>();

  return (
    <footer
      ref={scope}
      className="footer w-full px-6 sm:px-10 lg:px-40 mt-20 sm:mt-32"
    >
      <div className="w-full h-px bg-black/10" />
      <div className="py-12 sm:py-16 flex flex-col lg:flex-row justify-between gap-12 lg:gap-10">
        <div className="lg:w-1/3" data-reveal>
          <h3 className="text-3xl sm:text-4xl tracking-tighter">
            <span className="font-bold">Dhruv</span> Shah
          </h3>
          <p className="text-sm sm:text-base text-zinc-500 mt-3 max-w-xs">
            Full Stack Developer based in India — open to building products
            and collaborations worldwide.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 lg:gap-24" data-reveal>
          <div>
            <span className="text-sm font-medium text-zinc-400 tracking-tight">
              Navigate
            </span>
            <nav className="flex flex-col gap-2 mt-4">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg sm:text-xl font-medium tracking-tight hover:opacity-30 transition-opacity duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <span className="text-sm font-medium text-zinc-400 tracking-tight">
              Connect
            </span>
            <div className="flex gap-3 mt-4">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={social.label}
                  data-magnetic
                  className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <Image
                    src={social.icon}
                    alt=""
                    width={32}
                    height={32}
                    className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-black/10" />
      <div
        className="py-6 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between text-sm sm:text-base text-zinc-400"
        data-reveal
      >
        <h4 className="font-medium">
          <ClockDateTime />
        </h4>
        <p className="font-medium">© 2026 Dhruv Shah — All rights reserved</p>
      </div>
    </footer>
  );
}
