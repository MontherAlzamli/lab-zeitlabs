import Image from "next/image";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils";

const PARTNERS = [
  { id: "1", src: "/assets/images/partner-1.png", alt: "Partner", width: 134, height: 41 },
  { id: "2", src: "/assets/images/partner-2.png", alt: "Partner", width: 134, height: 50 },
  { id: "3", src: "/assets/images/partner-3.png", alt: "Partner", width: 113, height: 41 },
  { id: "4", src: "/assets/images/partner-4.png", alt: "Partner", width: 113, height: 41 },
  { id: "5", src: "/assets/images/partner-5.png", alt: "Partner", width: 152, height: 41 },
  { id: "6", src: "/assets/images/partner-6.png", alt: "Partner", width: 101, height: 54 },
  { id: "7", src: "/assets/images/partner-7.png", alt: "Partner", width: 163, height: 54 },
  { id: "8", src: "/assets/images/partner-8.png", alt: "Partner", width: 101, height: 54 },
  { id: "9", src: "/assets/images/partner-9.png", alt: "Partner", width: 101, height: 54 },
  { id: "10", src: "/assets/images/partner-10.png", alt: "Partner", width: 101, height: 54 },
  { id: "11", src: "/assets/images/partner-11.png", alt: "Partner", width: 101, height: 54 },
];

export interface BenefitsSectionProps {
  className?: string;
}

export function BenefitsSection({ className }: BenefitsSectionProps) {
  return (
    <section
      className={cn("py-14 relative bg-white overflow-hidden", className)}
      style={{
        background: "radial-gradient(ellipse 140% 70% at 50% 60%, #e2deff 0%, #ffffff 65%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-12 md:px-20 text-center">
        <SectionLabel
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" className="size-5">
              <path d="M152,224a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,224Zm71.62-68.17-12.36,55.63a16,16,0,0,1-25.51,9.11L158.51,200h-61L70.25,220.57a16,16,0,0,1-25.51-9.11L32.38,155.83a16.09,16.09,0,0,1,3.32-13.71l28.56-34.26a123.07,123.07,0,0,1,8.57-36.67c12.9-32.34,36-52.63,45.37-59.85a16,16,0,0,1,19.6,0c9.34,7.22,32.47,27.51,45.37,59.85a123.07,123.07,0,0,1,8.57,36.67l28.56,34.26A16.09,16.09,0,0,1,223.62,155.83Zm-139.23,34Q68.28,160.5,64.83,132.16L48,152.36,60.36,208l.18-.13ZM140,100a12,12,0,1,0-12,12A12,12,0,0,0,140,100Zm68,52.36-16.83-20.2q-3.42,28.28-19.56,57.69l23.85,18,.18.13Z" />
            </svg>
          }
          label="Boost Your Skills"
        />

        <h2 className="text-foreground mt-6 mb-4 text-[32px] md:text-[42px] max-w-xl mx-auto font-display font-medium tracking-[-0.01em] leading-[1.2em]">
          Courses Designed for Educators, Technologists &amp; Innovators
        </h2>

        <p className="max-w-2xl mx-auto mb-12 font-inter text-[16px] font-normal tracking-[-0.01em] leading-[1.6em] text-foreground">
          Our courses provide the essential knowledge to build and manage online learning
          platforms, with a special focus on Open edX and best practices in digital education
        </p>

        <div className="flex items-center gap-4 md:gap-12 mb-8 w-full max-w-8xl mx-auto">
          <div className="flex-1 h-px bg-foreground/30" />
          <p className="text-body text-[#48464c] md:whitespace-nowrap text-center max-w-[180px] md:max-w-none">
            Our partners in the education endeavor
          </p>
          <div className="flex-1 h-px bg-foreground/30" />
        </div>

        <div className="overflow-hidden w-full">
          <div className="animate-marquee items-center gap-16">
            {[...PARTNERS, ...PARTNERS].map((partner, i) => (
              <Image
                key={i}
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className="h-10 w-auto object-contain grayscale flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
