import {ITEMS_FETCH_DATA_SUCCESS} from '../actions/types';

export default function(state='',action){
  switch (action.type) {
    case ITEMS_FETCH_DATA_SUCCESS:
      return action.venues.data.response.headerLocation;
    default:
      return state;
  }
}
