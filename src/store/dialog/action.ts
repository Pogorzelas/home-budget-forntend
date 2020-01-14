import {Action} from "../../interfaces/Action.interface";
import {SnackBarProps} from "../../interfaces/SnackBarProps.interface";

export type DialogAction =
  | Action<'Dialog.ToggleSideMenu'>
  | Action<'Dialog.TriggerSnackBar', {snackBar: SnackBarProps}>
  | Action<'Dialog.ToggleIncomeModal'>

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
  openIncomeModal(): DialogAction {
    return {
      type: 'Dialog.ToggleIncomeModal',
      payload: undefined
    }
  }
};
