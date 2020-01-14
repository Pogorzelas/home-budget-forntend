import {makeStyles} from "@material-ui/core";

export default makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  }
}));
