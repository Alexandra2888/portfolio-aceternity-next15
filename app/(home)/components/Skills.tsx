"use client";
import React from "react";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
	SiJavascript,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPrisma,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import Title from "./Title";
export default function Skills() {

	const skills = [
		{
		  text: "Javscript",
		  Icon: SiJavascript
		},
		{
		  text: "React",
		  Icon: SiReact
		},
		{
		  text: "React Native",
		  Icon: SiReact
		},
		{
		  text: "Prisma",
		  Icon: SiPrisma
		},
		{
		  text: "Next",
		  Icon: SiNextdotjs
		},
		{
		  text: "Node",
		  Icon: SiNodedotjs
		},
		{
		  text: "Mongo",
		  Icon: SiMongodb
		},
		{
		  text: "Tailwind",
		  Icon: SiTailwindcss
		},
		{
		  text: "Typescript",
		  Icon: SiTypescript
		}
	  ]

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
