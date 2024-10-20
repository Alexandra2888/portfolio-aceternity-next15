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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-20">
        {projects.map((project) => (
          <Link href={`/${project.id}`} key={project.id}>
            <div
              className={cn(
                "p-5 rounded-md",
                project.background,
                "flex flex-col justify-between"
              )}
              style={{ height: "300px" }}
            >
              <DirectionAwareHover
                imageUrl={project.cover}
                className="w-full h-full space-y-5 cursor-pointer flex flex-col justify-between"
              >
                <div className="space-y-5">
                  <h1 className="text-2xl font-bold">{project.title}</h1>
                  <div className="flex items-center gap-5">
                    {project.tech.map((Icon, index) => (
                      <Icon key={index} className="w-8 h-8" />
                    ))}
                  </div>
                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
