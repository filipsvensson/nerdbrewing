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
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "//7499608.com/app/js/embed.min.js";
    script.async = true;
    this.tagContainer.appendChild(script);
  }

  render() {
    return (
      <div className="recipes">
        <div className="mohaha"></div>
        <div className="recipie-grid">
          <div className="recipie-grid-item">
            <img className="recipe-thumbnail" src="https://media.graphcms.com//vBotYcYrSNmrxHUrraDK" />
            <div className="recipe-title">Volatile</div>
          </div>
          <div className="recipie-grid-item">
            <img className="recipe-thumbnail" src="https://media.graphcms.com//vBotYcYrSNmrxHUrraDK" />
            <div className="recipe-title">Volatile</div>
          </div>
          <div className="recipie-grid-item">
            <img className="recipe-thumbnail" src="https://media.graphcms.com//vBotYcYrSNmrxHUrraDK" />
            <div className="recipe-title">Volatile</div>
          </div>
          <div className="recipie-grid-item">
            <img className="recipe-thumbnail" src="https://media.graphcms.com//vBotYcYrSNmrxHUrraDK" />
            <div className="recipe-title">Volatile</div>
          </div>
        </div>
        </div>
    );
  }
}
// <h1 classNameName="recipe-name">{name}</h1>


export default RecipeList;

// <Fetch query={query}>
//   {res =>
//     res.recipes.map(({ name, thumbnail: { url } }) => {
//       return (
//         <div className="recipie-grid-item">
//           <img className="recipe-thumbnail" src={url} />
//         </div>
//       );
//     })
//   }
// </Fetch>
