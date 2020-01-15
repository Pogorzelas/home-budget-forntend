import {useDispatch} from "react-redux";
import {dialogActions} from "../../../../../store/dialog/action";
import {BalanceType} from "../../../../../enums/BalanceType.enum";
import {useMemo} from "react";

interface Hook {
  name: string;
  openModal: VoidFunction;
}

const EXPENSES = 'wydatki';
const INCOMES = 'przychód';

export const useTableName = (type: BalanceType): Hook => {
  const dispatch = useDispatch();
  const name = useMemo((): string => type === BalanceType.Expenses ? EXPENSES : INCOMES, [type]);

  const openModal = (): void => {
    dispatch(dialogActions.openIncomeModal())
  };

  return {
    name,
    openModal,
  }
};
