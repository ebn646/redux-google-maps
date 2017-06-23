import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Map from './map';
import List from './list';
import Header from '../components/header';
import Footer from '../components/footer';
import DropDown from './dropdown-list';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
require('../../style/main.scss');

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      center:{
        lat: 40.722938,
        lng: -74.007821,
      },
      zoom:16
    }
  }
  componentWillMount(){
    this.props.onFetchLocations();
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.category !== this.props.category){
      this.props.onFetchLocations(nextProps.category);
    }
    if(nextProps.latlng !== this.props.latlng){
      this.setState({
        center:{
          lat: nextProps.latlng.lat,
          lng: nextProps.latlng.lng,
        },
      })
    }
  }
  render() {
    return (
      <div className="app" style={{background:'#f5f5f5'}}>
        <div className="row" >
          <Header
            {...this.props}/>
        </div>
        <div className="row main-container" >
          <div className="map-holder" className="col-md-8 col-md-push-4 no-padd">
            <Map
              {...this.props}
              zoom={this.state.zoom}
              center={this.state.center}/>
          </div>
          <div className="list-holder" className="col-md-4 col-md-pull-8 no-padd">
            <List
              {...this.props}/>
          </div>
        </div>
        <div className="row footer" >
          <Footer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
   return{
     venues: state.venues,
     category: state.category,
     latlng: state.latlng
   }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
