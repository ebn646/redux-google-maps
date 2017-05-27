import React from 'react';
import { MARKER_CLICK,FETCH_LOCATIONS,CATEGORY_CHANGE } from './types';
import axios from 'axios';

const ROOT_URL = 'https://api.foursquare.com/v2/venues/explore/'

export function onMarkerClicked(marker){
  return {
    type: MARKER_CLICK,
    marker: marker,
    payload:marker
  }
}

export function onFetchLocations(category){
    if(category == undefined)category = 'food';
    const query = category;
    const client_id = 'GBB4YOPWUQFP45PQ2REU2PW52QWRVQPOZ3UO4FFKVZQX0IYQ';
    const client_secret = 'K04HZR3IKONTN2ZJBJ5RMREPSSJYTYYHGPC0PP5EIHJPPLNM';
    const url = ROOT_URL
    +'?v=20131124'
    +'&near=austin'
    +'&query='
    +query
    +'&client_id='
    +client_id
    +'&client_secret='
    +client_secret
    +'&venuePhotos=1';

    const request = axios.get(url);

    return{
      type: FETCH_LOCATIONS,
      payload: request
    };
}

export function onCategoryChange(category){
  return{
    type: CATEGORY_CHANGE,
    category: category
  }
}
