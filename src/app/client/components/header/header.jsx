import React, {Component} from 'react';

class Header extends Component {
  render(){
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <a href="javascript:void(0)" className="navbar-brand">URL Shortener</a>
        </div>
      </nav>
    )
  }
}

export default Header;