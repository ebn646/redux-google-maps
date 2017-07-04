import React from 'react';
import { MARKER_CLICK,MARKER_OVER,MARKER_OUT,FETCH_LOCATIONS,CATEGORY_CHANGE,MAP_MOVED,LOCATION_CHANGE,LATLNG_CHANGE,ITEMS_IS_LOADING,ITEMS_FETCH_DATA_SUCCESS } from './types';
import axios from 'axios';

const ROOT_URL = 'https://api.foursquare.com/v2/venues/explore/?v=20131124';
const id = 'GBB4YOPWUQFP45PQ2REU2PW52QWRVQPOZ3UO4FFKVZQX0IYQ';
const secret = 'K04HZR3IKONTN2ZJBJ5RMREPSSJYTYYHGPC0PP5EIHJPPLNM'

export function onMarkerClicked(markerId){
  return {
    type: MARKER_CLICK,
    markerId
  }
}

export function onMarkerOver(markerId){
  return {
    type: MARKER_OVER,
    markerId
  }
}

export function onMarkerOut(markerId){
  return {
    type: MARKER_OUT,
    markerId: markerId
  }
}

export function itemsIsLoading(bool) {
    return {
        type: ITEMS_IS_LOADING,
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(type,venues){
  return{
    type: type,
    venues
  }
}

export function onGetLocations(category,zip){
    if(category == undefined)category = 'food';
    if(zip == undefined)var zip = {lat:'40.722938',lng:'-74.007821'};
    const request = axios;
    const query = category;
    const url = ROOT_URL
    +'&ll='
    +zip.lat.toString()+','+zip.lng.toString()
    +'&query='
    +query
    +'&client_id='
    +id
    +'&client_secret='
    +secret
    +'&venuePhotos=1';

     return (dispatch) => {
       dispatch(itemsIsLoading(true));
       axios.get(url)
       .then((response)=>{
         dispatch(itemsFetchDataSuccess(ITEMS_FETCH_DATA_SUCCESS,response))
       });
     }
}

export function onChangeCatetory(category){
  return{
    type: CATEGORY_CHANGE,
    category
  }
}

export function onLatLngChange(obj){
  return {
    type: LATLNG_CHANGE,
    obj
  }
}
