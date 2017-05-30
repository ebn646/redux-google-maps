//when and action comes across with the MARKER_CLICK
import{ MARKER_CLICK,CATEGORY_CHANGE } from '../actions/types';

var initialState = {
	activeMarkerIndex: null
}

export default function (state = initialState, action){
  switch (action.type) {
    case MARKER_CLICK:
      return {...state,...action.marker,...{index:action.marker.props.index}};
		case CATEGORY_CHANGE:
	      return {...state,...action.marker,...{index:-1}};
    default:
      return state;
  }
}
