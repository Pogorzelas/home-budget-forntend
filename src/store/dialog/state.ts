import {SnackBarProps} from "../../interfaces/SnackBarProps.interface";

export interface DialogState {
  isSideMenuOpened: boolean;
  isIncomeModalOpened: boolean;
  snackBar: SnackBarProps;
}

export const initialState: DialogState = {
  isSideMenuOpened: false,
  isIncomeModalOpened: false,
  snackBar: {} as SnackBarProps
};
