let viewingPeeps = (callBack) => {
  fetch("https://chitter-backend-api-v2.herokuapp.com/peeps")
    .then(response => response.json())
    .then(data => {
      callBack(data);
    })
}

module.exports = viewingPeeps