import {Color} from "@material-ui/lab/Alert/Alert";
import {useState} from "react";
import {useSelector} from "react-redux";
import {AlertProps} from "../../interfaces/SnackBar.interface";

interface Hook {
  isOpen: boolean;
  timeOut: number;
  handleClose: VoidFunction;
  type: Color;
  massage: string;
}

interface State {
  dialog: {
    snackBar:  AlertProps;
  }
}

export const useSnackBar = (): Hook => {
  const [isOpen, setIsOpen] = useState(true);
  const {timeOut, type, massage} = useSelector((state: State) => state.dialog.snackBar);

  const handleClose = () => {
    setIsOpen(false)
  };

  return {
    isOpen,
    timeOut,
    handleClose,
    type,
    massage
  }
};
