import React, {FC, ReactElement} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Row from "./Row/index";
import {Balance} from "../../../../interfaces/Balance.interface";
import TableName from "./TableName/index";

const AMOUNT = 'ilość';
const SOURCE = 'źródło';
const OPTIONS = 'opcje';

interface Props {
  list: Balance[];
}

const BalanceTable: FC<Props> = ({list}) =>
  <TableContainer component={Paper}>
    <TableName/>
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
