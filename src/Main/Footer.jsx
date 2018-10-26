import React, { Component } from "react";
import logo from './nerdbrewing_logo_black.svg';
import instagramLogo from './instagram.svg';
import facebookLogo from './facebook.svg';

import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <img className="logo" src={logo} alt="" />
          <div className="about">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce augue justo, pellentesque sit amet enim at, egestas vehicula ex.
              metus, quis elementum erat. Mauris tincidunt ut elit at fringilla. Ut consectetur justo ac sagittis lobortis. Fusce semper dolor justo, nec fermentum lacus posuere quis.
            </p>
          </div>
        <div className="contact">
          <h3>Contact</h3>
          <span>Nerdbrewing</span>
          <span>email@mail.com</span>
          <div className="social">
            <img className="social-logo" src={instagramLogo} alt="" />
            <img className="social-logo" src={facebookLogo} alt="" />
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
