import {withStyles} from "@material-ui/core";
import {NavBar} from "./NavBar.component";

export default withStyles((theme) => ({
  root: {
    textTransform: 'uppercase',
    [theme.breakpoints.down('xs')]: {
      fontSize: 70
    }
  }
}))(NavBar);
