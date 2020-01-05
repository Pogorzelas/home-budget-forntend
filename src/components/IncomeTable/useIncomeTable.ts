import {useState} from "react";
import {Income} from "../../interfaces/Income.interface";

export const useIncomeTable = (list: Income[]) => {
  const [income, setIncome] = useState(list);

  return {
    income
  };
};
