import { forwardRef, type ButtonHTMLAttributes } from "react";
import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
export type ButtonSize    = "sm" | "md" | "lg";

interface BaseProps {
  variant?:  ButtonVariant;
  size?:     ButtonSize;
  loading?:  boolean;
  className?: string;
  children?: React.ReactNode;
}

/* when href is present → renders as next/link anchor */
type ButtonAsLink  = BaseProps & Omit<LinkProps, "className"> & { href: string; disabled?: never };
/* otherwise → renders as <button> */
type ButtonAsButton = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

const base = [
  "inline-flex items-center justify-center rounded-full font-sans font-medium",
  "transition-colors duration-150 cursor-pointer select-none",
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  "disabled:pointer-events-none disabled:opacity-50",
].join(" ");

const variants: Record<ButtonVariant, string> = {
  primary:   "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
  secondary: "bg-primary-muted text-primary hover:bg-primary/20 active:bg-primary/25",
  outline:   "border border-border bg-background text-foreground hover:bg-surface active:bg-border",
  ghost:     "bg-transparent text-foreground hover:bg-surface active:bg-border",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9  px-4 text-body-sm gap-1.5",
  md: "h-11 px-6 text-body   gap-2",
  lg: "h-12 px-8 text-body   gap-2.5",
};

function classes(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const {
      variant  = "primary",
      size     = "md",
      className,
      children,
      ...rest
    } = props;

    const cls = classes(variant, size, className);

    if ("href" in rest && rest.href !== undefined) {
      const { href, ...linkRest } = rest as ButtonAsLink;
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={cls}
          {...linkRest}
        >
          {children}
        </Link>
      );
    }

    const { loading, disabled, ...btnRest } = rest as ButtonAsButton & { loading?: boolean };
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled || loading}
        className={cls}
        {...btnRest}
      >
        {loading && (
          <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
