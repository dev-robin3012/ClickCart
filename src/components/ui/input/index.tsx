import { cn } from "@/utils/class-merge";
import { forwardRef, type InputHTMLAttributes } from "react";
import FileUploadField from "./file-upload";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, size = "md", ...rest }, ref) => (
    <input
      ref={ref}
      className={cn(
        "block border w-full rounded-md outline-none px-3 placeholder:text-gray-default font-semibold placeholder:font-medium",
        {
          "py-1.5 text-base": size === "sm",
          "py-2.5 text-lg": size === "md",
          "py-3 text-xl": size === "lg",
        },
        className
      )}
      {...rest}
    />
  )
);

export { FileUploadField, Input };
