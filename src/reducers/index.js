import { combineReducers } from 'redux';
import markerClickReducer from './markerClickReducer';
import categoryReducer from './categoryChangeReducer';
import locationsReducer from './locationsReducer';
import mapMovedReducer from './mapMovedReducer';
import { Map } from 'immutable';

const rootReducer = combineReducers({
  activeMarker:markerClickReducer,
  venues: locationsReducer,
  category: categoryReducer,
});

export default rootReducer;
