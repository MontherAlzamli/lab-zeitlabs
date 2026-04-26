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
    <section className={cn("relative pt-8 pb-14 overflow-hidden", className)}>
      <div className="max-w-[1250px] mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel
            className="w-fit whitespace-nowrap"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="size-5">
                <path d="M232,86.53V56a16,16,0,0,0-16-16H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16H160v24A8,8,0,0,0,172,231l24-13.74L220,231A8,8,0,0,0,232,224V161.47a51.88,51.88,0,0,0,0-74.94ZM128,144H72a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm0-32H72a8,8,0,0,1,0-16h56a8,8,0,0,1,0,16Zm88,98.21-16-9.16a8,8,0,0,0-7.94,0l-16,9.16V172a51.88,51.88,0,0,0,40,0ZM196,160a36,36,0,1,1,36-36A36,36,0,0,1,196,160Z"/>
              </svg>
            }
            label="Our Programs"
          />
          <h2 className="text-foreground text-[42px] mt-4 mb-4">Featured Tracks</h2>
          <p className="max-w-2xl mx-auto">
            Get discount on high value multi-course programs and upgrade your Open edX experience
            from the experts.
          </p>
        </div>

        <div className="bg-white p-8 lg:px-24 lg:py-0 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-14">
            {/* Text content */}
            <div className="flex-1">
              <h3 className="font-sans text-[42px] font-medium tracking-[-0.03em] leading-[1.2em] text-left text-foreground mb-3 max-w-sm">Open edX Instructor track</h3>
              <p className="font-sans text-[42px] font-medium tracking-[-0.03em] leading-[1.2em] text-left text-[#9a72ff]">$250</p>
              <StarRating rating={5} starSize={32} color="#ffd633" className="mb-5" />
              <p className="mb-3 max-w-sm">
                Learn how to design, author, and manage engaging courses on Open edX using Studio,
                instructor tools, and learner analytics.
              </p>
              <Button
                href="/open-edx-instructor"
                className="bg-[#222] rounded-lg h-[40px] p-[15px] w-min whitespace-nowrap text-sm text-white hover:opacity-90"
                style={{
                  boxShadow: "0 0.71px 0.71px -0.625px #00000026, 0 1.81px 1.81px -1.25px #00000024, 0 3.62px 3.62px -1.875px #00000024, 0 6.87px 6.87px -2.5px #00000021, 0 13.65px 13.65px -3.125px #0000001a, 0 30px 30px -3.75px #0000000d",
                }}
              >
                Get Started
              </Button>
            </div>

            {/* Framer asset image */}
            <div className="flex-[1.1] mx-[-70px] overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/gEdanOdb3qFYjAq7uDYmc3tfOU.jpg"
                alt="Open edX Instructor track"
                width={5000}
                height={3333}
                sizes="min(max(100vw - 40px, 1px), 1000px)"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
