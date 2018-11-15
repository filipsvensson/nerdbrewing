import React from 'react';
import textLogo from './nerdbrewing-text-logo.svg';
import year from './nerdbrewing-year.svg';
import SocialLinks from '../SocialLinks/SocialLinks';

import './Header.css';

const Header = () => (
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
        <SocialLinks />
      </div>
    </div>
  </header>
);

export default Header;
