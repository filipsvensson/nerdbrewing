import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import instagramLogo from '../icons/instagram.svg';
import facebookLogo from '../icons/facebook.svg';
import twitterLogo from '../icons/twitter.svg';

const SocialLink = styled.a`
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1 !important;
  }

  :not(:first-child) {
    margin-left: 0.6rem;
  }
`;

const SocialLinksContainer = styled.div`
  :hover ${SocialLink} {
    opacity: 0.6;
  }
`;

const SocialLinks = ({ className }) => (
  <SocialLinksContainer className={className}>
    <SocialLink href="https://www.instagram.com/nerdbrewing/">
      <img src={instagramLogo} alt="" />
    </SocialLink>
    <SocialLink href="https://www.facebook.com/nerdbrewingopensourcebeer">
      <img src={facebookLogo} alt="" />
    </SocialLink>
    <SocialLink href="https://www.twitter.com/nerdbrewing">
      <img src={twitterLogo} alt="" />
    </SocialLink>
  </SocialLinksContainer>
);

SocialLinks.defaultProps = {
  className: ''
};
SocialLinks.propTypes = {
  className: PropTypes.string
};

export default SocialLinks;
