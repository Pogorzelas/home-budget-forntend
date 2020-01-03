import React, {FC} from "react";
import {BrightnessMedium} from '@material-ui/icons';
import {useToggleTheme} from "./useToggleTheme";

export const ToggleTheme: FC = () => {
  const {handleTheme} = useToggleTheme();
  return <BrightnessMedium onClick={handleTheme}/>
};
