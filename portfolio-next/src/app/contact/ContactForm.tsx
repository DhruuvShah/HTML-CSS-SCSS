"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * UI-only for now: shows a real confirmation state on submit, but there is
 * no backend wired up yet. See REQUIREMENTS.md #5 for the two options
 * (Formspree-style hosted endpoint, or a Next.js API route + email service)
 * and what's needed from you to turn this on for real.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="lg:w-3/5 flex flex-col justify-center" data-reveal>
        <h3 className="text-2xl sm:text-4xl font-medium tracking-tight">
          Thanks — got it.
        </h3>
        <p className="text-base sm:text-lg text-zinc-500 mt-3 max-w-md">
          This form isn&apos;t wired up to send anything yet, but once it is,
          your message will land straight in my inbox.
        </p>
      </div>
    );
  }

  return (
    <form
      className="lg:w-3/5 flex flex-col gap-10"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label className="flex flex-col gap-2" data-reveal>
        <span className="text-sm sm:text-base font-medium text-zinc-400">
          Your name
        </span>
        <input
          type="text"
          name="name"
          required
          placeholder="Jane Doe"
          className="bg-transparent border-b border-black/20 focus:border-black outline-none py-3 text-lg sm:text-2xl tracking-tight placeholder:text-zinc-300 transition-colors duration-300"
        />
      </label>
      <label className="flex flex-col gap-2" data-reveal>
        <span className="text-sm sm:text-base font-medium text-zinc-400">
          Your email
        </span>
        <input
          type="email"
          name="email"
          required
          placeholder="jane@email.com"
          className="bg-transparent border-b border-black/20 focus:border-black outline-none py-3 text-lg sm:text-2xl tracking-tight placeholder:text-zinc-300 transition-colors duration-300"
        />
      </label>
      <label className="flex flex-col gap-2" data-reveal>
        <span className="text-sm sm:text-base font-medium text-zinc-400">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={3}
          placeholder="Tell me a little about what you have in mind…"
          className="bg-transparent border-b border-black/20 focus:border-black outline-none py-3 text-lg sm:text-2xl tracking-tight placeholder:text-zinc-300 transition-colors duration-300 resize-none"
        />
      </label>
      <button
        type="submit"
        className="group self-start flex items-center gap-4 mt-4 cursor-pointer"
        data-reveal
      >
        <span className="text-2xl sm:text-4xl font-medium tracking-tight group-hover:opacity-30 transition-opacity duration-300">
          Send message
        </span>
        <Image
          src="/assets/arrow.png"
          alt=""
          width={420}
          height={134}
          className="w-10 sm:w-14 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
          data-magnetic
        />
      </button>
    </form>
  );
}
