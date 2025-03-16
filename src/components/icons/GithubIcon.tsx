import { SVGProps } from "react";
import { Icon } from "./Icon";

type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  size?: number;
  className?: string;
};

export function GithubIcon({ size = 20, className = "", ...props }: IconProps) {
  return (
    <Icon size={size} className={className} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C4.477 0 0 4.484 0 10.017C0 14.442 2.865 18.197 6.839 19.521C7.339 19.613 7.521 19.304 7.521 19.038C7.521 18.801 7.513 18.17 7.508 17.335C4.726 17.94 4.139 15.992 4.139 15.992C3.685 14.834 3.029 14.526 3.029 14.526C2.121 13.906 3.098 13.918 3.098 13.918C4.101 13.988 4.629 14.95 4.629 14.95C5.521 16.48 6.97 16.038 7.539 15.782C7.631 15.135 7.889 14.694 8.175 14.444C5.955 14.191 3.62 13.331 3.62 9.493C3.62 8.4 4.01 7.505 4.649 6.805C4.546 6.552 4.203 5.533 4.747 4.155C4.747 4.155 5.587 3.885 7.497 5.181C8.31277 4.95851 9.15444 4.84519 10 4.844C10.85 4.848 11.705 4.959 12.504 5.181C14.413 3.885 15.251 4.154 15.251 4.154C15.797 5.533 15.453 6.552 15.351 6.805C15.991 7.505 16.379 8.4 16.379 9.493C16.379 13.341 14.04 14.188 11.813 14.436C12.172 14.745 12.491 15.356 12.491 16.291C12.491 17.629 12.479 18.71 12.479 19.038C12.479 19.306 12.659 19.618 13.167 19.52C15.1583 18.8521 16.8893 17.5753 18.1155 15.87C19.3416 14.1648 20.0009 12.1173 20 10.017C20 4.484 15.522 0 10 0Z"
        fill="currentColor"
      />
    </Icon>
  );
}
