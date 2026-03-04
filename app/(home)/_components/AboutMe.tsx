import React from "react";
import Title from "./Title";
import { SiReact, SiNextdotjs, SiTypescript } from "react-icons/si";
import { HiSparkles, HiCpuChip, HiCodeBracket } from "react-icons/hi2";

const highlights = [
  {
    icon: HiCodeBracket,
    label: "5+ Years",
    detail: "React, Next.js & TypeScript",
    accent: "bg-green-500",
  },
  {
    icon: HiCpuChip,
    label: "AI Startup",
    detail: "Building intelligent products",
    accent: "bg-indigo-500",
  },
  {
    icon: HiSparkles,
    label: "System Design",
    detail: "Scalable architecture & DX",
    accent: "bg-green-500",
  },
];

const techStack = [
  { icon: SiReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
];

export default function AboutMe() {
  return (
    <div className="py-10 px-5 sm:px-0">
      <Title
        text="About Me 🧑‍💻"
        className="flex flex-col items-center justify-center"
      />

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-3 space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            I&apos;m a frontend-focused engineer with{" "}
            <span className="text-green-400 font-semibold">
              5+ years of experience
            </span>{" "}
            shipping production apps with React, Next.js, and TypeScript. I
            currently work at an{" "}
            <span className="text-indigo-400 font-semibold">AI startup</span>,
            where I build intelligent, user-facing products from zero to one.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Beyond day-to-day coding, I&apos;m passionate about{" "}
            <span className="text-green-400 font-semibold">system design</span>{" "}
            — thinking through scalable architectures, clean abstractions, and
            great developer experience. I care deeply about performance,
            accessibility, and writing code that other humans enjoy reading.
          </p>

          <div className="flex items-center gap-4 pt-4">
            {techStack.map(({ icon: Icon, name }) => (
              <div
                key={name}
                className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-gray-300"
              >
                <Icon className="w-4 h-4 text-green-400" />
                {name}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 grid gap-4">
          {highlights.map(({ icon: Icon, label, detail, accent }) => (
            <div
              key={label}
              className="group relative overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-colors hover:border-slate-700"
            >
              <div
                className={`absolute -right-4 -top-4 h-24 w-24 rounded-full ${accent} opacity-10 blur-2xl transition-opacity group-hover:opacity-20`}
              />
              <div className="relative flex items-center gap-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${accent}/10`}
                >
                  <Icon className="h-5 w-5 text-green-400" />
                </div>
                <div>
                  <p className="font-semibold text-white">{label}</p>
                  <p className="text-sm text-gray-400">{detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
