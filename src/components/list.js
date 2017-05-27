import React, { Component } from 'react';
import {connect} from 'react-redux';
import ListItem from './listitem';
import * as actions from '../actions';

class List extends Component{
  constructor(props){
    super(props);
  }
  componentWillUpdate(nextProps){
    // if(nextProps.category !== this.props.category){
    //   //this.props.onFetchLocations(nextProps.category);
    //   return true;
    // }else{
      return false;
    //}
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
    const venues = this.props.venues || [];
    //if(venues.length >= 30){
      return(
        <ul className="col-md-4 list-group venue-list" style={{width:"100%",height:"800px", overflowY:"scroll"}}>{venues.map((venue,index)=>this.renderItem(venue,index))}</ul>
      )
    //}else{
      //return <div></div>;
    //}
  }
}

function mapStateToProps(state){
  return{
    activeMarker: state.activeMarker,
    category: state.category
  }
}

export default connect(mapStateToProps, actions)(List)
