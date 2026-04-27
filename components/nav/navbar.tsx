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
    <header className={cn("bg-white md:bg-transparent border-b border-border md:border-b-0 h-16 sticky top-0 md:relative z-[9999] isolate", className)}>
      <div className="flex justify-between items-center h-[68.19px] px-5 md:px-[50px] max-w-[1500px] mx-auto">
        {/* Logo + desktop nav links */}
        <div className="flex items-center justify-between w-[61%]">
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
                  className="font-inter text-body font-medium text-foreground leading-6 no-underline"
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
            className="inline-flex items-center font-inter font-[500] text-body py-[11px] px-[22px] rounded-[24px] text-foreground bg-transparent hover:opacity-60 transition-opacity duration-200 cursor-pointer"
          >
            Login
          </a>
          <a
            href="https://apps.lab.zeitlabs.com/authn/register"
            className="btn-register inline-flex items-center font-inter font-[500] text-body py-[11px] px-[22px] rounded-[24px] text-white cursor-pointer transition-all duration-200"
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
      <div
        className={cn(
          "md:hidden grid absolute top-full left-0 w-full z-[9999] transition-[grid-template-rows] duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="bg-white border-t border-border px-6 py-4 flex flex-col gap-4 shadow-md">
            {NAV_LINKS.map((link) => (
              <div
                key={link.href}
                className="flex items-center px-4 py-2 rounded-[5px] hover:bg-surface transition-colors duration-150"
              >
                <Link
                  href={link.href}
                  className="font-inter text-body font-medium text-foreground"
                >
                  {link.label}
                </Link>
              </div>
            ))}
            <div className="flex gap-3 pt-2 border-t border-border justify-center">
              <a
                href="https://apps.lab.zeitlabs.com/authn/login"
                className="inline-flex items-center font-inter font-medium text-body py-3 px-[22px] rounded-[24px] text-foreground bg-transparent hover:opacity-60 transition-opacity duration-200"
              >
                Login
              </a>
              <a
                href="https://apps.lab.zeitlabs.com/authn/register"
                className="btn-register inline-flex items-center font-inter font-medium text-body py-3 px-[22px] rounded-[24px] text-white transition-all duration-200"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
