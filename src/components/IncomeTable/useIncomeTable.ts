import {useEffect, useState} from "react";
import {Income} from "../../interfaces/Income.interface";
import {income as initialIncome} from "../../mock/income";

export const useIncomeTable = () => {
  const [income, setIncome] = useState([] as Income[]);

  useEffect((): void => {
    setIncome(initialIncome);
  }, []);

  return {
    income
  };
};
