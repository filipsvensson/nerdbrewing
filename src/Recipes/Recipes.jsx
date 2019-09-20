import React, { useState } from 'react';
import styled from 'styled-components/macro';
import usePromise from '../hooks/usePromise';
import api from '../api/api';
import RecipeModal from './RecipeModal';
import FetchStateHandler from './FetchStateHandler';

const Recipes = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  grid-gap: 3rem;
  margin: 3rem 0;
`;

const Recipe = styled.button`
  border: 0;
  padding: 0;
  outline: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
`;

const RecipeThumbnail = styled.img`
  width: 100%;
  transition: opacity 0.1s ease-in-out;

  ${Recipe}:focus &,
  ${Recipe}:hover & {
    opacity: 0.8;
  }
`;

const Title = styled.div`
  width: 100%;
  margin-top: 0.5rem;
`;

const RecipesGrid = () => {
  const [recipes, recipesState] = usePromise(api.fetchRecipes);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  return (
    <FetchStateHandler state={recipesState}>
      {currentRecipe && <RecipeModal onClose={setCurrentRecipe} recipe={currentRecipe} />}
      <Recipes>
        {recipes &&
          recipes.map(({ title, url, ...rest }) => (
            <Recipe
              key={title}
              onClick={() =>
                setCurrentRecipe({
                  title,
                  url,
                  ...rest
                })
              }
            >
              <RecipeThumbnail src={url} alt="" />
              <Title>{title}</Title>
            </Recipe>
          ))}
      </Recipes>
    </FetchStateHandler>
  );
};

export default RecipesGrid;
