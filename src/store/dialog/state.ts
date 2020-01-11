import {SnackBarProps} from "../../interfaces/SnackBarProps.interface";

export interface DialogState {
  isSideMenuOpened: boolean;
  snackBar: SnackBarProps;
}

export const initialState: DialogState = {
  isSideMenuOpened: false,
  snackBar: {} as SnackBarProps
};
