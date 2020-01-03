import React, {FC} from "react";
import {Drawer} from "@material-ui/core";
import {useSideMenu} from "./useSideMenu";

export const SideMenu: FC = () => {
  const {isOpen, handleClose} = useSideMenu();
  return (
    <Drawer open={isOpen} onClose={handleClose}>
      <h1>Mock</h1>
      <h2>Mock</h2>
      <h3>Mock</h3>
      <h4>Mock</h4>
      <h5>Mock</h5>
      <h6>Mock</h6>
    </Drawer>
  );
};
