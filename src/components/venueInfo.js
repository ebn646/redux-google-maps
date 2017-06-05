import React,{Component} from 'react';

class VenueInfo extends Component{
  render(){
    return(
      <div>{this.props.info.venue.name}</div>
    )
  }
}

export default VenueInfo
