import {FC, default as React} from "react";
import {TableCell, TableRow} from "@material-ui/core";
import AmountInput from "./AmountInput/index";
import SourceInput from "./SourceInput/index";
import DeleteButton from "./DeleteButton/index";

interface Props {
  _id: string;
  source: string;
  amount: number;
}

const Row: FC<Props> = ({_id, source, amount}) =>
  <TableRow>
    <TableCell><SourceInput source={source} _id={_id}/></TableCell>
    <TableCell><AmountInput amount={amount} _id={_id}/></TableCell>
    <TableCell><DeleteButton _id={_id}/></TableCell>
  </TableRow>;

export default Row;
