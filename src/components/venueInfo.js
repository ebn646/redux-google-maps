import React,{Component} from 'react';

class VenueInfo extends Component{
  render(){
    return(
      <div>
          <span>{this.props.info.index + 1}. </span>
          <span>{this.props.info.venue.name}</span>
      </div>
    )
  }
}

export default VenueInfo
