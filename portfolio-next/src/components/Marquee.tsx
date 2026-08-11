"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Marquee({ text }: { text: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      const track = trackRef.current;
      if (!wrapper || !track) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduceMotion) {
        gsap.set(track, { xPercent: 0 });
        return;
      }

      const tween = gsap.to(track, {
        xPercent: -50,
        duration: 28,
        ease: "none",
        repeat: -1,
      });

      const slow = () => gsap.to(tween, { timeScale: 0.2, duration: 0.4 });
      const fast = () => gsap.to(tween, { timeScale: 1, duration: 0.4 });
      wrapper.addEventListener("mouseenter", slow);
      wrapper.addEventListener("mouseleave", fast);
      return () => {
        wrapper.removeEventListener("mouseenter", slow);
        wrapper.removeEventListener("mouseleave", fast);
      };
    },
    { scope: wrapperRef },
  );

  return (
    <section ref={wrapperRef} className="marquee py-6 sm:py-8 mt-16 sm:mt-24">
      <div
        ref={trackRef}
        className="marquee-track text-3xl sm:text-5xl lg:text-7xl font-medium tracking-tighter"
      >
        <span className="px-6 sm:px-10">{text}</span>
        <span className="px-6 sm:px-10" aria-hidden="true">
          {text}
        </span>
      </div>
    </section>
  );
}
