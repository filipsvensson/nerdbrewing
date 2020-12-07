import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components/macro"
import Layout from "../components/layout"
import RecipeModal from "../components/recipeModal"
import Img from "gatsby-image"

const RecipesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  grid-gap: 3rem;
  margin: 3rem 0;
`

const Recipe = styled.button`
  border: 0;
  padding: 0;
  outline: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
`

const RecipeThumbnail = styled(Img)`
  width: 100%;
  transition: opacity 0.1s ease-in-out;

  ${Recipe}:focus &,
  ${Recipe}:hover & {
    opacity: 0.8;
  }
`

const Title = styled.div`
  width: 100%;
  margin-top: 0.5rem;
`

const Recipes = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulRecipe {
          edges {
            node {
              title
              thumbnail {
                file {
                  url
                }
                fluid {
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
              id
            }
          }
        }
      }
    `
  )
  const [currentRecipe, setCurrentRecipe] = useState(null)

  return (
    <Layout>
      {currentRecipe && (
        <RecipeModal
          onClose={() => setCurrentRecipe(null)}
          recipeId={currentRecipe}
        />
      )}
      <RecipesGrid>
        {data.allContentfulRecipe.edges.map(edge => (
          <Recipe
            key={edge.node.title}
            onClick={() => setCurrentRecipe(edge.node.id)}
          >
            <RecipeThumbnail fluid={edge.node.thumbnail.fluid} />
            <Title>{edge.node.title}</Title>
          </Recipe>
        ))}
      </RecipesGrid>
    </Layout>
  )
}

export default Recipes
