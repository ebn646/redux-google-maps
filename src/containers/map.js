import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { GoogleMapLoader, withGoogleMap, GoogleMap } from 'react-google-maps';
import GoogleMarker from '../components/marker';
//import GInfoWindow from './infowindow';
import * as actionCreators from '../actions'

const GoogleMapWrapper = withGoogleMap(props => (
  <GoogleMap
    defaultOptions={{
      scrollwheel: false,
      mapTypeId: 'roadmap',
      mapTypeControl: false,
      streetViewControl: false,
      styles:[
        {
          featureType: 'poi',
          stylers: [{visibility: 'off'}]
        },
        {
          featureType: 'transit',
          elementType: 'labels.icon',
          stylers: [{visibility: 'off'}]
        },
      ]
    }}
    ref={props.maploaded}
    defaultZoom={17}
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
    this.state={map:null,markers:[]}
  }
  handleMarkerClick(targetMarker){
     var clicked = this.props.onMarkerClicked(targetMarker)
  }
  componentWillUpdate(nextProps){
    if(nextProps.category != this.props.category){
      this.props.onMapMoved(this.props.category,this.state.map.getCenter())
    }
  }

  handleMarkerClose(targetMarker){

  }
  mapMoved(){
    this.props.onMapMoved(this.props.category,this.state.map.getCenter())
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
    //console.log('render map')
    return (
      <div>
        <GoogleMapWrapper
        {...this.props}
        containerElement={<div style={{ height: `800px`, width:`100%` }} />}
        mapElement={<div style={{ height: `100%`, width:`100%` }} />}
        center={this.props.center}
        mapmoved={this.mapMoved.bind(this)}
        maploaded={this.mapLoaded.bind(this)}
        google={google}
        markers={this.props.venues || []}
        onMarkerClick={this.handleMarkerClick.bind(this)}
        onMarkerClose={this.handleMarkerClose.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    venues: state.venues,
    activeMarkerIndex: state.activeMarkerIndex,
    category: state.category,
    mapMoved: state.mapMoved
  }
}

export default connect(mapStateToProps, actionCreators)(Map)
