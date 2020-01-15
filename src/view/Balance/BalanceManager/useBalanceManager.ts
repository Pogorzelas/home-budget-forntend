import {useSelector} from "react-redux";
import {Balance} from "../../../interfaces/Balance.interface";

interface State {
  balance: {
    incomes: Balance[];
    expenses: Balance[];
  }
}

interface Hook {
  incomes: Balance[];
  expenses: Balance[];
}

export const useBalanceManager = (): Hook => {
  const {incomes, expenses} = useSelector<State, Hook>(state => ({...state.balance}));
  return {
    incomes,
    expenses
  }
};
