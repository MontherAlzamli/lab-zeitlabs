import Image from "next/image";
import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/assets/images/logo.png"
        alt="Zeitlabs Laboratory"
        width={169}
        height={32}
        priority
        className="h-8 w-auto"
      />
    </div>
  );
}
