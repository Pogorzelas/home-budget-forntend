import React, {FC} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@material-ui/core";
import {useStyles} from "./useStyles";
import {useBalanceModal} from "./useBalanceModal";
import ModalContent from "./ModalContent";

const TITLE = 'Dodaj przychód';
const CANCEL_BUTTON = 'Wyjdź';
const ADD_BUTTON = 'Dodaj';

const BalanceModal: FC = () => {
  const {isOpen, handleClose, handleChange, addIncome} = useBalanceModal();
  const classes = useStyles();
  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
    >
      <DialogTitle>{TITLE}</DialogTitle>
      <DialogContent className={classes.content}>
        <ModalContent
          handleChange={handleChange}
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
