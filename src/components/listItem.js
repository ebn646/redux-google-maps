import React,{ Component } from 'react';

export default class ListItem extends Component{
  constructor(props){
    super(props)
      this.state={'isSelected':''}
  }

  componentWillReceiveProps(nextProps){
    var css = (this.state.isSelected === "") ? "selected" : "";
    console.log('fuck')
    if(nextProps.activeMarker.props.index == this.props.index){
      console.log('props changed=',nextProps.activeMarker.props.index ,',', this.props.index)
      this.setState({"isSelected":css});
      return true;
    }else if(nextProps.activeMarker.props.index != this.props.index){
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
      padding:'10px'
    }

    return(
        <li
          onClick={()=>this.props.onMarkerClick(this)}
          className={this.state.isSelected}
          style={style}>{this.props.data.name}
        </li>
    )
  }
}
