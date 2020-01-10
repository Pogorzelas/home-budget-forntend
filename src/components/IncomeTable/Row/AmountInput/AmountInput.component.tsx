import React, {FC} from "react";
import NumberFormat from 'react-number-format';
import {Input} from "@material-ui/core";
import {useAmountInput} from "./useAmountInput";

interface Props {
  amount: number;
  onBlur: (value: {amount: number}) => VoidFunction;
}

const AmountInput: FC<Props> = ({amount, onBlur}) => {
  const {value, handleChange} = useAmountInput(amount);
  return (
    <NumberFormat
      value={value}
      customInput={Input}
      onValueChange={handleChange}
      onBlur={onBlur({amount: value})}
      suffix={' zł'}
    />
  )
};

export default AmountInput;
