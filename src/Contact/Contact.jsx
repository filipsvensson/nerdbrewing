import React from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';

import './Contact.css';

const Contact = () => (
  <address className="contact">
    <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="name">
          Your Name:
          <input type="text" name="name" id="name" />
        </label>
      </p>
      <p>
        <label htmlFor="email">
          Your Email:
          <input type="email" name="email" id="email" />
        </label>
      </p>
      <p>
        <label htmlFor="message">
          Message:
          <textarea name="message" id="massage" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>

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
