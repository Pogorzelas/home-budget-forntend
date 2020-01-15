import React, {FC, Fragment} from "react";
import BalanceTable from "./BalanceTable/index";
import {useBalanceManager} from "./useBalanceManager";

const BalanceManager: FC = () => {
  const {incomes, expenses} = useBalanceManager();
  return (
    <Fragment>
      <BalanceTable list={incomes}/>
      <BalanceTable list={expenses}/>
    </Fragment>
  )
};

export default BalanceManager;
