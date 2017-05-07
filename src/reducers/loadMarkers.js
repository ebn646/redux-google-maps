import { FETCH_MARKERS } from '../actions/types';

export default function(state = [], action){
  switch (action.type) {
    case FETCH_MARKERS:
    //console.log(...action.payload )
      return [...state, ...action.payload ]
    default:
      return state;
  }
}
