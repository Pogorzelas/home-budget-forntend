import React, {FC, ReactElement} from "react";
import {useFoodTable} from "./useFoodTable";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import BodyRow from "./BodyRow";

interface Props {
  classes: {
    root: string;
  }
}

const DAY = 'dzień';
const SPEND = 'wydatek';

export const FoodTable: FC<Props> = ({classes}) => {
  const {food} = useFoodTable();
  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>{DAY}</TableCell>
            <TableCell>{SPEND}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            food.map((row): ReactElement =>
              <BodyRow
                key={row.day}
                day={row.day}
                spend={row.spend}
              />
            )
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
};
