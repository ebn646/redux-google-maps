import React, { Component } from 'react';
import {connect} from 'react-redux';
import ListItem from './listitem';
import * as actions from '../actions';

class List extends Component{
  constructor(props){
    super(props);
  }
  componentWillMount(){

  }
  componentDidUpdate(){
      //console.log('list componentDidUpdate',this.props.activeMarker)
  }
  handleMarkerClick(marker){
    this.props.onMarkerClicked(marker);
  }
  renderMarker(marker){
    return(
      <ListItem
      {...this.props}
      key={marker.id}
      index={marker.id}
      onMarkerClick={this.handleMarkerClick.bind(this)}
      data={marker}/>
    )
  }
  render(){
    return(
      <ul className="col-md-4 list-group">{this.props.markers.map(this.renderMarker.bind(this))}</ul>
    )
  }
}

function mapStateToProps(state){
  return{
    markers: state.markers,
    activeMarker: state.activeMarker
  }
}

export default connect(mapStateToProps, actions)(List)
