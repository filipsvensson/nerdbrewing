import React from 'react';
import { NavLink } from 'react-router-dom';
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

const NavItems = styled.div`
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
    border-bottom: 2px solid #24292e;
  }
`;

const activeClassName = 'nav-item-active';
const NavItem = styled(NavLink).attrs({
  activeClassName
})`
  color: #9c9c9c;
  transition: color 0.2s ease-in-out;

  :hover {
    color: #24292e;
  }

  :not(:first-child) {
    margin-left: 1rem;
  }

  &.${activeClassName} {
    color: #24292e;
  }
`;

const StyledSocialLinks = styled(SocialLinks)`
  display: none;

  @media (min-width: 26.5rem) {
    display: block;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Logo>
      <TextLogo src={textLogo} alt="" />
      <YearLogo src={year} alt="" />
    </Logo>
    <Navigation>
      <NavItems>
        <div>
          <NavItem exact to="/" activeClassName={activeClassName}>
            Home
          </NavItem>
          <NavItem exact to="/recipes" activeClassName={activeClassName}>
            Recipes
          </NavItem>
          <NavItem to="/contact" activeClassName={activeClassName}>
            Contact
          </NavItem>
        </div>
        <StyledSocialLinks />
      </NavItems>
    </Navigation>
  </HeaderContainer>
);

export default Header;
