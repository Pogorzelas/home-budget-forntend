import {FC, default as React} from "react";
import {CircularProgress, TableCell, TableRow} from "@material-ui/core";
import AmountInput from "./AmountInput";
import SourceInput from "./SourceInput";
import DeleteButton from "./DeleteButton";
import {useRow} from "./AmountInput/useRow";

interface Props {
  _id: string;
  source: string;
  amount: number;
  classes: {
    hidden: string
  }
}

const Row: FC<Props> = ({_id, source, amount, classes}) => {
  const {isLoading, handleDelete, handleUpdate} = useRow(_id);
  return (
    <TableRow>
      <TableCell><SourceInput source={source} onBlur={handleUpdate}/></TableCell>
      <TableCell><AmountInput amount={amount} onBlur={handleUpdate}/></TableCell>
      <TableCell><DeleteButton onClick={handleDelete}/></TableCell>
      <TableCell><CircularProgress className={isLoading ? '' : classes.hidden} /></TableCell>
    </TableRow>
  );
};

export default Row;
