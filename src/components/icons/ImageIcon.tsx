import { SVGProps } from "react";
import { Icon } from "./Icon";

type IconProps = Omit<SVGProps<SVGSVGElement>, "children"> & {
  size?: number;
  className?: string;
};

export function ImageIcon({ size = 24, className = "", ...props }: IconProps) {
  return (
    <Icon size={size} className={className} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.6345 14.0985L14.0882 9.99594C13.715 9.66187 13.2655 9.49077 12.8075 9.49077C12.341 9.49077 11.9254 9.64558 11.5352 9.97963L7.70146 13.2714L6.13233 11.9107C5.77609 11.601 5.38593 11.4463 4.98729 11.4463C4.6056 11.4463 4.24089 11.5929 3.89314 11.9025L1.36557 14.0947V5.09913C1.36557 4.25177 1.83207 3.81179 2.68024 3.81179H17.3198C18.1595 3.81179 18.6345 4.25177 18.6345 5.09913V14.0985ZM17.3367 17.5H2.66328C0.890587 17.5 0 16.6608 0 14.9823V5.0258C0 3.34736 0.890587 2.5 2.66328 2.5H17.3367C19.1179 2.5 20 3.34736 20 5.0258V14.9823C20 16.6608 19.1179 17.5 17.3367 17.5ZM8.31212 8.15437C8.31212 9.21359 7.41305 10.0772 6.3189 10.0772C5.21627 10.0772 4.3172 9.21359 4.3172 8.15437C4.3172 7.10332 5.21627 6.23151 6.3189 6.23151C7.41305 6.23151 8.31212 7.10332 8.31212 8.15437Z"
        fill="currentColor"
      />
    </Icon>
  );
}
