import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GoogleMap from 'google-map-react';
import VenueInfoWindow from '../components/venueInfo';
import MapMarker from '../components/mapMarker.js';
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
  renderMarker(marker,text,index){
      return <MapMarker
        data={marker}
        key={index}
        index={index}
        lat={marker.venue.location.lat}
        lng={marker.venue.location.lng}
        text={text}
      />
  }
  render() {
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
              >
              {Markers}
          </GoogleMap>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    venues: state.venues,
    onMarkerClicked: state.onMarkerClicked,
    activeMarkerIndex: state.activeMarkerIndex,
    category: state.category,
    mapMoved: state.mapMoved,
    latlng: state.latlng
  }
}

export default connect(mapStateToProps, actionCreators)(Map)
