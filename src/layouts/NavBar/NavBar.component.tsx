import React, {FC} from "react";
import {AppBar, Toolbar} from "@material-ui/core";
import Logo from "../../components/Logo";
import ToggleTheme from "../../components/ToggleTheme";

export const NavBar: FC = () =>
  <AppBar position='static'>
    <Toolbar>
      <Logo/>
      <ToggleTheme/>
    </Toolbar>
  </AppBar>;
