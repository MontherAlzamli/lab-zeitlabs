import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn("bg-white relative", className)}
      style={{
        background: "radial-gradient(ellipse 35% 60% at 50% 50%, rgb(222, 239, 255) 0%, rgba(255,255,255,0) 100%)",
      }}
    >
      {/* CTA */}
      <div className="pb-9 pt-26">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Logo className="justify-center mb-8" />
          <h2 className="font-sans text-[42px] font-medium tracking-[-0.03em] leading-[1.2em] text-foreground mb-6">
            Grow your Knowledge about Online Learning with zeitlabs now
          </h2>
          <Button
            href="/courses"
            className="group relative text-white rounded-[100px] font-inter font-medium tracking-[-0.01em] w-[240px] h-[55px] overflow-hidden"
            style={{
              background: "linear-gradient(to right, rgb(55,57,64) 0%, rgb(10,10,12) 70%)",
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 4px 16px 0px",
            }}
          >
            <span className="block transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
              Start Learning Now
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
              Start Learning Now
            </span>
          </Button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-15 flex-wrap px-6">
          <div className="flex items-center gap-15">
          <Link href="/courses" className="font-inter text-[16px] font-medium tracking-[-0.01em] leading-[1.2em] text-foreground hover:text-foreground/70 transition-colors">
            Courses
          </Link>
          <Link href="/contact-us" className="font-inter text-[16px] font-medium tracking-[-0.01em] leading-[1.2em] text-foreground hover:text-foreground/70 transition-colors">
            Contact
          </Link>
          </div>
          <div className="flex items-center gap-4">
          <span className="font-inter text-[16px] font-normal tracking-[-0.01em] leading-[1.6em] text-foreground">
            Join Our news Letter
          </span>
          <Button
            size="sm"
            className="font-inter text-[16px] font-medium tracking-[-0.01em] leading-[1.2em] text-foreground rounded-[100px] border border-foreground bg-transparent hover:bg-foreground hover:text-white transition-colors w-[114px] h-[44px]"
          >
            Notify Me
          </Button>
          </div>
        </div>
        <div className="mx-6 mt-6 pt-6 pb-8 w-[1080px]" style={{ borderTop: "1px solid rgb(92, 100, 112)" }}>
          <p className="font-inter text-[16px] font-normal tracking-[-0.01em] leading-[1.6em] text-foreground text-center" style={{ opacity: 0.9 }}>
            zeitlabs Lab © 2025. Designed by zeitlabs
          </p>
        </div>
      </div>
    </footer>
  );
}
