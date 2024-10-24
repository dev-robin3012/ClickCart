import { cn } from "@/utils/class-merge";
import type { FC } from "react";
import type IconProps from "./interface";

export const ArrowDown: FC<Omit<IconProps, "name">> = ({
  className,
  ...rest
}) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...rest}
  >
    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
  </svg>
);

export const TriangleArrowDown: FC<Omit<IconProps, "name">> = ({
  className,
  ...rest
}) => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
    {...rest}
  >
    <path d="M128 192l128 128 128-128z"></path>
  </svg>
);
