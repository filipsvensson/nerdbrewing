import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components/macro"
import InstagramIcon from "../assets/instagram-icon.svg"
import FacebookIcon from "../assets/facebook-icon.svg"
import TwitterIcon from "../assets/twitter-icon.svg"

const SocialLink = styled.a`
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1 !important;
  }

  :not(:first-child) {
    margin-left: 0.6rem;
  }
`

const SocialLinksContainer = styled.div`
  :hover ${SocialLink} {
    opacity: 0.6;
  }
`

const SocialLinks = ({ className }) => (
  <SocialLinksContainer className={className}>
    <SocialLink href="https://www.instagram.com/nerdbrewing/">
      <InstagramIcon />
    </SocialLink>
    <SocialLink href="https://www.facebook.com/nerdbrewingopensourcebeer">
      <FacebookIcon />
    </SocialLink>
    <SocialLink href="https://www.twitter.com/nerdbrewing">
      <TwitterIcon />
    </SocialLink>
  </SocialLinksContainer>
)

SocialLinks.defaultProps = {
  className: "",
}
SocialLinks.propTypes = {
  className: PropTypes.string,
}

export default SocialLinks
