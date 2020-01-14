import React, {FC, Fragment} from "react";
import IncomeTable from "./IncomeTable/index";
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
