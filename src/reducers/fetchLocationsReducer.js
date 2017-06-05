import { FETCH_LOCATIONS, CATEGORY_CHANGE, MAP_MOVED, MARKER_CLICK } from '../actions/types';

export default (state = [],action) => {
  switch(action.type){
    case FETCH_LOCATIONS:
      var markers = [...action.payload.data.response.groups[0].items];
      markers.forEach(function(marker,index){
        marker.showInfo = false;
        marker.index = index;
        marker.infoContent = marker.venue.name;
      })
      return markers;
    case CATEGORY_CHANGE:
      return[...action.payload.data.response.groups[0].items];
    case MAP_MOVED:
      return[...action.payload.data.response.groups[0].items];
    case MARKER_CLICK:
      return state.map(marker => {
        if(marker.index == action.markerId){
          return {
            ...marker,
            showInfo: true
          }
        }else if(marker.showInfo){
          return {
            ...marker,
            showInfo: false
          }
        }else{
          return marker;
        }
      });
    default:
      return state;
  }
}
