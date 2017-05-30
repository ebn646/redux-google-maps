import { CATEGORY_CHANGE } from '../actions/types';

export default function(state = '', action){
  switch (action.type) {
    case CATEGORY_CHANGE:
  	return action.payload.data.response.query;

    default:
      return state;
  }
}
