"use client";

import type { ReactNode } from "react";
import { useSiteMotion } from "@/hooks/useSiteMotion";

/** Wraps a page's content in the GSAP motion scope (see useSiteMotion). */
export default function PageMotion({ children }: { children: ReactNode }) {
  const scope = useSiteMotion<HTMLDivElement>();
  return (
    <div ref={scope} className="w-full">
      {children}
    </div>
  );
}
