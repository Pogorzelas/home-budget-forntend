import React, {FC} from "react";
import {Delete} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";

interface Props {
  onClick: VoidFunction;
}

const DeleteButton: FC<Props> = ({onClick}) => {
  return (
    <IconButton onClick={onClick}>
      <Delete color='error'/>
    </IconButton>
  )
};

export default DeleteButton;
