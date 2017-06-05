import { combineReducers } from 'redux';
import categoryReducer from './categoryChangeReducer';
import fetchLocationsReducer from './fetchLocationsReducer';
import getCityReducer from './getCityReducer';
import { Map } from 'immutable';

const rootReducer = combineReducers({
  venues: fetchLocationsReducer,
  category: categoryReducer,
  city: getCityReducer
});

export default rootReducer;
