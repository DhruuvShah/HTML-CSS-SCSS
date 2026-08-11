"use client";

import { useRef, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function splitLines(container: Element) {
  const lines: HTMLElement[] = [];
  container.querySelectorAll(":scope > *").forEach((el) => {
    const line = el as HTMLElement;
    line.style.overflow = "hidden";
    line.style.display = "block";
    const inner = document.createElement("span");
    inner.style.display = "inline-block";
    inner.style.willChange = "transform";
    inner.innerHTML = line.innerHTML;
    line.innerHTML = "";
    line.appendChild(inner);
    lines.push(inner);
  });
  return lines;
}

function magnetize(el: HTMLElement, strength = 0.35) {
  const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
  const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });

  const onMove = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    xTo(relX * strength);
    yTo(relY * strength);
  };
  const onLeave = () => {
    gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
  };

  el.addEventListener("mousemove", onMove);
  el.addEventListener("mouseleave", onLeave);
  return () => {
    el.removeEventListener("mousemove", onMove);
    el.removeEventListener("mouseleave", onLeave);
  };
}

/**
 * Scans a page's own DOM subtree for `data-*` motion hooks and wires them up
 * with GSAP + ScrollTrigger. Mirrors the old static-site `motion.js`, ported
 * to a per-page scoped hook so it cleans itself up on route change.
 *
 * data-hero        heading block that line-splits and rises in on mount
 * data-hero-meta    meta/subhead block that fades in after the heading
 * data-reveal       fades/rises in once, on scroll into view
 * data-reveal-blocks  parent whose direct children scaleY-reveal, staggered
 * data-wipe         clip-path "wipe" reveal for images/blocks
 * data-float        gentle ambient float + rotate loop
 * data-parallax="0.2"  scroll-scrubbed vertical parallax
 * data-magnetic     cursor-follow magnetic hover
 */
export function useSiteMotion<T extends HTMLElement>(): RefObject<T | null> {
  const scope = useRef<T>(null);

  useGSAP(
    () => {
      const root = scope.current;
      if (!root) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

      // hero entrance
      const heading = root.querySelector<HTMLElement>("[data-hero]");
      const meta = root.querySelector<HTMLElement>("[data-hero-meta]");
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      if (heading) {
        const lines = splitLines(heading);
        if (reduceMotion) {
          gsap.set(lines, { yPercent: 0 });
        } else {
          tl.from(lines, { yPercent: 110, duration: 1, stagger: 0.12 }, 0);
        }
      }
      if (meta) {
        const divider = meta.querySelector<HTMLElement>("[data-hero-divider]");
        if (reduceMotion) {
          gsap.set(meta, { y: 0, opacity: 1 });
        } else {
          tl.from(meta, { y: 16, opacity: 0, duration: 0.7 }, 0.4);
          if (divider) {
            tl.from(
              divider,
              { scaleX: 0, transformOrigin: "left center", duration: 0.7 },
              0.4,
            );
          }
        }
      }

      // scroll reveals
      const reveals = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll("[data-reveal]"),
      );
      if (reveals.length) {
        if (reduceMotion) {
          gsap.set(reveals, { y: 0, opacity: 1 });
        } else {
          gsap.set(reveals, { y: 40, opacity: 0 });
          reveals.forEach((el) => {
            ScrollTrigger.create({
              trigger: el,
              start: "top 88%",
              once: true,
              onEnter: () =>
                gsap.to(el, {
                  y: 0,
                  opacity: 1,
                  duration: 0.9,
                  ease: "power3.out",
                }),
            });
          });
        }
      }

      // staggered block reveals
      root.querySelectorAll("[data-reveal-blocks]").forEach((container) => {
        const blocks = Array.from(container.querySelectorAll(":scope > *"));
        if (!blocks.length) return;
        if (reduceMotion) {
          gsap.set(blocks, { scaleY: 1 });
          return;
        }
        gsap.set(blocks, { scaleY: 0, transformOrigin: "top center" });
        ScrollTrigger.create({
          trigger: container,
          start: "top 85%",
          once: true,
          onEnter: () =>
            gsap.to(blocks, {
              scaleY: 1,
              duration: 1,
              ease: "power3.out",
              stagger: 0.12,
            }),
        });
      });

      // image / block wipes
      const wipes = gsap.utils.toArray<HTMLElement>(
        root.querySelectorAll("[data-wipe]"),
      );
      if (wipes.length) {
        if (reduceMotion) {
          gsap.set(wipes, { clipPath: "none", scale: 1 });
        } else {
          wipes.forEach((el) => {
            gsap.set(el, {
              clipPath: "inset(100% 0 0 0)",
              scale: 1.12,
              transformOrigin: "center",
            });
            ScrollTrigger.create({
              trigger: el,
              start: "top 88%",
              once: true,
              onEnter: () =>
                gsap.to(el, {
                  clipPath: "inset(0% 0 0 0)",
                  scale: 1,
                  duration: 1.2,
                  ease: "power4.out",
                }),
            });
          });
        }
      }

      // ambient float + parallax
      if (!reduceMotion) {
        const floaters = gsap.utils.toArray<HTMLElement>(
          root.querySelectorAll("[data-float]"),
        );
        floaters.forEach((el, i) => {
          gsap.to(el, {
            y: gsap.utils.random(-16, 16),
            rotation: gsap.utils.random(-5, 5),
            duration: gsap.utils.random(5, 8),
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: i * 0.4,
          });
        });

        root.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
          const speed = parseFloat(el.getAttribute("data-parallax") || "0.2");
          gsap.to(el, {
            yPercent: speed * 100,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        });
      }

      // magnetic hover
      if (!isCoarsePointer && !reduceMotion) {
        root.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
          magnetize(el);
        });
      }

      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    { scope },
  );

  return scope;
}
