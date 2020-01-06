import React, {FC, Fragment} from "react";
import IncomeTable from "../IncomeTable/IncomeTable.component";
import {useIncomeManager} from "./useIncomeManager";

const IncomeManager: FC = () => {
  const {list} = useIncomeManager();
  return (
    <Fragment>
      <IncomeTable list={list}/>
    </Fragment>
  )
};

export default IncomeManager;
