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
        "size-10 rounded-md text-foreground hover:bg-surface transition-colors cursor-pointer flex flex-col items-center justify-center gap-[5px] mr-[-3px]",
        className,
      )}
    >
      <span
        className={cn(
          "block h-[3px] w-6 bg-foreground rounded-full transition-all duration-300 origin-center",
          isOpen && "translate-y-[8px] rotate-45"
        )}
      />
      <span
        className={cn(
          "block h-[3px] w-6 bg-foreground rounded-full transition-all duration-300",
          isOpen && "opacity-0 scale-x-0"
        )}
      />
      <span
        className={cn(
          "block h-[3px] w-6 bg-foreground rounded-full transition-all duration-300 origin-center",
          isOpen && "-translate-y-[8px] -rotate-45"
        )}
      />
    </button>
  );
}
