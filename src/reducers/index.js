import { combineReducers } from 'redux';
import markerClickReducer from './markerClickReducer';
import categoryReducer from './categoryChangeReducer';
import fetchLocationsReducer from './fetchLocationsReducer';
import getCityReducer from './getCityReducer';
import { Map } from 'immutable';

const rootReducer = combineReducers({
  activeMarkerIndex: markerClickReducer,
  venues: fetchLocationsReducer,
  category: categoryReducer,
  city: getCityReducer
});

export default rootReducer;
