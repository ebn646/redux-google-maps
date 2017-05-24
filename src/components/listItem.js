import React,{ Component } from 'react';

export default class ListItem extends Component{
  constructor(props){
      super(props)
      this.state={'isSelected':''}
  }

  componentWillReceiveProps(nextProps){
    //console.log('componentWillUpdate')
    var css = (this.state.isSelected === "") ? "selected" : "";
    if(nextProps.activeMarker.props.index == this.props.index){
      //console.log('props changed=',nextProps.activeMarker.props.index ,',', this.props.index)
      this.setState({"isSelected":css});
      return true;
    }else if(this.state.isSelected == "selected"){
      this.setState({"isSelected":""});
      return true;
    }else{
      return false;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.isSelected !== this.state.isSelected;
  }


  render(){
    //console.log('list item rendering')
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
          style={style}>
          <h6>{this.props.data.name}</h6>
          <p>{this.props.data.location.formattedAddress}</p>
        </li>
    )
  }
}
