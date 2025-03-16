import { SVGProps } from "react";
import { Icon } from "./Icon";

type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  size?: number;
  className?: string;
};

export function SubstackIcon({
  size = 20,
  className = "",
  ...props
}: IconProps) {
  return (
    <Icon size={size} className={className} {...props}>
      <path
        d="M1.96484 0.624512H18.0354V2.70052H1.96484V0.624512Z"
        fill="currentColor"
      />
      <path
        d="M1.96484 4.77655H18.0354V6.85254H1.96484V4.77655Z"
        fill="currentColor"
      />
      <path
        d="M1.96484 8.92857V19.9505L10.0001 14.6347L18.0354 19.9505V8.92857H1.96484Z"
        fill="currentColor"
      />
    </Icon>
  );
}
