import React from "react";
import Title from "./Title";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiPython,
  SiFastapi,
} from "react-icons/si";
import { HiSparkles, HiCpuChip, HiCodeBracket } from "react-icons/hi2";

const highlights = [
  {
    icon: HiCpuChip,
    label: "Production AI",
    detail: "Multi-agent, RAG & LLM tool-use",
    accent: "bg-indigo-500",
  },
  {
    icon: HiSparkles,
    label: "Real-time Voice",
    detail: "Low-latency voice agents",
    accent: "bg-green-500",
  },
  {
    icon: HiCodeBracket,
    label: "~5 Years",
    detail: "Python/FastAPI & TypeScript/Next.js",
    accent: "bg-green-500",
  },
];

const techStack = [
  { icon: SiPython, name: "Python" },
  { icon: SiFastapi, name: "FastAPI" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiReact, name: "React" },
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
            I&apos;m an{" "}
            <span className="text-indigo-400 font-semibold">
              AI &amp; fullstack engineer
            </span>{" "}
            with{" "}
            <span className="text-green-400 font-semibold">
              ~5 years of experience
            </span>
            , focused on shipping production AI systems — multi-agent
            orchestration, RAG pipelines, LLM tool-use, and real-time voice
            agents — on top of solid fullstack foundations in{" "}
            <span className="text-green-400 font-semibold">Python/FastAPI</span>{" "}
            and{" "}
            <span className="text-green-400 font-semibold">
              TypeScript/Next.js
            </span>
            .
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            I&apos;ve been sole developer or top contributor on multiple AI
            products, taking them from{" "}
            <span className="text-indigo-400 font-semibold">
              architecture to deployment
            </span>
            . My pharmacy background brings genuine fluency for regulated and
            health-adjacent domains.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
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
