import { CATEGORY_CHANGE } from '../actions/types';

var initialState = {
	category: 'Food',
}

export default function(state = initialState.category, action){
  switch (action.type) {
      case CATEGORY_CHANGE:
    	return {
				...state,
				food:action.payload.data.response.query,
				location:action.payload.data.response.query
			};
    default:
      return state;
  }
}
