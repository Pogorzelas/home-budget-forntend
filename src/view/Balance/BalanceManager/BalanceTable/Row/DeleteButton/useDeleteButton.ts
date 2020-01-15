import {dialogActions} from "../../../../../../store/dialog/action";
import {balanceActions} from "../../../../../../store/balance/action";
import {deleteBalance} from "../../../../../../api/balance";
import {useDispatch} from "react-redux";
import {useState} from "react";

interface Hook {
  isLoading: boolean;
  handleDelete: VoidFunction;
}

export const useDeleteButton = (_id: string): Hook => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = (): void => {
    setIsLoading(true);
    deleteBalance(_id)
      .then((list) => {
        dispatch(dialogActions.snackBar({type: 'success', massage: 'udalo sie'}));
        dispatch(balanceActions.setBalances(list))
      })
      .catch(() => {
        dispatch(dialogActions.snackBar({type: 'error', massage: 'nie powiodło się'}));
        setIsLoading(false)
      });
  };

  return {
    isLoading,
    handleDelete
  }
};
