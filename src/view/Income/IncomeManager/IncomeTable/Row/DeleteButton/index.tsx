import React, {FC} from "react";
import {Delete} from "@material-ui/icons";
import {CircularProgress, IconButton} from "@material-ui/core";
import {useDeleteButton} from "./useDeleteButton";
import useStyles from "./useStyles";

interface Props {
  _id: string;
}

const DeleteButton: FC<Props> = ({_id}) => {
  const {isLoading, handleDelete} = useDeleteButton(_id);
  const classes = useStyles();
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
