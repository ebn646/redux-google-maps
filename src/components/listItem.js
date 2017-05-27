import React,{ Component } from 'react';

export default class ListItem extends Component{
  constructor(props){
      super(props)
      this.state={'isSelected':''}
  }

  componentWillReceiveProps(nextProps){
    var css = (this.state.isSelected === "") ? "selected" : "";
    if(nextProps.activeMarker.props && nextProps.activeMarker.props.index == this.props.index){
      this.setState({"isSelected":css});
      return true;
    }else if(this.state.isSelected == "selected"){
      this.setState({"isSelected":""});
      return true;
    }else{
      return false;
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
          className={this.state.isSelected}
          style={style}>
          <div className="col-sm-3">
            <img src={this.props.data.venue.featuredPhotos.items[0].prefix +'100x100' + this.props.data.venue.featuredPhotos.items[0].suffix} />
          </div>
          <div className="col-sm-9">
            <h6><span>{this.props.index + 1}.</span> <span>{this.props.data.venue.name}</span></h6>
            <p>{this.props.data.venue.location.formattedAddress}</p>
          </div>
        </li>
    )
  }
}
