import {Dispatch} from "react";
import {NumberFormatValues} from "react-number-format";

type Hook = Dispatch<NumberFormatValues>;

export const useNumberInput = (onChange?: Dispatch<number>): Hook =>
  (values) => {
    const value = values.floatValue;
    if (onChange) {
      onChange(value);
    }
  };
