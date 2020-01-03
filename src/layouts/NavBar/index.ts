import {NavBar} from "./NavBar.component";
import {withStyles} from "@material-ui/core";

export default withStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}))(NavBar);
