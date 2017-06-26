import React,{ Component } from 'react';
import { Link } from 'react-router';
import {greatPlaceStyle, greatPlaceStyleHover} from '../place_styles.js';

const K_SIZE = 40;

const style = {
  cursor:'pointer',
  listStyleType:'none',
  borderBottom:'1px solid gray',
  padding:'10px',
  overflow:'hidden',
  background: '#f5f5f5'
}

const styleHover={
  ...style,
  background: '#f7ecd6'
}

const dotStyle = {
  ...greatPlaceStyle,
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: '20px',
  top: '20px',
  border: '5px solid #f44336',
  borderRadius: '40px',
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
  cursor: 'pointer',
  zIndex:`1`,
};

export default class ListItem extends Component{

constructor(props){
      super(props)
      this.state={'isSelected':''}
  }
  onItemOver(){
    this.props.onItemOver(this.props.index);
  }
  onItemOut(){
    if(!this.state.selected)this.props.onItemOut(this.props.index);
  }

  getMarkerStyle(){
    if(this.props.data.showInfo){
      return styleHover;
    }else{
      return style
    }
  }
  render(){

    const mstyle = this.getMarkerStyle();

    return(
        <li
          onClick={()=>this.props.onMarkerClick(this)}
          onMouseEnter={this.onItemOver.bind(this)}
          onMouseLeave={this.onItemOut.bind(this)}
          className={this.state.isSelected}
          style={mstyle}>
          <div className="col-sm-2">
            <span style={dotStyle}>{this.props.index + 1}</span>
          </div>
          <div className="col-sm-10">
              <h6><span>{this.props.data.venue.name}</span></h6>
              <small>{this.props.data.venue.categories[0].name}</small>
            <p>
              {this.props.data.venue.location.address}
              {this.props.data.venue.location.city}, {this.props.data.venue.location.state}
          </p>
          </div>
        </li>
    )
  }
}
