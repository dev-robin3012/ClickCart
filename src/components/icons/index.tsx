import { type FC } from "react";
import { ArrowDown } from "./arrow-icons";
import type IIconProps from "./interface";
import UserIcon from "./user-icon";

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
