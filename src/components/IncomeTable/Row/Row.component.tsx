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
  const {handleDelete, handleUpdate} = useRow(_id);
  return (
    <TableRow>
      <TableCell><SourceInput source={source} onBlur={handleUpdate}/></TableCell>
      <TableCell><AmountInput amount={amount} onBlur={handleUpdate}/></TableCell>
      <TableCell><DeleteButton onClick={handleDelete}/></TableCell>
    </TableRow>
  );
};

export default Row;
