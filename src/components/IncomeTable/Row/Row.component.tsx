import {FC, default as React} from "react";
import {Input, TableCell, TableRow} from "@material-ui/core";
import {Income} from "../../../interfaces/Income.interface";
import AmountInput from "./AmountInput";

interface Props extends Income {}

const Row: FC<Props> = ({source, amount}) =>
  <TableRow>
    <TableCell>
      <Input value={source}/>
    </TableCell>
    <TableCell>
      <AmountInput amount={amount}/>
    </TableCell>
  </TableRow>;

export default Row;
