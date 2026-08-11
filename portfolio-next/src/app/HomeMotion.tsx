"use client";

import type { ReactNode } from "react";
import { useSiteMotion } from "@/hooks/useSiteMotion";

export default function HomeMotion({ children }: { children: ReactNode }) {
  const scope = useSiteMotion<HTMLDivElement>();
  return (
    <div ref={scope} className="w-full font-['Helvetica_Now_Display']">
      {children}
    </div>
  );
}
