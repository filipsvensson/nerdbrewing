const contentful = require('contentful');

const SPACE_ID = process.env.REACT_APP_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

const api = {
  async fetchImages() {
    return fetch('https://zealous-turing-f131ed.netlify.com/.netlify/functions/images-get-all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
  },

  async fetchRecipes() {
    const {
      fields: { recipe: recipes }
    } = await client.getEntry('2HaNexhXAhj6ktRzTQMdgc');

    const formatRecipe = ({ fields }) => {
      const {
        title,
        ingredients,
        about,
        abv,
        fg,
        ibu,
        mashTemp,
        og,
        size,
        thumbnail: {
          fields: {
            file: { url }
          }
        }
      } = fields;

      return { title, about, ingredients, url, abv, fg, ibu, mashTemp, og, size };
    };
    return recipes.map(recipe => formatRecipe(recipe));
  }
};

export default api;
