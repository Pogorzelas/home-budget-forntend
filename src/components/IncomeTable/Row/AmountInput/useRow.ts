import {deleteIncome, updateIncome} from "../../../../api/income";
import {useDispatch} from "react-redux";
import {IncomeActions} from "../../../../store/income/action";

interface Hook {
  handleDelete: VoidFunction;
  handleUpdate: (value: {amount?: number; source?: string}) => VoidFunction;
}

export const useRow = (_id: string): Hook => {
  const dispatch = useDispatch();
  const handleDelete = (): void => {
      deleteIncome(_id).then((list) => {
        dispatch(IncomeActions.setIncome(list));
      })
    };

  const handleUpdate = (value: {amount?: number; source?: string}): VoidFunction =>
    (): void => {
      updateIncome(_id, value);
    };

  return {
    handleDelete,
    handleUpdate
  }
};
