
const api = {
  async fetchImages() {
    const res = await fetch('https://zealous-turing-f131ed.netlify.com/.netlify/functions/images-get-all',
      { method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
      }).then(res => res.json());
    console.log(res);
  }
}

export default api;
