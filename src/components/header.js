import React,{Component} from 'react';
import DropDown from './dropdown-list'

class Header extends Component{
  render(){
    return (
      <div className="page-header row" style={{background:'#222'}}>
        <div className="col-sm-2" style={{textAlign:'left',color:"white"}}>
          <h4>FOURSQUARE</h4>
        </div>
        <div className="col-sm-2" style={{textAlign:'left'}}>
          <DropDown
            {...this.props}/>
        </div>
        <div className="col-sm-8" style={{textAlign:'right'}}>
            <img className="App-logo" src="images/logo.svg" />
        </div>
      </div>
    )
  }

}

export default Header
