import {useDispatch, useSelector} from "react-redux";
import {dialogActions} from "../../store/dialog/action";

interface Hook {
  isOpen: boolean;
  handleClose: VoidFunction;
  addIncome: (source: string, amount: number) => void;
}

interface State {
  dialog: {
    isIncomeModalOpened: boolean;
  }
}

export const useIncomeModal = (): Hook => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: State): boolean => state.dialog.isIncomeModalOpened);

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
