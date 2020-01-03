import {createMuiTheme} from "@material-ui/core";
import {red, teal} from "@material-ui/core/colors";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import {useSelector} from "react-redux";
import {ThemeType} from "./store/theme/types/ThemeType";
import {useMemo} from "react";

interface Hook {
  theme: Theme;
}

interface State {
  theme: {
    type: ThemeType;
  }
}

export const useAppProvider = (): Hook => {
  const themeType = useSelector((state: State): ThemeType => state.theme.type);

  const theme = useMemo((): Theme => createMuiTheme({
    palette: {
      primary: teal,
      secondary: {
        main: red[200]
      },
      type: themeType
    }
  }), [themeType]);

  return {
    theme
  };
};
