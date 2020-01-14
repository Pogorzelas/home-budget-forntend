import React, {FC} from "react";
import {CircularProgress} from "@material-ui/core";
import useStyles from "./useStyles";

const Loader: FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <CircularProgress className={classes.loader} size={90}/>
    </div>
  );
};

export default Loader;
