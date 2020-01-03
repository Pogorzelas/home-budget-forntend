import {createMuiTheme} from "@material-ui/core";
import {cyan, teal} from "@material-ui/core/colors";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import {useSelector} from "react-redux";
import {ThemeType} from "./store/theme/types/ThemeType";

interface Hook {
  theme: Theme;
}

interface State {
  theme: {
    themeType: ThemeType;
  }
}

export const useAppProvider = (): Hook => {
  const themeType = useSelector((state: State): ThemeType => state.theme.themeType);

  const theme = createMuiTheme({
    palette: {
      primary: teal,
      secondary: cyan,
      type: themeType
    }
  });

  return {
    theme
  };
};
