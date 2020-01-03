import {DialogState, initialState} from "./state";
import {DialogAction} from "./action";

export default (state = initialState, action: DialogAction): DialogState => {
  switch (action.type) {
    case 'Dialog.ToggleSideMenu':
      return {
        ...state,
        isSideMenuOpened: !state.isSideMenuOpened
      };
    default:
      return state
  }
};
