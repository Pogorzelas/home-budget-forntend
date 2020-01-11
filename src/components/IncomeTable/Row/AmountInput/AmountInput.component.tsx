import React, {FC} from "react";
import NumberFormat from 'react-number-format';
import {Input} from "@material-ui/core";
import {useAmountInput} from "./useAmountInput";

interface Props {
  amount: number;
  _id: string;
}

const AmountInput: FC<Props> = ({amount, _id}) => {
  const {value, handleChange, handleUpdate} = useAmountInput(amount, _id);
  return (
    <NumberFormat
      value={value}
      customInput={Input}
      onValueChange={handleChange}
      onBlur={handleUpdate}
      suffix={' zł'}
    />
  )
};

export default AmountInput;
