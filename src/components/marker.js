import React,{ Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

class GoogleMarker extends Component{
  constructor(props){
    super(props);
    this.state = { showInfo: false }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.activeMarker.props && nextProps.activeMarker.props.index == this.props.index){
      this.setState({showInfo:true});
      return true;
    }else if(this.state.showInfo && nextProps.activeMarker.props && nextProps.activeMarker.props.index != this.props.index){
      this.setState({showInfo:false});
      return true;
    }else{
      return false;
    }
  }
  getPosition(){
    return(
       new google.maps.LatLng(this.props.venues[this.props.index].location.lat, this.props.venues[this.props.index].location.lng)
     )
  }

  render(){
      return(
        <Marker
        {...this.props}
        position={this.getPosition()}
        content={this.props.infoContent}
        onClick={() => this.props.onMarkerClick(this)}>
        {/*
          Show info window only if the 'showInfo' key of the marker is true.
          That is, when the Marker pin has been clicked and 'onCloseClick' has been
          Successfully fired.
        */}
        {this.state.showInfo && (
          <InfoWindow
            {...this.props}
            onCloseClick={() => this.props.onMarkerClose()}>
            <div>{this.props.venues[this.props.index].name}{this.props.venues[this.props.index].location.address}</div>
          </InfoWindow>
        )}
      </Marker>
      )
  }
}

function mapStateToProps(state){
  return {
    markers: state.markers,
    activeMarker: state.activeMarker
  }
}

export default GoogleMarker;
