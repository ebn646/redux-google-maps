import { combineReducers } from 'redux';
import categoryReducer from './categoryChangeReducer';
import fetchMarkersReducer from './fetchMarkersReducer';
import getCityReducer from './getCityReducer';
import getLatLngReducer from './getLatLngReducer';
import activeMarkerIndexReducer from './activeMarkerIndexReducer';
import windowResizeReducer from './windowResizeReducer';

const rootReducer = combineReducers({
  activeMarkerIndex: activeMarkerIndexReducer,
  venues: fetchMarkersReducer,
  category: categoryReducer,
  location: getCityReducer,
  latlng: getLatLngReducer,
  mapCenter: windowResizeReducer
});

export default rootReducer;
