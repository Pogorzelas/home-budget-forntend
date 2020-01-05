import React, {FC} from "react";
import IncomeTable from "../../components/IncomeTable";
import {income} from "../../mock/income";

const Income: FC = () => <IncomeTable list={income}/>;

export default Income;
