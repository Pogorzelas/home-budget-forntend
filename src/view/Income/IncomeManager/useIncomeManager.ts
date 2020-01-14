import {useSelector} from "react-redux";
import {Income} from "../../../interfaces/Income.interface";

interface State {
  income: {
    list: Income[]
  }
}

interface Hook {
  list: Income[]
}

export const useIncomeManager = (): Hook => {
  const list = useSelector((state: State): Income[] => state.income.list);

  return {
    list
  }
};
