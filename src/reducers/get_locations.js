import { FETCH_LOCATIONS } from '../actions/types';

export default function(state=[],action){
switch(action.type){
  case FETCH_LOCATIONS:
    return[...state, ...action.payload.data.response.venues];
}
  return state;
}
