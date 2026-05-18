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
        "relative w-full h-auto min-[810px]:-mt-20 flex items-start min-[810px]:max-[1200px]:max-h-[600px] min-[1150px]:max-[1199px]:max-h-[570px] min-[1200px]:items-center overflow-hidden min-[1200px]:min-h-[370px] min-[1310px]:max-h-[670px] min-[1200px]:max-h-[710px] xl:max-h-[700px] pt-5 min-[810px]:pt-0 max-[810px]:pb-[118px] min-[810px]:pb-0",
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
      <div className="w-full mx-auto pl-5 pr-[18px] min-[810px]:px-10 min-[810px]:h-full flex items-start min-[1200px]:items-center max-w-[1280px]">
        {/* Left — text content */}
        <div className="flex flex-col gap-4 w-full min-[810px]:h-full min-[810px]:max-[1200px]:mt-[160px] min-[1200px]:mt-[12.5%] mb-0 min-[810px]:mb-[13%] min-[1150px]:max-[1199px]:mb-[14%] min-[1200px]:ml-5 min-[1280px]:ml-[1.1rem] min-[1280px]:ml-[1rem] min-[1300px]:ml-[0.6rem] min-[1310px]:ml-[0.3rem] min-[1320px]:ml-[0.08%] min-[1300px]:mt-[13.2%] min-[1350px]:mt-[15.8%] min-[1310px]:mt-[16%] min-[1280px]:mt-[13.5%] relative z-[200] min-[1200px]:w-[55%] pt-3 min-[810px]:pt-0 min-[1200px]:pt-2 shrink-0 items-start">
          {/* Pill label */}
          <span className="inline-flex flex-none flex-row flex-nowrap items-center content-center justify-center gap-2 h-min w-[297.5px] min-[810px]:w-auto rounded-[40px] px-3 py-1.5 max-[810px]:mb-2 min-[810px]:mb-2 min-[810px]:max-[1200px]:mb-[6px] relative z-[2] text-foreground text-body-sm font-medium will-change-transform">
            {/* Background — appears after text */}
            <span
              className="absolute inset-0 rounded-[40px] animate-fade-in"
              style={{
                background:
                  "linear-gradient(0deg, #ffffff17 20%, #ffffffb3 158%)",
                boxShadow: "inset 0 2px 6px #fff6",
                animationDelay: "0.8s",
              }}
            />
            {/* Dot */}
            <span
              className="w-[5px] h-[5px] min-[810px]:w-1.8 min-[810px]:h-1.8 rounded-full bg-foreground inline-block relative z-10 animate-fade-in min-[810px]:ml-1"
              style={{ animationDelay: "0.1s" }}
            />
            {/* Text — appears first */}
            <span
              className="relative z-10 animate-fade-in font-inter text-[14px] font-normal tracking-[-0.01em] leading-[24px] text-foreground no-underline normal-case"
              style={{ animationDelay: "0.2s" }}
            >
              Developing Online Learning since 2014
            </span>
          </span>

          {/* Heading */}
          <h1
            className="font-semibold text-[2.5rem] min-[810px]:max-[1200px]:text-[58px] min-[1200px]:text-h1 text-foreground animate-blur-in text-left"
            style={{ animationDelay: "0.5s", fontFamily: "Poppins, Poppins Placeholder, sans-serif" }}
          >
            Experiment, Learn, Innovate
          </h1>

          {/* Body */}
          <p
            className="font-inter text-[16px] font-normal tracking-[-0.01em] leading-[1.59em] no-underline text-black text-left flex-none h-auto max-w-[600px] opacity-80 relative whitespace-pre-wrap w-full break-words z-[6] max-[810px]:mb-2"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
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
          <div className="flex items-center gap-4 min-[810px]:mt-2 flex-nowrap justify-start max-[500px]:flex-wrap">
            <button
              className="font-inter items-center justify-center cursor-pointer h-min rounded-[40px] px-5 py-3 relative z-[2] text-black text-[16px] font-medium tracking-[-0.01em] leading-[1.2em] no-underline"
              style={{
                background:
                  "linear-gradient(0deg, #ffffff17 20%, #ffffffb3 158%)",
                boxShadow: "inset 0 2px 6px #fff6",
              }}
            >
              View All Courses
            </button>
            <button
              className="font-inter group relative rounded-[100px] px-6 py-3 cursor-pointer overflow-hidden text-[16px] font-medium tracking-[-0.01em] leading-[1.2em] no-underline text-black"
              style={{
                boxShadow: "rgba(255, 255, 255, 0.3) 0px 0px 0px 6px",
                background:
                  "linear-gradient(0deg, rgba(255, 255, 255, 0.37) 0%, rgb(255, 255, 255) 127%)",
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
        <div className="hidden min-[1200px]:flex flex-1 h-full relative z-10 items-center justify-center">
          <div className="w-[1000px] h-[1000px] ml-[-270px] mt-[100px]">
            <iframe
              src="https://my.spline.design/cubic-f67fd92712ed023b465e5a99e5a791ba/"
              title="3D Cubes"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>

        {/* Tablet — Spline 3D embed */}
        <div className="hidden min-[810px]:max-[1200px]:flex flex-1 h-full relative z-20 items-center justify-center">
          <div className="w-[1000px] h-[1000px] ml-[-600px] mt-[-200px]">
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
      <div className="min-[810px]:hidden absolute bottom-[-400px] right-[-350px] w-[1000px] h-[1000px] z-20 pointer-events-none max-[809px]:translate-y-20">
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
