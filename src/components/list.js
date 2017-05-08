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
  renderItem(venue,index){
      return(
        <ListItem
        {...this.props}
        key={index}
        index={index}
        onMarkerClick={this.handleMarkerClick.bind(this)}
        data={venue}/>
      )
  }
  render(){
    return(
      <ul className="col-md-4 list-group" style={{width:"100%",height:"600px", overflowY:"scroll"}}>{this.props.venues.map((venue,index)=>this.renderItem(venue,index))}</ul>
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
