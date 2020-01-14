import DeleteButton from "./DeleteButton.component";
import {withStyles} from "@material-ui/core";

export default withStyles(() => ({
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
}))(DeleteButton);
