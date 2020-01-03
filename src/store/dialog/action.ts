import {Action} from "../../interfaces/Action.interface";

export type DialogAction =
  | Action<'Dialog.ToggleSideMenu'>

export const dialogActions = {
  toggleMenu(): DialogAction {
    return {
      type: 'Dialog.ToggleSideMenu',
      payload: undefined
    };
  },
};
