import { type FC } from "react";
import {
  CrossIcon,
  EditIcon,
  ListPlusIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
  ThreeDotIcon,
  TikMarkIcon,
} from "./actions-icons";
import { ArrowDown, TriangleArrowDown } from "./arrow-icons";
import type IconProps from "./interface";
import LoaderIcon from "./loader";
import LogoutIcon from "./logout";
import {
  CSVIcon,
  ImagePlaceholderIcon,
  PlusIcon,
  UserIcon,
} from "./placeholder-icons";

const Iconstore: FC<IconProps> = ({ name, ...rest }) => {
  switch (name) {
    case "loader":
      return <LoaderIcon {...rest} />;

    case "logout":
      return <LogoutIcon {...rest} />;

    // Action icons
    case "sun":
      return <SunIcon {...rest} />;
    case "moon":
      return <MoonIcon {...rest} />;
    case "menu":
      return <MenuIcon {...rest} />;
    case "cross":
      return <CrossIcon {...rest} />;
    case "edit":
      return <EditIcon {...rest} />;
    case "threedot":
      return <ThreeDotIcon {...rest} />;
    case "list-plus":
      return <ListPlusIcon {...rest} />;
    case "tikmark":
      return <TikMarkIcon {...rest} />;

    // placeholder icons
    case "user":
      return <UserIcon {...rest} />;
    case "plus":
      return <PlusIcon {...rest} />;
    case "file-export":
      return <CSVIcon {...rest} />;
    case "image-placeholder":
      return <ImagePlaceholderIcon {...rest} />;

    // Arrow icons
    case "arrow-down":
      return <ArrowDown {...rest} />;
    case "triangle-arrow-down":
      return <TriangleArrowDown {...rest} />;

    default:
      return null;
  }
};

export default Iconstore;
