import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import styled from 'styled-components/macro';
import textLogo from './nerdbrewing-text-logo.svg';
import year from './nerdbrewing-year.svg';
import SocialLinks from '../SocialLinks/SocialLinks';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background: #fff;
  z-index: 1;
`;

const Logo = styled.div`
  padding: 3rem 1rem;

  @media (min-width: 40rem) {
    padding: 4rem;
  }

  @media (min-width: 60rem) {
    padding: 8rem;
  }
`;

const TextLogo = styled.img`
  width: 100%;

  @media (min-width: 40rem) {
    max-width: 35rem;
  }
`;

const YearLogo = styled.img`
  margin-top: 0.4rem;
  width: 100%;

  @media (min-width: 40rem) {
    max-width: 35rem;
  }
`;

const Navigation = styled.div`
  width: 100%;
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 0.2rem;
  font-weight: 600;
  padding-bottom: 0.2rem;

  @media (min-width: 26.5rem) {
    font-size: 1.2rem;
    letter-spacing: 0.3rem;
    border-bottom: 2px solid #252422;
  }
`;

const SiteLinks = styled.div`
  padding: 0 0.2rem;

  a {
    transition: opacity 0.2s ease-in-out;
  }

  a:hover {
    opacity: 0.6;
  }

  a:not(:first-child) {
    margin-left: 1rem;
  }
`;

const StyledSocialLinks = styled(SocialLinks)`
  display: none;

  @media (min-width: 26.5rem) {
    display: block;
  }
`;

const Header = ({ location: { pathname } }) => (
  <HeaderContainer>
    <Logo>
      <TextLogo src={textLogo} alt="" />
      <YearLogo src={year} alt="" />
    </Logo>
    <Navigation>
      <Links>
        <SiteLinks>
          <a href="/" data-active={pathname === '/'}>
            Home
          </a>
          <a href="/contact" data-active={pathname === '/contact'}>
            Contact
          </a>
        </SiteLinks>
        <StyledSocialLinks />
      </Links>
    </Navigation>
  </HeaderContainer>
);

Header.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Header);
