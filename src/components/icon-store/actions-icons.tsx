import { cn } from "@/utils/class-merge";
import type { FC } from "react";
import type IconProps from "./interface";

export const MenuIcon: FC<Omit<IconProps, "name">> = ({
  className,
  ...rest
}) => {
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

export const CrossIcon: FC<Omit<IconProps, "name">> = ({
  className,
  ...rest
}) => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth={0}
      viewBox="0 0 15 15"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const EditIcon: FC<Omit<IconProps, "name">> = ({
  className,
  ...rest
}) => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...rest}
  >
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
  </svg>
);

export const ThreeDotIcon: FC<Omit<IconProps, "name">> = ({
  className,
  ...rest
}) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...rest}
  >
    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
  </svg>
);

export const MoonIcon: FC<Omit<IconProps, "name">> = ({
  className,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(className)}
      {...rest}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
};

export const SunIcon: FC<Omit<IconProps, "name">> = ({
  className,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(className)}
      {...rest}
    >
      <circle cx={12} cy={12} r={4} />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
};
