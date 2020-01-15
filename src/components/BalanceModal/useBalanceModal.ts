import {useDispatch, useSelector} from "react-redux";
import {dialogActions} from "../../store/dialog/action";
import {useRef} from "react";
import {HandleChange} from "./HandleChange";
import {Balance} from "../../interfaces/Balance.interface";
import {createBalance} from "../../api/balance";
import {balanceActions} from "../../store/balance/action";
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

export const useBalanceModal = (): Hook => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: State): boolean => state.dialog.isIncomeModalOpened);
  const income = useRef({} as Partial<Balance>);

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
    createBalance(incomeToCreate)
      .then((list) => {
        dispatch(balanceActions.setBalances(list));
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
