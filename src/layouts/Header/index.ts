import {withStyles} from "@material-ui/core";
import {Header} from "./Header.component";

export default withStyles(() => ({
  root: {
    textTransform: 'uppercase'
  }
}))(Header);
