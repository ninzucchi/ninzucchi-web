import { ReactNode } from "react";

interface HeadingProps {
  children: ReactNode;
  className?: string;
}

export function Heading({ children, className = "" }: HeadingProps) {
  return <h1 className={`text-2xl font-medium ${className}`}>{children}</h1>;
}
