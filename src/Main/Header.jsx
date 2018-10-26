import React, { Component } from "react";
import textLogo from './nerdbrewing_text_logo_black.svg';

import './Header.css'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img className="text-logo" src={textLogo} alt="" />
      </header>
    );
  }
}

export default Header;
