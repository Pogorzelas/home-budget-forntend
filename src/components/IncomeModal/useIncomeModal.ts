import {useDispatch, useSelector} from "react-redux";
import {dialogActions} from "../../store/dialog/action";
import {useRef, useState} from "react";
import {HandleChange} from "./HandleChange";
import {Income} from "../../interfaces/Income.interface";
import {createIncome} from "../../api/income";
import {incomeActions} from "../../store/income/action";
import {validateObject} from "../../utils/validateObject";

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
        [inputName]: inputName === 'amount' ? Number(value) : value
      }
    };

  const handleClose = (): void => {
    dispatch(dialogActions.openIncomeModal());
  };

  const addIncome = (): void => {
    const incomeToCreate = income.current;
    if (validateObject(incomeToCreate, 2)) {
      dispatch(dialogActions.snackBar({type: 'error', massage: 'uzupełnij pola'}));
      return;
    }
    createIncome(incomeToCreate)
      .then((list) => {
        dispatch(incomeActions.setIncome(list));
        handleClose();
      })
      .catch(() => dispatch(dialogActions.snackBar({type: 'error', massage: 'nie powiodło się'})));
  };

  return {
    isOpen,
    handleClose,
    handleChange,
    addIncome
  }
};
