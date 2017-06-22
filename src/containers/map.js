import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoogleMap from 'google-map-react';
import VenueInfoWindow from '../components/venueInfo';
import MyGreatPlace from '../components/place.js';
import * as actionCreators from '../actions';
require ('../../style/map.scss');

class Map extends Component{
  constructor(props){
    super(props)
    this.state={map:null,markers:[]}
  }
  componentDidMount(){
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  updateDimensions() {
    if(this.state.map == null){
      return
    }else{
      this.mapMoved();
    }
 }
  handleMarkerClick(targetMarker){
     var clicked = this.props.onMarkerClicked(targetMarker.index)
  }
  handleMarkerOver(targetMarker){
    console.log('markerOver')
    var over = this.props.onMarkerOver(targetMarker.index)
  }
  handleMarkerOut(targetMarker){
    console.log(targetMarker.isActive)
    if(!targetMarker.isActive){
        var out = this.props.onMarkerOut(targetMarker.index)
    }
  }
  handleMarkerClose(targetMarker){
    var clicked = this.props.onMarkerClicked(-1);
  }
  mapMoved(){
    console.log('the map has moved',this.state.map.controlledPropUpdaterMap)
    //this.state.map.center(this.state.map,this.state.map.getCenter())
    //this.props.onMapMoved(this.props.category,this.state.map.getCenter())
  }
  onResize(){
    console.log('the map has resized')
    //this.props.onMapMoved(this.props.category,this.state.map.getCenter())
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
  componentWillReceiveProps(nextProps){
    //console.log(this.props.activeMarkerIndex)
  }
  renderMarker(marker,index){
      return <MyGreatPlace
        data={marker}
        key={index}
        lat={marker.venue.location.lat}
        lng={marker.venue.location.lng}
        text={index}
      />
  }
  render() {
    const Markers = this.props.venues.map((marker,index) => this.renderMarker(marker,String(index+1)));
    return (
      <div id="mymap">
        <GoogleMap
              bootstrapURLKeys={'AIzaSyBYss9BmsiHcvpyOvRbxx3qbzAGe-s_5Sg'}
              center={this.props.center}
              zoom={this.props.zoom}>
              {Markers}
          </GoogleMap>
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
    latlng: state.latlng
  }
}

export default connect(mapStateToProps, actionCreators)(Map)
