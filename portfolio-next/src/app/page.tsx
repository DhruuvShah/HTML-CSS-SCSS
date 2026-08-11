import Image from "next/image";
import PageMotion from "@/components/PageMotion";
import Marquee from "@/components/Marquee";
import { ClockTime } from "@/components/Clock";

const ERA_2025 = [
  ["Weather App", "To-Do List", "Portfolio Site"],
  ["Quiz Game", "Recipe Finder", "Chat App"],
  ["Blog CMS", "Movie Search", "Budget Tracker"],
];

const ERA_2026 = [
  ["E-commerce Platform", "Task Manager", "Expense Tracker"],
  ["Real-time Chat App", "Social Media Clone", "Video Streaming App"],
  ["Booking System", "Analytics Dashboard", "AI Chatbot"],
];

const HEIGHTS = [
  "h-48 sm:h-64 lg:h-160",
  "h-40 sm:h-56 lg:h-120",
  "h-56 sm:h-72 lg:h-190",
];
const COL_OFFSETS = ["", "lg:pt-30", "lg:pt-15"];

const STACK = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "Git & GitHub",
];

export default function Home() {
  return (
    <PageMotion>
      <section className="w-full mt-12 sm:mt-20 px-6 sm:px-10 lg:px-40 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
        <div className="leftheadings" data-hero>
          <h6 className="text-xl sm:text-2xl -mb-2 sm:-mb-3 tracking-tighter font-bold">
            Hello I am,
          </h6>
          <h1 className="text-[3.5rem] sm:text-[6rem] lg:text-[12rem] leading-none -ml-1 lg:-ml-2 tracking-tighter font-bold">
            Dhruv.
          </h1>
        </div>
        <div className="rightheadings flex items-center gap-3" data-hero-meta>
          <h4 className="tracking-tight font-medium text-base sm:text-xl">
            [<ClockTime />]
          </h4>
          <div className="w-16 sm:w-32 h-px bg-black" data-hero-divider />
          <h3 className="font-medium tracking-tight text-base sm:text-xl">
            Full Stack Developer
          </h3>
        </div>
      </section>

      <section className="px-6 sm:px-10 lg:px-40 picture w-full h-96 sm:h-128 lg:h-200 mt-10 relative">
        <Image
          src="/assets/Me.png"
          alt="Dhruv Shah"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[40%_center] sm:object-[0%_20%]"
          data-wipe
        />
      </section>

      <Marquee text="Full Stack Developer  —  Available for Projects  —  Based in India  —  " />

      <section className="about w-full px-6 sm:px-10 lg:px-40 py-20 mt-40 flex items-center justify-center">
        <div className="relative text text-center w-full sm:w-2/3">
          <Image
            src="/assets/float-1.png"
            alt=""
            width={103}
            height={102}
            className="h-25 w-25 absolute -top-20 hidden sm:block"
            data-float
          />
          <Image
            src="/assets/float-2.png"
            alt=""
            width={139}
            height={145}
            className="h-25 w-25 absolute right-0 -top-20 hidden sm:block"
            data-float
          />
          <Image
            src="/assets/float-3.png"
            alt=""
            width={141}
            height={143}
            className="h-25 w-25 absolute top-50 left-50 -bottom-40 hidden sm:block"
            data-float
          />
          <Image
            src="/assets/float-4.png"
            alt=""
            width={137}
            height={139}
            className="h-25 w-25 absolute right-50 -bottom-30 hidden sm:block"
            data-float
          />
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-10"
            data-reveal
          >
            [ I build fast, functional &amp; scalable web experiences ]
          </h1>
          <p
            className="text-lg sm:text-xl lg:text-2xl font-medium tracking-normal"
            data-reveal
          >
            I help startups and teams turn ideas into working products —
            from responsive front-ends and REST APIs to databases and
            deployment. My approach starts with clean architecture and ends
            in something fast, reliable and built to scale.
          </p>
        </div>
      </section>

      <section className="w-full relative px-6 sm:px-10 lg:px-40 py-20 mt-80">
        <div className="w-full sticky bg-white z-2 top-0 flex items-center gap-4 sm:gap-10 px-4 sm:px-6 lg:px-10 py-8">
          <h1 className="text-3xl sm:text-5xl lg:text-8xl tracking-tighter font-medium">
            2025.
          </h1>
          <div className="w-10 sm:w-32 lg:w-70 h-1 bg-black" />
          <h1 className="text-3xl sm:text-5xl lg:text-8xl text-zinc-400 tracking-tighter font-medium opacity-30">
            The Beginning
          </h1>
        </div>
        <div className="imagecontent w-full gap-10 lg:gap-20 flex flex-col lg:flex-row px-4 sm:px-6 lg:px-10 py-8">
          {ERA_2025.map((col, colIndex) => (
            <div
              key={colIndex}
              className={`col flex flex-col gap-6 sm:gap-10 lg:gap-20 w-full lg:w-1/3 ${COL_OFFSETS[colIndex]}`}
              data-reveal-blocks
            >
              {col.map((name, rowIndex) => (
                <div
                  key={name}
                  className={`w-full ${HEIGHTS[rowIndex]} bg-black/5 border border-black/10 flex items-center justify-center text-center px-4`}
                  data-wipe
                >
                  <span className="text-base sm:text-lg lg:text-xl font-medium tracking-tight">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="w-full relative px-6 sm:px-10 lg:px-40 py-20">
        <div className="w-full sticky bg-white z-2 top-0 px-4 sm:px-6 lg:px-10 py-8 flex gap-4 sm:gap-10 items-center">
          <h1 className="text-3xl sm:text-5xl lg:text-8xl tracking-tighter font-medium">
            2026.
          </h1>
          <div className="w-10 sm:w-32 lg:w-70 h-1 bg-black" />
          <h1 className="text-3xl sm:text-5xl lg:text-8xl text-zinc-400 tracking-tighter font-medium opacity-30">
            Escalation
          </h1>
        </div>
        <div className="imagecontent w-full gap-10 lg:gap-20 flex flex-col lg:flex-row px-4 sm:px-6 lg:px-10 py-8">
          {ERA_2026.map((col, colIndex) => (
            <div
              key={colIndex}
              className={`col flex flex-col gap-6 sm:gap-10 lg:gap-20 w-full lg:w-1/3 ${COL_OFFSETS[colIndex]}`}
              data-reveal-blocks
            >
              {col.map((name, rowIndex) => (
                <div
                  key={name}
                  className={`w-full ${HEIGHTS[rowIndex]} bg-black/5 border border-black/10 flex items-center justify-center text-center px-4`}
                  data-wipe
                >
                  <span className="text-base sm:text-lg lg:text-xl font-medium tracking-tight">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="w-full relative">
        <Image
          src="/assets/bgdots.png"
          alt=""
          width={1920}
          height={872}
          className="w-full h-auto"
        />
        <div className="overlaytext absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-6">
          <h1 className="text-2xl sm:text-4xl lg:text-6xl mb-6 sm:mb-12 lg:mb-20 font-medium">
            I am great at
          </h1>
          <ul
            className="flex flex-wrap justify-center gap-x-4 gap-y-4 sm:gap-x-8 sm:gap-y-6 max-w-4xl mx-auto list-none"
            aria-label="Technologies I work with"
          >
            {STACK.map((tech, i) => (
              <li key={tech} className="contents">
                {i > 0 && (
                  <li
                    className="text-lg sm:text-2xl lg:text-3xl font-medium tracking-tight opacity-30"
                    aria-hidden="true"
                  >
                    /
                  </li>
                )}
                <li className="text-lg sm:text-2xl lg:text-3xl font-medium tracking-tight">
                  {tech}
                </li>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="testimonials px-6 sm:px-10 lg:px-40">
        <h3 className="text-3xl sm:text-5xl lg:text-6xl font-medium" data-reveal>
          Selected
        </h3>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 lg:gap-10 items-start sm:items-center">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl leading-none tracking-tighter">
            Featured
          </h1>
          <Image
            src="/assets/arrow.png"
            alt=""
            width={420}
            height={134}
            className="w-8 sm:w-12 lg:w-16 rotate-90 sm:rotate-0"
            data-magnetic
          />
          <h1 className="text-3xl sm:text-5xl lg:text-7xl leading-none tracking-tighter">
            Work
          </h1>
        </div>
        <div className="workshowcase">
          <div className="mt-20" data-reveal>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              Ledger
            </h1>
            <div className="flex gap-2 mt-3 items-center">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium">2026</h3>
              <Image
                src="/assets/arrow.png"
                alt=""
                width={420}
                height={134}
                className="w-12 sm:w-16 lg:w-20"
                data-magnetic
              />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-medium">
                MERN Stack
              </h3>
            </div>
            <div
              className="w-full h-56 sm:h-96 lg:h-140 mt-4 bg-black/5 border border-black/10 flex items-center justify-center"
              data-wipe
            >
              <span className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
                Ledger — Expense Tracker
              </span>
            </div>
          </div>
          <div
            className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-10 mt-20"
            data-reveal
          >
            <div className="w-full lg:w-150 py-3">
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-medium tracking-tight">
                ARKIV
              </h1>
              <div className="flex gap-2 mt-3 items-center">
                <h3 className="text-base sm:text-2xl lg:text-4xl font-medium">
                  2026
                </h3>
                <Image
                  src="/assets/arrow.png"
                  alt=""
                  width={420}
                  height={134}
                  className="w-10 sm:w-20 lg:w-30"
                  data-magnetic
                />
                <h3 className="text-sm sm:text-xl lg:text-3xl font-medium">
                  Full Stack
                </h3>
              </div>
              <div
                className="w-full h-56 sm:h-96 lg:h-190 mt-3 bg-black/5 border border-black/10 flex items-center justify-center text-center px-4"
                data-wipe
              >
                <span className="text-xl sm:text-3xl lg:text-4xl font-medium tracking-tight">
                  ARKIV — E-commerce Platform
                </span>
              </div>
            </div>
            <div className="w-full lg:w-300 py-3 lg:mt-30">
              <h1 className="text-2xl sm:text-4xl lg:text-6xl font-medium tracking-tight">
                Studio Ledger
              </h1>
              <div className="flex gap-2 mt-3 items-center">
                <h3 className="text-base sm:text-2xl lg:text-4xl font-medium">
                  2026
                </h3>
                <Image
                  src="/assets/arrow.png"
                  alt=""
                  width={420}
                  height={134}
                  className="w-10 sm:w-20 lg:w-30"
                  data-magnetic
                />
                <h3 className="text-sm sm:text-xl lg:text-3xl font-medium">
                  Real-time App
                </h3>
              </div>
              <div
                className="w-full h-56 sm:h-96 lg:h-190 mt-3 bg-black/5 border border-black/10 flex items-center justify-center text-center px-4"
                data-wipe
              >
                <span className="text-xl sm:text-3xl lg:text-4xl font-medium tracking-tight">
                  Studio Ledger — Task Manager
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageMotion>
  );
}
