import React, { useState } from 'react';
import { useAsync } from 'react-async';
import styled from 'styled-components/macro';
import api from '../api/api';
import RecipeModal from './RecipeModal';

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
  const { data: recipes, error, isPending } = useAsync({
    promiseFn: api.fetchRecipes
  });
  const [currentRecipe, setCurrentRecipe] = useState(null);
  if (error || isPending) return null;
  return (
    <>
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
    </>
  );
};

export default RecipesGrid;
