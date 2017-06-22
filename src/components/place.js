import React, {PropTypes, Component} from 'react';
//import shouldPureComponentUpdate from 'react-pure-render/function';

import {greatPlaceStyle, greatPlaceStyleHover} from './place_styles.js';
require('./place.scss');

export default class MyGreatPlace extends Component {
  static propTypes = {
    // GoogleMap pass $hover props to hovered components
    // to detect hover it uses internal mechanism, explained in x_distance_hover example
    $hover: PropTypes.bool,
    text: PropTypes.string
  };

  static defaultProps = {

  };

  //shouldComponentUpdate = shouldPureComponentUpdate;

  getMarkerStyle(){
    if(this.props.data.showInfo || this.props.$hover ){
        return greatPlaceStyleHover;
    }else{
        return greatPlaceStyle;
    }
  }

  render() {
    const style = this.getMarkerStyle();

    return (
      <div className="hint hint--html hint--info hint--top" style={style}>
        <div>{this.props.text}</div>
        <div style={{width: '350px'}} className="hint__content">
          <div className="col-sm-3">
              <img src={this.props.data.venue.featuredPhotos.items[0].prefix +'50x50' + this.props.data.venue.featuredPhotos.items[0].suffix} />
          </div>
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
