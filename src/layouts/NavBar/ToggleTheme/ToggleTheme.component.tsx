import React, {FC} from "react";
import {BrightnessMedium} from '@material-ui/icons';
import {useToggleTheme} from "./useToggleTheme";
import {IconButton} from "@material-ui/core";

interface Props {
  classes: {
    root: string;
  }
}

export const ToggleTheme: FC<Props> = ({classes}) => {
  const {handleTheme} = useToggleTheme();
  return (
    <IconButton onClick={handleTheme} className={classes.root}>
      <BrightnessMedium/>
    </IconButton>
  );
};
