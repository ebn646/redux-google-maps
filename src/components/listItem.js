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
    //console.log('list item rendering',this.props)
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
            <img src="http://lorempixel.com/100/100/" />
          </div>
          <div className="col-sm-9">
            <h6><span>{this.props.index}</span> <span>{this.props.data.name}</span></h6>
            <p>{this.props.data.location.formattedAddress}</p>
          </div>
        </li>
    )
  }
}
