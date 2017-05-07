//when and action comes across with the MARKER_CLICK
import{ MARKER_CLICK } from '../actions/types';
import GoogleMarker from '../components/marker'

export default function (state = {}, action){
  switch (action.type) {
    case MARKER_CLICK:
      return {...state,...action.payload,...{showInfo:true}};
    default:
      return state;
  }
}
