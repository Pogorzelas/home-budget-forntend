import React, {FC} from "react";
import {CircularProgress} from "@material-ui/core";

interface Props {
  classes: {
    wrapper: string;
    loader: string;
  }
}

const Loader: FC<Props> = ({classes}) =>
  <div className={classes.wrapper}>
    <CircularProgress className={classes.loader} size={90}/>
  </div>;

export default Loader;
