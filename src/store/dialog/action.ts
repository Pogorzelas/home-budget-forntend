import {Action} from "../../interfaces/Action.interface";
import {SnackBarProps} from "../../interfaces/SnackBarProps.interface";

export type DialogAction =
  | Action<'Dialog.ToggleSideMenu'>
  | Action<'Dialog.TriggerSnackBar', {snackBar: SnackBarProps}>

export const dialogActions = {
  toggleMenu(): DialogAction {
    return {
      type: 'Dialog.ToggleSideMenu',
      payload: undefined
    };
  },
  snackBar(props: SnackBarProps): DialogAction {
    return {
      type: 'Dialog.TriggerSnackBar',
      payload: {
        snackBar: props
      }
    };
  },
};
