import React, {FC} from "react";
import {useSnackBar} from "./useSnackBar";
import {Snackbar} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';
import {SnackbarOrigin} from "@material-ui/core/Snackbar/Snackbar";

const TOP_RIGHT_CORNER: SnackbarOrigin = { vertical: 'top', horizontal: 'right'};

const SnackBar: FC = () => {
  const {isOpen, timeOut = 3000, handleClose, type, massage} = useSnackBar();
  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={timeOut}
      onClose={handleClose}
      anchorOrigin={TOP_RIGHT_CORNER}
    >
      <MuiAlert
        severity={type}
        elevation={6}
        variant="filled"
      >
        {massage}
      </MuiAlert>
    </Snackbar>
  );
};

export default SnackBar;
