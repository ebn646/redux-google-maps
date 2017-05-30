import {GET_CITY} from '../actions/types'

export default function(state='',action){
  switch (action.type) {
    case GET_CITY:
      return action.payload.data.response.headerLocation;
    default:
      return state;
  }
}
