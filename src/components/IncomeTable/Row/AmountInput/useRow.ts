import {deleteIncome, updateIncome} from "../../../../api/income";

interface Hook {
  handleDelete: VoidFunction;
  handleUpdate: (value: {amount?: number; source?: string}) => VoidFunction;
}

export const useRow = (_id: string): Hook => {

  const handleDelete = (): void => {
      deleteIncome(_id)
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
