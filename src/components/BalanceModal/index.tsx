import React, {FC} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import NumberFormat from "react-number-format";
import {useStyles} from "./useStyles";
import {useBalanceModal} from "./useBalanceModal";

const TITLE = 'Dodaj przychód';
const CANCEL_BUTTON = 'Wyjdź';
const ADD_BUTTON = 'Dodaj';

const BalanceModal: FC = () => {
  const {isOpen, handleClose, handleChange, addIncome} = useBalanceModal();
  const classes = useStyles();
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{TITLE}</DialogTitle>
      <DialogContent className={classes.content}>
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

export default BalanceModal;
