import {useDispatch} from "react-redux";
import {dialogActions} from "../../../store/dialog/action";

interface Hook {
  openModal: VoidFunction;
}

export const useAddButton = (): Hook => {
  const dispatch = useDispatch();

  const openModal = (): void => {
    dispatch(dialogActions.openIncomeModal())
  };

  return {
    openModal
  }
};
