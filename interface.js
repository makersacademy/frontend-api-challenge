'use strict';

let requestResult = []
$(document).ready(function() {

  let buttonElement = $('<button>', {})
  buttonElement.text("Show Peeps")
  buttonElement.on('click', function() {
    getPeepList();
  })
  $('#container').append(buttonElement)
})

function getPeepList() {
  $.ajax({
    url: 'https://chitter-backend-api-v2.herokuapp.com/peeps',
    method: 'GET',
    success: function(result) {
      result.forEach(function(peepJSON) {
        requestResult.push(new Peep(peepJSON.body))
      })
      logResults()
    }
  })
}

function logResults() {
  requestResult.forEach(function(peep) {
    let pElement = $("<p>", {"class": "peeps"})
    pElement.text(peep.getBody())
    $('#container').append(pElement)
  })
}