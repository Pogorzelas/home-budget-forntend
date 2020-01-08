import {ChangeEvent, useState} from "react";
import {updateIncome} from "../../../../api/income";

interface Hook {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  updateSource: VoidFunction;
}

export const useSourceInput = (source: string, _id: string): Hook => {
  const [value, setValue] = useState(source);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const updateSource = (): void => {
    updateIncome(_id, {source: value})
  };

  return {
    value,
    handleChange,
    updateSource
  }
};
