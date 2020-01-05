import React, {FC, ReactElement} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {useIncomeTable} from "./useIncomeTable";
import Row from "./Row";

const SOURCE = 'źródło';
const AMOUNT = 'ilość';

const IncomeTable: FC = () => {
  const {income} = useIncomeTable();
  return (
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
            income.map((row): ReactElement =>
              <Row
                key={row.source}
                source={row.source}
                amount={row.amount}
              />
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default IncomeTable;
