import React,{Component} from 'react';

class DropDown extends Component{

  render(){
    return(
      <div className="dropdown">
      <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
      <span className="caret"></span></button>
      <ul className="dropdown-menu">
        <li><a href="#">Food</a></li>
        <li><a href="#">Coffee</a></li>
        <li><a href="#">Breakfast</a></li>
      </ul>
    </div>
    )
  }
}

export default DropDown;
