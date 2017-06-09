import { combineReducers } from 'redux';
import categoryReducer from './categoryChangeReducer';
import fetchLocationsReducer from './fetchLocationsReducer';
import getCityReducer from './getCityReducer';
import getZipcodeReducer from './getZipcodeReducer';
import getLatLngReducer from './getLatLngReducer';
import activeMarkerIndexReducer from './activeMarkerIndexReducer'
import { Map } from 'immutable';

const rootReducer = combineReducers({
  activeMarkerIndex: activeMarkerIndexReducer,
  venues: fetchLocationsReducer,
  category: categoryReducer,
  city: getCityReducer,
  location: getZipcodeReducer,
  latlng: getLatLngReducer
});

export default rootReducer;
