import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Modal from './Modal';
import CloseIcon from '../icons/CloseIcon';
import logo from '../ui/nerdbrewing-logo.svg';

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
`;

const Close = styled(CloseIcon)`
  position: absolute;
  right: 2rem;
  top: 2rem;
`;

const Logo = styled.img`
  width: 8rem;
  height: 8rem;
  align-self: center;
  margin-top: 2rem;
`;

const TitleBox = styled.div`
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-size: 1.25rem;
  color: #24292e;
  position: relative;
  display: flex;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
`;
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
`;

const Title = styled.div`
  margin: 0 auto;
  background-color: #fff;
  z-index: 1;
  padding: 0 1rem;
  max-width: 25rem;
`;

const RecipeImg = styled.img`
  margin-bottom: 2rem;
  max-width: 14rem;
`;
const RecipeContent = styled.div`
  display: flex;
`;
const LeftColumn = styled.div`
  padding-right: 1rem;
`;
const RightColumn = styled.div`
  padding-left: 1rem;
  max-width: 14rem;
`;
const About = styled.div`
  background-color: #f5f5f5;
  border-radius: 2px;
  padding: 1rem;
  margin-bottom: 2rem;
`;
const Ingredients = styled.div`
  background-color: #f5f5f5;
  border-radius: 2px;
  padding: 1rem;
`;

const Ingredient = styled.div`
  margin-bottom: 0.5rem;
  color: #666;
`;
const InfoList = styled.ul`
  background-color: #f5f5f5;
  border-radius: 2px;
  padding: 1rem;
  margin: 0;

  li:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const InfoItem = styled.li`
  display: flex;
  justify-content: space-between;
  span:last-child {
    color: #666;
  }
`;

const RecipeModal = ({
  onClose,
  recipe: { title, about, url, ingredients, abv, ibu, og, size, mashTemp }
}) => (
  <Modal disableInitialFocus onClose={() => onClose(false)}>
    {() => (
      <Recipe>
        <Close onClick={() => onClose(false)} />
        <Logo src={logo} alt="" />
        <TitleBox>
          <Line />
          <Title>{title}</Title>
        </TitleBox>

        <RecipeContent>
          <LeftColumn>
            <About>{about}</About>
            <Ingredients>
              {ingredients.map(ingredient => (
                <Ingredient key={ingredient}>{ingredient}</Ingredient>
              ))}
            </Ingredients>
          </LeftColumn>
          <RightColumn>
            <RecipeImg src={url} alt="" />
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
    )}
  </Modal>
);

RecipeModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  recipe: PropTypes.shape({}).isRequired
};

export default RecipeModal;