import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { GoogleMapLoader, withGoogleMap, GoogleMap, Marker , InfoWindow} from 'react-google-maps';
import VenueInfo from '../components/venueInfo'
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
      onMouseOver={() => props.onMarkerOver(marker)}
      onMouseOut={() => props.onMarkerOut(marker)}
      isActive={false}
      showInfo={false}>
      {marker.showInfo && (
          <InfoWindow onCloseClick={() => props.onMarkerClose(marker)}>
            <VenueInfo info={marker}/>
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
  handleMarkerClick(targetMarker){
    //console.log(targetMarker.index,'i was clicked')
     var clicked = this.props.onMarkerClicked(targetMarker.index)
  }
  handleMarkerOver(targetMarker){
    //console.log('handleMarkerOver')
    var over = this.props.onMarkerOver(targetMarker.index)
  }
  handleMarkerOut(targetMarker){
    //console.log('handleMarkerOut')
    var out = this.props.onMarkerOut(targetMarker.index)
  }
  handleMarkerClose(targetMarker){
    console.log('handleMarkerOver')
  }
  componentWillUpdate(nextProps){
    if(nextProps.category != this.props.category){
      this.props.onMapMoved(this.props.category,this.state.map.getCenter())
    }
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
        onMarkerOver={this.handleMarkerOver.bind(this)}
        onMarkerOut={this.handleMarkerOut.bind(this)}
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
