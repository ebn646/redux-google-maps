import { combineReducers } from 'redux';
import categoryReducer from './categoryChangeReducer';
import fetchLocationsReducer from './fetchLocationsReducer';
import getCityReducer from './getCityReducer';
import getLatLngReducer from './getLatLngReducer';
import activeMarkerIndexReducer from './activeMarkerIndexReducer'
import { Map } from 'immutable';

const rootReducer = combineReducers({
  activeMarkerIndex: activeMarkerIndexReducer,
  venues: fetchLocationsReducer,
  category: categoryReducer,
  location: getCityReducer,
  latlng: getLatLngReducer
});

export default rootReducer;
