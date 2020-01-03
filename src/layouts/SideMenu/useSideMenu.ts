import {useDispatch, useSelector} from "react-redux";
import {dialogActions} from "../../store/dialog/action";

interface Hook {
  isOpen: boolean;
  handleClose: VoidFunction;
}

interface State {
  dialog: {
    isSideMenuOpened: boolean;
  }
}

export const useSideMenu = (): Hook => {
  const isOpen = useSelector((state: State): boolean => state.dialog.isSideMenuOpened);
  const dispatch = useDispatch();

  const handleClose = (): void => {
    dispatch(dialogActions.toggleMenu());
  };

  return {
    isOpen,
    handleClose,
  }
};
