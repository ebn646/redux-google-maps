import React, {Component} from 'react';
import PropTypes from 'prop-types';
//import shouldPureComponentUpdate from 'react-pure-render/function';

import {greatPlaceStyle, greatPlaceStyleHover} from './place_styles.js';
require('./place.scss');

export default class MapMarker extends Component {
  static propTypes = {
    // GoogleMap pass $hover props to hovered components
    // to detect hover it uses internal mechanism, explained in x_distance_hover example
    $hover: PropTypes.bool,
    text: PropTypes.string
  };

  static defaultProps = {

  };

  //shouldComponentUpdate = shouldPureComponentUpdate;
  constructor(props){
    super(props);
    this.state=({
      selected: ''
    })
  }
  getMarkerStyle(){
    if(this.props.data.showInfo || this.props.$hover || this.props.data.isActive || this.state.selected){
        return greatPlaceStyleHover;
    }else{
        return greatPlaceStyle;
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.data.isActive){
      this.setSelected()
    }else{
      this.setUnSelected();
    }
  }
  setSelected(){
    this.setState({
      selected: 'selected'
    })
  }
  setUnSelected(){
    if(!this.props.isActive){
      this.setState({
        selected: ''
      })
    }
  }
  render() {
    const style = this.getMarkerStyle();

    return (
      <div
        className={"hint hint--html hint--info hint--top "}
        style={style}
        >
        <div>{this.props.text}</div>
        <div style={{width: '350px'}} className={"hint__content " + this.state.selected}>
            <div className="col-sm-8">
              <h6><span>{this.props.data.venue.name}</span></h6>
              {this.props.data.venue.categories[0].name}
              {this.props.data.venue.location.address}
             <span>, {this.props.data.venue.location.city}</span>
            </div>
        </div>
      </div>
    );
  }
}
