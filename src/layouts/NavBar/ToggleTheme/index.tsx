import React, {FC} from "react";
import {BrightnessMedium} from '@material-ui/icons';
import {useToggleTheme} from "./useToggleTheme";
import {IconButton} from "@material-ui/core";
import useStyles from "./useStyles";

const ToggleTheme: FC = () => {
  const {handleTheme} = useToggleTheme();
  const classes = useStyles();
  return (
    <IconButton onClick={handleTheme} className={classes.root}>
      <BrightnessMedium/>
    </IconButton>
  );
};

export default ToggleTheme;
