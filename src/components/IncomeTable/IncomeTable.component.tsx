import React, {FC, ReactElement} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Row from "./Row";
import {Income} from "../../interfaces/Income.interface";

const AMOUNT = 'ilość';
const SOURCE = 'źródło';

interface Props {
  list: Income[]
}

const IncomeTable: FC<Props> = ({list}) =>
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            {SOURCE}
          </TableCell>
          <TableCell>
            {AMOUNT}
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          list.map((row): ReactElement =>
            <Row
              key={row.source}
              source={row.source}
              amount={row.amount}
            />
          )
        }
      </TableBody>
    </Table>
  </TableContainer>;

export default IncomeTable;
