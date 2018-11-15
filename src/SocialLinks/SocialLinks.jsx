import React from 'react';
import instagramLogo from '../icons/instagram.svg';
import facebookLogo from '../icons/facebook.svg';
import twitterLogo from '../icons/twitter.svg';

import './SocialLinks.css';

const SocialLinks = () => (
  <div className="social-links">
    <a href="https://www.instagram.com/nerdbrewing/">
      <img className="social-logo" src={instagramLogo} alt="" />
    </a>
    <a href="https://www.facebook.com/nerdbrewingopensourcebeer">
      <img className="social-logo" src={facebookLogo} alt="" />
    </a>
    <a href="https://www.twitter.com/nerdbrewing">
      <img className="social-logo" src={twitterLogo} alt="" />
    </a>
  </div>
);

export default SocialLinks;
