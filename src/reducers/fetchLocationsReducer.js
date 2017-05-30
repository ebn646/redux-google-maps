import { FETCH_LOCATIONS, CATEGORY_CHANGE, MAP_MOVED } from '../actions/types';

export default (state = [],action)=>{
  switch(action.type){
    case FETCH_LOCATIONS:
      return[...action.payload.data.response.groups[0].items];
    case CATEGORY_CHANGE:
      return[...action.payload.data.response.groups[0].items];
    case MAP_MOVED:
      return[...action.payload.data.response.groups[0].items];
  }
  return state;
}
