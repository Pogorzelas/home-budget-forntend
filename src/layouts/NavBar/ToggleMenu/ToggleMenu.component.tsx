import {IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, {FC} from "react";
import {useToggleMenu} from "./useToggleMenu";

const ToggleMenu: FC = () => {
  const {handleMenu} = useToggleMenu();
  return (
    <IconButton onClick={handleMenu} color='secondary'>
      <MenuIcon/>
    </IconButton>
  );
};

export default ToggleMenu;
