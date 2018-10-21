import React, { Component } from "react";
import Fetch from "../Fetch";

import "./RecipeList.css";

const query = `{
  recipes {
    name
    thumbnail {
      url
    }
  }
}`;

class RecipeList extends Component {
  render() {
    return (
      <div className="recipie-list">
        <Fetch query={query}>
          {res =>
            res.recipes.map(({ name, thumbnail: { url } }) => {
              return (
                <div className="recipie-list-item">
                  <img className="recipe-thumbnail" src={url} />
                  <h1 className="recipe-name">{name}</h1>
                </div>
              );
            })
          }
        </Fetch>
      </div>
    );
  }
}

export default RecipeList;
