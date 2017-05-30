import{ SET_MAP, MARKER_UNCLICK } from '../actions/types';

export default (state={},action)=>{
  switch (action.type) {
    case SET_MAP:
      return {...state,...action.map}
    default:
      return state;
  }
}
