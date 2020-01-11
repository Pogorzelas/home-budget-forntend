import {deleteIncome, updateIncome} from "../../../../api/income";
import {useDispatch} from "react-redux";
import {IncomeActions} from "../../../../store/income/action";
import {dialogActions} from "../../../../store/dialog/action";
import {useState} from "react";

interface Hook {
  isLoading: boolean;
  handleDelete: VoidFunction;
  handleUpdate: (value: {amount?: number; source?: string}) => VoidFunction;
}

export const useRow = (_id: string): Hook => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (): void => {
    setIsLoading(true);
    deleteIncome(_id)
      .then((list) => {
        dispatch(dialogActions.snackBar({type: 'success', massage: 'udalo sie'}));
        dispatch(IncomeActions.setIncome(list))
      })
      .catch(() => {
        dispatch(dialogActions.snackBar({type: 'error', massage: 'nie powiodło się'}));
        setIsLoading(false)
      });
  };

  const handleUpdate = (value: {amount?: number; source?: string}): VoidFunction =>
    (): void => {
      updateIncome(_id, value);
    };

  return {
    isLoading,
    handleDelete,
    handleUpdate
  }
};
