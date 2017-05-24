import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class DropDown extends Component{
  constructor(props){
    super(props);
  }
  onCategoryClicked(e){
    var category = e.target.getAttribute('data-value');
    this.props.onFetchLocations(category);
  }

  render(){
    return(
      <div className="dropdown">
      <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
      <span className="caret"></span></button>
      <ul className="dropdown-menu">
        <li data-value='food' onClick={this.onCategoryClicked.bind(this)}>Food</li>
        <li data-value='coffee' onClick={this.onCategoryClicked.bind(this)}>Coffee</li>
        <li data-value='breakfast' onClick={this.onCategoryClicked.bind(this)}>Breakfast</li>
      </ul>
    </div>
    )
  }
}

function mapStateToProps(state){
  return {
    markers: state.markers,
    activeMarker: state.activeMarker
  }
}

export default connect(mapStateToProps,actions)(DropDown);
