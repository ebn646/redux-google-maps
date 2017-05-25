import { CATEGORY_CHANGE } from '../actions/types';

export default function(state = '', action){
  switch (action.type) {
    case CATEGORY_CHANGE:
      console.log('new categroy is ',action.category )
      state = action.category
      return state;
    default:
      return state;
  }
}
