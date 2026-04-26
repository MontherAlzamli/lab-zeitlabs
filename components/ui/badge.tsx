import { cn } from "@/lib/utils";

export interface BadgeProps {
  variant?: "primary" | "muted" | "default" | "secondary";
  children?: React.ReactNode;
  className?: string;
}

export function Badge({ variant = "primary", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full",
        (variant === "primary" || variant === "default") && "bg-primary/10 text-primary",
        (variant === "muted" || variant === "secondary") && "bg-surface text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
