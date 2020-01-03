import {Action} from "../../interfaces/Action.interface";
import {ThemeType} from "./types/ThemeType";

export type ThemeAction =
  | Action<'Theme.SetTheme', {
    themeType: ThemeType
  }>

export const themeActions = {
  setTheme(themeType: ThemeType): ThemeAction {
    return {
      type: 'Theme.SetTheme',
      payload: {
        themeType
      }
    };
  },
};
