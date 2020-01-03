import combinedReducer from './reducer';
import { createStore } from 'redux';

export default createStore(combinedReducer);
