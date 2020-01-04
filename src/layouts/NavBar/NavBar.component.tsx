import React, {FC} from "react";
import {AppBar, Toolbar} from "@material-ui/core";
import Logo from "./Logo";
import ToggleTheme from "./ToggleTheme";
import ToggleMenu from "./ToggleMenu";

interface Props {
  classes: {
    root: string;
    menu: string;
  }
}

export const NavBar: FC<Props> = ({classes}) =>
  <AppBar position='static'>
    <Toolbar className={classes.root}>
      <div className={classes.menu}>
        <ToggleMenu/>
        <Logo/>
      </div>
      <ToggleTheme/>
    </Toolbar>
  </AppBar>;
