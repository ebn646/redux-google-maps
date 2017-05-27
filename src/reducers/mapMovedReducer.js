import { MAP_MOVED } from '../actions/types';

export default (state = [],action)=>{
switch(action.type){
  case MAP_MOVED:
    //console.log('MAP_MOVED: ',action.center)
		// let updated = Object.assign({}, state)
		// updated['venues'] = action.payload.data.response.venues
		// return updated
    return true;
}
  return state;
}
