import React, {FC} from "react";
import {Drawer} from "@material-ui/core";
import {useSideMenu} from "./useSideMenu";

export const SideMenu: FC = () => {
  const {isOpen, handleClose, handleLink} = useSideMenu();
  return (
    <Drawer open={isOpen} onClose={handleClose}>

    </Drawer>
  );
};
