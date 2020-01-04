import {SvgIconComponent} from "@material-ui/icons";

export interface SideMenuOption {
  name: string;
  icon: SvgIconComponent;
  onClick: VoidFunction;
}
