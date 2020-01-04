import {useDispatch, useSelector} from "react-redux";
import {dialogActions} from "../../store/dialog/action";
import {useHistory} from "react-router";
import {Home} from "@material-ui/icons";
import {SideMenuOption} from "../../interfaces/SideMenuOption.interface";
import {Pathname} from "../../enums/Pathname.enum";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

interface Hook {
  isOpen: boolean;
  list: SideMenuOption[];
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
  const history = useHistory();

  const handleClose = (): void => {
    dispatch(dialogActions.toggleMenu());
  };

  const handleLink = (path: Pathname): VoidFunction => (): void => {
    handleClose();
    history.push(path);
  };

  const list: SideMenuOption[] = [
    {
      name: 'home',
      icon: Home,
      onClick: handleLink(Pathname.Home),
    },
    {
      name: 'income',
      icon: MonetizationOnIcon,
      onClick: handleLink(Pathname.Income)
    }
  ];

  return {
    isOpen,
    list,
    handleClose
  }
};
