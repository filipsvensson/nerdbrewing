import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import CommentIcon from "../assets/comment-icon.svg"
import LikeIcon from "../assets/like-icon.svg"

const Item = styled.a`
  position: relative;
`
const SocialMediaInfo = styled.div`
  display: flex;
  align-items: center;

  svg {
    fill: #fff;
    width: 24px;
    margin: 0.5rem;
  }
`

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: none;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;

  ${Item}:hover & {
    display: flex;
  }
`

const GalleryItem = ({ id, likes, comments, image: { childImageSharp } }) => (
  <Item href={`https://www.instagram.com/p/${id}/`} target="_blank">
    <Img fluid={{ ...childImageSharp.fluid, aspectRatio: 1 }} />
    <Overlay>
      <SocialMediaInfo>
        <LikeIcon />
        <span>{likes}</span>
        <CommentIcon />
        <span>{comments}</span>
      </SocialMediaInfo>
    </Overlay>
  </Item>
)

export default GalleryItem
