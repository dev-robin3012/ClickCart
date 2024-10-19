import { cn } from "@/utils/class-merge";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import Iconstore from "../icon-store";
import type IconProps from "../icon-store/interface";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outlined" | "smoke";
  loading?: boolean;
  radius?: boolean;
  icon?: Omit<IconProps, "onClick">;
  size?: "sm" | "default" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant = "solid",
    loading = false,
    radius = true,
    children,
    icon,
    size = "default",
    ...rest
  } = props;

  const rootClassName = cn(
    "text-[13px] md:text-sm xl:text-base inline-flex gap-3 items-center justify-center cursor-pointer transition ease-in-out duration-300 font-semibold border border-transparent outline-none disabled:cursor-not-allowed disabled:bg-gray-default disabled:text-gray-light disabled:border-gray-default",

    {
      "px-3 md:px-4 lg:px-5 py-1 md:py-1.5": size === "sm",
      "px-5 md:px-6 lg:px-7 py-2.5 md:py-3": size === "default",
      "px-5 md:px-6 lg:px-7 py-3 md:py-4": size === "lg",
    },
    {
      "bg-primary hover:bg-primary/80 text-white ": variant === "solid",
      "bg-transparent text-primary border-primary": variant === "outlined",
      "bg-gray-light text-primary hover:bg-gray-light/50 border-gray-light":
        variant === "smoke",
    },
    {
      "rounded-md ": !!radius,
      "cursor-not-allowed": loading,
    },
    className
  );

  return (
    <button
      data-variant={variant}
      ref={ref}
      className={rootClassName}
      disabled={loading || rest.disabled}
      {...rest}
    >
      {children}

      {(!!loading || !!icon) && (
        <Iconstore
          name={loading ? "loader" : (icon?.name as IconProps["name"])}
          className={cn(loading && "animate-spin", "text-lg", icon?.className)}
        />
      )}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
