import NumberFormat from "react-number-format";
import {Input} from "@material-ui/core";
import React, {Dispatch, FC} from "react";
import {useNumberInput} from "./useNumberInput";

interface Props {
  onChange?: Dispatch<number>
  [props: string]: any;
}

const NumberInput: FC<Props> = ({onChange, ...props}) => {
  const onChangeValues = useNumberInput(onChange);
  return (
    <NumberFormat
      customInput={Input}
      {...props}
      onChangeValues={onChangeValues}
    />
  )
};

export default NumberInput;
