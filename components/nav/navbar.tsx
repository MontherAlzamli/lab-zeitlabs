"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "../ui/logo";
import { MenuIcon } from "./menu-icon";
import { cn } from "../../lib/utils";

const NAV_LINKS = [
  { href: "/courses", label: "Courses" },
  { href: "/contact-us", label: "Contact" },
];

export interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={cn("bg-transparent h-16 relative z-[101]", className)}>
      <div className="flex justify-between items-center h-full py-[37px] px-[50px]">
        {/* Logo + desktop nav links */}
        <div className="flex items-end justify-between w-[61%]">
          <Link href="/" className="flex-shrink-0 mr-20">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-4">
            {NAV_LINKS.map((link) => (
              <div
                key={link.href}
                className="flex items-center px-4 py-2 rounded-[5px] hover:bg-primary/8 transition-colors duration-150"
              >
                <Link
                  href={link.href}
                  className="text-body font-medium text-foreground leading-6 no-underline"
                >
                  {link.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center justify-center px-0 py-2">
          <a
            href="https://apps.lab.zeitlabs.com/authn/login"
            className="inline-flex items-center font-sans font-[500] text-body py-[11px] px-[22px] rounded-[24px] text-foreground bg-transparent hover:opacity-60 transition-opacity duration-200 cursor-pointer"
          >
            Login
          </a>
          <a
            href="https://apps.lab.zeitlabs.com/authn/register"
            className="btn-register inline-flex items-center font-sans font-[500] text-body py-[11px] px-[22px] rounded-[24px] text-white cursor-pointer transition-all duration-200"
          >
            Register
          </a>
        </div>

        {/* Mobile hamburger */}
        <MenuIcon
          isOpen={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden"
        />
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-sm border-t border-white/20 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <div
              key={link.href}
              className="flex items-center px-4 py-2 rounded-[5px] hover:bg-surface transition-colors duration-150"
            >
              <Link
                href={link.href}
                className="text-body font-medium text-foreground"
              >
                {link.label}
              </Link>
            </div>
          ))}
          <div className="flex gap-3 pt-2 border-t border-border">
            <a
              href="https://apps.lab.zeitlabs.com/authn/login"
              className="inline-flex items-center font-sans font-medium text-body py-3 px-[22px] rounded-[24px] text-foreground bg-transparent hover:opacity-60 transition-opacity duration-200"
            >
              Login
            </a>
            <a
              href="https://apps.lab.zeitlabs.com/authn/register"
              className="btn-register inline-flex items-center font-sans font-medium text-body py-3 px-[22px] rounded-[24px] text-white transition-all duration-200"
            >
              Register
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
