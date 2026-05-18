import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("relative overflow-hidden md:pt-14 lg:pt-4 xl:pt-6 max-[809px]:py-10 min-[810px]:max-[1199.99px]:pt-10 min-[810px]:max-[1199.99px]:mt-8", className)}>
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          data-framer-name="color"
          style={{
            background: "radial-gradient(50% 50%, rgb(247, 230, 252) 0%, rgba(255, 0, 0, 0) 100%)",
            opacity: 1,
          }}
        />
        <div
          className="absolute inset-0"
          data-framer-name="color"
          style={{
            background: "radial-gradient(50% 50%, rgb(232, 243, 250) 0%, rgba(255, 0, 0, 0) 100%)",
            opacity: 1,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1080px] mx-auto px-5 md:px-10 xl:px-0 pt-12 md:pt-20 pb-10 xl:pb-5 flex flex-col gap-16 md:gap-16 lg:gap-14 max-[809px]:p-0 max-[809px]:gap-[60px] min-[810px]:max-[1199.99px]:pb-4 min-[810px]:max-[1199.99px]:px-[10px] min-[810px]:max-[1199.99px]:mx-0 min-[810px]:max-[1199.99px]:max-w-none min-[1200px]:gap-[50px]">
        {/* CTA */}
        <div className="flex flex-col items-center gap-6 max-w-[840px] mx-auto w-full min-[810px]:max-[1199.99px]:mb-6">
          <div className="max-[809px]:w-[169px] max-[809px]:h-[46px] max-[809px]:flex max-[809px]:items-center min-[810px]:max-[1199.99px]:w-[169px] min-[810px]:max-[1199.99px]:h-[46px] min-[810px]:max-[1199.99px]:flex min-[810px]:max-[1199.99px]:items-center min-[1200px]:w-[169px] min-[1200px]:h-[46px] min-[1200px]:flex min-[1200px]:items-center">
          <Logo
            className="justify-center"
            imageClassName=" md:h-8 md:w-auto xl:mb-[7px] max-[809px]:w-full max-[809px]:h-full min-[810px]:max-[1199.99px]:w-full min-[810px]:max-[1199.99px]:h-full min-[1200px]:w-full min-[1200px]:h-full"
          />
          </div>
          <div className="flex flex-col items-center gap-6 w-full xl:mb-1">
            <h2 className="font-sans max-w-[340px] md:max-w-full text-[32px] md:text-[42px] font-medium tracking-[-0.01em] md:tracking-[-0.03em] leading-[1.2em] text-foreground text-center max-[809px]:[font-family:Poppins,'Poppins_Placeholder',sans-serif]! max-[809px]:tracking-[-0.32px]! max-[809px]:leading-[38.4px]! min-[1200px]:tracking-[-0.5px] min-[1200px]:leading-[60px] min-[1600px]:text-[50px] min-[1600px]:[font-family:Poppins,'Poppins_Placeholder',sans-serif] min-[1600px]:tracking-[-0.5px] min-[1600px]:leading-[60px]">
              Grow your Knowledge about <br className="min-[1200px]:hidden min-[1600px]:inline" /> Online Learning with zeitlabs now
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
          <div className="flex flex-col md:flex-row items-center justify-center flex-wrap min-[810px]:max-[1199.99px]:gap-5 min-[1200px]:gap-[60px] min-[1200px]:mt-1">
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
              <span className="font-inter text-[16px] font-normal tracking-[-0.01em] leading-[1.6em] text-foreground max-[809px]:[font-family:Inter,sans-serif] max-[809px]:tracking-[-0.16px] max-[809px]:leading-[25.6px]">
                Join Our news Letter
              </span>
              <Button
                size="sm"
                className="font-inter text-[16px] font-medium tracking-[-0.01em] leading-[1.2em] text-foreground rounded-[100px] border border-foreground bg-transparent hover:bg-transparent transition-colors w-[114px] h-[44px]"
              >
                Notify Me
              </Button>
            </div>
          </div>

          <div
            className="pt-6 lg:pb-5 xl:pb-10 -mx-5 md:-mx-10 min-[1001px]:mx-0 border-t border-[rgb(92,100,112)]"
          >
            <p
              className="font-inter text-[16px] font-normal not-italic tracking-[-0.01em] leading-[1.6em] text-foreground text-center opacity-90 no-underline normal-case max-[809px]:[font-family:Inter,sans-serif] max-[809px]:tracking-[-0.16px] max-[809px]:leading-[25.6px]"
            >
              zeitlabs Lab © 2025. Designed by zeitlabs
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
