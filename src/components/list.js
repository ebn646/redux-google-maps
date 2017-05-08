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
  renderItem(venue){
      return(
        <ListItem
        {...this.props}
        key={venue.id}
        index={venue.id}
        onMarkerClick={this.handleMarkerClick.bind(this)}
        data={venue}/>
      )
  }
  render(){
    return(
      <ul className="col-md-4 list-group">{this.props.venues.map((venue,index)=>this.renderItem(venue))}</ul>
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
