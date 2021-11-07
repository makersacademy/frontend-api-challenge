fetchPeeps = (onceFetched) => {
  fetch('https://chitter-backend-api-v2.herokuapp.com/peeps')
  .then(response => response.json())
  .then(jsonData => { 
    onceFetched(jsonData);
  });
}

module.exports = fetchPeeps