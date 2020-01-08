import {Input} from "@material-ui/core";
import React, {FC} from "react";
import {useSourceInput} from "./useSourceInput";

interface Props {
  source: string;
  _id: string;
}

const SourceInput: FC<Props> = ({source, _id}) => {
  const {value, handleChange, updateSource} = useSourceInput(source, _id);
  return (
    <Input
      value={value}
      onChange={handleChange}
      onBlur={updateSource}
    />
  )
};

export default SourceInput;
