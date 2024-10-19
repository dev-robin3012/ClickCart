import { cn } from "@/utils/class-merge";
import type { ClassValue } from "clsx";
import { motion } from "framer-motion";
import { useEffect, useRef, useState, type FC } from "react";
import Typography from "../typography";
import Button from "./button";

interface Props {
  wrapperClassName?: ClassValue;
  label?: string;
  options: { label: string; value: string }[];
}

const DropdownSelect: FC<Props> = ({ wrapperClassName, label, options }) => {
  const [expand, setExpand] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setExpand(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  return (
    <div ref={ref} className={cn("relative", wrapperClassName)}>
      <Button
        size="sm"
        variant="outlined"
        className="w-full justify-between"
        icon={{
          name: "triangle-arrow-down",
          className: `text-[1.5rem] transition-all ${expand && "rotate-180"}`,
        }}
        onClick={() => setExpand(!expand)}
      >
        <span className="text-gray-default/75">{label || "Select"}</span>
      </Button>

      <motion.div
        className="absolute right-0 left-0 shadow-lg top-full border bg-white z-10 rounded-md"
        initial={{ opacity: 0, y: -10 }}
        animate={
          expand
            ? { opacity: 1, y: 0, display: "block" }
            : { opacity: 0, y: -10, transitionEnd: { display: "none" } }
        }
      >
        <Typography
          variant="p2"
          className="py-1.5 px-5 font-semibold text-gray-default/75"
        >
          Select {label}:
        </Typography>

        <ul className="[&>li]:py-2 [&>li]:border-t [&>li]:cursor-pointer [&>li]:px-5 ">
          {options.map((option, index) => (
            <li key={index} className="transition-all hover:bg-gray-light">
              {option.label}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default DropdownSelect;
