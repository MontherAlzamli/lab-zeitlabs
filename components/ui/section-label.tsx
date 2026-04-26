import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionLabelProps {
  icon?: ReactNode;
  label: string;
  className?: string;
}

export function SectionLabel({ icon, label, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 bg-white border border-border rounded-[60px] pr-4 py-0 h-8 w-[168px] overflow-visible",
        className,
      )}
    >
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-muted shrink-0">
        <span className="text-primary flex items-center justify-center">
          {icon}
        </span>
      </span>
      <span className="text-[13.5px] font-normal text-foreground">{label}</span>
    </span>
  );
}
