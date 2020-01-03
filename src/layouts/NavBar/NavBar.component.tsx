import React, {FC} from "react";
import {AppBar, Toolbar} from "@material-ui/core";
import Logo from "../../components/Logo";
import ToggleTheme from "../../components/ToggleTheme";
import ToggleMenu from "../../components/ToggleMenu";

interface Props {
  classes: {
    root: string;
  }
}

export const NavBar: FC<Props> = ({classes}) =>
  <AppBar position='static'>
    <Toolbar className={classes.root}>
      <ToggleMenu/>
      <Logo/>
      <ToggleTheme/>
    </Toolbar>
  </AppBar>;
