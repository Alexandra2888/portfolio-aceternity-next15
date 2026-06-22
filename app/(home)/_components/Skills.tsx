"use client";
import React from "react";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiDocker,
  SiFastapi,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { HiCircleStack, HiSparkles } from "react-icons/hi2";
import Title from "./Title";
export default function Skills() {
  const skills = [
    {
      text: "Python",
      Icon: SiPython,
    },
    {
      text: "FastAPI",
      Icon: SiFastapi,
    },
    {
      text: "LangChain",
      Icon: SiLangchain,
    },
    {
      text: "LangGraph",
      Icon: SiLangchain,
    },
    {
      text: "RAG",
      Icon: HiSparkles,
    },
    {
      text: "pgvector",
      Icon: HiCircleStack,
    },
    {
      text: "PostgreSQL",
      Icon: SiPostgresql,
    },
    {
      text: "Docker",
      Icon: SiDocker,
    },
    {
      text: "JavaScript",
      Icon: SiJavascript,
    },
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Prisma",
      Icon: SiPrisma,
    },
    {
      text: "Next",
      Icon: SiNextdotjs,
    },
    {
      text: "Node",
      Icon: SiNodedotjs,
    },
    {
      text: "Mongo",
      Icon: SiMongodb,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
  ];

  return (
    <div className=" max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
