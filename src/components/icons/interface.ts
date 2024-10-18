import type { ClassValue } from "clsx";

type IArrowIcons = "arrow-down";
type IIcons = "user";

interface IIconProps {
  name: IIcons | IArrowIcons;
  className?: ClassValue;
}

export default IIconProps;
