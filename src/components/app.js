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
        lat: 41.878114,
        lng: -87.629798,
      },
    }
  }
  onListChanged(newState){
    console.log('list has changed', newState)
  }
  componentWillMount(){
    this.props.onFetchMarkers();
    this.props.onFetchLocations();
  }
  render() {
    console.log('app props',this.props)
    return (
      <div ref="map">
        <div style={{width:'50%',float:'left'}}>
        <Map
          {...this.props}
          center={this.state.center}/>
      </div>
      <div style={{width:'50%',float:'left'}}>
        <List
          {...this.props}/>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state){
   return{
     markers: state.markers,
     venues: state.venues
   }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch)
}

//export default App;

export default connect(mapStateToProps,mapDispatchToProps)(App);
