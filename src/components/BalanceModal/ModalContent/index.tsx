import React, {FC, Fragment, ReactElement} from "react";
import {MenuItem, Select, TextField} from "@material-ui/core";
import {HandleChange} from "../HandleChange";
import NumberFormat from "react-number-format";
import {useStyles} from "./useStyles";
import {useModalContent} from "./useModalContent";

interface Props {
  handleChange: HandleChange;
}

const ModalContent: FC<Props> = ({handleChange}) => {
  const {typeList} = useModalContent();
  const classes = useStyles();
  return (
    <Fragment>
      <Select
        defaultValue=''
        onChange={handleChange('type')}
      >
        {
          typeList.map((type): ReactElement =>
            <MenuItem
              key={type}
              value={type}
            >
              {type}
            </MenuItem>
          )
        }
      </Select>
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
