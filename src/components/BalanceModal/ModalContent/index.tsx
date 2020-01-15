import React, {FC, Fragment} from "react";
import {TextField} from "@material-ui/core";
import {HandleChange} from "../HandleChange";
import NumberFormat from "react-number-format";
import {useStyles} from "./useStyles";

interface Props {
  handleChange: HandleChange;
}

const ModalContent: FC<Props> = ({handleChange}) => {
  const classes = useStyles();
  return (
    <Fragment>
      <TextField
        className={classes.input}
        label='źródło'
        onChange={handleChange('source')}
      />
      <NumberFormat
        className={classes.input}
        label='ilość'
        customInput={TextField}
        onChange={handleChange('amount')}
      />
    </Fragment>
  )
};

export default ModalContent;
