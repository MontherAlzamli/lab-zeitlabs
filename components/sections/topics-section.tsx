import Image from "next/image";
import { SectionLabel } from "@/components/ui/section-label";
import { cn } from "@/lib/utils";

export interface TopicsSectionProps {
  className?: string;
}

export function TopicsSection({ className }: TopicsSectionProps) {
  return (
    <section className={cn("py-20 bg-white", className)}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel
            icon={
              <svg viewBox="0 0 16 16" fill="currentColor" className="size-3">
                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
              </svg>
            }
            label="Accreditation"
          />
          <h2 className="text-foreground mt-4 mb-4">Certify &amp; Acknowledge</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Choose from an array of certificate designs and layouts, and leave your learners with
            proof and display of their newly acquired achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* OOSE OPSWAT */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden border border-border">
              <Image
                src="/assets/images/certificate-oose-opswat.jpeg"
                alt="OOSE OPSWAT Certificate"
                width={480}
                height={330}
                className="w-full h-[280px] object-cover"
              />
            </div>
            <div>
              <h4 className="text-foreground mb-2">OOSE OPSWAT</h4>
              <p className="text-body-sm text-muted">
                OOSE by OPSWAT is a certification program focused on cybersecurity for operational
                technology.
              </p>
            </div>
          </div>

          {/* OCEG GRCP */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden border border-border">
              <Image
                src="/assets/images/certificate-oceg-grcp.jpeg"
                alt="OCEG GRCP Certificate"
                width={480}
                height={330}
                className="w-full h-[280px] object-cover"
              />
            </div>
            <div>
              <h4 className="text-foreground mb-2">OCEG GRCP</h4>
              <p className="text-body-sm text-muted">
                OCEG GRCP is a certification validating core knowledge in governance, risk, and
                compliance for principled performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
