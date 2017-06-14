import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from '../components/listitem';
import * as actions from '../actions';
require('../../style/list.scss');

class List extends Component{
  constructor(props){
    super(props);
  }
  handleMarkerClick(marker){
    var clicked = this.props.onMarkerClicked(marker.props.index);
  }
  handleMarkerOver(markerId){
    var active = this.props.onMarkerOver(markerId);
  }
  handleMarkerOut(){
    var out = this.props.onMarkerOut('');
  }
  renderItem(venue,index){
      return(
        <ListItem
        {...this.props}
        key={index}
        index={index}
        isActive={false}
        onMarkerClick={this.handleMarkerClick.bind(this)}
        onMarkerOver={this.handleMarkerOver.bind(this)}
        onMarkerOut={this.handleMarkerOut.bind(this)}
        data={venue}/>
      )
  }
  render(){
    const venues = this.props.venues || [];
      return(
        <div style={{height:'100vh'}}>
          <p style={{padding:'10px 10px 10px 30px'}}>Suggestions for <strong>{this.props.category}</strong> near <strong>{this.props.location}</strong></p>
          <ul className="col-md-4 list-group venue-list" style={{width:"100%",height:"calc(100vh - 100px)", overflowY:"scroll"}}>{venues.map((venue,index)=>this.renderItem(venue,index))}</ul>
        </div>
      )
  }
}

function mapStateToProps(state){
  return{
    activeMarkerIndex: state.activeMarkerIndex,
    category: state.category,
    location:state.location,
  }
}

export default connect(mapStateToProps, actions)(List)
