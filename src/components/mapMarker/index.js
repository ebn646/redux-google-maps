import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {greatPlaceStyle, greatPlaceStyleHover} from '../place_styles.js';
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
      this.setState({
        selected: 'selected'
      })
    }else{
      if(!this.props.isActive){
        this.setState({
          selected: ''
        })
      }
    }
  }

  _onCloseClick = () => {
    if (this.props.onCloseClick) {
      this.props.onCloseClick();
    }
  }

  render() {
    const style = this.getMarkerStyle();

    return (
      <div
        className={"hint hint--html hint--info hint--top " + this.state.selected}
        style={style}>
        <div>{this.props.text}</div>
        <div style={{width: '300px'}} className={"hint__content"}>
            <div className="col-sm-12">
              <h6><span>{this.props.data.venue.name}</span></h6>
              {this.props.data.venue.categories[0].name}
              {this.props.data.venue.location.address}
             <span>, {this.props.data.venue.location.city}</span>
            </div>
            <div className="map-marker-hint__close-button" onClick={this._onCloseClick.bind(this)}>close</div>
        </div>
      </div>
    );
  }
}
