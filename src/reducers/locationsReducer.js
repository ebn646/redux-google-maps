import { FETCH_LOCATIONS, CATEGORY_CHANGE, MAP_MOVED } from '../actions/types';

export default (state = [],action)=>{
switch(action.type){
  case FETCH_LOCATIONS:
    // console.log('VENUES_RECEIVED: '+JSON.stringify(action.payload.data.response.venues))
		// let updated = Object.assign({}, state)
		// updated['venues'] = action.payload.data.response.venues
		// return updated
    return[...action.payload.data.response.groups[0].items];
  case CATEGORY_CHANGE:
    console.log('cat change called from location reducer')
    return action.category
  case MAP_MOVED:
    return[...action.payload.data.response.groups[0].items];
}
  return state;
}
