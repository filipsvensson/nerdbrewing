const api = {
  async fetchImages() {
    // return fetch('https://zealous-turing-f131ed.netlify.com/.netlify/functions/images-get-all', {
    return fetch('http://localhost:9000/images-get-all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
  }
};

export default api;
