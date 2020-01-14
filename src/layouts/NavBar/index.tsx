import React, {FC} from "react";
import {AppBar, Toolbar} from "@material-ui/core";
import Logo from "./Logo/index";
import ToggleTheme from "./ToggleTheme/index";
import ToggleMenu from "./ToggleMenu/index";
import useStyles from "./useStyles";

const NavBar: FC = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar className={classes.root}>
        <div className={classes.menu}>
          <ToggleMenu/>
          <Logo/>
        </div>
        <ToggleTheme/>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
