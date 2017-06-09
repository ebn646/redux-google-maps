import {LOCATION_CHANGE,LATLNG_CHANGE} from '../actions/types'

export default function(state='',action){
  switch (action.type) {
    case LATLNG_CHANGE:
    console.log('latlng_changed',action.obj)
      return action.obj
    default:
      return state;
  }
}
