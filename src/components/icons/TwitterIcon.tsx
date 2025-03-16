import { SVGProps } from "react";
import { Icon } from "./Icon";

type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  size?: number;
  className?: string;
};

export function TwitterIcon({
  size = 24,
  className = "",
  ...props
}: IconProps) {
  return (
    <Icon size={size} className={className} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2879 19.1666L8.66337 12.575L2.87405 19.1666H0.424805L7.57674 11.0258L0.424805 0.833252H6.71309L11.0717 7.04577L16.5327 0.833252H18.982L12.1619 8.59699L19.5762 19.1666H13.2879ZM16.0154 17.3083H14.3665L3.93176 2.69159H5.58092L9.7601 8.54422L10.4828 9.55981L16.0154 17.3083Z"
        fill="currentColor"
      />
    </Icon>
  );
}
