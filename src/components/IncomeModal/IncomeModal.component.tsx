import React, {FC} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";
import {useIncomeModal} from "./useIncomeModal";

const TITLE = 'Dodaj przychód';
const CANCEL_BUTTON = 'Wyjdź';
const ADD_BUTTON = 'Dodaj';

const IncomeModal: FC = () => {
  const {isOpen, handleClose, addIncome} = useIncomeModal();
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>{TITLE}</DialogTitle>
      <DialogContent>

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
