import React from 'react';
import instagramLogo from '../icons/instagram.svg';
import facebookLogo from '../icons/facebook.svg';
import twitterLogo from '../icons/twitter.svg';

import './SocialLinks.css';

const SocialLinks = () => (
  <div className="social-links">
    <a href="https://www.instagram.com/nerdbrewing/">
      <img src={instagramLogo} alt="" />
    </a>
    <a href="https://www.facebook.com/nerdbrewingopensourcebeer">
      <img src={facebookLogo} alt="" />
    </a>
    <a href="https://www.twitter.com/nerdbrewing">
      <img src={twitterLogo} alt="" />
    </a>
  </div>
);

export default SocialLinks;
