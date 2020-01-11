import React, {FC} from "react";
import IncomeManager from "../../components/IncomeManager";
import {useIncome} from "./useIncome";
import Loader from "../../components/Loader";

const Income: FC = () => {
  const isLoading = useIncome();
  return isLoading ? <IncomeManager/> : <Loader/>
};

export default Income;
