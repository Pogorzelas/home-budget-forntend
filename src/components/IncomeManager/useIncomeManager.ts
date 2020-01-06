import {useSelector} from "react-redux";
import {Income} from "../../interfaces/Income.interface";

interface State {
  income: {
    list: Income[]
  }
}

export const useIncomeManager = () => {
  const income = useSelector((state: State): Income[] => state.income.list);

  return {
    income
  }
};
