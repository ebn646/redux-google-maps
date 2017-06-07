import { MARKER_OVER, MARKER_OUT } from '../actions/types';

export default function(state='',action){
  switch (action.type) {
    case MARKER_OVER:
      return action.markerId;
      break;
      case MARKER_OUT:
        return -1;
        break;
    default:
      return state;
  }
}
