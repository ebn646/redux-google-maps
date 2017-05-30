import React,{ Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

class GoogleMarker extends Component{
  constructor(props){
    super(props);
    this.state = { showInfo: false }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.activeMarker.index < 0){
      this.setState({showInfo:false});
      return;
    }
    else if(nextProps.activeMarker.props && nextProps.activeMarker.index == this.props.index){
      this.setState({showInfo:true});
    }
    else if(this.state.showInfo && nextProps.activeMarker.props && nextProps.activeMarker.props.index != this.props.index){
      this.setState({showInfo:false});
    }
    return false;
  }
  _onMouseEnterContent(){
    this.setState({showInfo:true});
  }
  _onMouseLeaveContent(){
    if(this.props.activeMarker.props == undefined || this.props.activeMarker.props.index != this.props.index){
      this.setState({showInfo:false});
    }
  }
  getPosition(){
    return(
       new google.maps.LatLng(this.props.venues[this.props.index].venue.location.lat, this.props.venues[this.props.index].venue.location.lng)
     )
  }
  render(){
      return(
        <Marker
        {...this.props}
        position={this.getPosition()}
        content={this.props.infoContent}
        onMouseOver={()=>this._onMouseEnterContent()}
        onMouseOut={()=>this._onMouseLeaveContent()}
        onClick={() => this.props.onMarkerClick(this)}>
        {
          /*
          Show info window only if the 'showInfo' key of the marker is true.
          That is, when the Marker pin has been clicked and 'onCloseClick' has been
          Successfully fired.
          */
        }
        {this.state.showInfo && (
          <InfoWindow
            {...this.props}
            onCloseClick={() => this.props.onMarkerClose()}>
            <div className="row">
              <img className="col-sm-3" src={this.props.venues[this.props.index].venue.featuredPhotos.items[0].prefix +'100x100' + this.props.venues[this.props.index].venue.featuredPhotos.items[0].suffix} />
              <div className="col-sm-9">
                <a href={this.props.venues[this.props.index].venue.url} target="_blank">
                  <span>{this.props.index+1}.</span>
                  {this.props.venues[this.props.index].venue.name}
                </a>
              </div>
              <small>{this.props.venues[this.props.index].venue.location.address}</small>
            </div>
          </InfoWindow>
        )}
      </Marker>
      )
  }
}
function mapStateToProps(state){
  return {
    markers: state.markers,
    activeMarkerIndex: state.activeMarkerIndex,
    category: state.category,
    mapMoved: state.mapMoved
  }
}

export default GoogleMarker;
