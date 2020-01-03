import React, {FC} from "react";
import {AppBar, Toolbar} from "@material-ui/core";
import Logo from "../../components/Logo";

export const NavBar: FC = () =>
  <AppBar position='static'>
    <Toolbar>
      <Logo/>
    </Toolbar>
  </AppBar>;
