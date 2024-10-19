import { type FC } from "react";
import { ArrowDown } from "../icon-store/arrow-icons";
import { UserIcon } from "../icon-store/placeholder-icons";
import type IIconProps from "./interface";

const Icon: FC<IIconProps> = ({ name, ...rest }) => {
  switch (name) {
    case "user":
      return <UserIcon {...rest} />;

    case "arrow-down":
      return <ArrowDown {...rest} />;

    default:
      return null;
  }
};

export default Icon;
