import {ChangeEvent, useState} from "react";

interface Hook {
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useSourceInput = (source: string): Hook => {
  const [value, setValue] = useState(source);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return {
    value,
    handleChange,
  }
};
