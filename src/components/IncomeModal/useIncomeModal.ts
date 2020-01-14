import {useDispatch, useSelector} from "react-redux";
import {dialogActions} from "../../store/dialog/action";
import {useRef, useState} from "react";

interface Hook {
  isOpen: boolean;
  handleClose: VoidFunction;
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
  const income = useRef();

  const handleChange = () => {

  };

  const handleClose = (): void => {
    dispatch(dialogActions.openIncomeModal());
  };

  const addIncome = (): void => {

  };

  return {
    isOpen,
    handleClose,
    addIncome
  }
};
