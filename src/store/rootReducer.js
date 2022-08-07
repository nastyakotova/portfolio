import { combineReducers } from 'redux';
import popupReducer from './popup/reducer';

export default combineReducers({
  popup: popupReducer,
});
