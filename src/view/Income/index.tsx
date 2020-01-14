import React, {FC} from "react";
import IncomeManager from "./IncomeManager/index";
import {useIncome} from "./useIncome";
import Loader from "../../components/Loader/index";

const Income: FC = () => {
  const isLoading = useIncome();
  return isLoading ?  <Loader/> : <IncomeManager/>;
};

export default Income;
