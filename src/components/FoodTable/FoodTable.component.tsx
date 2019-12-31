import React, {FC, ReactElement} from "react";
import {useFoodTable} from "./useFoodTable";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

const DAY = 'dzień';
const SPEND = 'wydatek';

export const FoodTable: FC = () => {
  const {data} = useFoodTable();
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{DAY}</TableCell>
            <TableCell>{SPEND}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data.map((row): ReactElement =>
              <TableRow key={row.day}>
                <TableCell>{row.day}</TableCell>
                <TableCell>{row.spend}</TableCell>
              </TableRow>
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
};
