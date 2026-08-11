# Portfolio Rebuild — What's Done, What I Need From You

This is the only file you need to read. It tells you exactly what's finished, what still needs your input, and what to send me so I can finish the rest. No fluff.

---

## 1. What I already built

Your site is now a real Next.js app, not static HTML. Location: `portfolio-next/` (next to your old `Portfolio Project/` folder — I didn't touch or delete that old folder, it's still there as a backup until you're happy with the new one).

**Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + GSAP (with ScrollTrigger, via the official `@gsap/react` hook).

**To run it on your machine:**
```
cd portfolio-next
npm run dev
```
Then open `http://localhost:3000`. Every page — Home, Projects, Social, Contact — is working and looks/behaves the same as your old site: same hero, same marquee, same scroll-reveal animations, same magnetic hover buttons, same custom thin scrollbar, same page-transition flash between routes.

I did **not** run `git init` anywhere — your existing repo is untouched. When you're ready to commit the new folder, just `git add portfolio-next` yourself.

**What changed under the hood (you don't need to do anything about this, just know it happened):**
- All 4 pages are now components, not 4 separate copy-pasted HTML files. The nav and footer are shared — edit them once, they update everywhere.
- All the old `motion.js` scroll/hover/marquee logic is now a reusable hook (`src/hooks/useSiteMotion.ts`) instead of one big script.
- Images use Next.js's built-in image optimizer (`next/image`) instead of plain `<img>` tags — faster loading, automatic resizing.
- I removed the unused old design-portfolio images (the `b1–b9.webp` grid photos, `palm.jpg`, `Design.png`, `Model.png`, `tech.png`, `softwares.png`, the Behance/Dribbble icons) since none of them are used anymore. Cut the assets folder from 13MB to under 2MB.

---

## 2. Things that are already fine — don't worry about these

- **Your hero photo** (`Me.png`) — it's a real, good-quality photo of you. I kept it. No need to replace it unless you want a different one.
- **3 of your 4 floating icon graphics** — HTML5, CSS3, and JavaScript badges. These already fit a developer site. Keep them.
- **The overall layout, animations, and page structure** — you told me the current tone/approach is good with just "a little twist," so I left the bones alone.

---

## 3. What I could NOT do without you — send me these

Everything below needs either a decision only you can make, or a file/credential only you have. I've ordered this by priority.

### 3.1 — Your real projects (highest priority)
Right now the site shows placeholder project names I invented (Ledger, ARKIV, Studio Ledger, plus 18 small labeled boxes like "Weather App", "To-Do List" etc. on the homepage). You said you have real course projects — I need those to replace the placeholders.

For **each project** you want featured, send me:
1. **Project name**
2. **One or two sentences**: what it does, in plain English
3. **Tech stack used** (e.g. "React, Node.js, MongoDB")
4. **2–5 screenshots** (PNG or JPG) of the actual app/site running — full browser window, not cropped weirdly
5. *(Optional but strong)* A **short screen recording** (15–30 seconds, `.mp4` or `.mov`, screen only, no need for narration) showing you clicking through it — this is what a freelance client actually wants to see
6. Live URL if it's deployed anywhere, and/or GitHub repo link
7. Roughly when you built it (month/year is enough)

**How many?** Pick your best 4–6. Not every course project — just the ones that actually show range (e.g. one frontend-heavy, one with a real backend/database, one with something tricky you solved). Quality over quantity — a freelance client skims, they don't read 15 project cards.

**Where to put the files:** create a folder anywhere convenient (e.g. `portfolio-next/project-media/your-project-name/`) and drop screenshots/recordings in there, or just hand them to me directly when you're ready and I'll place them.

### 3.2 — Real social links
The footer/social page currently link to placeholder handles I guessed (`x.com/dhruvshah`, `youtube.com/@dhruvshah`). Tell me:
- Your real X/Twitter handle (or remove it if you don't use X)
- Your real YouTube handle (or remove it if you don't have one)
- Your real LinkedIn URL (currently just points to linkedin.com generically)
- Your real Instagram (currently points to `@build_with_dhruv` — confirm that's correct)
- **Your GitHub profile URL.** This is missing entirely right now and for a full-stack developer portfolio, it's arguably the single most important link a freelance client or contractor will click. Send it and I'll add it to the footer/social page in the same style as the others.

### 3.3 — Contact form: pick one option
The contact form currently just shows a "thanks" message on submit — it doesn't actually send you an email yet, because that requires a real backend decision. Pick one:
- **Option A — easiest:** Use a hosted form service like Formspree or Web3Forms (free tier exists). You sign up, get an endpoint URL, send it to me, I wire it in. 10 minutes of work on your end.
- **Option B — more "full-stack" to show off:** I build a Next.js API route that sends the email itself using a service like Resend (has a generous free tier). You'd need to sign up for Resend and give me an API key. This is more impressive to show a technical client since it's your own code, not a third-party widget.

Tell me which one, and send the credential (endpoint URL or API key) once you have it. **Never paste API keys in plain chat if you can avoid it** — I'll show you how to put it in an environment variable (`.env.local`) that never gets committed to git.

### 3.4 — Freelance-specific copy
You said you only want freelance/contract work and you're actively pursuing it. The current copy is generic ("open to building products and collaborations worldwide"). To sharpen this for freelance clients specifically, give me short, plain answers to:
- What kind of freelance work do you want? (e.g. "full websites for small businesses," "frontend builds for other devs/agencies," "React dashboards," etc.)
- Do you want to mention pricing/rates at all, or keep it "contact me to discuss"?
- Roughly how fast do you turn work around / how available are you right now?
- Do you have **any** past freelance clients or people who'd give you a one-line testimonial, even an informal one? Even a single real quote beats none.

### 3.5 — The "twist" on tone
You said the current technical/minimal/experimental tone is good but want "a little bit of a twist" — and that you don't want an invented persona or character. That twist has to come from something real about you, not something I make up. Once I have your real projects (3.1) and how you actually talk about your work (3.4), I'll come back with 2–3 concrete, small ideas for that twist (a phrase, a layout quirk, a way of labeling things) — grounded in your actual work, not a costume.

### 3.6 — Resume/CV (optional)
You mentioned you don't have one yet. Not urgent, but if you want a "Download CV" link anywhere (several of the reference sites we researched use this), you'll eventually want a one-page PDF. Low priority — flag when ready.

### 3.7 — Deployment
When the content is in, this needs to go live somewhere. Recommended: **Vercel** (made by the Next.js team, free tier is generous, deploys straight from your GitHub repo in a few clicks). Tell me if you already have a Vercel account and/or a domain name you want to point at it — if not, I'll walk you through getting both when we're ready.

### 3.8 — Optional polish
Not required, just flagging: the 4th floating decorative icon on the homepage (`float-1.png`) is a generic blue "A" app icon left over from before — it doesn't clearly match the HTML5/CSS3/JS icons next to it. Low priority; replace it with a 4th matching tech badge (e.g. React, Git, Node.js) whenever convenient, or I can find/generate one once you confirm your core stack.

---

## 4. What happens after you send this stuff

Once I have your real projects (3.1) at minimum, I will:
1. Replace every placeholder project card and name with your real work
2. Add real per-project detail (either richer cards, or a dedicated project page per case study — I'll propose which once I see how much material you have)
3. Wire in whichever contact-form option you picked
4. Fix the social links
5. Come back with the "twist" ideas from 3.5
6. Do a final performance pass (Lighthouse audit, image sizing check) before we call it done

You don't need to send everything at once — send what you have, in any order, and I'll work through it.
