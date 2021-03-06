import React from "react"
import styled from "styled-components/macro"
import ReactMarkdown from "react-markdown"
import { useStaticQuery, graphql } from "gatsby"
import Modal from "./modal"
import CloseIcon from "../assets/close-icon.svg"
import Logo from "../assets/nerdbrewing-logo.svg"

const Recipe = styled.div`
  max-width: 40rem;
  background-color: #fff;
  align-self: safe center;
  border-radius: 2px;
  padding: 2rem;
  box-shadow: 0 4px 11px rgba(0, 0, 0, 0.34);
  position: relative;
  display: flex;
  flex-direction: column;

  @media (min-width: 32rem) {
    margin: 1rem;
  }
`

const Close = styled(CloseIcon)`
  position: absolute;
  right: 2rem;
  top: 2rem;
  transition: opacity 0.2s ease-in-out;
  cursor: pointer;

  &:focus,
  &:hover {
    opacity: 0.6;
  }
`

const StyledLogo = styled(Logo)`
  width: 8rem;
  height: 8rem;
  align-self: center;
  margin-top: 2rem;
`

const TitleBox = styled.div`
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-size: 1.25rem;
  color: #24292e;
  position: relative;
  display: flex;
  margin-top: 3rem;
  margin-bottom: 2rem;
`
const Line = styled.div`
  background-color: #24292e;
  width: 100%;
  height: 3px;
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const Title = styled.div`
  margin: 0 auto;
  background-color: #fff;
  z-index: 1;
  padding: 0 1rem;
  max-width: 25rem;
  text-align: center;
`

const RecipeContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 32rem) {
    flex-direction: row;
  }
`

const LeftColumn = styled.div`
  @media (min-width: 32rem) {
    padding-right: 1rem;
  }
`

const RightColumn = styled.div`
  @media (min-width: 32rem) {
    padding-left: 1rem;
    max-width: 14rem;
  }
`

const Ingredients = styled.div`
  border: 2px solid;
  white-space: pre-line;
  white-space: pre-wrap;
  border-radius: 2px;
  padding: 1rem;

  ul {
    list-style-type: none;
    padding-left: 0.5rem;
  }

  p + ul {
    margin-top: -1rem;
  }

  ul > li::before {
    content: "-";
    margin-right: 0.5rem;
  }
`

const RecipeImg = styled.img`
  display: none;
  margin-bottom: 2rem;
  max-width: 12rem;

  @media (min-width: 32rem) {
    display: block;
  }
`

const InfoList = styled.ul`
  border: 2px solid;
  border-radius: 2px;
  padding: 1rem;
  margin: 0;
  margin-top: 2rem;

  li:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 32rem) {
    margin: 0;
  }
`

const InfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  span:last-child {
    color: #666;
  }
`

const RecipeModal = ({
  onClose,
  // recipe: { title, url, ingredients, abv, ibu, og, fg, size, mashTemp },
  recipeId,
}) => {
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
              }
              id
              abv
              ingredients {
                ingredients
              }
              ibu
              fg
              og
              mashTemp
              size
            }
          }
        }
      }
    `
  )
  console.log(data.allContentfulRecipe.edges)
  console.log(recipeId)
  const recipe = data.allContentfulRecipe.edges.find(
    edge => edge.node.id === recipeId
  )
  console.log(recipe)
  const {
    title,
    thumbnail,
    ingredients,
    abv,
    ibu,
    og,
    fg,
    size,
    mashTemp,
  } = recipe.node
  return (
    <Modal disableInitialFocus onClose={onClose}>
      {/* {() => ( */}
      <Recipe>
        <Close onClick={onClose} />
        <StyledLogo />
        <TitleBox>
          <Line />
          <Title>{title}</Title>
        </TitleBox>
        <RecipeContent>
          <LeftColumn>
            <Ingredients>
              <ReactMarkdown source={ingredients.ingredients} />
            </Ingredients>
          </LeftColumn>
          <RightColumn>
            <RecipeImg src={thumbnail.file.url} alt="" />
            <InfoList>
              <InfoItem>
                <span>ABV</span>
                <span>{abv}</span>
              </InfoItem>
              <InfoItem>
                <span>IBU</span>
                <span>{ibu}</span>
              </InfoItem>
              <InfoItem>
                <span>OG</span>
                <span>{og}</span>
              </InfoItem>
              <InfoItem>
                <span>FG</span>
                <span>{fg}</span>
              </InfoItem>
              <InfoItem>
                <span>Size</span>
                <span>{size}</span>
              </InfoItem>
              <InfoItem>
                <span>Mash temp</span>
                <span>{mashTemp}</span>
              </InfoItem>
            </InfoList>
          </RightColumn>
        </RecipeContent>
      </Recipe>
      {/* )} */}
    </Modal>
  )
}

export default RecipeModal
