import {Action} from "../../interfaces/Action.interface";

export type ThemeAction =
  | Action<'Theme.SetTheme'>

export const themeActions = {
  setTheme(): ThemeAction {
    return {
      type: 'Theme.SetTheme',
      payload: undefined
    };
  },
};
