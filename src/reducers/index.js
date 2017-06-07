import { combineReducers } from 'redux';
import categoryReducer from './categoryChangeReducer';
import fetchLocationsReducer from './fetchLocationsReducer';
import getCityReducer from './getCityReducer';
import activeMarkerIndexReducer from './activeMarkerIndexReducer'
import { Map } from 'immutable';

const rootReducer = combineReducers({
  activeMarkerIndex: activeMarkerIndexReducer,
  venues: fetchLocationsReducer,
  category: categoryReducer,
  city: getCityReducer
});

export default rootReducer;
