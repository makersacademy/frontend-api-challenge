$(document).ready(function() {

  const chitter = new chitterAPI();

  $('#getPeeps').click(function() {
    chitter.renderPeeps()
  })

  $('#signUpForm').submit(function() {
    event.preventDefault();
    let handle = $('#handle').val()
    let password = $('#password').val()
    chitter.signUpUser(handle, password) // delegate to signUpUser chitterAPI
  })

})
