import { combineReducers } from 'redux';
import category from './categoryChangeReducer';
import {venues,itemsIsLoading,items} from './getLocationsReducer';
import city from './getCityReducer';
import latlng from './getLatLngReducer';

const rootReducer = combineReducers({
  venues,
  itemsIsLoading,
  category,
  city,
  latlng,
});

export default rootReducer;
