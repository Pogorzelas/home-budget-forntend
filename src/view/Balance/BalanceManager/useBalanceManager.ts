import {useSelector} from "react-redux";
import {Balance} from "../../../interfaces/Balance.interface";

interface State {
  balance: {
    incomes: Balance[]
  }
}

interface Hook {
  incomes: Balance[]
}

export const useBalanceManager = (): Hook => {
  const incomes = useSelector((state: State): Balance[] => state.balance.incomes);

  return {
    incomes
  }
};
