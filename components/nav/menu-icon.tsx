"use client";

import { cn } from "@/lib/utils";

export interface MenuIconProps {
  isOpen?: boolean;
  onClick?: () => void;
  className?: string;
}

export function MenuIcon({ isOpen = false, onClick, className }: MenuIconProps) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className={cn(
        "p-1.5 rounded-md text-foreground hover:bg-surface transition-colors cursor-pointer",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        {isOpen ? (
          <>
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </>
        ) : (
          <>
            <line x1="4" y1="8" x2="20" y2="8" />
            <line x1="4" y1="16" x2="20" y2="16" />
          </>
        )}
      </svg>
    </button>
  );
}
