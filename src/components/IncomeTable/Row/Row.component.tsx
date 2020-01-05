import {FC, default as React} from "react";
import {Input, TableCell, TableRow} from "@material-ui/core";
import {Income} from "../../../interfaces/Income.interface";

interface Props extends Income {}

const Row: FC<Props> = ({source, amount}) =>
  <TableRow>
    <TableCell>
      <Input value={source}/>
    </TableCell>
    <TableCell>
      <Input value={amount}/>
    </TableCell>
  </TableRow>;

export default Row;
