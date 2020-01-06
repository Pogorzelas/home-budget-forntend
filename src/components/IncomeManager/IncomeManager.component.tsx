import React, {FC, Fragment} from "react";
import {income} from "../../mock/income";
import IncomeTable from "../IncomeTable/IncomeTable.component";

const IncomeManager: FC = () => {
  return (
    <Fragment>
      <IncomeTable list={income}/>
      <IncomeTable list={income}/>
    </Fragment>
  )
};

export default IncomeManager;
