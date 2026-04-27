import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils";

const topics = [
  "Web Development",
  "Open edX",
  "XBlocks",
  "Web Design",
  "Pedagogy",
  "Artificial Intelligence",
  "Conversion Design",
  "Video Lectures",
  "Server Management",
];

export function TopicPill({ label }: { label: string }) {
  return (
    <div
      className="flex items-center gap-2.5 px-4 py-4 rounded-2xl"
      style={{
        background: "linear-gradient(0deg, rgb(255,255,255) 0%, rgba(255,255,255,0.5) 100%)",
        border: "3px solid white",
        boxShadow: "0px 10px 30px 0px rgba(0,0,0,0.15)",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-5 h-5 shrink-0" aria-hidden="true">
        <path d="M 20 11.111 L 12.667 11.111 L 17.889 16.333 L 16.333 17.889 L 11.111 12.667 L 11.111 20 L 8.889 20 L 8.889 12.556 L 3.667 17.778 L 2.111 16.222 L 7.111 11.111 L 0 11.111 L 0 8.889 L 7.333 8.889 L 2.111 3.667 L 3.667 2.111 L 8.889 7.333 L 8.889 0 L 11.111 0 L 11.111 7.111 L 16.222 2 L 17.778 3.667 L 12.556 8.889 L 20 8.889 Z" fill="rgba(129, 79, 255, 0.15)" />
      </svg>
      <span className="font-inter text-base font-medium tracking-[-0.01em] text-foreground whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}

function FlowerDecoration() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="w-[25px] h-[25px]" aria-hidden="true">
      <path d="M 12.5 11.475 C 16.625 7.725 18.75 5.8 18.75 3.362 C 18.75 1.487 17.188 0 15.313 0 C 14.238 0 13.213 0.45 12.5 1.25 C 11.787 0.45 10.762 0 9.613 0 C 7.738 0 6.25 1.563 6.25 3.438 C 6.25 5.8 8.375 7.725 12.5 11.475 Z M 11.475 12.5 C 7.725 8.375 5.8 6.25 3.362 6.25 C 1.487 6.25 0 7.813 0 9.688 C 0 10.762 0.45 11.787 1.25 12.5 C 0.45 13.213 0 14.238 0 15.388 C 0 17.263 1.563 18.75 3.438 18.75 C 5.8 18.75 7.725 16.625 11.475 12.5 Z M 13.538 12.5 C 17.275 16.625 19.2 18.75 21.638 18.75 C 23.513 18.75 25 17.188 25 15.313 C 25 14.238 24.55 13.213 23.75 12.5 C 24.55 11.787 25 10.762 25 9.613 C 25 7.738 23.438 6.25 21.563 6.25 C 19.2 6.25 17.275 8.375 13.538 12.5 Z M 12.5 13.525 C 8.375 17.275 6.25 19.2 6.25 21.637 C 6.25 23.512 7.813 25 9.688 25 C 10.762 25 11.787 24.55 12.5 23.75 C 13.213 24.55 14.238 25 15.388 25 C 17.263 25 18.75 23.437 18.75 21.562 C 18.75 19.2 16.625 17.275 12.5 13.525 Z" fill="rgba(129, 79, 255, 0.15)" />
    </svg>
  );
}

export interface CourseTopicsSectionProps {
  className?: string;
}

export function CourseTopicsSection({ className }: CourseTopicsSectionProps) {
  return (
    <section className={cn("relative bg-white overflow-hidden py-24 px-5 md:px-10 xl:px-15", className)}>
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden="true">
        <div
          className="absolute w-[717px] h-[512px]"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, rgb(168,200,255) 0%, rgba(171,171,171,0) 100%)",
            left: "calc(36.5% - 358px)",
            top: "calc(50% - 256px)",
          }}
        />
        <div
          className="absolute w-[774px] h-[509px]"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, rgb(232,181,255) 0%, rgba(171,171,171,0) 100%)",
            left: "calc(50% - 387px)",
            top: "calc(50% - 254px)",
          }}
        />
        <div
          className="absolute w-[686px] h-[487px]"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, rgb(191,227,255) 0%, rgba(171,171,171,0) 100%)",
            left: "calc(69.5% - 343px)",
            top: "calc(53.5% - 243px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col gap-11">
        {/* Heading */}
        <div className="flex items-center justify-center gap-8">
          <div className="hidden md:block opacity-70">
            <FlowerDecoration />
          </div>

          <div className="flex flex-col items-center gap-4 max-w-[620px]">
            <SectionLabel
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="w-4 h-4" aria-hidden="true">
                  <path d="M 20 11.111 L 12.667 11.111 L 17.889 16.333 L 16.333 17.889 L 11.111 12.667 L 11.111 20 L 8.889 20 L 8.889 12.556 L 3.667 17.778 L 2.111 16.222 L 7.111 11.111 L 0 11.111 L 0 8.889 L 7.333 8.889 L 2.111 3.667 L 3.667 2.111 L 8.889 7.333 L 8.889 0 L 11.111 0 L 11.111 7.111 L 16.222 2 L 17.778 3.667 L 12.556 8.889 L 20 8.889 Z" fill="currentColor" />
                </svg>
              }
              label="Featured Topics"
              className="w-auto px-2"
            />
            <h2 className="font-sans text-[32px] md:text-[42px] font-medium tracking-[-0.01em] md:tracking-[-0.03em] leading-[1.2em] text-foreground text-center">
              Courses Topics
            </h2>
            <p className="font-inter text-base tracking-[-0.01em] leading-[1.6em] text-foreground text-center max-w-[683px]">
              Explore the key topics covered in our courses, designed to equip you with the essential knowledge to build and manage online learning platforms
            </p>
          </div>

          <div className="hidden md:block opacity-70">
            <FlowerDecoration />
          </div>
        </div>

        {/* Topic pills */}
        <div className="flex flex-wrap justify-center gap-4">
          {topics.map((topic) => (
            <TopicPill key={topic} label={topic} />
          ))}
        </div>
      </div>
    </section>
  );
}
