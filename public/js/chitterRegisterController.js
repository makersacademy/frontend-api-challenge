$(document).ready(function() {
  userModel = new User
  userPersister = new UserPersister


  $('#register').click(function(){
    updateUserFromPage()
    userPersister.create(userModel.handle, userModel.password, function(result) {
      displaySuccess()
    })
  })

  function updateUserFromPage() {
    handle = $('#handle').val()
    password = $('#password').val()
    userModel.handle = handle
    userModel.password = password
  }

  function displaySuccess() {
    $('#status').text('Registration successful!')
  }
})
