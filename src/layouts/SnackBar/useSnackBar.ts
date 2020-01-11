import {Color} from "@material-ui/lab/Alert/Alert";
import {SyntheticEvent, useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {SnackBarProps} from "../../interfaces/SnackBarProps.interface";

type CloseEvent = (event: SyntheticEvent<Element, Event>, reason: string) => void;

interface Hook {
  isOpen: boolean;
  timeOut?: number;
  handleClose: CloseEvent;
  type: Color;
  massage: string;
}

interface State {
  dialog: {
    snackBar:  SnackBarProps;
  }
}

export const useSnackBar = (): Hook => {
  const [isOpen, setIsOpen] = useState(false);
  const props = useSelector((state: State) => state.dialog.snackBar);

  const handleClose: CloseEvent = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpen(false)
  };

  useEffect(() => {
    if (props.type) {
      setIsOpen(true);
    }
  }, [props]);

  return {
    isOpen,
    handleClose,
    ...props
  }
};
