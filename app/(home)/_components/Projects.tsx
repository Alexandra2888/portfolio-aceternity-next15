import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import Title from "./Title";
import { SiCss3, SiFirebase, SiMongodb, SiNextdotjs, SiNodedotjs, SiOpenai, SiPrisma, SiReact, SiReactquery, SiSupabase, SiTailwindcss, SiTensorflow, SiTypescript } from "react-icons/si";


export default function Projects() {
const projects = [
  {
    id: "1",
    title: "Pawsitive Vet Care",
    tech: [SiReact, SiTypescript, SiCss3, SiFirebase],
    githubLink: "https://github.com/Alexandra2888/PawSitive-Care-Vet",
    deploymentLink: "https://paw-sitive-care-vet.vercel.app/",
    description:
      "Pawsitive Care Vet is a veterinary management system built with React and TypeScript. This modern web application leverages Firebase for backend services, React Router for seamless navigation, and integrates interactive maps using React Leaflet. With features like appointment scheduling and a user-friendly interface, Pawsitive Care Vet streamlines veterinary clinic operations. The project showcases advanced front-end development practices, including responsive design with Sass and state management.",
    cover:
      "https://res.cloudinary.com/dblgunawk/image/upload/v1732728817/Device_-_Macbook_Pro6_j1hjdl_sbcgds.png",
    background: "bg-indigo-500",
  },
  {
    id: "2",
    title: "Focus App",
    tech: [SiReact],
    githubLink: "https://github.com/Alexandra2888/Focus-Time",
    deploymentLink: "",
    description:
      "Focus Time is a productivity app developed with React Native and Expo, designed to boost time management and task focus. This mobile application implements the Pomodoro Technique with customizable timers.",
    cover:
      "https://res.cloudinary.com/dblgunawk/image/upload/v1732728818/mobile_g7h032_srk3ih.png",
    background: "bg-green-500",
  },
  {
    id: "3",
    title: "eShop",
    tech: [SiReact, SiNodedotjs, SiMongodb],
    githubLink: "https://github.com/Alexandra2888/eshop",
    deploymentLink: "",
    description:
      "eShop is a full-stack e-commerce platform built using the MERN (MongoDB, Express, React, Node.js) stack. This project demonstrates proficiency in developing a complete, production-ready web application with a focus on performance and real-time user experience. Key features include secure user authentication, a dynamic product catalog with search and filtering capabilities, an intuitive shopping cart and checkout system, integrated payment processing, and a responsive design optimized for all devices.",
    cover:
      "https://res.cloudinary.com/dblgunawk/image/upload/v1734959572/e-shop_u2gsay.png",
    background: "bg-blue-500",
  },
  {
    id: "4",
    title: "Krello",
    tech: [SiNextdotjs, SiTypescript, SiTailwindcss, SiPrisma],
    githubLink: "https://github.com/Alexandra2888/krello",
    deploymentLink: "https://krello-beta.vercel.app/",
    description:
      "Krello is a sophisticated Trello clone that showcases advanced web development skills using modern technologies. Built with Next.js and React, this project demonstrates proficiency in creating complex, interactive user interfaces with drag-and-drop functionality for intuitive task management. Key features include robust user authentication via Clerk, real-time updates, and seamless integration with third-party services.",
    cover:
      "https://res.cloudinary.com/dblgunawk/image/upload/v1732728817/Device_-_Macbook_Pro2_cf5gfe_je7rfx.png",
    background: "bg-purple-500",
  },
  {
    id: "5",
    title: "IntelliFlow",
    tech: [SiNextdotjs, SiTypescript, SiTailwindcss, SiOpenai],
    githubLink: "https://github.com/Alexandra2888/IntelliFlow",
    deploymentLink: "https://intelli-flow-lemon.vercel.app/dashboard",
    description:
      "IntelliFlow is a Next.js-based platform that integrates OpenAI and Replicate APIs to offer AI-driven content generation. This project showcases advanced web development skills, featuring AI-powered image, video, code, and conversation generation.",
    cover:
      "https://res.cloudinary.com/dblgunawk/image/upload/v1732728817/Device_-_Macbook_Pro1_spsdlt_sunmam.png",
    background: "bg-pink-500",
  },
  {
    id: "6",
    title: "Object Detection",
    tech: [SiNextdotjs, SiTailwindcss, SiTensorflow],
    githubLink: "https://github.com/Alexandra2888/Object-Detection",
    deploymentLink: "https://object-detection-zeta-flax.vercel.app/",
    description:
      "Object Detection App is a real-time web application built with Next.js and TensorFlow.js. It uses the COCO-SSD model to detect and classify objects from a live webcam feed.",
    cover:
      "https://res.cloudinary.com/dblgunawk/image/upload/v1732728817/Device_-_Macbook_Pro5_zoxynj_anhfis.png",
    background: "bg-gray-500",
  },
  {
    id: "7",
    title: "Audit-AI",
    tech: [SiNextdotjs, SiTailwindcss, SiOpenai],
    githubLink: "https://github.com/Alexandra2888/Audit-AI",
    deploymentLink: "https://audit-ai.vercel.app/",
    description:
      "Audit-AI is an advanced smart contract auditing tool built with Next.js and powered by OpenAI. It offers both a web application and a CLI tool for automated security analysis of blockchain smart contracts.",
    cover:
      "https://res.cloudinary.com/dblgunawk/image/upload/v1732728817/Device_-_Macbook_Pro3_mw7qct_t1eles.png",
    background: "bg-orange-700",
  },
  {
    id: "8",
    title: "Fashion Vogue AI",
    tech: [SiNextdotjs, SiTailwindcss, SiOpenai],
    githubLink: "https://github.com/Alexandra2888/VogueLens-AI",
    deploymentLink: "https://vogue-lens-ai.vercel.app/",
    description: "Fashion Vogue AI is a personal AI stylist",
    cover:
      "https://res.cloudinary.com/dblgunawk/image/upload/v1734958595/fashion-ai_ayrhox.png",
    background: "bg-indigo-700",
  },
  {
    id: "9",
    title: "Octofy",
    tech: [SiNextdotjs, SiTailwindcss, SiOpenai],
    githubLink: "",
    deploymentLink: "https://octofy.ai/",
    description: "The right AI for every task",
    cover:
      "https://res.cloudinary.com/dblgunawk/image/upload/v1734958739/octofy_hl0fv3.png",
    background: "bg-green-700",
  },
];

  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className=" grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link href={`/${project.id}`} key={project.id}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full space-y-5 cursor-pointer"
                >
                  <div className=" space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
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

