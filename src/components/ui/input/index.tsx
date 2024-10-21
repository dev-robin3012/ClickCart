import { cn } from "@/utils/class-merge";
import type { FC, InputHTMLAttributes } from "react";
import FileUploadField from "./file-upload";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: "sm" | "md" | "lg";
}

const Input: FC<Props> = ({ className, size = "md", ...rest }) => {
  return (
    <input
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
  );
};

export { FileUploadField, Input };
