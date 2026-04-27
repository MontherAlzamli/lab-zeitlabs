import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("relative bg-white overflow-hidden", className)}>
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[717px] h-[627px]"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, rgb(225,239,250) 0%, rgba(171,171,171,0) 100%)",
            left: "125px",
            top: "calc(52.9% - 313px)",
          }}
        />
        <div
          className="absolute w-[734px] h-[619px]"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, rgb(246,227,255) 0%, rgba(171,171,171,0) 100%)",
            right: "31px",
            top: "calc(46.7% - 309px)",
          }}
        />
        <div
          className="absolute w-[713px] h-[487px]"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, rgb(230,244,255) 0%, rgba(171,171,171,0) 100%)",
            left: "calc(53.4% - 356px)",
            bottom: "77px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1080px] mx-auto px-5 md:px-10 xl:px-0 pt-12 md:pt-20 pb-10 flex flex-col gap-16 md:gap-16">
        {/* CTA */}
        <div className="flex flex-col items-center gap-6 max-w-[840px] mx-auto w-full">
          <Logo
            className="justify-center"
            imageClassName="w-[169px] h-[33px] md:h-8 md:w-auto"
          />
          <div className="flex flex-col items-center gap-6 w-full">
            <h2 className="font-sans max-w-[340px] md:max-w-full text-[32px] md:text-[42px] font-medium tracking-[-0.01em] md:tracking-[-0.03em] leading-[1.2em] text-foreground text-center">
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
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-15 flex-wrap">
            <div className="flex items-center gap-5 md:gap-15">
              <Link
                href="/courses"
                className="font-inter text-[16px] font-medium tracking-[-0.01em] leading-[1.2em] text-foreground hover:text-foreground/70 transition-colors"
              >
                Courses
              </Link>
              <Link
                href="/contact-us"
                className="font-inter text-[16px] font-medium tracking-[-0.01em] leading-[1.2em] text-foreground hover:text-foreground/70 transition-colors"
              >
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

          <div
            className="pt-6 pb-2"
            style={{ borderTop: "1px solid rgb(92, 100, 112)" }}
          >
            <p
              className="font-inter text-[16px] font-normal tracking-[-0.01em] leading-[1.6em] text-foreground text-center"
              style={{ opacity: 0.9 }}
            >
              zeitlabs Lab © 2025. Designed by zeitlabs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
