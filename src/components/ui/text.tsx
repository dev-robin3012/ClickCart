import { cn } from "@/utils/class-merge";
import type { ClassValue } from "clsx";
import React, {
  CSSProperties,
  type FC,
  JSXElementConstructor,
  type PropsWithChildren,
} from "react";

interface OldProps {
  variant?: OldVariant;
  className?: string;
  style?: CSSProperties;
  children?: React.ReactNode | any;
  html?: string;
}

type OldVariant =
  | "mediumHeading"
  | "heading"
  | "body"
  | "pageHeading"
  | "subHeading";

export const TextOld: React.FC<OldProps> = ({
  style,
  className,
  variant = "body",
  children,
  html,
}) => {
  const componentsMap: {
    [P in OldVariant]: React.ComponentType<any> | string;
  } = {
    body: "p",
    mediumHeading: "h3",
    heading: "h4",
    pageHeading: "h1",
    subHeading: "h2",
  };

  const Component:
    | JSXElementConstructor<any>
    | React.ReactElement<any>
    | React.ComponentType<any>
    | string = componentsMap![variant!];

  const htmlContentProps = html
    ? { dangerouslySetInnerHTML: { __html: html } }
    : {};

  return (
    <Component
      className={cn(
        {
          "text-sm sm:leading-6 leading-7": variant === "body",
          "text-body": variant === "body",
          "text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold":
            variant === "mediumHeading",
          "text-heading":
            variant === "mediumHeading" ||
            variant === "heading" ||
            variant === "pageHeading" ||
            variant === "subHeading",
          "text-sm md:text-base xl:text-lg font-semibold":
            variant === "heading",
          "text-2xl font-bold": variant === "pageHeading",
          "text-lg md:text-2xl xl:text-3xl 2xl:text-4xl  font-bold":
            variant === "subHeading",
        },
        className
      )}
      style={style}
      {...htmlContentProps}
    >
      {children}
    </Component>
  );
};

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "label";

interface Props extends PropsWithChildren {
  variant?: Variant;
  className?: ClassValue;
}

const Text: FC<Props> = ({ variant, className, children }) => {
  switch (variant) {
    case "h1":
      return (
        <h1 className={cn("text-4xl font-bold", className)}>{children}</h1>
      );

    case "h2":
      return (
        <h2 className={cn("text-[2rem] font-semibold", className)}>
          {children}
        </h2>
      );

    case "h3":
      return (
        <h3 className={cn("text-2xl font-semibold", className)}>{children}</h3>
      );

    case "h4":
      return (
        <h4 className={cn("text-[1.5rem] font-semibold", className)}>
          {children}
        </h4>
      );

    case "h5":
      return (
        <h5 className={cn("text-xl font-semibold", className)}>{children}</h5>
      );

    case "h6":
      return (
        <h6 className={cn("text-base font-semibold", className)}>{children}</h6>
      );

    case "label":
      return (
        <span className={cn("text-sm font-semibold", className)}>
          {children}
        </span>
      );

    case "span":
      return <span className={cn("text-sm", className)}>{children}</span>;

    default:
      return <p className={cn("text-lg", className)}>{children}</p>;
  }
};

export default Text;
