import { createStore, combineReducers} from 'redux';
import theme from './theme/reducer';

export default createStore(
  combineReducers({
    theme
  }));
