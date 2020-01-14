import {makeStyles} from "@material-ui/core";

export default makeStyles(() => ({
  wrapper: {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: '-45px',
    marginLeft: '-45px',
  }
}));
