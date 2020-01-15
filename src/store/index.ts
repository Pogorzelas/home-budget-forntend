import { createStore, combineReducers} from 'redux';
import theme from './theme/reducer';
import dialog from './dialog/reducer';
import balance from './balance/reducer';

export default createStore(
  combineReducers({
    theme,
    dialog,
    balance
  }));
