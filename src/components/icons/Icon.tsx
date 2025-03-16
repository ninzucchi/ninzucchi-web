import { SVGProps, ReactNode } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  children: ReactNode;
}

export function Icon({
  size = 24,
  className = "",
  children,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...props}
    >
      {children}
    </svg>
  );
}
