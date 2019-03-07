import React, { Fragment } from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';
import Header from '../Header/Header';

import './Contact.css';

const Contact = () => (
  <Fragment>
    <Header />
    <address className="contact">
      <div className="contact-info">
        <div>info@nerdbrewing.se</div>
        <div>Nerdbrewing C/O Lilla Ölfabriken</div>
        <div>Nordbersgatan 24</div>
        <div>214 50 Malmö</div>
        <SocialLinks />
      </div>
    </address>
  </Fragment>
);

export default Contact;
