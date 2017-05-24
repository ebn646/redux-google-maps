import { combineReducers } from 'redux';
import markerClickReducer from './markerClick';
import loadMarkerReducer from './loadMarkers';
import categoryReducer from './categoryChange';
import LocatonsReducer from './get_locations';
import { Map } from 'immutable';

const rootReducer = combineReducers({
  activeMarker:markerClickReducer,
  markers: loadMarkerReducer,
  venues: LocatonsReducer,
  category: categoryReducer
});

export default rootReducer;
