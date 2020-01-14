import React, {FC} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import NumberFormat from "react-number-format";
import {useStyles} from "./useStyles";
import {useIncomeModal} from "./useIncomeModal";

const TITLE = 'Dodaj przychód';
const CANCEL_BUTTON = 'Wyjdź';
const ADD_BUTTON = 'Dodaj';

const IncomeModal: FC = () => {
  const {isOpen, handleClose, handleChange, addIncome} = useIncomeModal();
  const classes = useStyles();
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{TITLE}</DialogTitle>
      <DialogContent className={classes.content}>
        <TextField
          label='źródło'
          onChange={handleChange('source')}
        />
        <NumberFormat
          label='ilość'
          customInput={TextField}
          onChange={handleChange('amount')}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          {CANCEL_BUTTON}
        </Button>
        <Button onClick={addIncome}>
          {ADD_BUTTON}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default IncomeModal;
