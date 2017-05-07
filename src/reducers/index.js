import { combineReducers } from 'redux';
import markerClickReducer from './markerClick';
import loadMarkerReducer from './loadMarkers';
import { Map } from 'immutable';

const rootReducer = combineReducers({
  activeMarker:markerClickReducer,
  markers: loadMarkerReducer
});

export default rootReducer;
