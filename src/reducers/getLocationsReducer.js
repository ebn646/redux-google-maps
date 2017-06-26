import { FETCH_LOCATIONS, CATEGORY_CHANGE, MARKER_CLICK, MARKER_OVER, MARKER_OUT,LOCATION_CHANGE } from '../actions/types';

export default (state = [],action) => {
  switch(action.type){
    case FETCH_LOCATIONS:
      var markers = [...action.payload.data.response.groups[0].items];
      return markers.map((marker,index)=>{
        return{
          ...marker,
          showInfo:false,
          index:index,
          isActive:false
        }
      });
      case LOCATION_CHANGE:
        var markers = [...action.payload.data.response.groups[0].items];
        return markers.map((marker,index)=>{
          return{
            ...marker,
            showInfo:false,
            index:index,
            isActive:false
          }
        });
    case CATEGORY_CHANGE:
      return[...action.payload.data.response.groups[0].items];
    case MARKER_CLICK:
      return state.map(marker => {
        if(marker.index == action.markerId){
          return {
            ...marker,
            showInfo: true,
            isActive: true
          }
        }else if(marker.showInfo){
          return {
            ...marker,
            showInfo: false,
            isActive: false
          }
        }else{
          return marker;
        }
      });
      case MARKER_OVER:
        return state.map(marker => {
          if(marker.index == action.markerId){
            return {
              ...marker,
              showInfo: true,
              isActive: false
            }
          }
          else if(!marker.isActive){
            return {
              ...marker,
              showInfo: false,
              isActive: false
            }
          }
          else{
            return marker;
          }
        });
        case MARKER_OUT:
          return state.map(marker => {
            if(marker.isActive){
              return marker;
            }
            return {
              ...marker,
              showInfo: false,
              isActive: false
            }
          });
    default:
      return state;
  }
}