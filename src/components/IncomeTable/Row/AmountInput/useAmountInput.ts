import {useState} from "react";
import {NumberFormatValues} from "react-number-format";

interface Hook {
  value: number;
  handleChange: any;
}

export const useAmountInput = (amount: number): Hook => {
  const [value, setValue] = useState(amount);

  const handleChange = (values: NumberFormatValues): void => {
    setValue(values.floatValue)
  };

  return {
    value,
    handleChange
  }
};
