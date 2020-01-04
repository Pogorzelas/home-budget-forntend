import React, {FC} from "react";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {useIncomeTable} from "./useIncomeTable";

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

        </TableBody>
      </Table>
    </TableContainer>
  )
};

export default IncomeTable;
