import Image from "next/image";
import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
  imageClassName?: string;
}

export function Logo({ className, imageClassName }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/assets/images/logo.png"
        alt="Zeitlabs Laboratory"
        width={169}
        height={32}
        priority
        className={cn("h-[25px] md:h-8 w-auto", imageClassName)}
      />
    </div>
  );
}
