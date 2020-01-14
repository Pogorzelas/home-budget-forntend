import React, {FC} from "react";
import {Typography} from "@material-ui/core";
import {AttachMoney} from '@material-ui/icons';
import useStyles from "./useStyles";

const APP_NAME = 'Kabona';

const Logo: FC = () => {
  const classes = useStyles();
  return (
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
    </div>
  );
};


export default Logo;
