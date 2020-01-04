import React, {FC} from "react";
import {Drawer} from "@material-ui/core";
import {useSideMenu} from "./useSideMenu";

export const SideMenu: FC = () => {
  const {isOpen, list, handleClose} = useSideMenu();
  return (
    <Drawer open={isOpen} onClose={handleClose}>

    </Drawer>
  );
};
