import { FETCH_LOCATIONS } from '../actions/types';

export default (state = [],action)=>{
switch(action.type){
  case FETCH_LOCATIONS:
    // console.log('VENUES_RECEIVED: '+JSON.stringify(action.payload.data.response.venues))
		// let updated = Object.assign({}, state)
		// updated['venues'] = action.payload.data.response.venues
		// return updated
    return[...action.payload.data.response.venues];
}
  return state;
}
