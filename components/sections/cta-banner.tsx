import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CTABannerProps {
  className?: string;
}

export function CTABanner({ className }: CTABannerProps) {
  return (
    <section className={cn("py-20 bg-surface", className)}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Logo className="justify-center mb-8" />
        <h2 className="text-foreground mb-8">
          Grow your Knowledge about Online Learning with zeitlabs now
        </h2>
        <Button
          href="/courses"
          className="bg-foreground text-white hover:bg-foreground/85 rounded-full"
        >
          Start Learning Now
        </Button>
      </div>
    </section>
  );
}
