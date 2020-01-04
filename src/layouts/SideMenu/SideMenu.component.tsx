import React, {FC, ReactElement} from "react";
import {Drawer} from "@material-ui/core";
import {useSideMenu} from "./useSideMenu";
import Option from "./Option";

export const SideMenu: FC = () => {
  const {isOpen, list, handleClose} = useSideMenu();
  return (
    <Drawer open={isOpen} onClose={handleClose}>
      {
        list.map((option): ReactElement =>
          <Option
            key={option.name}
            name={option.name}
            Icon={option.icon}
            onClick={option.onClick}
          />
        )
      }
    </Drawer>
  );
};
