const peepTemplate = require("../templates/peep")

const feed = document.getElementById('feed');

const fetchAllPeeps = (callback) => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  .then(response => response.json()
  .then(peeps => callback(peeps)))
};

const showAllPeeps = (peeps) => {
  peeps.forEach((peep) => {
    feed.insertAdjacentHTML('beforeend', peepTemplate(peep));
  })
};

fetchAllPeeps((peeps) => showAllPeeps(peeps));
