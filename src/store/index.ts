import { createStore, combineReducers} from 'redux';
import theme from './theme/reducer';
import dialog from './dialog/reducer';

export default createStore(
  combineReducers({
    theme,
    dialog
  }));
