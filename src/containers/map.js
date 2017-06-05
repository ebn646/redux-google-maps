import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { GoogleMapLoader, withGoogleMap, GoogleMap, Marker , InfoWindow} from 'react-google-maps';
//import GoogleMarker from '../components/marker';
//import Venue from '../components/venue';
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
  {props.venues.map((marker,index)=>(
    <Marker
      {...props}
      key={index}
      index={index}
      position={new google.maps.LatLng(marker.venue.location.lat, marker.venue.location.lng)}
      onClick={() => props.onMarkerClick(marker)}
      showInfo={false}>
      {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <div>{marker.infoContent}</div>
          </InfoWindow>
        )}
    </Marker>
  ))}
 </GoogleMap>
));

class Map extends Component{
  constructor(props){
    super(props)
    this.state={map:null,markers:[]}
  }
  addMarker(venue){
    console.log('fuck')
  }
  handleMarkerClick(targetMarker){
    //console.log(targetMarker.index,'i was clicked')
     var clicked = this.props.onMarkerClicked(targetMarker.index)
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
    return (
      <div>
        <GoogleMapWrapper
        {...this.props}
        containerElement={<div style={{ height: `850px`, width:`100%` }} />}
        mapElement={<div style={{ height: `100%`, width:`100%` }} />}
        center={this.props.center}
        mapmoved={this.mapMoved.bind(this)}
        maploaded={this.mapLoaded.bind(this)}
        google={google}
        venues={this.props.venues || []}
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
    mapMoved: state.mapMoved,
  }
}

export default connect(mapStateToProps, actionCreators)(Map)
