import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {AttachMoney} from '@material-ui/icons';

interface Props {
  classes: {
    container: string;
    icon: string;
    header: string;
  }
}

const APP_NAME = 'Kabona';

const Logo: FC<Props> = ({classes}) =>
  <div className={classes.container}>
    <AttachMoney
      className={classes.icon}
      color='secondary'
    />
    <Typography
      className={classes.header}
      variant='h3'
      component='h1'
      align='center'
    >
      {APP_NAME}
    </Typography>
  </div>;

export default Logo;
