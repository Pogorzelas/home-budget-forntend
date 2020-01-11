import {Color} from "@material-ui/lab/Alert/Alert";

export interface SnackBarProps {
  timeOut?: number;
  type: Color;
  massage: string;
}
