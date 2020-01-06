import {FC, default as React} from "react";
import {TableCell, TableRow} from "@material-ui/core";
import {Income} from "../../../interfaces/Income.interface";
import AmountInput from "./AmountInput";
import SourceInput from "./SourceInput";
import DeleteButton from "./DeleteButton";

interface Props extends Income {}

const Row: FC<Props> = ({source, amount}) =>
  <TableRow>
    <TableCell>
      <SourceInput source={source}/>
    </TableCell>
    <TableCell>
      <AmountInput amount={amount}/>
    </TableCell>
    <TableCell>
      <DeleteButton/>
    </TableCell>
  </TableRow>;

export default Row;
