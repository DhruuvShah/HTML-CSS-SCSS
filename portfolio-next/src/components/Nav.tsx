"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/social", label: "Social" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const title = navRef.current?.querySelector("h1");
      const links = navRef.current
        ? Array.from(navRef.current.querySelectorAll(".links a"))
        : [];
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduceMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      if (title) tl.from(title, { y: -16, opacity: 0, duration: 0.6 }, 0);
      if (links.length)
        tl.from(
          links,
          { y: -16, opacity: 0, duration: 0.6, stagger: 0.06 },
          0.05,
        );
    },
    { scope: navRef },
  );

  return (
    <nav
      ref={navRef}
      className="flex px-6 sm:px-10 lg:px-40 justify-between items-center pt-8"
    >
      <h1 className="text-xl font-medium tracking-tighter">Portfolio</h1>
      <div className="links flex gap-6 sm:gap-10">
        {LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`tracking-tighter font-medium text-base sm:text-xl transition-opacity duration-300 ${
                active ? "" : "opacity-30 hover:opacity-60"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
