import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import textLogo from './nerdbrewing-text-logo.svg';
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

const YearLogo = styled.div`
  position: relative;
  display: flex;
  margin-top: 0.75rem;
`;
const Line = styled.div`
  background-color: #24292e;
  width: 100%;
  height: 4px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Year = styled.div`
  font-size: 1.2rem;
  font-family: 'Source Code Pro', monospace;
  margin: 0 auto;
  background-color: #24292e;
  color: #fff;
  z-index: 1;
  padding: 0 1rem;
  max-width: 25rem;
  position: relative;
  display: flex;
  align-items: flex-start;
  min-height: 1.5rem;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 0.75rem solid transparent;
    border-bottom: 0.75rem solid transparent;
    border-right: 0.75rem solid #24292e;
    left: -0.75rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-top: 0.75rem solid transparent;
    border-bottom: 0.75rem solid transparent;
    border-left: 0.75rem solid #24292e;
    right: -0.75rem;
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
      <YearLogo>
        <Line />
        <Year>{new Date().getFullYear()}</Year>
      </YearLogo>
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
