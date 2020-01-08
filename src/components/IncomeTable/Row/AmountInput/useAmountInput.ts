import {useState} from "react";
import {NumberFormatValues} from "react-number-format";
import {updateIncome} from "../../../../api/income";

interface Hook {
  value: number;
  handleChange: (values: NumberFormatValues) => void;
  updateAmount: VoidFunction;
}

export const useAmountInput = ({amount, _id}: {amount: number, _id: string}): Hook => {
  const [value, setValue] = useState(amount);

  const handleChange = (values: NumberFormatValues): void => {
    setValue(values.floatValue)
  };

  const updateAmount = (): void => {
    updateIncome(_id, {amount: value});
  };

  return {
    value,
    handleChange,
    updateAmount,
  }
};
