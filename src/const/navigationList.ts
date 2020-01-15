import {Pathname} from "../enums/Pathname.enum";
import {Home} from "@material-ui/icons";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import {NavigationOption} from "../interfaces/NavigationOption.interface";

export const navigationList: NavigationOption[] = [
  {
    name: 'home',
    icon: Home,
    path: Pathname.Home,
  },
  {
    name: 'balance',
    icon: MonetizationOnIcon,
    path: Pathname.Income
  }
];
