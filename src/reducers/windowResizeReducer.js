import {WINDOW_RESIZE} from '../actions/types';

export default function(state={},action){
  switch (action.type) {
    case WINDOW_RESIZE:
      console.log('window_resize reducer called')
      return state;
    default:
      return state;
  }

  return state;
}
