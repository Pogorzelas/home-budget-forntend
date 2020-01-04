import React, {FC, ReactElement} from "react";
import {Drawer} from "@material-ui/core";
import {useSideMenu} from "./useSideMenu";
import Option from "./Option";
import {navigationList} from "../../const/navigationList";

export const SideMenu: FC = () => {
  const {isOpen, handleClose, handleLink} = useSideMenu();
  return (
    <Drawer open={isOpen} onClose={handleClose}>
      {
        navigationList.map((option): ReactElement =>
          <Option
            key={option.path}
            name={option.name}
            Icon={option.icon}
            onClick={handleLink(option.path)}
          />
        )
      }
    </Drawer>
  );
};
