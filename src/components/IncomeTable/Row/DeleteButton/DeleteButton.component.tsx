import React, {FC} from "react";
import {Delete} from "@material-ui/icons";
import {CircularProgress, IconButton} from "@material-ui/core";
import {useDeleteButton} from "./useDeleteButton";

interface Props {
  _id: string;
  classes: {
    wrapper: string;
    loader: string;
    loadingIcon: string;
  }
}

const DeleteButton: FC<Props> = ({_id, classes}) => {
  const {isLoading, handleDelete} = useDeleteButton(_id);
  return (
    <div className={classes.wrapper}>
      <IconButton
        onClick={handleDelete}
        className={isLoading ? classes.loadingIcon : ''}
      >
        <Delete color='error'/>
      </IconButton>
      {
        isLoading &&
          <CircularProgress
            size={48}
            className={classes.loader}
          />
      }
    </div>
  )
};

export default DeleteButton;
