import React,{ Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

class GoogleMarker extends Component{
  constructor(props){
    super(props);
    this.state = { showInfo: false }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.activeMarker.props.index == this.props.index){
      console.log('am=',nextProps.activeMarker.props.index ,',', this.props.index)
      this.setState({showInfo:true})
      return true;
    }else{
      return false;
    }
  }
  // componentWillUpdate(nextProps){
  //   console.log('map componentWillUpdate with ',this.props)
  //   if(nextProps.activeMarker){
  //     console.log('YESSSS',nextProps.activeMarker)
  //   }
  // }

  render(){
    console.log('marker rendered')
      return(
        <Marker
        {...this.props}
        position={this.props.position}
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
            onCloseClick={() => props.onMarkerClose()}>
            <div>{this.props.markers[this.props.index].infoContent}{this.props.markers[this.props.index].name}</div>
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
