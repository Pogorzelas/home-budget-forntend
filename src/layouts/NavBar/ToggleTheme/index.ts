import {ToggleTheme} from "./ToggleTheme.component";
import {withStyles} from "@material-ui/core";

export default withStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}))(ToggleTheme);
