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
    <section className={cn("py-20 bg-white", className)}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionLabel
            icon={
              <svg viewBox="0 0 16 16" fill="currentColor" className="size-3">
                <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z" />
              </svg>
            }
            label="Our Programs"
          />
          <h2 className="text-foreground mt-4 mb-4">Featured Tracks</h2>
          <p className="text-muted max-w-2xl mx-auto">
            Get discount on high value multi-course programs and upgrade your Open edX experience
            from the experts.
          </p>
        </div>

        <div className="bg-white border border-border rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text content */}
            <div className="flex-1">
              <h3 className="text-foreground mb-3">Open edX Instructor track</h3>
              <p className="text-2xl font-bold text-primary mb-2">$250</p>
              <StarRating rating={5} className="mb-5" />
              <p className="text-muted mb-6 max-w-md">
                Learn how to design, author, and manage engaging courses on Open edX using Studio,
                instructor tools, and learner analytics.
              </p>
              <Button
                href="/open-edx-instructor"
                className="bg-foreground text-white hover:bg-foreground/85 rounded-lg"
              >
                Get Started
              </Button>
            </div>

            {/* Framer asset image */}
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl overflow-hidden">
                <Image
                  src="/assets/images/community-instructor-track.jpg"
                  alt="Open edX Instructor track"
                  width={480}
                  height={400}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
