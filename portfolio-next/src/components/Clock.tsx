"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

function formatTime(date: Date) {
  const hours = date.getHours();
  const period = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${displayHours}:${minutes} ${period}`;
}

function formatDateTime(date: Date) {
  return `${date.getDate()} / ${date.getMonth() + 1} / ${date.getFullYear()}   ${formatTime(date)}`;
}

function setTextWithFade(el: HTMLElement | null, text: string) {
  if (!el || el.textContent === text) return;
  gsap.to(el, {
    opacity: 0.3,
    duration: 0.12,
    onComplete: () => {
      el.textContent = text;
      gsap.to(el, { opacity: 1, duration: 0.18 });
    },
  });
}

/** Live-updating "[5:56 PM]" readout used in each page's hero meta row. */
export function ClockTime() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tick = () => setTextWithFade(ref.current, formatTime(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="timing" ref={ref} suppressHydrationWarning>
      --:--
    </span>
  );
}

/** Live-updating "10 Feb 2026 [07:11 PM]" readout used in the footer. */
export function ClockDateTime() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tick = () => setTextWithFade(ref.current, formatDateTime(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="dt" ref={ref} suppressHydrationWarning>
      -- / -- / ----   --:--
    </span>
  );
}
