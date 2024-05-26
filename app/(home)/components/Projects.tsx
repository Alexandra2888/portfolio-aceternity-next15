import React from "react";
import {
	SiCss3,
	SiFirebase,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiPrisma,
	SiReact,
	SiTailwindcss,
	SiTypescript,
} from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
	const projects = [
		{
			title: "Pawsitive Vet Care",
			tech: [SiReact, SiTypescript, SiCss3, SiFirebase],
			link: "https://github.com/Alexandra2888/PawSitive-Care-Vet",
			cover: "/pawsitive.png",
			background: "bg-indigo-500",
		},
		{
			title: "Focus App",
			tech: [ SiReact],
			link: "https://github.com/Alexandra2888/Focus-Time",
			cover: "/focus.png",
			background: "bg-green-500",
		},
		{
			title: "eShop",
			tech: [ SiReact, SiNodedotjs, SiMongodb],
			link: "https://github.com/Alexandra2888/eShop",
			cover: "/eshop.png",
			background: "bg-orange-500",
		},
		{
			title: "Krello",
			tech: [ SiNextdotjs, SiTypescript, SiTailwindcss, SiPrisma],
			link: "https://github.com/Alexandra2888/Focus-Time",
			cover: "/krello.png",
			background: "bg-purple-500",
		},
		
	];

	return (
		<div className="py-10 p-5 sm:p-0">
			<Title
				text="Projects 🎨"
				className="flex flex-col items-center justify-center"
			/>
			<div className=" grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
				{projects.map((project, index) => {
					return (
						<Link href={project.link} key={index}>
							<div
								className={cn(
									"p-5 rounded-md",
									project.background
								)}
							>
								<DirectionAwareHover
									imageUrl={project.cover}
									className="w-full space-y-5 cursor-pointer"
								>
									<div className=" space-y-5">
										<h1 className="text-2xl font-bold">
											{project.title}
										</h1>
										<div className="flex items-center gap-5">
											{project.tech.map((Icon, index) => {
												return (
													<Icon
														className="w-8 h-8"
														key={index}
													/>
												);
											})}
										</div>
									</div>
								</DirectionAwareHover>
							</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}
