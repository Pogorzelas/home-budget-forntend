import {Action} from "../../interfaces/Action.interface";
import {ThemeType} from "./types/ThemeType";

export type ThemeAction =
  | Action<'Theme.SetTheme', {
    type: ThemeType
  }>

export const themeActions = {
  setTheme(type: ThemeType): ThemeAction {
    return {
      type: 'Theme.SetTheme',
      payload: {
        type
      }
    };
  },
};
