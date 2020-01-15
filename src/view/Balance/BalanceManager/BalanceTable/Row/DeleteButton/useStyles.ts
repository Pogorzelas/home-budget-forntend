import {makeStyles} from "@material-ui/core";

export default makeStyles(() => ({
  wrapper: {
    position: 'relative',
  },
  loadingIcon: {
    opacity: 0.6
  },
  loader: {
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
  },
}));
