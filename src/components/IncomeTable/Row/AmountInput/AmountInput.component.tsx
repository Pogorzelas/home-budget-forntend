import React, {FC} from "react";
import NumberFormat from 'react-number-format';
import {Input} from "@material-ui/core";
import {useAmountInput} from "./useAmountInput";

interface Props {
  amount: number;
}

const AmountInput: FC<Props> = ({amount}) => {
  const {value, handleChange} = useAmountInput(amount);
  return (
    <NumberFormat
      value={value}
      customInput={Input}
      onValueChange={handleChange}
      suffix={' zł'}
    />
  )
};

export default AmountInput;
