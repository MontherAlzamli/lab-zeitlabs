import { cn } from "@/lib/utils";

export interface HeroProps {
  className?: string;
}

const BLOBS = [
  "blob-b1",
  "blob-b2",
  "blob-b3",
  "blob-b4",
  "blob-b5",
  "blob-b6",
  "blob-b7",
  "blob-b8",
  "blob-b9",
  "blob-b10",
] as const;

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        "relative w-full h-auto md:-mt-20 flex items-start md:items-center overflow-hidden px-1 sm:px-0 min-h-[520px] min-[600px]:max-[639px]:min-h-[420px]  min-[810px]:max-[833px]:min-h-[655px] min-[833px]:max-[1023px]:min-h-[587px]    sm:min-h-[370px] md:max-h-[710px] xl:max-h-[700px] pt-5 md:pt-0 pb-10 md:pb-0",
        className,
      )}
    >
      {/* Animated blob background */}
      <div className="absolute inset-0 z-0">
        <div className="relative mx-auto max-w-5xl self-start">
          {BLOBS.map((cls) => (
            <div key={cls} className={`blob ${cls}`} />
          ))}
        </div>
      </div>

      {/* Frosted glass overlay — softens the blob colors */}
      <div className="absolute inset-0 z-10 bg-white/30 backdrop-blur-[100px] pointer-events-none" />

      {/* Top gradient overlay — fades hero into white at the top */}
      <div className="hero-top-layer" />

      {/* Hero content — two-column: text left, 3D right */}
      <div className="container mx-auto px-4 sm:px-6 md:px-10 h-full flex items-center max-w-[1280px]">
        {/* Left — text content */}
        <div className="flex flex-col gap-4 w-full h-full md:mt-[19%] lg:mt-[38%] xl:mt-[13%] mb-0 sm:mb-[13%] relative z-[200] lg:w-[52%] pt-4 lg:pt-2 shrink-0 items-start">
          {/* Pill label */}
          <span className="inline-flex flex-none flex-row flex-nowrap items-center content-center justify-center gap-2 h-min w-auto rounded-[40px] px-3 py-1.5 mb-2 relative z-[2] text-foreground text-body-sm font-medium will-change-transform">
            {/* Background — appears after text */}
            <span
              className="absolute inset-0 rounded-[40px] animate-fade-in"
              style={{
                background: "linear-gradient(0deg, #ffffff17 20%, #ffffffb3 158%)",
                boxShadow: "inset 0 2px 6px #fff6",
                animationDelay: "0.8s",
              }}
            />
            {/* Dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-foreground inline-block relative z-10 animate-fade-in ml-1" style={{ animationDelay: "0.1s" }} />
            {/* Text — appears first */}
            <span className="relative z-10 animate-fade-in font-inter text-[14px] font-normal tracking-[-0.01em] leading-[24px] text-foreground no-underline normal-case" style={{ animationDelay: "0.2s" }}>
              Developing Online Learning since 2014
            </span>
          </span>

          {/* Heading */}
          <h1 className="font-display text-[2.5rem] sm:text-[2.5rem] md:text-[3.6rem] lg:text-h1 text-foreground animate-blur-in text-left" style={{ animationDelay: "0.5s" }}>
            Experiment, Learn, Innovate
          </h1>

          {/* Body */}
          <p className="font-inter text-[16px] font-normal tracking-[-0.01em] leading-[1.59em] no-underline text-black [word-spacing:-0.5px] text-left flex-none h-auto max-w-[600px] opacity-80 relative whitespace-pre-wrap w-full break-words z-[6]">
            {"Zeitlabs Laboratory is where ideas, educators, and organizations come together to explore and shape the future of online learning. We provide the tools, resources, and community to help you grow in this field"
              .split(" ")
              .map((word, i) => (
                <span
                  key={i}
                  className="inline-block animate-word-in"
                  style={{ animationDelay: `${1.2 + i * 0.06}s` }}
                >
                  {word}&nbsp;
                </span>
              ))}
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-4 mt-2 flex-nowrap justify-start max-[500px]:flex-wrap">
            <button
            className="font-inter items-center justify-center cursor-pointer h-min rounded-[40px] px-5 py-3 relative z-[2] text-black text-[16px] font-medium tracking-[-0.01em] leading-[1.2em] no-underline"
            style={{
              background: "linear-gradient(0deg, #ffffff17 20%, #ffffffb3 158%)",
              boxShadow: "inset 0 2px 6px #fff6",
            }}
          >
            View All Courses
          </button>
            <button
              className="font-inter group relative rounded-[100px] px-6 py-3 cursor-pointer overflow-hidden text-[16px] font-medium tracking-[-0.01em] leading-[1.2em] no-underline text-black"
              style={{
                boxShadow: "rgba(255, 255, 255, 0.3) 0px 0px 0px 6px",
                background: "linear-gradient(0deg, rgba(255, 255, 255, 0.37) 0%, rgb(255, 255, 255) 127%)",
              }}
            >
              {/* Text slides up and fades out on hover */}
              <span className="block transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                Start Learning Now
              </span>
              {/* Text enters from bottom on hover */}
              <span className="absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                Start Learning Now
              </span>
            </button>
            
          </div>
        </div>

        {/* Right — Spline 3D embed */}
        <div className="hidden lg:flex flex-1 h-full relative z-10 items-center justify-center">
          <div className="w-[1000px] h-[1000px] ml-[-270px] mt-[100px]">
            <iframe
              src="https://my.spline.design/cubic-f67fd92712ed023b465e5a99e5a791ba/"
              title="3D Cubes"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* 3D cubes — mobile only, bottom right */}
      <div className="lg:hidden absolute bottom-[-400px] sm:bottom-[-450px] md:bottom-[-200px] right-[-350px] w-[1000px] h-[1000px] z-20 pointer-events-none">
        <iframe
          src="https://my.spline.design/cubic-f67fd92712ed023b465e5a99e5a791ba/"
          title="3D Cubes"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>
    </section>
  );
}
