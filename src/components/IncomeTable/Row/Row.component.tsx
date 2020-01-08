import {FC, default as React} from "react";
import {TableCell, TableRow} from "@material-ui/core";
import AmountInput from "./AmountInput";
import SourceInput from "./SourceInput";
import DeleteButton from "./DeleteButton";
import {useRow} from "./AmountInput/useRow";

interface Props {
  _id: string;
  source: string;
  amount: number;
}

const Row: FC<Props> = ({source, amount, _id}) => {
  const {handleDelete} = useRow(_id);
  return (
    <TableRow>
      <TableCell><SourceInput source={source} _id={_id}/></TableCell>
      <TableCell><AmountInput amount={amount} _id={_id}/></TableCell>
      <TableCell><DeleteButton onClick={handleDelete}/></TableCell>
    </TableRow>
  );
};

export default Row;
