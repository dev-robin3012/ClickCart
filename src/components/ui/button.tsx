import cn from "classnames";
import { ButtonHTMLAttributes, forwardRef } from "react";
import Iconstore from "../icon-store";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "flat" | "slim" | "smoke";
  active?: boolean;
  type?: "submit" | "reset" | "button";
  loading?: boolean;
  disabled?: boolean;
  disableBorderRadius?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant = "flat",
    children,
    active,
    loading = false,
    disabled = false,
    disableBorderRadius = false,
    ...rest
  } = props;

  const rootClassName = cn(
    "text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none",
    {
      "rounded-md ": !disableBorderRadius,
      "bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart":
        variant === "flat",
      "h-11 md:h-12 px-5 bg-heading text-white py-2 transform-none normal-case hover:text-white hover:bg-gray-600 hover:shadow-cart":
        variant === "slim",
      "h-11 md:h-12 px-5 bg-gray-200 text-heading py-2 transform-none normal-case hover:bg-gray-300":
        variant === "smoke",
      "cursor-not-allowed": loading,
      "cursor-not-allowed hover:cursor-not-allowed": disabled,
    },
    className
  );

  return (
    <button
      aria-pressed={active}
      data-variant={variant}
      ref={ref}
      className={rootClassName}
      disabled={disabled}
      {...rest}
    >
      {children}
      {loading && <Iconstore name="loader" />}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
