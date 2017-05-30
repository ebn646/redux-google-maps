import React,{Component} from 'react';
import DropDown from '../containers/dropdown-list'

class Header extends Component{
  render(){
    return (
      <div className="page-header row" style={{background:'#222'}}>
        <div className="col-sm-3" style={{textAlign:'left',color:"white"}}>
          <h4 style={{display:'inline-block'}}>FOURSQUARE</h4>
            <DropDown
              {...this.props}/>
        </div>
        <div className="col-sm-9" style={{textAlign:'center'}}>
            <img className="App-logo" src="images/logo.svg" />
        </div>
      </div>
    )
  }

}

export default Header
