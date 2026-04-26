import Image from "next/image";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils";

export interface TopicsSectionProps {
  className?: string;
}

export function TopicsSection({ className }: TopicsSectionProps) {
  return (
    <section className={cn("py-24 px-38 bg-[#f1f5f9]", className)}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
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
            label="Accreditation"
          />
          <h2 className="text-foreground text-[41px] mt-4 mb-4">
            Certify &amp; Acknowledge
          </h2>
          <p className="max-w-[650px] mx-auto tracking-[-0.01em] leading-[1.6em] text-center text-foreground">
            Choose from an array of certificate designs and layouts, and leave
            your learners with proof and display of their newly acquired
            achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-[58px]">
          {/* OOSE OPSWAT */}
          <div className="flex flex-col gap-6">
            <div
              className="rounded-3xl overflow-hidden border border-border"
              style={{
                boxShadow:
                  ".241px .241px 1.294px -.917px #00000024, .915px .915px 4.919px -1.833px #00000021, 4px 4px 21.496px -2.75px #0000001c",
              }}
            >
              <Image
                src="/assets/images/certificate-oose-opswat.jpeg"
                alt="OOSE OPSWAT Certificate"
                width={480}
                height={330}
                className="w-full h-[330px] object-cover"
              />
            </div>
            <div>
              <h4 className="font-inter text-2xl font-semibold tracking-[-0.7px] leading-[1.5em] text-left text-[rgb(0,17,34)] mt-[6px] mb-5">
                OOSE OPSWAT
              </h4>
              <p className="font-inter text-xl font-medium tracking-[-0.5px] leading-[1.4em] text-left text-[rgb(136,136,136)] max-w-[380px]">
                <span className="font-bold">OOSE by OPSWAT</span> is a certification program focused on
                cybersecurity for operational technology.
              </p>
            </div>
          </div>

          {/* OCEG GRCP */}
          <div className="flex flex-col gap-6">
            <div
              className="rounded-3xl overflow-hidden border border-border"
              style={{
                boxShadow:
                  ".241px .241px 1.294px -.917px #00000024, .915px .915px 4.919px -1.833px #00000021, 4px 4px 21.496px -2.75px #0000001c",
              }}
            >
              <Image
                src="/assets/images/certificate-oceg-grcp.jpeg"
                alt="OCEG GRCP Certificate"
                width={480}
                height={330}
                className="w-full h-[330px] object-cover"
              />
            </div>
            <div>
              <h4 className="font-inter text-2xl font-semibold tracking-[-0.7px] leading-[1.5em] text-left text-[rgb(0,17,34)] mt-[6px] mb-5">
                OCEG GRCP
              </h4>
              <p className="font-inter text-xl font-medium tracking-[-0.5px] leading-[1.4em] text-left text-[rgb(136,136,136)] max-w-[380px]">
                <span className="font-bold">OCEG GRCP</span> is a certification validating core knowledge in
                governance, risk, and compliance for principled performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
