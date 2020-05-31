'use strict';

$(document).ready(function() {
  const API_GET_PEEPS = `https://chitter-backend-api-v2.herokuapp.com/peeps`;

  updateAppName();
  loadPeeps();

  function updateAppName() {
    $(`#appName`).text(`Chitter`);
  }

  function loadPeeps() {
    const main = document.getElementById(`main`);

    fetch(API_GET_PEEPS)
      .then(response => response.json())
      .then(data => main.innerHTML = listOfPeeps(data));

    main.innerHTML = `<p>Loading...`;
  }

  function listOfPeeps(data) {
    const peeps = data.map(peep => `<li>${peep.body}</li>`).join(`\n`);
    return `<ul>${peeps}</ul>`;
  }

});