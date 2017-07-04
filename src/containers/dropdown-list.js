import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class DropDown extends Component{
  constructor(props){
    super(props);
  }
  onCategoryClicked(e){
    var category = e.target.getAttribute('data-value');
    this.props.onChangeCatetory(category);
  }

  render(){
    return(
      <div className="dropdown">
      <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
        <span>  I am looking for...</span>
        <span className="caret"></span>
      </button>
      <ul className="dropdown-menu">
        <li data-value='Food' onClick={this.onCategoryClicked.bind(this)}>Food</li>
        <li data-value='Coffee' onClick={this.onCategoryClicked.bind(this)}>Coffee</li>
        <li data-value='Breakfast' onClick={this.onCategoryClicked.bind(this)}>Breakfast</li>
      </ul>
    </div>
    )
  }
}

function mapStateToProps(state){
  return {
    category: state.category,
    activeMarkerIndex: state.activeMarkerIndex,
  }
}

export default connect(mapStateToProps,actions)(DropDown);
