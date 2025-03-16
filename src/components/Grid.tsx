import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  className?: string;
}

export function Grid({ children, className = "" }: GridProps) {
  return (
    <div className={`grid grid-cols-5 gap-y-4 ${className}`}>{children}</div>
  );
}
