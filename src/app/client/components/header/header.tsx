import * as React from 'react';

interface HeaderProps {}
interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
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