import React,{Component} from 'react';
import DropDown from './dropdown-list'

class Header extends Component{
  render(){
    return (
      <div className="page-header row" style={{background:'#f5f5f5'}}>
        <div className="col-sm-3" style={{textAlign:'left'}}>
          <DropDown
            {...this.props}/>
        </div>
        <div className="col-sm-9" style={{textAlign:'center'}}>
            <h2><small>React Google Map with redux and foursquare</small></h2>
        </div>
      </div>
    )
  }

}

export default Header
