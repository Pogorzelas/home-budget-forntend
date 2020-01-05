import {Input} from "@material-ui/core";
import React, {FC} from "react";
import {useSourceInput} from "./useSourceInput";

interface Props {
  source: string;
}

const SourceInput: FC<Props> = ({source}) => {
  const {value, handleChange} = useSourceInput(source);
  return (
    <Input
      value={value}
      onChange={handleChange}
    />
  )
};

export default SourceInput;
