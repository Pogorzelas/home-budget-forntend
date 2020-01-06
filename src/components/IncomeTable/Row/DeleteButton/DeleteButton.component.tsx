import React, {FC} from "react";
import {Delete} from "@material-ui/icons";
import {IconButton} from "@material-ui/core";

const DeleteButton: FC = () => {

  return (
    <IconButton>
      <Delete color='error'/>
    </IconButton>
  )
};

export default DeleteButton;
