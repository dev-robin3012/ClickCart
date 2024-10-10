import { cn } from "@/utils/class-merge";
import { type FC } from "react";
import type IconProps from "./interface";

const MenuIcon: FC<Omit<IconProps, "name">> = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 25.567 18"
      className={cn(className)}
      {...rest}
    >
      <g transform="translate(-776 -462)">
        <rect
          id="Rectangle_941"
          data-name="Rectangle 941"
          width="12.749"
          height="2.499"
          rx="1.25"
          transform="translate(776 462)"
          fill="currentColor"
        />
        <rect
          id="Rectangle_942"
          data-name="Rectangle 942"
          width="25.567"
          height="2.499"
          rx="1.25"
          transform="translate(776 469.75)"
          fill="currentColor"
        />
        <rect
          id="Rectangle_943"
          data-name="Rectangle 943"
          width="17.972"
          height="2.499"
          rx="1.25"
          transform="translate(776 477.501)"
          fill="currentColor"
        />
      </g>
    </svg>
  );
};

export default MenuIcon;
