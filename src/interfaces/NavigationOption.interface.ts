import {SvgIconComponent} from "@material-ui/icons";
import {Pathname} from "../enums/Pathname.enum";

export interface NavigationOption {
  name: string;
  path: Pathname;
  icon: SvgIconComponent;
}
