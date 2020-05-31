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
    console.log($('#username').val())
    console.log($('#password').val())
    $.ajax({
      url: "https://chitter-backend-api-v2.herokuapp.com/users",
      method: 'POST',
      data: {"user": {"handle":"C", "password":"mypassword"}},
      success: function(result) {
        console.log(result)
      }
    })
  })
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