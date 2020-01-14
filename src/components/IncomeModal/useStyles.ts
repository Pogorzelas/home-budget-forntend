import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBot: theme.spacing(1)
  }
}));
