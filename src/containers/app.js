import React, { Component } from 'react';
import Map from './map';
import List from './list';
import Header from '../components/header';
import Footer from '../components/footer';
import DropDown from './dropdown-list';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      center:{
        lat: 30.26715,
        lng: -97.74306,
      },
    }
  }
  componentWillMount(){
    this.props.onFetchLocations();
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.category !== this.props.category){
      this.props.onFetchLocations(nextProps.category);
      return true;
    }else{
      return false;
    }
  }
  render() {
    return (
      <div>
        <Header
          {...this.props}/>
        <div style={{width:'35%',float:'left'}}>
          <List
            {...this.props}/>
        </div>
        <div style={{width:'65%',float:'left'}}>
          <Map
            {...this.props}
            center={this.state.center}/>
        </div>
        <Footer />
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
