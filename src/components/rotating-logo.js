import React from "react"
import styled from "styled-components/macro"
import InnerLogo from "../assets/inner-logo.svg"
import OuterLogo from "../assets/outer-logo.svg"

const LogoBox = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;
`

const StyledInnerLogo = styled(InnerLogo)`
  width: 12rem;
  height: 12rem;
  position: absolute;
  left: 0;
  top: 0;
`

const StyledOuterLogo = styled(OuterLogo)`
  width: 12rem;
  height: 12rem;
  position: absolute;
  left: 0;
  top: 0;

  ${LogoBox}:hover & {
    animation: spin 24s linear infinite;
  }
`

const RotatingLogo = () => (
  <LogoBox>
    <StyledInnerLogo />
    <StyledOuterLogo />
  </LogoBox>
)

export default RotatingLogo
