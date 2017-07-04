import { FETCH_LOCATIONS, CATEGORY_CHANGE, MARKER_CLICK, MARKER_OVER, MARKER_OUT,ITEMS_FETCH_DATA_SUCCESS,ITEMS_IS_LOADING } from '../actions/types';

export function itemsIsLoading(state = false, action) {
    switch (action.type) {
        case ITEMS_IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export function venues(state = [],action){
  switch(action.type){
    case ITEMS_FETCH_DATA_SUCCESS:
      var markers = action.venues.data.response.groups[0].items;
      return markers.map((marker,index)=>{
        return{
          ...marker,
          showInfo:false,
          index:index,
          isActive:false
        }
      });
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
              showInfo: true
            }
          }
          else if(!marker.isActive){
            return {
              ...marker,
              showInfo: false
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
