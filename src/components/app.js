import React, { Component } from 'react';
import Map from './map';
import List from './list';
 import { bindActionCreators } from 'redux';
 import { connect } from 'react-redux';
 import * as actions from '../actions';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      center:{
        lat: -25.363882,
        lng: 131.044922,
      },
    }
  }
  onListChanged(newState){
    console.log('list has changed', newState)
  }
  componentWillMount(){
    this.props.onFetchMarkers()
  }
  render() {
    return (
      <div ref="map">
      <Map
        {...this.props}
        markers={this.state.markers}
        center={this.state.center}/>
      <List
        {...this.props}
        markers={this.state.markers}/>
      </div>
    );
  }
}

function mapStateToProps(state){
   return{
     markers: state.markers
   }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch)
}

//export default App;

export default connect(mapStateToProps,mapDispatchToProps)(App);
