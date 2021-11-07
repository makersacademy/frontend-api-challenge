const peepTemplate = require("../templates/peep")

const peepList = document.getElementById('peep-list');

const fetchAllPeeps = (callback) => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  .then(response => response.json()
  .then(peeps => callback(peeps)))
};

const showAllPeeps = (peeps) => {
  peeps.forEach((peep) => {
    peepList.insertAdjacentHTML('beforeend', peepTemplate(peep));
  })
};

fetchAllPeeps((peeps) => showAllPeeps(peeps));
