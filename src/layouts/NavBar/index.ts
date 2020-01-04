import NavBar from "./NavBar.component";
import {withStyles} from "@material-ui/core";

export default withStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
      paddingLeft: 32
    }
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row-reverse',
    },
  }
}))(NavBar);
