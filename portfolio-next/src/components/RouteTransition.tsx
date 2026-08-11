"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * A brief full-screen wipe played whenever the route changes. Next.js already
 * swaps page content client-side, so this just adds a deliberate beat between
 * pages instead of an instant cut — the old static site faked this by
 * intercepting every link click; here we just react to the URL changing.
 */
export default function RouteTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const overlay = overlayRef.current;
    if (!overlay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.set(overlay, { transformOrigin: "bottom" });
    gsap
      .timeline()
      .to(overlay, { scaleY: 1, duration: 0.35, ease: "power4.inOut" })
      .set(overlay, { transformOrigin: "top" })
      .to(overlay, { scaleY: 0, duration: 0.4, ease: "power4.inOut" }, "+=0.05");
  }, [pathname]);

  return <div ref={overlayRef} className="page-transition" aria-hidden="true" />;
}
