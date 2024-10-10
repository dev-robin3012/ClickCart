import { type FC } from "react";
import CrossIcon from "./cross";
import type IconProps from "./interface";
import LoaderIcon from "./loader";
import LogoutIcon from "./logout";
import MenuIcon from "./menu";
import MoonIcon from "./moon";
import SunIcon from "./sun";

const Iconstore: FC<IconProps> = ({ name, ...rest }) => {
  switch (name) {
    case "loader":
      return <LoaderIcon {...rest} />;

    case "sun":
      return <SunIcon {...rest} />;
    case "moon":
      return <MoonIcon {...rest} />;

    case "logout":
      return <LogoutIcon {...rest} />;

    case "menu":
      return <MenuIcon {...rest} />;

    case "cross":
      return <CrossIcon {...rest} />;

    default:
      return null;
  }
};

export default Iconstore;
