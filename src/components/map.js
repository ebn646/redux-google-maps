import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { GoogleMapLoader, withGoogleMap, GoogleMap } from 'react-google-maps';
import GoogleMarker from './marker';
import GInfoWindow from './infowindow';

import * as actionCreators from '../actions'

const GoogleMapWrapper = withGoogleMap(props => (
  <GoogleMap
    ref={props.maploaded}
    defaultZoom={12}
    onDragEnd={props.mapmoved}
    center={props.center}>
  {props.markers.map((marker,index)=>(
      <GoogleMarker
        {...props}
        key={index}
        index={index}
        position={marker.position}>
    </GoogleMarker>
  ))}
 </GoogleMap>
));

class Map extends Component{
  constructor(props){
    super(props)
    this.state={markers:[]}
  }
  componentWillMount(){
    //this.props.onFetchMarkers();
  }
  componentWillUpdate(nextProps){
    if(nextProps.category !== this.props.category){
      console.log('componentWillUpdate')
      this.props.onFetchLocations(nextProps.category);
    }
  }
  handleMarkerClick(targetMarker){
     var clicked = this.props.onMarkerClicked(targetMarker)
     console.log('clicked=',clicked)
  }
  handleMarkerClose(targetMarker){

  }
  mapMoved(){
    console.log('mapMoved ',JSON.stringify(this.state.map.getCenter()));
  }
  mapLoaded(map){
    if(this.state.map != null){
      return;
    }else{
      this.setState({
        map: map
      })
    }
  }
  render() {
      console.log('rendered');
    return (
      <div>
        <GoogleMapWrapper
        {...this.props}
        containerElement={<div style={{ height: `600px`, width:`100%` }} />}
        mapElement={<div style={{ height: `600px`, width:`100%` }} />}
        center={this.props.center}
        mapmoved={this.mapMoved.bind(this)}
        maploaded={this.mapLoaded.bind(this)}
        google={google}
        markers={this.props.venues}
        onMarkerClick={this.handleMarkerClick.bind(this)}
        onMarkerClose={this.handleMarkerClose.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    markers: state.markers,
    activeMarker: state.activeMarker,
    category: state.category
  }
}

export default connect(mapStateToProps, actionCreators)(Map)
