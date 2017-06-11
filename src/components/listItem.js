import React,{ Component } from 'react';
import { Link } from 'react-router';

export default class ListItem extends Component{
  constructor(props){
      super(props)
      this.state={'isSelected':''}
  }
  onItemOver(){
    this.props.onMarkerOver(this.props.index);
  }
  onItemOut(){
    this.props.onMarkerOut();
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.activeMarkerIndex == this.props.index){
        this.setState({"isSelected":"selected"});
    }
    if(nextProps.activeMarkerIndex == -1
        || nextProps.activeMarkerIndex != this.props.index){
        this.setState({"isSelected":""});
    }
  }
  render(){
    const style = {
      cursor:'pointer',
      listStyleType:'none',
      borderBottom:'1px solid gray',
      padding:'10px',
      overflow:'hidden'
    }

    return(
        <li
          onClick={()=>this.props.onMarkerClick(this)}
          onMouseEnter={this.onItemOver.bind(this)}
          onMouseLeave={this.onItemOut.bind(this)}
          className={this.state.isSelected}
          style={style}>
          <div className="col-sm-3">
            <img src={this.props.data.venue.featuredPhotos.items[0].prefix +'100x100' + this.props.data.venue.featuredPhotos.items[0].suffix} />
          </div>
          <div className="col-sm-8">
            <a href={this.props.data.venue.url} target="_blank">
              <h6><span>{this.props.index + 1}.</span> <span>{this.props.data.venue.name}</span></h6>
            </a>
            <small>{this.props.data.venue.categories[0].name}</small>
            <p>
              {this.props.data.venue.location.address}
              {this.props.data.venue.location.city}, {this.props.data.venue.location.state}
          </p>
          </div>
          <div className="col-xs-1 rating">{this.props.data.venue.rating}</div>
        </li>
    )
  }
}
