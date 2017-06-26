import { combineReducers } from 'redux';
import category from './categoryChangeReducer';
import venues from './getLocationsReducer';
import city from './getCityReducer';
import latlng from './getLatLngReducer';

const rootReducer = combineReducers({
  venues,
  category,
  city,
  latlng,
});

export default rootReducer;
