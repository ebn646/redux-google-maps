import { CATEGORY_CHANGE } from '../actions/types';

var initialState = {
	category: 'Food',
}

export default function(state = initialState.category, action){
  switch (action.type) {
      case CATEGORY_CHANGE:
    	return action.category;
    default:
      return state;
  }
}
