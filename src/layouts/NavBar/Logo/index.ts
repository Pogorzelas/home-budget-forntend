import Logo from "./Logo.component";
import {withStyles} from "@material-ui/core";

export default withStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 60,
    height: 60,
    [theme.breakpoints.down('xs')]: {
      width: 40,
      height: 40,
    }
  },
  header: {
    textTransform: 'uppercase',
    [theme.breakpoints.down('xs')]: {
      fontSize: 45
    }
  }
}))(Logo);
