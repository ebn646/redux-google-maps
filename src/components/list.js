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
      console.log('list componentDidUpdate',this.props)
  }
  componentWillUpdate(nextProps){
    if(nextProps.category !== this.props.category){
      console.log('LIST COMPONENT ',nextProps.category)
      //this.props.onFetchLocations(nextProps.category);
      return true;
    }
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
    return(
      <ul className="col-md-4 list-group venue-list" style={{width:"100%",height:"600px", overflowY:"scroll"}}>{this.props.venues.map((venue,index)=>this.renderItem(venue,index))}</ul>
    )
  }
}

function mapStateToProps(state){
  return{
    venues: state.venues,
    activeMarker: state.activeMarker,
    category: state.category
  }
}

export default connect(mapStateToProps, actions)(List)
