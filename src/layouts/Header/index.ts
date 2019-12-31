import {withStyles} from "@material-ui/core";
import {Header} from "./Header.component";

export default withStyles((theme) => ({
  root: {
    textTransform: 'uppercase',
    [theme.breakpoints.down('xs')]: {
      fontSize: 70
    }
  }
}))(Header);
