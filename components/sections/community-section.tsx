import Image from "next/image";
import { SectionLabel } from "@/components/ui/section-label";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CommunitySectionProps {
  className?: string;
}

export function CommunitySection({ className }: CommunitySectionProps) {
  return (
    <section className={cn("relative pb-7 sm:pb-0 md:pb-4 lg:pb-7 overflow-hidden sm:pt-0", className)}>
      <div className="max-w-[1250px] mx-auto px-0 md:px-6">
        <div
          className="text-center mb-20 sm:mb-6  md:mb-6  lg:mb-13"
        >
          <SectionLabel
            className="w-fit whitespace-nowrap"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                fill="currentColor"
                className="size-5"
              >
                <path d="M232,86.53V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16H160v24A8,8,0,0,0,172,231l24-13.74L220,231A8,8,0,0,0,232,224V161.47a51.88,51.88,0,0,0,0-74.94ZM128,144H72a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H72a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm88,98.21-16-9.16a8,8,0,0,0-7.94,0l-16,9.16V172a51.88,51.88,0,0,0,40,0ZM196,160a36,36,0,1,1,36-36A36,36,0,0,1,196,160Z" />
              </svg>
            }
            label="Our Programs"
          />
          <h2 className="font-[Poppins] text-[32px] font-medium tracking-[-0.03em] text-center text-foreground mt-4 mb-4">
            Featured Tracks
          </h2>
          <p className="max-w-[300px] min-[440px]:max-[500px]:max-w-[350px] min-[501px]:max-[549px]:max-w-[500px] min-[550px]:max-[640px]:max-w-[520px] min-[641px]:max-[700px]:max-w-[580px] min-[701px]:max-[750px]:max-w-[900px] sm:max-w-[700px] mx-auto min-[641px]:max-[768px]:mt-6">
            Get discount on high value multi-course programs and upgrade your
            Open edX experience from the experts.
          </p>
        </div>

        <div className="bg-white p-0 tablet:px-10 [@media(min-width:805px)_and_(max-width:900px)]:px-4 [@media(min-width:1200px)]:px-24 tablet:py-0 overflow-hidden">
          <div className="flex flex-col tablet:flex-row-reverse tablet:justify-between items-center gap-2 min-[501px]:max-[639px]:gap-4 tablet:gap-4 sm:mb-6 md:mb-6">
            {/* Framer asset image — top on mobile, right on desktop */}
            <div className="overflow-hidden rounded-2xl w-full h-[260px] min-[440px]:h-[330px] min-[501px]:h-[390px] min-[550px]:h-[450px] sm:h-[320px] min-[641px]:max-[768px]:h-[500px] min-[701px]:max-[804px]:h-[550px] [@media(min-width:805px)_and_(max-width:900px)]:h-[280px] [@media(min-width:805px)_and_(max-width:900px)]:w-[500px] tablet:w-[420px] tablet:h-[350px] lg:w-[432px] lg:h-[360px]">
              <Image
                src="https://framerusercontent.com/images/gEdanOdb3qFYjAq7uDYmc3tfOU.jpg"
                alt="Open edX Instructor track"
                width={5000}
                height={3333}
                sizes="min(max(100vw - 40px, 1px), 1000px)"
                className="w-full h-full object-cover object-center scale-97"
              />
            </div>

            {/* Text content — bottom on mobile (centered), left on desktop */}
            <div className="flex-1 [@media(min-width:805px)_and_(max-width:900px)]:flex-none [@media(min-width:805px)_and_(max-width:900px)]:w-1/2 flex flex-col items-center tablet:items-start text-center tablet:text-left mb-8 tablet:mb-0">
              <h3 className="font-[Poppins] tablet:font-sans text-[32px] tablet:text-[42px] font-medium tracking-[-0.01em] tablet:tracking-[-0.03em] leading-[1.2em] text-foreground mb-3 max-w-[300px] tablet:max-w-[380px]">
                Open edX Instructor track
              </h3>
              <p className="font-[Poppins] tablet:font-sans text-[32px] tablet:text-[42px] font-medium tracking-[-0.01em] tablet:tracking-[-0.03em] leading-[1.2em] text-[#9a72ff]">
                $250
              </p>
              <StarRating
                rating={5}
                starSize={32}
                color="#ffd633"
                className="mb-5"
              />
              <p className="font-[Inter] text-[16px] font-normal tracking-[-0.01em] leading-[1.6em] text-foreground text-center tablet:text-left mb-3 mt-[-10px] max-w-[330px] tablet:max-w-[380px]">
                Learn how to design, author, and manage engaging courses on Open
                edX using Studio, instructor tools, and learner analytics.
              </p>
              <Button
                href="/open-edx-instructor"
                className="font-[Inter] text-[14px] font-bold text-center text-white bg-[#222] hover:bg-[#222] rounded-lg h-[40px] p-[15px] w-min whitespace-nowrap"
                style={{
                  boxShadow:
                    "0 0.71px 0.71px -0.625px #00000026, 0 1.81px 1.81px -1.25px #00000024, 0 3.62px 3.62px -1.875px #00000024, 0 6.87px 6.87px -2.5px #00000021, 0 13.65px 13.65px -3.125px #0000001a, 0 30px 30px -3.75px #0000000d",
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
