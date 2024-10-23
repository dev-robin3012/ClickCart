import Iconstore from "@/components/icon-store";
import { cn } from "@/utils/class-merge";
import { ClassValue } from "clsx";
import { ReactNode, useRef, type Dispatch, type FC } from "react";
import { Input, type InputProps } from ".";

interface CategoryInsertBoxProps {
  onProcess: Dispatch<string>;
  processIcon?: ReactNode;
  placeholder?: string;
  size?: InputProps["size"];
  classNames?: {
    wrapper?: ClassValue;
    input?: ClassValue;
    icon?: string;
  };
}

const SingleInputBox: FC<CategoryInsertBoxProps> = ({
  onProcess,
  placeholder = "Type here",
  size,
  processIcon,
  classNames,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <div
      className={cn(
        "flex items-stretch border rounded-md overflow-hidden",
        classNames?.wrapper
      )}
    >
      <Input
        ref={ref}
        size={size}
        placeholder={placeholder}
        className={cn("border-0", classNames?.input)}
      />
      <span
        className={cn(
          "flex items-center bg-gray-light px-5 gap-5 text-xl cursor-pointer",
          size === "sm" && "text-base px-2.5",
          classNames?.icon
        )}
        onClick={() => {
          const value = ref.current?.value;
          if (!!value) {
            onProcess(value);
            ref.current.value = "";
          }
        }}
      >
        {processIcon || <Iconstore name="list-plus" />}
      </span>
    </div>
  );
};

export default SingleInputBox;
