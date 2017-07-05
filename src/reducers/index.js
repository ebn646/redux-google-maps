import { combineReducers } from 'redux';
import category from './categoryChangeReducer';
import {venues,itemsIsLoading,items} from './getLocationsReducer';
import city from './getCityReducer';

const rootReducer = combineReducers({
  venues,
  itemsIsLoading,
  category,
  city
});

export default rootReducer;
