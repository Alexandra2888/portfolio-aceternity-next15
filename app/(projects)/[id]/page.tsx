import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, Github } from "lucide-react";

export default async function ProjectDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const project = projects.find((p) => p.id === params.id);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-4">
      <BackgroundGradient className="rounded-[22px] p-6 bg-white dark:bg-gray-800 max-w-5xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-1/2">
            <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-xl mb-4">
              <Image
                src={project.cover}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="lg:w-1/2 flex flex-col">
            <Button
              variant="ghost"
              asChild
              className="self-start p-0 mb-4 hover:bg-transparent"
            >
              <Link
                href="/"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <h1 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
              {project.title}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              {project.description || "No description available."}
            </p>
            <h2 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-200">
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((Icon, index) => (
                <Icon
                  key={index}
                  className="w-5 h-5 text-gray-600 dark:text-gray-300"
                />
              ))}
            </div>
            <div className="flex gap-2 mt-auto">
              {project.deploymentLink && (
                <Button asChild size="sm" className="flex-1">
                  <Link
                    href={project.deploymentLink}
                    className="flex items-center justify-center"
                  >
                    <Eye className="mr-2 h-4 w-4" />
                    View
                  </Link>
                </Button>
              )}
              <Button asChild variant="outline" size="sm" className="flex-1">
                <Link
                  href={project.githubLink}
                  className="flex items-center justify-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
