import type { ClassValue } from "clsx";

type IArrowIcons = "arrow-down" | "triangle-arrow-down";
type IPlaceholderIcons = "plus" | "file-export" | "user" | "image-placeholder";
type IActionIcons =
  | "edit"
  | "sun"
  | "moon"
  | "menu"
  | "cross"
  | "threedot"
  | "list-plus"
  | "tikmark";
type IIcons = "loader" | "logout";

interface IconProps {
  name: IArrowIcons | IActionIcons | IIcons | IPlaceholderIcons;
  className?: ClassValue;
  onClick?: () => void;
}

export default IconProps;
