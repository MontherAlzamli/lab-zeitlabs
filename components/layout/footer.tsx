import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("border-t border-border bg-white", className)}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <nav className="flex items-center gap-6">
            <Link
              href="/courses"
              className="text-body-sm text-muted hover:text-foreground transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/contact-us"
              className="text-body-sm text-muted hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/newsletter"
              className="text-body-sm text-muted hover:text-foreground transition-colors"
            >
              Join Our newsletter
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="rounded-full">
            Notify Me
          </Button>
        </div>
        <p className="text-center text-body-sm text-muted mt-6">
          zeitlabs Lab © 2025. Designed by zeitlabs
        </p>
      </div>
    </footer>
  );
}
