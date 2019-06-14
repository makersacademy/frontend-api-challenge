$(document).ready(function() {
  userModel = new User
  sessionModel = new Session
  userPersister = new UserPersister
  sessionPersister = new SessionPersister
  peepsPersister = new PeepsPersister


  $('#login').click(function(){
    updateUserFromPage()
    sessionPersister.create(userModel.handle, userModel.password, function(result) {
      sessionModel.sessionKey = result.session_key
      sessionModel.userId = result.user_id
    })
  })

  $('#submitPeep').click(function(){
    body = $('#peepText').val()
    peepsPersister.create(sessionModel, body, function(result) {
      console.log(result)
    })
  })

  function updateUserFromPage() {
    handle = $('#handle').val()
    password = $('#password').val()
    userModel.handle = handle
    userModel.password = password
  }

  
})