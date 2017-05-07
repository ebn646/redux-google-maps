import React,{ Component } from 'react';

export default class ListItem extends Component{
  constructor(props){
    super(props)
      this.state={'isSelected':''}
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.activeMarker.props.index == this.props.index){
      console.log('props changed=',nextProps.activeMarker.props.index ,',', this.props.index)

      var css = (this.state.isSelected === "") ? "selected" : "";
      this.setState({"isSelected":css});
      return true;
    }else{
      return false;
    }
  }

  render(){
    console.log('list item rendered')
    const style = {
      cursor:'pointer',
      listStyleType:'none',
      borderBottom:'1px solid gray',
      padding:'10px 0'
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
