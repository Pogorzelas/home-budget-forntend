import {useState} from "react";
import {NumberFormatValues} from "react-number-format";
import {updateBalance} from "../../../../../../api/balance";

interface Hook {
  value: number;
  handleChange: (values: NumberFormatValues) => void;
  handleUpdate: VoidFunction;
}

export const useAmountInput = (amount: number, _id: string): Hook => {
  const [value, setValue] = useState(amount);

  const handleChange = (values: NumberFormatValues): void => {
    setValue(values.floatValue)
  };

  const handleUpdate = (): void => {
      updateBalance(_id, {amount: value});
    };

  return {
    value,
    handleChange,
    handleUpdate
  }
};
