import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';

import './Contact.css';

const Contact = () => (
  <address className="contact">
    <div className="contact-info">
      <div>info@nerdbrewing.se</div>
      <div>Nerdbrewing C/O Lilla Ölfabriken</div>
      <div>Norbergsgatan 24</div>
      <div>214 50 Malmö</div>
      <SocialLinks />
    </div>
  </address>
);

export default Contact;
