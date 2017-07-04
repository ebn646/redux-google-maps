import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoogleMap from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';
import MapMarker from '../components/mapMarker';
import * as actionCreators from '../actions';

const mapstyle={

}

class Map extends Component{
  constructor(props){
    super(props)
    this.state={map:null,markers:[]}
  }
  componentDidMount = () => {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  componentWillUpdate(){
    var map = this.refs.googleMap.map_;
    if(map){
    var maps = this.refs.googleMap.maps_;
    var bounds = new maps.LatLngBounds();
     this.props.venues.forEach((venue) => {
       var latLng = new maps.LatLng(venue.venue.location.lat, venue.venue.location.lng);
       bounds.extend(latLng);
     });
     map.fitBounds(bounds);
    }
  }
  updateDimensions() {
    if(this.state.map == null){
      return
    }else{
      this.mapMoved();
    }
 }
  _onChildClick = (key, childProps) => {
    const markerId = childProps.index;
    const clicked = this.props.onMarkerClicked(markerId)
  }
  _onChildMouseEnter = (key, childProps)=>{
    const markerId = childProps.index;
    const over = this.props.onMarkerOver(markerId)
  }
  _onChildMouseLeave = (key, childProps)=>{
    const markerId = childProps.index;
    const out = this.props.onMarkerOut(markerId)
  }
  _onBoundsChange = (center, zoom, bounds, marginBounds) => {
    console.log('_onBoundsChange')
  }
  handleMarkerClose = (targetMarker) => {
    var clicked = this.props.onMarkerClicked(-1);
  }
  mapMoved = () => {
    console.log('the map has moved',this.state.map.controlledPropUpdaterMap)
    //this.state.map.center(this.state.map,this.state.map.getCenter())
    //this.props.onMapMoved(this.props.category,this.state.map.getCenter())
  }
  onResize = () => {
    console.log('the map has resized')
    //this.props.onMapMoved(this.props.category,this.state.map.getCenter())
  }
  componentWillReceiveProps = (nextProps) => {
    //console.log(this.props.activeMarkerIndex)
  }
  renderMarker = (marker,text,index) => {
      return <MapMarker
        data={marker}
        key={index}
        index={index}
        lat={marker.venue.location.lat}
        lng={marker.venue.location.lng}
        text={text}
      />
  }
  render = ()=> {
    const Markers = this.props.venues.map((marker,index) => this.renderMarker(marker,String(index+1),index));
    return (
      <div id="mymap">
        <GoogleMap
              bootstrapURLKeys={'AIzaSyBYss9BmsiHcvpyOvRbxx3qbzAGe-s_5Sg'}
              center={this.props.center}
              zoom={this.props.zoom}
              onChildClick={this._onChildClick}
              onChildMouseEnter={this._onChildMouseEnter}
              onChildMouseLeave={this._onChildMouseLeave}
              onBoundsChange={this._onBoundsChange}
              ref="googleMap">
              {Markers}
          </GoogleMap>
      </div>
    );
  }
}
function mapStateToProps({venues,onMarkerClicked,latlng}){
  return {
    venues,
    onMarkerClicked,
    latlng
  }
}

export default connect(mapStateToProps, actionCreators)(Map)
