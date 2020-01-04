import Option from './Option.component';
import {withStyles} from "@material-ui/core";

export default withStyles(() => ({
  label: {
    display: 'flex',
    flexDirection: 'column'
  }
}))(Option);
