import {LOCATION_CHANGE,LATLNG_CHANGE} from '../actions/types'

export default function(state='',action){
  switch (action.type) {
    case LOCATION_CHANGE:
      console.log('zipcode_changed',action.payload.data.response.headerLocation)
      return action.payload.data.response.headerLocation;
    default:
      return state;
  }
}
