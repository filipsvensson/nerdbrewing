import React from 'react';
import backIcon from './arrow_back-24px.svg';
import SocialLinks from '../SocialLinks/SocialLinks';

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
      <SocialLinks />
    </div>
  </address>
);

export default Contact;
