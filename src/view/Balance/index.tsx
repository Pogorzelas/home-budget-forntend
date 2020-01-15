import React, {FC} from "react";
import {useBalance} from "./useBalance";
import Loader from "../../components/Loader/index";
import BalanceManager from "./BalanceManager";

const Balance: FC = () => {
  const isLoading = useBalance();
  return isLoading ?  <Loader/> : <BalanceManager/>;
};

export default Balance;
