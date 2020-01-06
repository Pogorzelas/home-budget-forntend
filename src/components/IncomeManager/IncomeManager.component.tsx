import React, {FC, Fragment} from "react";
import IncomeTable from "../IncomeTable/IncomeTable.component";
import {useIncomeManager} from "./useIncomeManager";

const IncomeManager: FC = () => {
  const {income} = useIncomeManager();
  return (
    <Fragment>
      <IncomeTable list={income}/>
    </Fragment>
  )
};

export default IncomeManager;
