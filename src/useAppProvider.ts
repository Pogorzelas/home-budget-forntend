import {createMuiTheme} from "@material-ui/core";
import {cyan, teal} from "@material-ui/core/colors";
import {Theme} from "@material-ui/core/styles/createMuiTheme";

interface Hook {
  theme: Theme;
}

export const useAppProvider = (): Hook => {

  const theme = createMuiTheme({
    palette: {
      primary: teal,
      secondary: cyan,
      type: 'light'
    }
  });

  return {
    theme
  };
};
