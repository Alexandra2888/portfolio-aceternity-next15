import React from "react";
import { cn } from "@/lib/utils";

export const BackgroundGradient = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border",
        className
      )}
    >
      <div
        className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-300 to-emerald-600 opacity-0 blur-xl transition duration-1000 group-hover/card:opacity-50"
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
