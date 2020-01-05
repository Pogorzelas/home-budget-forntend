import {FC, default as React} from "react";
import {TableCell, TableRow} from "@material-ui/core";
import {Income} from "../../../interfaces/Income.interface";
import AmountInput from "./AmountInput";
import SourceInput from "./SourceInput/SourceInput.component";

interface Props extends Income {}

const Row: FC<Props> = ({source, amount}) =>
  <TableRow>
    <TableCell>
      <SourceInput source={source}/>
    </TableCell>
    <TableCell>
      <AmountInput amount={amount}/>
    </TableCell>
  </TableRow>;

export default Row;
