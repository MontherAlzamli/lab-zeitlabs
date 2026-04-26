import Link from "next/link";
import { cn } from "@/lib/utils";

export interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
}

export function NavLink({ href, label, className }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-body-sm font-medium text-foreground hover:text-primary transition-colors duration-150",
        className,
      )}
    >
      {label}
    </Link>
  );
}
