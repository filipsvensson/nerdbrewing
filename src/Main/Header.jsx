import React, { Component } from "react";
import textLogo from './nerdbrewing-text-logo.svg';
import year from './nerdbrewing-year.svg';
import instagramLogo from './instagram.svg';
import facebookLogo from './facebook.svg';

import './Header.css'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <img className="header-logo" src={textLogo} alt="" />
          <img className="header-logo header-logo-year" src={year} alt="" />
        </div>
        <div className="navigation">
          <div className="links">
            <div className="site-links">
              <a>about</a>
              <span>/</span>
              <a>contact</a>
            </div>
            <div className="social-links">
              <img className="social-logo" src={instagramLogo} alt="" />
              <img className="social-logo" src={facebookLogo} alt="" />
            </div>
          </div>
          <hr />
        </div>
      </header>
    );
  }
}

export default Header;
