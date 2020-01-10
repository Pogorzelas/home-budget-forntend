import {Input} from "@material-ui/core";
import React, {FC} from "react";
import {useSourceInput} from "./useSourceInput";

interface Props {
  source: string;
  onBlur: (value: {source: string}) => VoidFunction;
}

const SourceInput: FC<Props> = ({source, onBlur}) => {
  const {value, handleChange} = useSourceInput(source);
  return (
    <Input
      value={value}
      onChange={handleChange}
      onBlur={onBlur({source: value})}
    />
  )
};

export default SourceInput;
