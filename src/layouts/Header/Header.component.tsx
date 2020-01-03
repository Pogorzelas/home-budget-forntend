import React, {FC} from "react";
import {AppBar, Typography} from "@material-ui/core";

interface Props {
  classes: {
    root: string;
  }
}

const APP_NAME = 'Kabona';

export const Header: FC<Props> = ({classes}) =>
  <AppBar position='static'>
    <Typography
      variant='h1'
      component='h1'
      align='center'
      className={classes.root}
    >
      {APP_NAME}
    </Typography>
  </AppBar>;
