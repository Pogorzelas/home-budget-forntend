import {IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, {FC} from "react";

export const ToggleMenu: FC = () => {
  return (
    <IconButton>
      <MenuIcon/>
    </IconButton>
  );
};
