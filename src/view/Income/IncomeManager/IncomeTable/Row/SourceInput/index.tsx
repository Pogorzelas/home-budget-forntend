import {Input} from "@material-ui/core";
import React, {FC} from "react";
import {useSourceInput} from "./useSourceInput";

interface Props {
  _id: string;
  source: string;
}

const SourceInput: FC<Props> = ({source, _id}) => {
  const {value, handleChange, handleUpdate} = useSourceInput(source, _id);
  return (
    <Input
      value={value}
      onChange={handleChange}
      onBlur={handleUpdate}
    />
  )
};

export default SourceInput;
