import {TableCell, TableRow} from "@material-ui/core";
import React, {FC} from "react";
import {SpendFood} from "../../../interfaces/SpendFood.interface";

interface Props extends SpendFood {}

export const BodyRow: FC<Props> = ({day, spend}) => {
  return (
    <TableRow>
      <TableCell>{day}</TableCell>
      <TableCell>{spend}</TableCell>
    </TableRow>
  );
};
