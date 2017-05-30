import { CATEGORY_CHANGE } from '../actions/types';

var initialState = {
	category: 'food'
}

export default function(state = 'food', action){
  switch (action.type) {
      case CATEGORY_CHANGE:
    	return action.payload.data.response.query;
    default:
      return state;
  }
}
