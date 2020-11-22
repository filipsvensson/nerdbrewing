import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import GalleryItem from "../components/galleryItem"

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  grid-gap: 4rem;
  margin-top: 2rem;
`

const Gallery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allInstaNode {
          edges {
            node {
              id
              likes
              comments
              mediaType
              preview
              timestamp
              localFile {
                childImageSharp {
                  fluid(maxWidth: 700) {
                    # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
                    ...GatsbyImageSharpFluid_noBase64
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <StyledGallery>
      {data.allInstaNode.edges
        .sort((a, b) => a.node.timestamp - b.node.timestamp)
        .slice(-6)
        .map(node => (
          <GalleryItem
            id={node.node.id}
            likes={node.node.likes}
            comments={node.node.comments}
            image={{ childImageSharp: node.node.localFile.childImageSharp }}
          />
        ))}
    </StyledGallery>
  )
}

export default Gallery
