import Iconstore from "@/components/icon-store";
import { cn } from "@/utils/class-merge";
import { type ClassValue } from "clsx";
import { motion } from "framer-motion";
import { useState, type FC, type ReactNode } from "react";
import Text from "../text";

interface Props {
  items: {
    key: string;
    label: string;
    children: ReactNode;
  }[];
  defaultExpand?: string;
  bordereless?: boolean;
  classNames?: {
    header: ClassValue;
  };
}

const Accordion: FC<Props> = ({
  items,
  bordereless,
  classNames,
  defaultExpand = "",
}) => {
  const [expanded, setExpanded] = useState(defaultExpand);

  return (
    <div
      className={cn(
        "rounded-md overflow-hidden border divide-y-[1px]",
        bordereless && "border-none"
      )}
    >
      {items.map((item) => (
        <div key={item.key}>
          <div
            className={cn(
              "py-2.5 px-3 flex items-center justify-between cursor-pointer",
              item.key === expanded && "border-b",
              classNames?.header
            )}
            onClick={() => setExpanded(item.key === expanded ? "" : item.key)}
          >
            <Text className="font-semibold">Clategory Name 1</Text>
            <Iconstore
              name="arrow-down"
              className={cn(
                "text-xl transition-all",
                item.key === expanded && "rotate-180"
              )}
            />
          </div>

          <motion.div
            initial={{ display: "none", height: 0, overflow: "hidden" }}
            animate={
              item.key === expanded
                ? { height: "auto", display: "block" }
                : { height: 0, transitionEnd: { display: "none" } }
            }
          >
            <div className={cn("p-5 cursor-auto")}>{item.children}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
