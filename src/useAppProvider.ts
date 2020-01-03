import {createMuiTheme} from "@material-ui/core";
import {cyan, teal} from "@material-ui/core/colors";
import {Theme} from "@material-ui/core/styles/createMuiTheme";

interface Hook {
  theme: Theme;
}

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: cyan
  }
});

export const useAppProvider = (): Hook => {
  return {
    theme
  };
};
