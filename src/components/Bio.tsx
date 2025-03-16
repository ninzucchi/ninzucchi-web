import Link from "next/link";
import { ReactNode } from "react";

interface BioLinkProps {
  href: string;
  children: ReactNode;
}

export function BioLink({ href, children }: BioLinkProps) {
  return (
    <Link
      href={href}
      className="text-orange-500 hover:text-orange-600 transition-colors"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Link>
  );
}

interface BioParagraphProps {
  children: ReactNode;
}

export function BioParagraph({ children }: BioParagraphProps) {
  return (
    <p className="text-secondary-foreground leading-relaxed">{children}</p>
  );
}

interface BioProps {
  children: ReactNode;
}

export function Bio({ children }: BioProps) {
  return <div className="space-y-4">{children}</div>;
}
