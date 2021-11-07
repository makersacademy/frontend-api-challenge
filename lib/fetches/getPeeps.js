getPeeps = (displayPeeps) => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
  .then(response => response.json())
  .then(data => displayPeeps(data));
}

module.exports = getPeeps;
