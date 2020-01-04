import {initialState, ThemeState} from "./state";
import {ThemeAction} from "./action";
import {LocalStorageKey} from "../../enums/LocalStorageKey.enum";

export default (state = initialState, action: ThemeAction): ThemeState => {

  switch (action.type) {
    case 'Theme.SetTheme':
      const type = state.type === 'light' ? 'dark' : 'light';
      localStorage.setItem(LocalStorageKey.ThemeType, type);
      return {
        ...state,
        type
      };
    default:
      return state;
  }
};
