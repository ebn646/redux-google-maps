import React,{ Component } from 'react';
import { InfoWindow } from 'react-google-maps';

class GInfoWindow extends Component{
  constructor(props){
    super(props);
    //console.log(props)
  }
  render(){
    return(
      <div>I am an info window!!!</div>
    )
  }
}

export default GInfoWindow;
