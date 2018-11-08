import React, { Component } from "react";
import textLogo from './nerdbrewing-text-logo.svg';
import year from './nerdbrewing-year.svg';
import instagramLogo from '../icons/instagram.svg';
import facebookLogo from '../icons/facebook.svg';

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
              <a href="#about">About</a>
              <span>/</span>
              <a href="/contact">Contact</a>
            </div>
            <div className="social-links">
              <a href="https://www.instagram.com/nerdbrewing/">
                <img className="social-logo" src={instagramLogo} alt="" />
              </a>
              <img className="social-logo" src={facebookLogo} alt="" />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
