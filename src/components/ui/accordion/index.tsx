import Iconstore from "@/components/icon-store";
import { cn } from "@/utils/class-merge";
import type { ClassValue } from "clsx";
import { motion } from "framer-motion";
import {
  useState,
  type FC,
  type PropsWithChildren,
  type ReactNode,
} from "react";
import Text from "../text";

interface AccordionProps extends PropsWithChildren {
  bordereless?: boolean;
  className?: ClassValue;
}

const Accordion: FC<AccordionProps> = ({
  bordereless,
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-md overflow-hidden border divide-y-[1px]",
        bordereless && "border-none",
        className
      )}
    >
      {children}
    </div>
  );
};

interface AccordionItemProps extends Omit<AccordionProps, "className"> {
  title: string;
  classNames?: {
    header?: ClassValue;
    body?: ClassValue;
  };
  expandIconPlacement?: "right" | "left";
  extraHeaderItems?: ReactNode;
}

const AccordionItem: FC<AccordionItemProps> = ({
  title,
  children,
  classNames,
  expandIconPlacement = "right",
  bordereless,
  extraHeaderItems,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <div
        className={cn(
          "px-3 flex items-center justify-between gap-3 cursor-pointer",
          bordereless && "bg-gray-light border-b border-white",
          expanded && "border-b",
          classNames?.header
        )}
      >
        <div
          className="py-2.5 flex items-center gap-3 flex-1"
          onClick={() => setExpanded(!expanded)}
        >
          {expandIconPlacement === "left" && (
            <Iconstore
              name="arrow-down"
              className={cn(
                "text-xl transition-all -rotate-90",
                expanded && "rotate-0"
              )}
            />
          )}

          <Text className="font-semibold">{title}</Text>

          {expandIconPlacement === "right" && (
            <Iconstore
              name="arrow-down"
              className={cn(
                "text-xl transition-all ml-auto",
                expanded && "rotate-180"
              )}
            />
          )}
        </div>

        {extraHeaderItems}
      </div>

      <motion.div
        initial={{ display: "none", height: 0, overflow: "hidden" }}
        animate={
          expanded
            ? { height: "auto", display: "block" }
            : { height: 0, transitionEnd: { display: "none" } }
        }
      >
        <div className={cn("p-5 cursor-auto", classNames?.body)}>
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export { Accordion, AccordionItem };
