import React, {FC, ReactElement} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Row from "./Row/index";
import {Balance} from "../../../../interfaces/Balance.interface";
import TableName from "./TableName/index";
import {BalanceType} from "../../../../enums/BalanceType.enum";

const AMOUNT = 'ilość';
const SOURCE = 'źródło';
const OPTIONS = 'opcje';

interface Props {
  list: Balance[];
  type: BalanceType;
}

const BalanceTable: FC<Props> = ({list, type}) =>
  <TableContainer component={Paper}>
    <TableName type={type}/>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>{SOURCE}</TableCell>
          <TableCell>{AMOUNT}</TableCell>
          <TableCell>{OPTIONS}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          list.map((row): ReactElement =>
            <Row
              key={row._id}
              _id={row._id}
              source={row.source}
              amount={row.amount}
            />
          )
        }
      </TableBody>
    </Table>
  </TableContainer>;

export default BalanceTable;
