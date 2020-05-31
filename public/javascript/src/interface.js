'use strict';

$(document).ready(function() {

  updateAppName();
  // testApiCall();

  function updateAppName() {
    $(`#appName`).text(`Chitter`);
  }

  // function testApiCall() {
  //   fetch(`https://chitter-backend-api-v2.herokuapp.com/peeps`)
  //     .then(response => response.json())
  //     .then(data => console.log(data));
  // }

});