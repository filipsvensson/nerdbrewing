import React, { Component } from 'react';
import { Link } from 'react-router';
import backIcon from './arrow_back-24px.svg';
import instagramLogo from '../icons/instagram.svg';
import facebookLogo from '../icons/facebook.svg';

import './Contact.css'

class Contact extends Component {

  render() {
    return (
      <div className="contact">
        <header className="contact-header">
          <a className="back-link" href="/">
            <img className="back-icon" src={backIcon} alt="" />
          </a>
          <h1>Contact</h1>
          <div className="hidden">
            <img className="back-icon" src={backIcon} alt="" />
          </div>
        </header>
        <div className="contact-info">
          <div>nerdbrewing@mail.com</div>
          <div>Nordbersgatan 24</div>
          <div>214 50 Malmö</div>
          <div className="social-links-contact">
            <img className="social-logo" src={instagramLogo} alt="" />
            <img className="social-logo" src={facebookLogo} alt="" />
          </div>
        </div>
      </div>
    );
  }

}

export default Contact;
