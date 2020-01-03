import {initialState, ThemeState} from "./state";
import {ThemeAction} from "./action";

export default (state = initialState, action: ThemeAction): ThemeState => {

  switch (action.type) {
    case 'Theme.SetTheme':
      return {
        ...state,
        type: state.type === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
};
