import {IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, {FC} from "react";
import {useToggleMenu} from "./useToggleMenu";

export const ToggleMenu: FC = () => {
  const {handleMenu} = useToggleMenu();
  return (
    <IconButton onClick={handleMenu}>
      <MenuIcon/>
    </IconButton>
  );
};
