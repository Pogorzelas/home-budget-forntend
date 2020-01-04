import {useDispatch, useSelector} from "react-redux";
import {dialogActions} from "../../store/dialog/action";
import {useHistory} from "react-router";

interface Hook {
  isOpen: boolean;
  handleClose: VoidFunction;
  handleLink: (path: string) => void;
}

interface State {
  dialog: {
    isSideMenuOpened: boolean;
  }
}

export const useSideMenu = (): Hook => {
  const isOpen = useSelector((state: State): boolean => state.dialog.isSideMenuOpened);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClose = (): void => {
    dispatch(dialogActions.toggleMenu());
  };

  const handleLink = (path: string): void => {
    handleClose();
    history.push(path);
  };

  return {
    isOpen,
    handleClose,
    handleLink
  }
};
