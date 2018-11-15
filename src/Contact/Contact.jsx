import React from 'react';
import backIcon from './arrow_back-24px.svg';
import instagramLogo from '../icons/instagram.svg';
import facebookLogo from '../icons/facebook.svg';

import './Contact.css';

const Contact = () => (
  <address className="contact">
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
      <div>info@nerdbrewing.se</div>
      <div>Nerdbrewing C/O Lilla Ölfabriken</div>
      <div>Nordbersgatan 24</div>
      <div>214 50 Malmö</div>
      <div className="social-links-contact">
        <a className="social-logo-contact" href="https://www.instagram.com/nerdbrewing/">
          <img src={instagramLogo} alt="" />
        </a>
        <a
          className="social-logo-contact"
          href="https://www.facebook.com/nerdbrewingopensourcebeer"
        >
          <img src={facebookLogo} alt="" />
        </a>
      </div>
    </div>
  </address>
);

export default Contact;
