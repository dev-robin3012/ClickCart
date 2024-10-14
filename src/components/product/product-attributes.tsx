import cn from "classnames";
import { useState } from "react";

interface Props {
  className?: string;
  title: string;
  attributes: string[];
  active?: string;
  onChange: any;
}

export const ProductAttributes: React.FC<Props> = ({
  className = "mb-4",
  title,
  attributes,
  onChange,
}) => {
  const [active, setActive] = useState("");

  return (
    <div className={className}>
      <h3 className="text-base md:text-lg text-heading font-semibold mb-2.5 capitalize">{title}</h3>
      <ul className="colors flex flex-wrap -me-3">
        {attributes?.map((item, key) => (
          <li
            key={`${item}-${key}`}
            className={cn(
              "cursor-pointer rounded border border-gray-100 h-9 md:h-11 px-2 mb-2 md:mb-3 me-2 md:me-3 flex justify-center items-center text-heading text-xs md:text-sm uppercase font-semibold transition duration-200 ease-in-out hover:border-black",
              { "border-black shadow-avatar": item === active }
            )}
            onClick={() => {
              setActive(item);
              onChange({ [title]: item });
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
