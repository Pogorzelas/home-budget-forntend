import {Logo} from "./Logo.component";
import {withStyles} from "@material-ui/core";

export default withStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 60,
    height: 60
  },
  header: {
    textTransform: 'uppercase',
  }
}))(Logo);
