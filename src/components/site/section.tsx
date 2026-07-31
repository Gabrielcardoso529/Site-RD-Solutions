import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "mr-auto text-left",
        className
      )}
    >
      {eyebrow && (
        <div
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-[11px]",
          )}
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> {eyebrow}
        </div>
      )}
      <h2 className="mt-4 font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.025em] text-foreground sm:text-4x1 md:text-[42px] md:leading-[1.08]">
        {title}
      </h2>
      {description && (
        <p className={cn(
          "mt-4 text-[15px] leading-7 text-muted-foreground sm-text-base md:text-lg md:leading-8",
          align === "center" ? "mx-auto max-w-2x1" : "max-w-2x1" )}>
          {description}
        </p>
      )}
    </div>
  );
}
