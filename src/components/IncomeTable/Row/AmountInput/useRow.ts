import {deleteIncome} from "../../../../api/income";

interface Hook {
  handleDelete: VoidFunction;
}

export const useRow = (_id: string): Hook => {

  const handleDelete = (): void => {
      deleteIncome(_id)
    };

  return {
    handleDelete
  }
};
