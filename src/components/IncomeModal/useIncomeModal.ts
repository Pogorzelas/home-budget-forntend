import {useDispatch, useSelector} from "react-redux";
import {dialogActions} from "../../store/dialog/action";
import {useRef, useState} from "react";
import {HandleChange} from "./HandleChange";
import {Income} from "../../interfaces/Income.interface";
import {createIncome} from "../../api/income";
import {incomeActions} from "../../store/income/action";

interface Hook {
  isOpen: boolean;
  handleClose: VoidFunction;
  handleChange: HandleChange;
  addIncome: VoidFunction;
}

interface State {
  dialog: {
    isIncomeModalOpened: boolean;
  }
}

export const useIncomeModal = (): Hook => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: State): boolean => state.dialog.isIncomeModalOpened);
  const income = useRef({} as Partial<Income>);

  const handleChange: HandleChange = (inputName) =>
    (event) => {
      const value = event.target.value;
      income.current = {
        ...income.current,
        [inputName]: value
      }
    };

  const handleClose = (): void => {
    dispatch(dialogActions.openIncomeModal());
  };

  const addIncome = (): void => {
    createIncome({...income.current})
      .then((list) => dispatch(incomeActions.setIncome(list)))
      .catch(() => dispatch(dialogActions.snackBar({type: 'error', massage: 'nie powiodło się'})));
  };

  return {
    isOpen,
    handleClose,
    handleChange,
    addIncome
  }
};
