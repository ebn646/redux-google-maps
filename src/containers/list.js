import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListItem from '../components/listitem';
import * as actions from '../actions';

class List extends Component{
  constructor(props){
    super(props);
  }
  handleMarkerClick(marker){
    this.props.onMarkerClicked(marker.props.index);
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
        <div>
          <p style={{padding:'10px 10px 0 10px'}}>Suggestions for <strong>{this.props.category}</strong> near <strong>Austin</strong></p>
          <ul className="col-md-4 list-group venue-list" style={{width:"100%",height:"800px", overflowY:"scroll"}}>{venues.map((venue,index)=>this.renderItem(venue,index))}</ul>
        </div>
      )
  }
}

function mapStateToProps(state){
  return{
    activeMarkerIndex: state.activeMarkerIndex,
    category: state.category,
    city: state.city
  }
}

export default connect(mapStateToProps, actions)(List)
