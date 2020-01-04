import {useDispatch} from 'react-redux';
import {dialogActions} from "../../../store/dialog/action";

interface Hook {
  handleMenu: VoidFunction;
}

export const useToggleMenu = (): Hook => {
  const dispatch = useDispatch();

  const handleMenu = (): void => {
    dispatch(dialogActions.toggleMenu())
  };

  return {
    handleMenu
  }
};
