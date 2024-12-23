import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { projects } from "@/data/projects";
import Title from "./Title";

export default function Projects() {
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-20 max-w-7xl mx-auto">
        {projects.map((project) => {
          const imageUrl =
            project.cover && project.cover.startsWith("http")
              ? project.cover
              : "/placeholder.jpg";

          return (
            <Link href={`/${project.id}`} key={project.id}>
              <div
                className={cn(
                  "relative p-5 rounded-md h-[300px] overflow-hidden hover:scale-105 transition-all duration-300",
                  {
                    "bg-green-500": project.background === "bg-green-500",
                    "bg-indigo-500": project.background === "bg-indigo-500",
                    "bg-orange-500": project.background === "bg-orange-500",
                    "bg-purple-500": project.background === "bg-purple-500",
                    "bg-pink-500": project.background === "bg-pink-500",
                    "bg-blue-500": project.background === "bg-blue-500",
                    "bg-orange-700": project.background === "bg-orange-700",
                    "bg-pink-700": project.background === "bg-pink-700",
                    "bg-green-700": project.background === "bg-green-700",
                  }
                )}
              >
                <DirectionAwareHover
                  imageUrl={imageUrl}
                  className="absolute inset-0 w-full h-full"
                >
                  <div className="relative z-10 p-5 space-y-5 h-full flex flex-col justify-between">
                    <h1 className="text-2xl font-bold text-white">
                      {project.title}
                    </h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => (
                        <Icon key={index} className="w-8 h-8 text-white" />
                      ))}
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
