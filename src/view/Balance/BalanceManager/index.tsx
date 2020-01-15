import React, {FC, Fragment} from "react";
import BalanceTable from "./BalanceTable/index";
import {useBalanceManager} from "./useBalanceManager";

const BalanceManager: FC = () => {
  const {incomes} = useBalanceManager();
  return (
    <Fragment>
      <BalanceTable list={incomes}/>
    </Fragment>
  )
};

export default BalanceManager;
