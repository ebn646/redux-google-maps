import React, { Component } from 'react';
import Map from './map';
import List from './list';
import DropDown from './dropdown-list';
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
  componentWillMount(){
    this.props.onFetchLocations();
  }
  componentWillUpdate(nextProps){
    if(nextProps.category !== this.props.category){
      this.props.onFetchLocations(nextProps.category);
    }
  }
  render() {
    return (
      <div>
        <div className="page-header" style={{textAlign:'center'}}>
          <h2><small>React Google Map with redux and foursquare</small></h2>
        </div>
        <div style={{width:'35%',float:'left'}}>
          <DropDown
            {...this.props}/>
          <List
            {...this.props}/>
        </div>
        <div style={{width:'65%',float:'left'}}>
          <Map
            {...this.props}
            center={this.state.center}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
   return{
     venues: state.venues,
     category: state.category
   }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
