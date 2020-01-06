import React, {FC} from "react";
import IncomeManager from "../../components/IncomeManager";
import {useIncome} from "./useIncome";

const Income: FC = () => {
  useIncome();
  return <IncomeManager/>;
};

export default Income;
