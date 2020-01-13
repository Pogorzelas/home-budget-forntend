import TableName from "./TableName.component";
import {withStyles} from "@material-ui/core";

export default withStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(81, 81, 81, 1)',
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`
  },
}))(TableName);
