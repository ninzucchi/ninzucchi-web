import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ title, children, className = "" }: SectionProps) {
  return (
    <section className={`mb-12 ${className}`}>
      {title && (
        <h2 className="text-[11px] uppercase tracking-wider text-muted-foreground mb-6 font-medium">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}
