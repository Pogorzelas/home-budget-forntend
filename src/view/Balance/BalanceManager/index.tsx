import React, {FC, Fragment} from "react";
import BalanceTable from "./BalanceTable/index";
import {useBalanceManager} from "./useBalanceManager";
import {BalanceType} from "../../../enums/BalanceType.enum";

const BalanceManager: FC = () => {
  const {incomes, expenses} = useBalanceManager();
  return (
    <Fragment>
      <BalanceTable list={incomes} type={BalanceType.Incomes}/>
      <BalanceTable list={expenses} type={BalanceType.Expenses}/>
    </Fragment>
  )
};

export default BalanceManager;
