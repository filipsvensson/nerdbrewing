import React, { Component } from "react";
import textLogo from './nerdbrewing-text-logo.svg';
import year from './nerdbrewing-year.svg';

import './Header.css'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img className="text-logo" src={textLogo} alt="" />
        <img className="text-logo" src={year} alt="" />
      </header>
    );
  }
}

export default Header;
