import React, {FC} from "react";
import NumberFormat from 'react-number-format';
import {Input} from "@material-ui/core";
import {useAmountInput} from "./useAmountInput";

interface Props {
  amount: number;
  _id: string;
}

const AmountInput: FC<Props> = (props) => {
  const {value, handleChange, updateAmount} = useAmountInput(props);
  return (
    <NumberFormat
      value={value}
      customInput={Input}
      onValueChange={handleChange}
      onBlur={updateAmount}
      suffix={' zł'}
    />
  )
};

export default AmountInput;
