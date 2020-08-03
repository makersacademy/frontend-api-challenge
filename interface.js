'use strict';

let requestResult = []
$(document).ready(function() {

  let buttonElement = $('<button>', {})
  buttonElement.text("Show Peeps")
  buttonElement.on('click', function() {
    showPeepList()
  })
  $('#container').append(buttonElement)

  $('#create-user').submit(function(event) {
    event.preventDefault()
    User.createNewUser($.ajax, $('#username').val(), $('#password').val() )
  })

  let fetchButton = $('<button>', {})
  fetchButton.text('Fetch it')
  fetchButton.on('click', function() {
    fetch('https://chitter-backend-api-v2.herokuapp.com/peeps').then(function(response) {
      console.log(response)
    })
  })
  $('#container').append(fetchButton)
})

function showPeepList() {
  Peep.getPeeps().then(function(peepList) {
    peepList.forEach(function(peep) {
      let pElement = $("<p>", {"class": "peeps"})
      pElement.text(peep.getBody())
      $('#container').append(pElement)
    })
  })
}