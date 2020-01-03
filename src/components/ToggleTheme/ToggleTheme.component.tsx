import React, {FC} from "react";
import {BrightnessMedium} from '@material-ui/icons';
import {useToggleTheme} from "./useToggleTheme";
import {IconButton} from "@material-ui/core";

export const ToggleTheme: FC = () => {
  const {handleTheme} = useToggleTheme();
  return (
    <IconButton onClick={handleTheme}>
      <BrightnessMedium/>
    </IconButton>
  );
};
