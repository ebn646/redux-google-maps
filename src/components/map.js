import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { GoogleMapLoader, withGoogleMap, GoogleMap } from 'react-google-maps';
import GoogleMarker from './marker';
import GInfoWindow from './infowindow';

import * as actionCreators from '../actions'

const GoogleMapWrapper = withGoogleMap(props => (
  <GoogleMap
  defaultZoom={4}
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
     console.log('map componentWillUpdate',nextProps.activeMarker)
    // if(nextProps.activeMarker){
    //   console.log('YESSSS',nextProps.activeMarker)
    //   console.log(this.props.markers[0])
    //
    // }
  }
  handleMarkerClick(targetMarker){
     var clicked = this.props.onMarkerClicked(targetMarker)
     console.log('clicked=',clicked)
  }
  handleMarkerClose(targetMarker){

  }
  render() {
    return (
      <div>
        <GoogleMapWrapper
        {...this.props}
        containerElement={<div style={{ height: `600px`, width:`100%` }} />}
        mapElement={<div style={{ height: `600px`, width:`100%` }} />}
        center={this.props.center}
        google={google}
        markers={this.props.markers}
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
    activeMarker: state.activeMarker
  }
}

export default connect(mapStateToProps, actionCreators)(Map)
